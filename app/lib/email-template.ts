export interface EnquiryEmailData {
  name: string;
  email?: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  time: string;
  ipAddress?: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function generateEnquiryEmailText(data: EnquiryEmailData): string {
  return `
New AF Tours Enquiry

Full Name: ${data.name}
Email: ${data.email || "Not provided"}
Phone / WhatsApp: ${data.phone}
Service Selected: ${data.service}
Message:
${data.message}

----------------------------------------
Date: ${data.date}
Time: ${data.time}
IP Address: ${data.ipAddress || "N/A"}
----------------------------------------
`.trim();
}

export function generateEnquiryEmailHtml(data: EnquiryEmailData): string {
  const safeName = escapeHtml(data.name);
  const safeEmail = data.email ? escapeHtml(data.email) : "Not provided";
  const safePhone = escapeHtml(data.phone);
  const safeService = escapeHtml(data.service);
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");
  const safeDate = escapeHtml(data.date);
  const safeTime = escapeHtml(data.time);
  const safeIp = escapeHtml(data.ipAddress || "N/A");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Enquiry - AF Tours & Travels</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0F1115; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #E2E8F0;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0F1115; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #15181E; border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1A1D24 0%, #0F1115 100%); padding: 30px; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
              <h1 style="margin: 0; color: #D4AF37; font-size: 22px; letter-spacing: 2px; text-transform: uppercase; font-weight: 700;">
                AF Tours &amp; Travels
              </h1>
              <p style="margin: 6px 0 0 0; color: #94A3B8; font-size: 13px; letter-spacing: 1px;">
                New Website Enquiry Notification
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 32px 30px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                
                <tr>
                  <td style="padding-bottom: 20px;">
                    <span style="font-size: 11px; font-weight: 700; color: #D4AF37; letter-spacing: 1.5px; text-transform: uppercase;">Customer Details</span>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom: 12px; font-size: 14px;">
                    <strong style="color: #94A3B8; display: inline-block; width: 140px;">Full Name:</strong>
                    <span style="color: #FFFFFF; font-weight: 600;">${safeName}</span>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom: 12px; font-size: 14px;">
                    <strong style="color: #94A3B8; display: inline-block; width: 140px;">Email:</strong>
                    <span style="color: #FFFFFF;">${safeEmail}</span>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom: 12px; font-size: 14px;">
                    <strong style="color: #94A3B8; display: inline-block; width: 140px;">Phone / WhatsApp:</strong>
                    <a href="https://wa.me/${safePhone.replace(/\D/g, '')}" style="color: #25D366; text-decoration: none; font-weight: 600;">${safePhone}</a>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom: 24px; font-size: 14px;">
                    <strong style="color: #94A3B8; display: inline-block; width: 140px;">Service Selected:</strong>
                    <span style="background-color: rgba(212, 175, 55, 0.15); color: #D4AF37; padding: 4px 10px; border-radius: 6px; font-size: 13px; font-weight: 600; border: 1px solid rgba(212, 175, 55, 0.3);">${safeService}</span>
                  </td>
                </tr>

                <!-- Message Box -->
                <tr>
                  <td style="padding-bottom: 24px;">
                    <div style="font-size: 11px; font-weight: 700; color: #D4AF37; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 8px;">Message</div>
                    <div style="background-color: #0F1115; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 16px; font-size: 14px; color: #E2E8F0; line-height: 1.6;">
                      ${safeMessage}
                    </div>
                  </td>
                </tr>

                <!-- Quick Action Buttons -->
                <tr>
                  <td style="padding-bottom: 24px; text-align: center;">
                    <a href="https://wa.me/${safePhone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${data.name}, thank you for inquiring about ${data.service} with AF Tours & Travels.`)}" 
                       style="display: inline-block; background-color: #25D366; color: #000000; font-weight: 700; font-size: 13px; text-decoration: none; padding: 12px 24px; border-radius: 8px; margin-right: 10px;">
                      Reply on WhatsApp
                    </a>
                    ${data.email && data.email !== "Not provided" ? `
                    <a href="mailto:${safeEmail}?subject=${encodeURIComponent(`Re: Enquiry for ${data.service} - AF Tours & Travels`)}" 
                       style="display: inline-block; background-color: rgba(255, 255, 255, 0.1); color: #FFFFFF; font-weight: 600; font-size: 13px; text-decoration: none; padding: 12px 24px; border-radius: 8px;">
                      Reply via Email
                    </a>
                    ` : ''}
                  </td>
                </tr>

                <!-- Metadata Footer -->
                <tr>
                  <td style="border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 20px; font-size: 12px; color: #64748B;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>Submitted: ${safeDate} at ${safeTime}</td>
                        <td align="right">IP: ${safeIp}</td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();
}
