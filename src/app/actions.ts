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
    // Here you would normally send an email or save to a database.
    
    console.log("New contact form submission:", validatedFields.data);
    await new Promise(res => setTimeout(res, 1000));

    return { message: "Success! Your message has been sent." };
  } catch (error) {
    return { message: "An unexpected error occurred. Please try again." };
  }
}
