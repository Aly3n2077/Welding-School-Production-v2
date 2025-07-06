"use client" // This layout now needs to be a client component for auth checks

import type { ReactNode } from "react"
import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useFirebaseAuth } from "@/components/providers/firebase-auth-provider"
import AdminSidebar from "@/components/admin/sidebar"
import AdminHeader from "@/components/admin/header"
import FullPageLoader from "@/components/ui/full-page-loader"

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { user, isAdmin, loading } = useFirebaseAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push(`/admin/login?callbackUrl=${pathname}`)
      } else if (!isAdmin) {
        // If user is logged in but not an admin, redirect them away
        alert("Access Denied: You do not have administrative privileges.")
        router.push("/dashboard") // Or to a general access denied page
      }
    }
  }, [user, isAdmin, loading, router, pathname])

  if (loading || !user || !isAdmin) {
    // Show loader while checking auth/admin status or if user is not yet available/admin (and redirect is in progress)
    return <FullPageLoader message="Verifying admin access..." />
  }

  // User is authenticated and is an admin
  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader firebaseUser={user} /> {/* Pass Firebase user */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
