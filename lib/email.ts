/**
 * Email Service
 *
 * Handles all email sending functionality with templates and tracking.
 */

import { Resend } from "resend"
import UserConfirmationEmail from "@/app/emails/user-confirmation"
import AdminNotificationEmail from "@/app/emails/admin-notification"
import { renderAsync } from "@react-email/components"

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Send verification email to user
 */
export async function sendVerificationEmail(email: string, name: string, token: string): Promise<boolean> {
  try {
    // For development/testing, log the verification link
    if (process.env.NODE_ENV === "development") {
      console.log(`Verification link: ${process.env.NEXT_PUBLIC_SITE_URL}/auth/verify-email?token=${token}`)
      return true
    }

    // In production, actually send the email
    const verificationUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/verify-email?token=${token}`

    // Render the React email template to HTML
    const html = await renderAsync(
      UserConfirmationEmail({
        name,
        verificationUrl,
      }),
    )

    // Send the email
    const { data, error } = await resend.emails.send({
      from: `Mroncy School of Welding <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: "Verify your email address",
      html,
    })

    if (error) {
      console.error("Failed to send verification email:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error sending verification email:", error)
    return false
  }
}

/**
 * Send password reset email
 */
export async function sendPasswordResetEmail(email: string, name: string, token: string): Promise<boolean> {
  try {
    // For development/testing, log the reset link
    if (process.env.NODE_ENV === "development") {
      console.log(`Password reset link: ${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password?token=${token}`)
      return true
    }

    const resetUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/reset-password?token=${token}`

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: `Mroncy School of Welding <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: "Reset your password",
      html: `
        <div>
          <h1>Reset Your Password</h1>
          <p>Hello ${name},</p>
          <p>We received a request to reset your password. Click the link below to set a new password:</p>
          <p><a href="${resetUrl}">Reset Password</a></p>
          <p>This link will expire in 1 hour.</p>
          <p>If you didn't request this, please ignore this email.</p>
          <p>Best regards,<br>Mroncy School of Welding Team</p>
        </div>
      `,
    })

    if (error) {
      console.error("Failed to send password reset email:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error sending password reset email:", error)
    return false
  }
}

/**
 * Send admin notification about new registration
 */
export async function sendAdminNotification(userName: string, userEmail: string): Promise<boolean> {
  try {
    if (!process.env.ADMIN_EMAIL) {
      console.warn("Admin email not configured, skipping notification")
      return false
    }

    // Render the React email template to HTML
    const html = await renderAsync(
      AdminNotificationEmail({
        userName,
        userEmail,
      }),
    )

    // Send the email
    const { data, error } = await resend.emails.send({
      from: `Mroncy School of Welding <${process.env.EMAIL_FROM}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New User Registration",
      html,
    })

    if (error) {
      console.error("Failed to send admin notification:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error sending admin notification:", error)
    return false
  }
}

/**
 * Send contact form submission notification
 */
export async function sendContactFormNotification(
  name: string,
  email: string,
  subject: string,
  message: string,
): Promise<boolean> {
  try {
    if (!process.env.ADMIN_EMAIL) {
      console.warn("Admin email not configured, skipping notification")
      return false
    }

    // Send the email
    const { data, error } = await resend.emails.send({
      from: `Mroncy School of Welding <${process.env.EMAIL_FROM}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `Contact Form: ${subject}`,
      html: `
        <div>
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    })

    if (error) {
      console.error("Failed to send contact form notification:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error sending contact form notification:", error)
    return false
  }
}
