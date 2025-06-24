"use client" // This layout now needs to be a client component for auth checks

import type { ReactNode } from "react"
import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useFirebaseAuth } from "@/components/providers/firebase-auth-provider"
import DashboardSidebar from "@/components/dashboard/sidebar"
import DashboardHeader from "@/components/dashboard/header"
import FullPageLoader from "@/components/ui/full-page-loader"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { user, loading } = useFirebaseAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!loading && !user) {
      router.push(`/auth/login?callbackUrl=${pathname}`)
    }
  }, [user, loading, router, pathname])

  if (loading || !user) {
    // Show loader while checking auth or if user is not yet available (and redirect is in progress)
    return <FullPageLoader message="Loading dashboard..." />
  }

  // User is authenticated
  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader firebaseUser={user} /> {/* Pass Firebase user */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
