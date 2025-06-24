// app/auth/error/page.tsx
"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { ShieldAlert } from "lucide-react"

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  let errorMessage = "An unknown authentication error occurred. Please try again."
  let errorTitle = "Authentication Failed"

  // Customize messages based on NextAuth error codes
  // You can find more error codes at: https://next-auth.js.org/configuration/pages#error-page
  if (error) {
    switch (error.toUpperCase()) {
      case "CONFIGURATION":
        errorTitle = "Server Configuration Error"
        errorMessage =
          "There is a problem with the server configuration. Please contact support if this issue persists."
        break
      case "ACCESSDENIED":
        errorTitle = "Access Denied"
        errorMessage = "You do not have permission to sign in or access this page."
        break
      case "VERIFICATION": // For Email provider, if token is invalid/expired
        errorTitle = "Verification Failed"
        errorMessage =
          "The sign-in link is no longer valid. It may have expired or already been used. Please try signing in again."
        break
      case "CREDENTIALSSIGNIN": // Generic error for credentials
        errorTitle = "Sign-in Error"
        errorMessage = "Could not sign you in. Please check your credentials and try again."
        break
      // Custom errors thrown from authorize:
      case "MISSING_CREDENTIALS":
        errorTitle = "Sign-in Error"
        errorMessage = "Please provide both email and password."
        break
      case "ACCOUNT_LOCKED":
        errorTitle = "Account Locked"
        errorMessage =
          "Your account is temporarily locked due to too many failed login attempts. Please try again later."
        break
      default:
        // Use the error value directly if it's not a known code, or keep generic
        // errorMessage = `Error: ${error}. Please try again or contact support.`;
        break // Keep generic for unknown errors
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900 mb-4">
            <ShieldAlert className="h-6 w-6 text-red-600 dark:text-red-400" />
          </div>
          <CardTitle className="text-2xl font-bold">{errorTitle}</CardTitle>
          <CardDescription>We encountered an issue with your sign-in attempt.</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
          <Button asChild className="w-full btn-primary">
            <Link href="/auth/login">Try to Sign In Again</Link>
          </Button>
          <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
            If the problem persists, please contact site support.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
