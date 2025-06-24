"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { User, onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth"
import { auth } from "@/lib/firebase"

interface AuthContextType {
  user: User | null
  loading: boolean
  signOut: () => Promise<void>
  isConfigured: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signOut: async () => {},
  isConfigured: false
})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

interface AuthProviderProps {
  children: React.ReactNode
}

export function FirebaseAuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isConfigured, setIsConfigured] = useState(false)

  useEffect(() => {
    // Check if Firebase is configured
    if (!auth) {
      setLoading(false)
      setIsConfigured(false)
      return
    }

    setIsConfigured(true)

    // Set up auth state listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)

      // Update cookie for middleware
      if (typeof window !== 'undefined') {
        document.cookie = `fb-authed=${user ? 'true' : 'false'}; path=/; max-age=${30 * 24 * 60 * 60}`
      }
    })

    return () => unsubscribe()
  }, [])

  const signOut = async () => {
    if (!auth) return

    try {
      await firebaseSignOut(auth)
      // Clear cookie
      if (typeof window !== 'undefined') {
        document.cookie = 'fb-authed=false; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
      }
    } catch (error) {
      console.error("Sign out error:", error)
    }
  }

  const value: AuthContextType = {
    user,
    loading,
    signOut,
    isConfigured
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}