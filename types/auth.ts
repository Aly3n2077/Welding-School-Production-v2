/**
 * Authentication Type Definitions
 *
 * This file contains all TypeScript types and interfaces related to
 * authentication, user management, and session handling, primarily for Firebase.
 */

/**
 * User roles with hierarchical permissions
 * These roles would typically be managed via Firebase Custom Claims.
 */
export type UserRole = "STUDENT" | "INSTRUCTOR" | "ADMIN" | "SUPER_ADMIN"

/**
 * Firebase User interface (simplified representation, actual Firebase User is richer)
 * This can be extended if you store additional user profile data in Firestore/RTDB.
 */
export interface AppUser {
  uid: string
  email: string | null
  displayName: string | null
  photoURL: string | null
  emailVerified: boolean
  role?: UserRole // This would come from custom claims or your database
  // Add other app-specific fields as needed
  createdAt?: Date // Example: if you store this in your DB
  updatedAt?: Date // Example: if you store this in your DB
}

// The following types were more relevant for NextAuth with Credentials provider
// and a separate user database schema. They can be adapted or removed if
// user profile data is solely in Firebase Auth or a Firestore structure
// that aligns differently.

/**
 * User profile interface (example for Firestore)
 */
export interface UserProfile {
  uid: string // Corresponds to Firebase Auth UID
  bio?: string
  phone?: string
  address?: {
    street?: string
    city?: string
    state?: string
    postalCode?: string
    country?: string
  }
  // ... other profile fields
  createdAt: Date
  updatedAt: Date
}

// AuditLog, PasswordResetToken, EmailVerificationToken might be handled differently
// with Firebase (e.g., Firebase has built-in email verification, password reset).
// Audit logging would be a custom implementation.

/**
 * API response interfaces (generic)
 */
export interface ApiResponse {
  success: boolean
  message: string
  data?: any
  errors?: string[]
}

/**
 * Route protection interface (conceptual, actual implementation in middleware/layouts)
 */
export interface RouteProtection {
  requireAuth: boolean
  requiredRole?: UserRole
  redirectTo?: string
}
