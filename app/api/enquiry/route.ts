import { NextRequest, NextResponse } from "next/server";
import { sendEnquiryEmail } from "@/app/lib/email-service";
import { saveEnquiryBackup } from "@/app/lib/storage";

// Rate limiting in-memory store: IP -> timestamps array
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 5;

  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((ts) => now - ts < windowMs);

  if (validTimestamps.length >= maxRequests) {
    return false;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return true;
}

/**
 * Sanitizes input strings by stripping HTML markup, tags, and control characters.
 */
function sanitizeInput(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    .trim()
    .replace(/<[^>]*>/g, "") // Strip HTML tags
    .replace(/[\r\n\t]/g, " ") // Normalize newlines to spaces for single-line inputs
    .replace(/\s+/g, " "); // Normalize multiple spaces
}

function sanitizeMultiline(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    .trim()
    .replace(/<[^>]*>/g, "") // Strip HTML tags
    .replace(/[^\S\r\n]+/g, " "); // Preserve line breaks but normalize extra spaces
}

export async function POST(req: NextRequest) {
  try {
    // 1. Request Size Check (Limit to 10 KB)
    const contentLength = parseInt(req.headers.get("content-length") || "0", 10);
    if (contentLength > 10 * 1024) {
      console.warn(`[AF Tours Security] Payload rejected due to size (${contentLength} bytes).`);
      return NextResponse.json(
        { success: false, error: "Payload size exceeds maximum allowed limit (10 KB)." },
        { status: 413 }
      );
    }

    // 2. CSRF / Origin Protection
    const origin = req.headers.get("origin");
    const referer = req.headers.get("referer");
    const host = req.headers.get("host");

    if (origin && host) {
      const originHost = new URL(origin).host;
      if (originHost !== host && !originHost.includes("localhost") && !originHost.includes("127.0.0.1")) {
        console.warn(`[AF Tours Security] CSRF mismatch blocked. Origin: ${originHost}, Host: ${host}`);
        return NextResponse.json(
          { success: false, error: "Forbidden: Cross-site request rejected." },
          { status: 403 }
        );
      }
    } else if (referer && host) {
      const refererHost = new URL(referer).host;
      if (refererHost !== host && !refererHost.includes("localhost") && !refererHost.includes("127.0.0.1")) {
        console.warn(`[AF Tours Security] CSRF referer mismatch blocked. Referer: ${refererHost}, Host: ${host}`);
        return NextResponse.json(
          { success: false, error: "Forbidden: Cross-site request rejected." },
          { status: 403 }
        );
      }
    }

    const body = await req.json();
    const { name, email, phone, service, message, _gotcha } = body;

    // 3. Anti-Spam Honeypot check
    if (_gotcha) {
      console.warn("[AF Tours Anti-Spam] Spam bot submission detected via honeypot.");
      return NextResponse.json({ success: true, message: "Request received" });
    }

    // 4. IP extraction & Rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (!checkRateLimit(ip)) {
      console.warn(`[AF Tours Rate Limit] Rate limit exceeded for IP: ${ip}`);
      return NextResponse.json(
        {
          success: false,
          error: "Too many submission attempts. Please wait 10 minutes before trying again.",
        },
        { status: 429 }
      );
    }

    // 5. Input Sanitization & Validation
    const cleanName = sanitizeInput(name);
    const cleanEmail = sanitizeInput(email);
    const cleanPhone = sanitizeInput(phone);
    const cleanService = sanitizeInput(service);
    const cleanMessage = sanitizeMultiline(message);

    if (!cleanName || cleanName.length < 2 || cleanName.length > 100) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid full name (2 to 100 characters)." },
        { status: 400 }
      );
    }

    // Phone validation: Digits, spaces, +, -, (), . between 7 and 25 chars
    const phoneRegex = /^\+?[0-9\s\-\(\)\.]{7,25}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid phone or WhatsApp number (e.g. +91 98765 43210)." },
        { status: 400 }
      );
    }

    if (!cleanService || cleanService.length < 2 || cleanService.length > 100) {
      return NextResponse.json(
        { success: false, error: "Please select a valid service required." },
        { status: 400 }
      );
    }

    if (!cleanMessage || cleanMessage.length < 5 || cleanMessage.length > 2000) {
      return NextResponse.json(
        { success: false, error: "Please enter your travel details or message (5 to 2000 characters)." },
        { status: 400 }
      );
    }

    if (cleanEmail) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(cleanEmail)) {
        return NextResponse.json(
          { success: false, error: "Please enter a valid email address (e.g. name@domain.com)." },
          { status: 400 }
        );
      }
    }

    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone: "Asia/Kolkata",
    });
    const formattedTime = now.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    });

    const enquiryRecord = {
      id: `ENQ-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      name: cleanName,
      email: cleanEmail || undefined,
      phone: cleanPhone,
      service: cleanService,
      message: cleanMessage,
      date: formattedDate,
      time: formattedTime,
      ipAddress: ip,
      createdAt: now.toISOString(),
    };

    // 6. Send Email via Resend Email Service
    const emailResult = await sendEnquiryEmail(enquiryRecord);

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: emailResult.userErrorMessage || "Sorry, your enquiry could not be sent. Please try again.",
        },
        { status: 500 }
      );
    }

    // 7. Save to local JSON backup storage in dev environment
    await saveEnquiryBackup(enquiryRecord);

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully",
      data: {
        emailId: emailResult.emailId,
        name: cleanName,
        phone: cleanPhone,
        service: cleanService,
      },
    });
  } catch (err: unknown) {
    const internalError = err instanceof Error ? err.message : String(err);
    console.error("[AF Tours API Error] Unhandled Exception in /api/enquiry:", internalError);

    // Return generic error message to client without exposing stack traces
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
