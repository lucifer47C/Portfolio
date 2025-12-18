import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: (process.env.SMTP_SECURE ?? "true") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || process.env.SMTP_USER,
      subject: `Portfolio contact: ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p>From: <strong>${name}</strong> &lt;${email}&gt;</p><hr/><p>${message}</p>`,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("API route error:", err);
    return Response.json({ success: false }, { status: 500 });
  }
}
