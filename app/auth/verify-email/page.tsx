"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Loader2, AlertCircle, CheckCircle } from "lucide-react"
import { PageWrapper } from "@/components/ui/page-wrapper"
import { Logo } from "@/components/ui/logo"

export default function VerifyEmailPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!token) {
      setError("Verification token is missing")
      setIsLoading(false)
      return
    }

    const verifyEmail = async () => {
      try {
        const response = await fetch(`/api/auth/verify-email?token=${token}`)
        const data = await response.json()

        if (!response.ok) {
          setError(data.message || "Email verification failed")
          return
        }

        setSuccess(true)

        // Redirect to login page after a delay
        setTimeout(() => {
          router.push("/auth/login")
        }, 5000)
      } catch (error) {
        console.error("Email verification error:", error)
        setError("A network error occurred. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    verifyEmail()
  }, [token, router])

  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Logo width={180} height={72} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Email Verification</h1>
            <p className="text-gray-600">Verifying your email address</p>
          </div>

          {/* Content */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-8">
                <Loader2 className="h-12 w-12 text-welding-orange animate-spin mb-4" />
                <p className="text-gray-700 text-center">Verifying your email address...</p>
              </div>
            ) : success ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Email Verified Successfully!</h2>
                <p className="text-gray-600 text-center mb-6">
                  Your email has been verified. You can now log in to your account.
                </p>
                <p className="text-gray-500 text-sm text-center">
                  You will be redirected to the login page in a few seconds...
                </p>
                <Link
                  href="/auth/login"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-welding-orange hover:bg-welding-orange/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-welding-orange"
                >
                  Go to Login
                </Link>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="rounded-full bg-red-100 p-3 mb-4">
                  <AlertCircle className="h-12 w-12 text-red-500" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Verification Failed</h2>
                <p className="text-gray-600 text-center mb-6">
                  {error || "We couldn't verify your email. The link may have expired or is invalid."}
                </p>
                <div className="flex flex-col space-y-4 w-full">
                  <Link
                    href="/auth/login"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-welding-orange hover:bg-welding-orange/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-welding-orange"
                  >
                    Go to Login
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-welding-orange"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
