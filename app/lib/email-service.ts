import { Resend } from "resend";
import { generateEnquiryEmailHtml, generateEnquiryEmailText, EnquiryEmailData } from "./email-template";

export interface SendEmailResult {
  success: boolean;
  emailId?: string;
  userErrorMessage?: string;
}

/**
 * Production-Ready Resend Email Dispatch Service for AF Tours & Travels.
 * Logs exact message IDs and internal errors server-side while exposing
 * informative, actionable messages to client callers.
 */
export async function sendEnquiryEmail(data: EnquiryEmailData): Promise<SendEmailResult> {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey || resendApiKey.startsWith("re_your_actual")) {
    console.error("[AF Tours Email Service Error] RESEND_API_KEY environment variable is not configured.");
    return {
      success: false,
      userErrorMessage: "Email delivery service is currently unconfigured (RESEND_API_KEY environment variable is missing or placeholder). Please set your Resend API Key in Vercel Environment Variables.",
    };
  }

  try {
    const resend = new Resend(resendApiKey);

    const toAddress = process.env.BUSINESS_EMAIL || "aftravels365@gmail.com";
    const fromAddress =
      process.env.SENDER_EMAIL || "AF Tours & Travels <onboarding@resend.dev>";

    const htmlContent = generateEnquiryEmailHtml(data);
    const textContent = generateEnquiryEmailText(data);

    console.log(`[AF Tours Email Service] Sending enquiry email via Resend to ${toAddress} from ${fromAddress}...`);

    // Send email using Resend async pattern
    const { data: responseData, error: responseError } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      subject: `New Enquiry from ${data.name} - AF Tours & Travels`,
      html: htmlContent,
      text: textContent,
      replyTo: data.email || undefined,
    });

    if (responseError) {
      console.error(
        `[AF Tours Email Service Error] Resend API rejected email for customer "${data.name}":`,
        responseError
      );
      return {
        success: false,
        userErrorMessage: `Email delivery failed (Resend API Error): ${responseError.message}`,
      };
    }

    const messageId = responseData?.id;
    console.log(
      `[AF Tours Email Service Success] Resend email dispatched successfully. Message ID: ${messageId} | Recipient: ${toAddress}`
    );

    return {
      success: true,
      emailId: messageId,
    };
  } catch (err: unknown) {
    const internalMessage = err instanceof Error ? err.message : String(err);
    console.error("[AF Tours Email Service Exception] Unhandled error during email dispatch:", internalMessage);

    return {
      success: false,
      userErrorMessage: `Email service error: ${internalMessage}`,
    };
  }
}
