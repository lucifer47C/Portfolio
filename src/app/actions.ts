"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

export type FormState = {
  message: string;
  issues?: string[];
};

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(formData: FormData): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    const issues = validatedFields.error.flatten().fieldErrors;
    return {
      message: "Error: Please check your input.",
      issues: Object.values(issues).flat(),
    };
  }

  try {
    const { name, email, subject, message } = validatedFields.data;

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

    return { message: "Success! Your message has been sent." };
  } catch (err) {
    console.error("submitContactForm error:", err);
    return { message: "An unexpected error occurred. Please try again." };
  }
}