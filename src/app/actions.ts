"use server";

import { z } from "zod";

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

export async function submitContactForm(
  formData: FormData
): Promise<FormState> {
  const validated = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validated.success) {
    return {
      message: "Error: Please check your input.",
      issues: Object.values(validated.error.flatten().fieldErrors).flat(),
    };
  }

  // call API
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`, {
    method: "POST",
    body: JSON.stringify(validated.data),
  });

  if (!res.ok) {
    return { message: "An unexpected error occurred. Please try again." };
  }

  return { message: "Success! Your message has been sent." };
}
