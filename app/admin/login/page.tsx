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

function AdminLoginContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/admin/dashboard"
  const { user, isAdmin, loading } = useFirebaseAuth()

  useEffect(() => {
    if (!loading && user && isAdmin) {
      router.push(callbackUrl)
    } else if (!loading && user && !isAdmin) {
      // If logged in but not admin, redirect to student dashboard or an error page
      alert("You are not authorized to access the admin panel.")
      router.push("/dashboard")
    }
  }, [user, isAdmin, loading, router, callbackUrl])

  const handleAdminGoogleSignIn = async () => {
    if (!auth) {
      alert("Firebase authentication is not configured properly.")
      return
    }

    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      // Check if the signed-in user is the admin
      // Note: The isAdmin state from useFirebaseAuth will update via onAuthStateChanged
      // This immediate check is more for providing instant feedback if they used the wrong account.
      const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL
      if (result.user.email !== adminEmail) {
        // Not an admin, sign them out and show error
        await auth.signOut() // Sign out the incorrect user
        alert(
          "Access Denied: This email is not authorized for admin access. Please use the designated admin Google account.",
        )
      }
      // If it IS the admin email, onAuthStateChanged will set isAdmin and useEffect will redirect.
    } catch (error) {
      console.error("Admin Google Sign-In Error:", error)
      alert("Failed to sign in with Google. Please ensure you are using the admin Google account and try again.")
    }
  }

  if (loading || (!loading && user && isAdmin)) {
    return <FullPageLoader message="Checking admin authentication..." />
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-950 p-4">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-xl dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Admin Portal</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Sign in with your administrator Google account.
          </p>
        </div>

        <Button
          onClick={handleAdminGoogleSignIn}
          className="w-full bg-welding-orange hover:bg-welding-orange/90 text-white"
          variant="default"
        >
          <ChromeIcon className="mr-2 h-5 w-5" />
          Sign in with Google (Admin)
        </Button>

        <div className="text-center text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            Not an administrator?{" "}
            <Link href="/auth/login" className="font-medium text-primary hover:underline">
              Student Login
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

export default function AdminLoginPage() {
  return <AdminLoginContent />
}
