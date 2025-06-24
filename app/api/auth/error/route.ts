/**
 * Auth Error API
 *
 * Provides detailed error information for authentication failures.
 */

import { NextResponse } from "next/server"

// Error descriptions mapping with more detailed information
const errorDescriptions: Record<string, string> = {
  configuration: "The authentication service is not properly configured. Please contact the administrator.",
  accessdenied:
    "You don't have permission to access this resource. If you believe this is an error, please contact support.",
  verification: "Your verification link has expired or is invalid. Please request a new verification email.",
  signin: "We couldn't sign you in with the provided credentials. Please try a different method.",
  oauthsignin: "There was a problem initiating the OAuth sign-in process. Please try again or use a different method.",
  oauthcallback: "There was a problem processing the OAuth callback. Please try again or use a different method.",
  oauthcreateaccount: "We couldn't create an account with your OAuth provider. Please try a different method.",
  emailcreateaccount: "We couldn't create an account with your email. Please try a different email address.",
  callback: "There was a problem with the authentication callback. Please try again later.",
  oauthaccountnotlinked:
    "This email is already associated with a different account. Please sign in using your original method.",
  emailsignin: "We couldn't send the sign-in email. Please check your email address and try again.",
  credentialssignin: "The email or password you entered is incorrect. Please try again.",
  sessionrequired: "You need to be signed in to access this page. Please sign in and try again.",
}

export async function GET(request: Request) {
  try {
    // Get error type from URL
    const { searchParams } = new URL(request.url)
    const error = searchParams.get("error") || "default"

    // Get detailed description
    const description =
      errorDescriptions[error] || "An unexpected authentication error occurred. Please try again later."

    // Return error details
    return NextResponse.json(
      {
        error,
        description,
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Auth error API error:", error)
    return NextResponse.json(
      {
        error: "unknown",
        description: "An unexpected error occurred while processing the error details.",
      },
      { status: 500 },
    )
  }
}

export const dynamic = "force-dynamic"
