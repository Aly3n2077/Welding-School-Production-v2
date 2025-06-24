"use server"

import { z } from "zod"
import { Resend } from "resend"
import { config } from "@/app/config"
import { AdminNotificationEmail } from "@/app/emails/admin-notification"
import { UserConfirmationEmail } from "@/app/emails/user-confirmation"

// Initialize Resend
const resend = new Resend(config.email.resendApiKey)

// Define validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  recaptchaToken: z.string().min(1, { message: "reCAPTCHA verification failed" }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export type ContactFormState = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
  data?: Omit<ContactFormData, "recaptchaToken">
}

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY || ""

    if (!secretKey) {
      console.error("reCAPTCHA secret key is not configured")
      return false
    }

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    })

    const data = await response.json()
    return data.success && data.score >= 0.5 // Verify the score is acceptable
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return false
  }
}

// Send emails
async function sendEmails(formData: ContactFormData) {
  try {
    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: `${config.site.name} <${config.email.from}>`,
      to: formData.email,
      subject: `Thank you for contacting ${config.site.name}`,
      react: UserConfirmationEmail({ name: formData.name, subject: formData.subject }),
      headers: {
        "X-Entity-Ref-ID": `user-confirmation-${Date.now()}`,
      },
    })

    console.log("User confirmation email sent:", userEmailResult)

    // Send notification email to admin
    const adminEmailResult = await resend.emails.send({
      from: `Contact Form <${config.email.from}>`,
      to: config.email.adminEmail,
      subject: `New Contact Form Submission: ${formData.subject}`,
      react: AdminNotificationEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      }),
      headers: {
        "X-Entity-Ref-ID": `admin-notification-${Date.now()}`,
      },
      replyTo: formData.email,
    })

    console.log("Admin notification email sent:", adminEmailResult)

    return { userEmailResult, adminEmailResult }
  } catch (error) {
    console.error("Error sending emails:", error)
    throw error
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Parse and validate form data
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    recaptchaToken: formData.get("recaptchaToken"),
  })

  // If validation fails, return errors
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please correct the errors in the form.",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    // Verify reCAPTCHA token
    const isRecaptchaValid = await verifyRecaptcha(validatedFields.data.recaptchaToken)

    if (!isRecaptchaValid) {
      return {
        success: false,
        message: "reCAPTCHA verification failed. Please try again.",
      }
    }

    // Remove recaptchaToken from data before storing or sending
    const { recaptchaToken, ...contactData } = validatedFields.data

    // Send emails if we have a valid Resend API key
    if (config.email.resendApiKey && config.email.resendApiKey !== "") {
      await sendEmails(validatedFields.data)
    } else {
      // Log the data if we don't have an API key (for development)
      console.log("Email would be sent with this data:", contactData)
    }

    // Return success state
    return {
      success: true,
      message: "Thank you for your message! We've sent a confirmation to your email and will get back to you soon.",
      data: contactData,
    }
  } catch (error) {
    // Handle any errors that occur during submission
    console.error("Error submitting form:", error)
    return {
      success: false,
      message: "There was an error submitting your message. Please try again later.",
    }
  }
}
