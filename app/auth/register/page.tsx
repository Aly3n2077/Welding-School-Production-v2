"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useFirebaseAuth } from "@/components/providers/firebase-auth-provider"
import FullPageLoader from "@/components/ui/full-page-loader" // Corrected import path

export default function RegisterPage() {
  const router = useRouter()
  const { user: firebaseUser, loading: firebaseAuthLoading } = useFirebaseAuth()

  useEffect(() => {
    if (!firebaseAuthLoading && firebaseUser) {
      router.push("/dashboard") // Redirect if already logged in
    }
  }, [firebaseUser, firebaseAuthLoading, router])

  if (firebaseAuthLoading || (!firebaseAuthLoading && firebaseUser)) {
    return <FullPageLoader message="Loading..." />
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold">Create Account</CardTitle>
          <CardDescription>Mroncy Welding uses Google for secure and easy account creation.</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-6 text-gray-600">
            Please use the "Sign In with Google" option on our login page to create your account or sign in.
          </p>
          <Button asChild className="w-full btn-primary">
            <Link href="/auth/login">Go to Sign In Page</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
