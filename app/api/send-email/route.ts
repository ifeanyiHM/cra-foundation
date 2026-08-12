import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const ADMIN_EMAIL = "admin@crafoundation.com.ng";
const LOGO_URL = "https://crafoundation.com.ng/cra-logoo.png";

// ─── Shared email chrome ──────────────────────────────────────────────────────
function emailWrapper(bodyHtml: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Children's Right Advocate Foundation</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Inter,system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07);">

          <!-- Header -->
          <tr>
            <td style="background:#dc2626;padding:28px 10px;text-align:start;">
              <img src="${LOGO_URL}" alt="Children's Right Advocate Foundation" width="180" height="48"
                style="display:block;width:180px;height:48px;object-fit:contain;" />
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              ${bodyHtml}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 6px;font-size:13px;color:#6b7280;">
                Children's Right Advocate Foundation &nbsp;|&nbsp; <a href="https://crafoundation.com.ng" style="color:#dc2626;text-decoration:none;">crafoundation.com.ng</a>
              </p>
              <p style="margin:0;font-size:12px;color:#9ca3af;">
                This email was sent automatically. Please do not reply directly to this message.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Row helper for detail tables ─────────────────────────────────────────────
function detailRow(label: string, value: string) {
  return `
  <tr>
    <td style="padding:10px 14px;font-size:13px;font-weight:600;color:#374151;background:#f9fafb;border-bottom:1px solid #e5e7eb;width:38%;vertical-align:top;">${label}</td>
    <td style="padding:10px 14px;font-size:13.5px;color:#111827;border-bottom:1px solid #e5e7eb;vertical-align:top;">${value || "<span style='color:#9ca3af;'>—</span>"}</td>
  </tr>`;
}

// ─── CONTACT: admin notification ─────────────────────────────────────────────
function contactAdminHtml(data: ContactPayload) {
  return emailWrapper(`
    <p style="margin:0 0 4px;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#dc2626;">New Contact Message</p>
    <h2 style="margin:0 0 24px;font-size:22px;font-weight:700;color:#111827;letter-spacing:-.03em;">
      ${data.subject}
    </h2>

    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;margin-bottom:28px;">
      ${detailRow("Full Name", `${data.firstName} ${data.lastName}`)}
      ${detailRow("Email", `<a href="mailto:${data.email}" style="color:#dc2626;text-decoration:none;">${data.email}</a>`)}
      ${detailRow("Phone", data.phone)}
      ${detailRow("Subject", data.subject)}
    </table>

    <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#374151;text-transform:uppercase;letter-spacing:.06em;">Message</p>
    <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:18px 20px;font-size:14.5px;line-height:1.75;color:#1f2937;white-space:pre-wrap;">${data.message}</div>

    <p style="margin:24px 0 0;font-size:13px;color:#9ca3af;">Received via the Contact form on crafoundation.com.ng</p>
  `);
}

// ─── CONTACT: sender confirmation ────────────────────────────────────────────
function contactConfirmHtml(data: ContactPayload) {
  return emailWrapper(`
    <h2 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#111827;letter-spacing:-.03em;">
      Thank you, ${data.firstName}!
    </h2>
    <p style="margin:0 0 28px;font-size:15px;color:#4b5563;line-height:1.7;">
      We've received your message and our team will get back to you within <strong>24–48 hours</strong>.
      In the meantime, feel free to explore our website to learn more about our work.
    </p>

    <div style="background:#fef2f2;border-left:4px solid #dc2626;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:28px;">
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#dc2626;">Your message summary</p>
      <p style="margin:0;font-size:14px;color:#374151;"><strong>Subject:</strong> ${data.subject}</p>
    </div>

    <p style="margin:0 0 6px;font-size:14px;color:#4b5563;">
      If your matter is urgent, please reach us directly at
      <a href="mailto:${ADMIN_EMAIL}" style="color:#dc2626;text-decoration:none;">${ADMIN_EMAIL}</a>.
    </p>
    <p style="margin:0;font-size:14px;color:#4b5563;">
      Thank you for reaching out to the Children's Right Advocate Foundation. Together, we can make a difference.
    </p>

    <div style="margin-top:32px;padding-top:24px;border-top:1px solid #e5e7eb;">
      <p style="margin:0;font-size:13px;font-weight:600;color:#111827;">With gratitude,</p>
      <p style="margin:4px 0 0;font-size:13px;color:#6b7280;">The CRA Foundation Team</p>
    </div>
  `);
}

// ─── VOLUNTEER: admin notification ───────────────────────────────────────────
function volunteerAdminHtml(data: VolunteerPayload) {
  return emailWrapper(`
    <p style="margin:0 0 4px;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#dc2626;">New Volunteer Application</p>
    <h2 style="margin:0 0 24px;font-size:22px;font-weight:700;color:#111827;letter-spacing:-.03em;">
      ${data.firstName} ${data.lastName}
    </h2>

    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;margin-bottom:28px;">
      ${detailRow("Full Name", `${data.firstName} ${data.lastName}`)}
      ${detailRow("Email", `<a href="mailto:${data.email}" style="color:#dc2626;text-decoration:none;">${data.email}</a>`)}
      ${detailRow("Phone", data.phone)}
      ${detailRow("Occupation", data.occupation)}
      ${detailRow("Availability", data.availability)}
      ${detailRow("Skills & Interests", data.skills.length ? data.skills.join(", ") : "—")}
    </table>

    <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#374151;text-transform:uppercase;letter-spacing:.06em;">Why they want to volunteer</p>
    <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:18px 20px;font-size:14.5px;line-height:1.75;color:#1f2937;white-space:pre-wrap;">${data.motivation}</div>

    <p style="margin:24px 0 0;font-size:13px;color:#9ca3af;">Received via the Volunteer form on crafoundation.com.ng</p>
  `);
}

// ─── VOLUNTEER: sender confirmation ──────────────────────────────────────────
function volunteerConfirmHtml(data: VolunteerPayload) {
  return emailWrapper(`
    <h2 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#111827;letter-spacing:-.03em;">
      Application Received, ${data.firstName}!
    </h2>
    <p style="margin:0 0 28px;font-size:15px;color:#4b5563;line-height:1.7;">
      Thank you for applying to volunteer with the Children's Right Advocate Foundation.
      We are excited to learn more about you! Our team will review your application and
      reach out within <strong>48 hours</strong>.
    </p>

    <div style="background:#fef2f2;border-left:4px solid #dc2626;border-radius:0 8px 8px 0;padding:16px 20px;margin-bottom:28px;">
      <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#dc2626;">Application summary</p>
      ${data.skills.length ? `<p style="margin:0 0 4px;font-size:14px;color:#374151;"><strong>Skills offered:</strong> ${data.skills.join(", ")}</p>` : ""}
      ${data.availability ? `<p style="margin:0;font-size:14px;color:#374151;"><strong>Availability:</strong> ${data.availability}</p>` : ""}
    </div>

    <p style="margin:0 0 6px;font-size:14px;color:#4b5563;">
      If you have any questions before we reach out, contact us at
      <a href="mailto:${ADMIN_EMAIL}" style="color:#dc2626;text-decoration:none;">${ADMIN_EMAIL}</a>.
    </p>
    <p style="margin:0;font-size:14px;color:#4b5563;">
      Your willingness to give your time and talent means the world to the children we serve.
      Thank you for joining our mission.
    </p>

    <div style="margin-top:32px;padding-top:24px;border-top:1px solid #e5e7eb;">
      <p style="margin:0;font-size:13px;font-weight:600;color:#111827;">With gratitude,</p>
      <p style="margin:4px 0 0;font-size:13px;color:#6b7280;">The CRA Foundation Team</p>
    </div>
  `);
}

// ─── Types ────────────────────────────────────────────────────────────────────
interface ContactPayload {
  type: "contact";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface VolunteerPayload {
  type: "volunteer";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  occupation: string;
  availability: string;
  skills: string[];
  motivation: string;
}

type Payload = ContactPayload | VolunteerPayload;

// ─── Transporter ──────────────────────────────────────────────────────────────
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g. mail.crafoundation.com.ng
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE !== "false", // true for port 465
    auth: {
      user: process.env.SMTP_USER, // admin@crafoundation.com.ng
      pass: process.env.SMTP_PASS,
    },
  });
}

// ─── Handler ──────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const payload = (await req.json()) as Payload;

    const transporter = createTransporter();

    if (payload.type === "contact") {
      const data = payload as ContactPayload;

      await Promise.all([
        // 1. Notify admin
        transporter.sendMail({
          from: `"CRA Foundation Website" <${process.env.SMTP_USER}>`,
          to: ADMIN_EMAIL,
          replyTo: data.email,
          subject: `[Contact] ${data.subject} — ${data.firstName} ${data.lastName}`,
          html: contactAdminHtml(data),
        }),
        // 2. Confirm to sender
        transporter.sendMail({
          from: `"CRA Foundation" <${process.env.SMTP_USER}>`,
          to: data.email,
          subject: "We've received your message — CRA Foundation",
          html: contactConfirmHtml(data),
        }),
      ]);
    } else if (payload.type === "volunteer") {
      const data = payload as VolunteerPayload;

      await Promise.all([
        // 1. Notify admin
        transporter.sendMail({
          from: `"CRA Foundation Website" <${process.env.SMTP_USER}>`,
          to: ADMIN_EMAIL,
          replyTo: data.email,
          subject: `[Volunteer] New Application — ${data.firstName} ${data.lastName}`,
          html: volunteerAdminHtml(data),
        }),
        // 2. Confirm to applicant
        transporter.sendMail({
          from: `"CRA Foundation" <${process.env.SMTP_USER}>`,
          to: data.email,
          subject: "Your volunteer application is received — CRA Foundation",
          html: volunteerConfirmHtml(data),
        }),
      ]);
    } else {
      return NextResponse.json({ error: "Unknown form type" }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[send-email]", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 },
    );
  }
}
