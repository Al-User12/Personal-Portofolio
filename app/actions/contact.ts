"use server"

import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(50),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().max(100).optional().or(z.literal("")),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }).max(1000),
})

export type ContactInput = z.infer<typeof contactSchema>

export async function sendContactEmail(data: ContactInput) {
  // Validate data on the server
  const result = contactSchema.safeParse(data)
  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors }
  }

  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const { name, email, subject, message } = result.data

  // Log in server output (Vercel logs)
  console.log("=== Contact Form Message ===")
  console.log("From:", name, `<${email}>`)
  console.log("Subject:", subject || "No Subject")
  console.log("Message:", message)
  console.log("============================")

  // TODO: Integrate real email service (Resend, SendGrid, etc.)
  // Example with Resend:
  //
  // if (process.env.RESEND_API_KEY) {
  //   const { Resend } = await import('resend');
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: 'Portfolio Contact <onboarding@resend.dev>',
  //     to: 'alfikridev@gmail.com',
  //     subject: `Contact: ${subject || 'Inquiry'}`,
  //     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  //   });
  // }

  return {
    success: true,
    message: "Thank you! Your message has been sent successfully.",
  }
}
