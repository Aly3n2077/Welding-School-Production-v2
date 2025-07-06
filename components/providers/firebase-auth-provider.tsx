"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import {
  type User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth"
import { auth } from "@/lib/firebase"

interface AuthContextType {
  user: User | null
  loading: boolean
  isConfigured: boolean
  isAdmin: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, displayName?: string) => Promise<void>
  logout: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function FirebaseAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isConfigured] = useState(!!auth)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (!auth) {
      setLoading(false)
      return
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user)

      if (user) {
        // Check if user is admin (you can customize this logic)
        const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAIL?.split(",") || []
        setIsAdmin(adminEmails.includes(user.email || ""))
      } else {
        setIsAdmin(false)
      }

      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    if (!auth) return
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
      throw error
    }
  }

  const signUp = async (email: string, password: string, displayName?: string) => {
    if (!auth) return

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      if (displayName) {
        await updateProfile(userCredential.user, {
          displayName: displayName,
        })
      }
    } catch (error: any) {
      throw error
    }
  }

  const logout = async () => {
    if (!auth) return

    try {
      await signOut(auth)
    } catch (error: any) {
      throw error
    }
  }

  const resetPassword = async (email: string) => {
    if (!auth) return

    try {
      await sendPasswordResetEmail(auth, email)
    } catch (error: any) {
      throw error
    }
  }

  if (!auth) {
    return <div>Firebase not configured</div>
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isConfigured,
        isAdmin,
        signIn,
        signUp,
        logout,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useFirebaseAuth(): AuthContextType {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useFirebaseAuth must be used within a FirebaseAuthProvider')
  }

  return context
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within a FirebaseAuthProvider")
  }
  return context
}
