"use client"

import type { ReactNode } from "react"
import { createContext, useContext, useEffect, useState } from "react"
import type { User as FirebaseUser } from "firebase/auth"
import { onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth"
import { auth } from "@/lib/firebase"
import FullPageLoader from "@/components/ui/full-page-loader" // Corrected import path

interface FirebaseAuthContextType {
  user: FirebaseUser | null
  isAdmin: boolean
  loading: boolean
  signOut: () => Promise<void>
}

const FirebaseAuthContext = createContext<FirebaseAuthContextType | undefined>(undefined)

// Helper to manage the auth cookie
const setAuthCookie = (isAuthed: boolean) => {
  if (isAuthed) {
    document.cookie = "fb-authed=true; path=/; max-age=2592000; SameSite=Lax" // Max-age 30 days
  } else {
    document.cookie = "fb-authed=; path=/; max-age=0; SameSite=Lax"
  }
}

export function FirebaseAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<FirebaseUser | null>(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (currentUser) => {
        setLoading(true)
        if (currentUser) {
          setUser(currentUser)
          // Check for admin role (example: using custom claims or specific email)
          // For custom claims, you'd get the ID token result:
          // const idTokenResult = await currentUser.getIdTokenResult();
          // setIsAdmin(idTokenResult.claims.admin === true);

          // For email check (as previously implemented):
          const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL
          setIsAdmin(!!adminEmail && currentUser.email === adminEmail)
          setAuthCookie(true)
        } else {
          setUser(null)
          setIsAdmin(false)
          setAuthCookie(false)
        }
        setLoading(false)
      },
      (error) => {
        console.error("Firebase AuthStateChanged error:", error)
        setUser(null)
        setIsAdmin(false)
        setAuthCookie(false)
        setLoading(false)
      },
    )

    return () => unsubscribe()
  }, [])

  const signOut = async () => {
    setLoading(true)
    try {
      await firebaseSignOut(auth)
      // User state will be updated by onAuthStateChanged
    } catch (error) {
      console.error("Firebase sign out error:", error)
      // Ensure loading is set to false even on error
      setLoading(false)
    }
  }

  if (loading) {
    return <FullPageLoader message="Initializing authentication..." />
  }

  return (
    <FirebaseAuthContext.Provider value={{ user, isAdmin, loading, signOut }}>{children}</FirebaseAuthContext.Provider>
  )
}

export const useFirebaseAuth = (): FirebaseAuthContextType => {
  const context = useContext(FirebaseAuthContext)
  if (context === undefined) {
    throw new Error("useFirebaseAuth must be used within a FirebaseAuthProvider")
  }
  return context
}
