import nodemailer from "nodemailer";

/**
 * Vercel Serverless Function: Email Handler
 * POST /api/send-email
 *
 * Body: { name, email, subject, message }
 * Response: { success: true } or { success: false, error: "..." }
 */

const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value);

const validatePayload = (payload) => {
  const { name, email, subject, message } = payload || {};

  if (!name || typeof name !== "string" || !name.trim()) {
    return { valid: false, error: "Name is required" };
  }

  if (!email || typeof email !== "string" || !email.trim()) {
    return { valid: false, error: "Email is required" };
  }

  if (!isValidEmail(email.trim())) {
    return { valid: false, error: "Email is invalid" };
  }

  if (!subject || typeof subject !== "string" || !subject.trim()) {
    return { valid: false, error: "Subject is required" };
  }

  if (!message || typeof message !== "string" || !message.trim()) {
    return { valid: false, error: "Message is required" };
  }

  return { valid: true };
};

export default async function handler(req, res) {
  // Allow CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  );

  // Handle preflight
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  }

  try {
    console.log("[Vercel] POST /api/send-email request received");

    const validation = validatePayload(req.body);
    if (!validation.valid) {
      console.warn("[Vercel] Validation failed:", validation.error);
      return res.status(400).json({ success: false, error: validation.error });
    }

    const { name, email, subject, message } = req.body;
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;

    if (!EMAIL_USER || !EMAIL_PASS) {
      console.error(
        "[Vercel] Missing EMAIL_USER or EMAIL_PASS environment variables",
      );
      return res.status(500).json({
        success: false,
        error: "Email service is not configured",
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Verify connection
    await transporter.verify();
    console.log("[Vercel] SMTP transporter verified");

    // Send email to owner
    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_USER,
      replyTo: email.trim(),
      subject: `Portfolio Contact: ${subject.trim()}`,
      text: `You have a new message from your portfolio contact form.\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${subject.trim()}\n\nMessage:\n${message.trim()}`,
      html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Subject:</strong> ${subject.trim()}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message.trim()}</p>
      `,
    });
    console.log("[Vercel] Notification email sent to owner");

    // Send auto-reply to user
    await transporter.sendMail({
      from: EMAIL_USER,
      to: email.trim(),
      subject: "Thank you for contacting Rajalingam Muthiah",
      text: `Hi ${name.trim()},\n\nThank you for reaching out. I have received your message and will get back to you within 24 hours.\n\nRegards,\nRajalingam Muthiah`,
      html: `
        <p>Hi ${name.trim()},</p>
        <p>Thank you for reaching out. I have received your message and will get back to you within 24 hours.</p>
        <p>Regards,<br/>Rajalingam Muthiah</p>
      `,
    });
    console.log("[Vercel] Auto-reply sent to user");

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("[Vercel] Error:", error.message);
    return res.status(500).json({
      success: false,
      error: "Failed to send email. Please try again later.",
    });
  }
}
