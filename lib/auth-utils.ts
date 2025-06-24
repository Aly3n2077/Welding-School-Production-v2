import { signIn } from "next-auth/react"

/**
 * Handles Google sign-in with error handling
 * @param callbackUrl URL to redirect to after successful sign-in
 * @returns Promise that resolves when sign-in is complete
 */
export async function handleGoogleSignIn(callbackUrl = "/dashboard") {
  try {
    await signIn("google", { callbackUrl })
    return { success: true }
  } catch (error) {
    console.error("Google sign-in error:", error)
    return {
      success: false,
      error: "Failed to sign in with Google. Please try again.",
    }
  }
}

/**
 * Checks if a user has admin privileges
 * @param email User's email address
 * @returns Boolean indicating if user is an admin
 */
export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false
  return email === process.env.ADMIN_EMAIL
}
