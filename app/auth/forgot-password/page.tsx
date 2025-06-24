"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useFirebaseAuth } from "@/components/providers/firebase-auth-provider"
import FullPageLoader from "@/components/ui/full-page-loader" // Corrected import path

export default function ForgotPasswordPage() {
  const router = useRouter()
  const { user: firebaseUser, loading: firebaseAuthLoading } = useFirebaseAuth()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  useEffect(() => {
    if (!firebaseAuthLoading && firebaseUser) {
      router.push("/dashboard") // Redirect if already logged in
    }
  }, [firebaseUser, firebaseAuthLoading, router])

  if (firebaseAuthLoading || (!firebaseAuthLoading && firebaseUser)) {
    return <FullPageLoader message="Loading..." />
  }

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccessMessage(null)

    // Validate email
    if (!email) {
      setError("Email is required")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || "An error occurred. Please try again.")
        return
      }

      setSuccessMessage(data.message || "Password reset link sent. Please check your email.")
      setEmail("")
    } catch (error) {
      console.error("Forgot password error:", error)
      setError("A network error occurred. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold">Password Assistance</CardTitle>
          <CardDescription>Account access is managed through Google Sign-In.</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-6 text-gray-600">
            If you've forgotten your Google account password, please use Google's account recovery tools. Mroncy Welding
            does not manage passwords directly for Google Sign-In.
          </p>
          <Button asChild className="w-full btn-primary">
            <Link href="/auth/login">Back to Sign In</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
