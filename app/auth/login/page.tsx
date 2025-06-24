"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { ChromeIcon } from "lucide-react"
import FullPageLoader from "@/components/ui/full-page-loader"
import { useFirebaseAuth } from "@/components/providers/firebase-auth-provider"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"
  const { user, loading } = useFirebaseAuth()

  useEffect(() => {
    if (!loading && user) {
      router.push(callbackUrl)
    }
  }, [user, loading, router, callbackUrl])

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
      // onAuthStateChanged in FirebaseAuthProvider will handle user state update
      // and the useEffect above will handle redirection.
    } catch (error) {
      console.error("Google Sign-In Error:", error)
      // Handle error (e.g., show a toast notification)
      alert("Failed to sign in with Google. Please try again.")
    }
  }

  if (loading || (!loading && user)) {
    // Show loader while checking auth or if user is already logged in (and redirect is in progress)
    return <FullPageLoader message="Checking authentication status..." />
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-950 p-4">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-xl dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Sign in to access your student dashboard.</p>
        </div>

        <Button
          onClick={handleGoogleSignIn}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          variant="default"
        >
          <ChromeIcon className="mr-2 h-5 w-5" />
          Sign in with Google
        </Button>

        <div className="text-center text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            Are you an administrator?{" "}
            <Link href="/admin/login" className="font-medium text-primary hover:underline">
              Admin Login
            </Link>
          </p>
        </div>
        <div className="text-center mt-4">
          <Link href="/" className="text-sm text-primary hover:underline">
            &larr; Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
