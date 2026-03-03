import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URLS =
  process.env.FRONTEND_URLS ||
  process.env.FRONTEND_URL ||
  "http://localhost:3000,http://localhost:5173";

const allowedOrigins = FRONTEND_URLS.split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);
app.use(express.json({ limit: "100kb" }));

const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value);

const validatePayload = (payload) => {
  const { name, email, subject, message } = payload;

  if (!name || typeof name !== "string" || !name.trim()) {
    return "Name is required";
  }

  if (!email || typeof email !== "string" || !email.trim()) {
    return "Email is required";
  }

  if (!isValidEmail(email.trim())) {
    return "Email is invalid";
  }

  if (!subject || typeof subject !== "string" || !subject.trim()) {
    return "Subject is required";
  }

  if (!message || typeof message !== "string" || !message.trim()) {
    return "Message is required";
  }

  return null;
};

app.get("/health", (_req, res) => {
  res.status(200).json({ success: true, status: "ok" });
});

app.post("/send-email", async (req, res) => {
  console.log("[POST /send-email] Request received");

  try {
    const validationError = validatePayload(req.body || {});
    if (validationError) {
      console.warn("[POST /send-email] Validation failed:", validationError);
      return res.status(400).json({ success: false, error: validationError });
    }

    const { name, email, subject, message } = req.body;
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;

    if (!EMAIL_USER || !EMAIL_PASS) {
      console.error(
        "[POST /send-email] Missing EMAIL_USER/EMAIL_PASS in environment",
      );
      return res.status(500).json({
        success: false,
        error: "Email service is not configured on server",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log("[POST /send-email] SMTP transporter verified");

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
    console.log("[POST /send-email] Notification email sent to owner");

    await transporter.sendMail({
      from: EMAIL_USER,
      to: email.trim(),
      subject: "Thank you for contacting Rajalingam Muthiah",
      text: `Hi ${name.trim()},\n\nThank you for reaching out. I have received your message and will get back to you within 24 hours.\n\nRegards,\nRajalingam Muthiah`,
    });
    console.log("[POST /send-email] Auto-reply email sent to user");

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("[POST /send-email] Failed:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to send email",
    });
  }
});

app.use((err, _req, res, _next) => {
  console.error("[Global Error Handler]", err);
  return res
    .status(500)
    .json({ success: false, error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`[Server] Running on http://localhost:${PORT}`);
  console.log(`[Server] CORS allowed origins: ${allowedOrigins.join(", ")}`);
});
