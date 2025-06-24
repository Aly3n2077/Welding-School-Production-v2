// Mock database implementation for development
// In production, this would be replaced with a real database connection

import { compare, hash } from "bcryptjs"

// Types
type User = {
  id: string
  name: string
  email: string
  password?: string
  image?: string
  role: "STUDENT" | "INSTRUCTOR" | "ADMIN" | "SUPER_ADMIN"
  emailVerified?: Date
  createdAt: Date
  updatedAt: Date
  provider?: string
  providerId?: string
  failedLoginAttempts?: number
  lockedUntil?: Date
}

type AuditLog = {
  id: string
  userId: string
  action: string
  details: Record<string, any>
  createdAt: Date
}

// Mock data
const users: User[] = [
  {
    id: "1",
    name: "Daniel Muronzi",
    email: "mroncyweldingschoolzw@gmail.com",
    // This is a hashed version of "admin123!" - replace with a real secure password in production
    password: "$2a$12$YJ.gqY09G.CMf2zL9Qk1V.7YtCGXkXfXMjYSkrBPmXpXl3LzQ2/aK",
    role: "ADMIN",
    emailVerified: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    image: "/images/daniel/daniel-muronzi-profile-cap.jpg",
  },
  {
    id: "2",
    name: "Test Student",
    email: "student@example.com",
    // This is a hashed version of "password123" - replace with a real secure password in production
    password: "$2a$12$YJ.gqY09G.CMf2zL9Qk1V.7YtCGXkXfXMjYSkrBPmXpXl3LzQ2/aK",
    role: "STUDENT",
    emailVerified: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

const auditLogs: AuditLog[] = []

// Helper functions
export const comparePassword = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
  return await compare(plainPassword, hashedPassword)
}

export const hashPassword = async (password: string): Promise<string> => {
  return await hash(password, 12)
}

// Database interface
export const db = {
  user: {
    findById: (id: string) => {
      return users.find((user) => user.id === id) || null
    },
    findByEmail: (email: string) => {
      return users.find((user) => user.email.toLowerCase() === email.toLowerCase()) || null
    },
    create: async (data: Omit<User, "id" | "createdAt" | "updatedAt">) => {
      const newUser: User = {
        id: `${users.length + 1}`,
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      // Hash password if provided
      if (newUser.password) {
        newUser.password = await hashPassword(newUser.password)
      }

      // Check if this is the admin email and set role accordingly
      if (newUser.email === process.env.ADMIN_EMAIL) {
        newUser.role = "ADMIN"
      }

      users.push(newUser)
      return newUser
    },
    update: (id: string, data: Partial<User>) => {
      const userIndex = users.findIndex((user) => user.id === id)
      if (userIndex === -1) return null

      users[userIndex] = { ...users[userIndex], ...data, updatedAt: new Date() }
      return users[userIndex]
    },
    incrementFailedAttempts: (id: string) => {
      const userIndex = users.findIndex((user) => user.id === id)
      if (userIndex === -1) return null

      const failedAttempts = (users[userIndex].failedLoginAttempts || 0) + 1
      users[userIndex].failedLoginAttempts = failedAttempts

      // Lock account after 5 failed attempts
      if (failedAttempts >= 5) {
        const lockUntil = new Date()
        lockUntil.setMinutes(lockUntil.getMinutes() + 15) // Lock for 15 minutes
        users[userIndex].lockedUntil = lockUntil
      }

      return users[userIndex]
    },
    resetFailedAttempts: (id: string) => {
      const userIndex = users.findIndex((user) => user.id === id)
      if (userIndex === -1) return null

      users[userIndex].failedLoginAttempts = 0
      users[userIndex].lockedUntil = undefined

      return users[userIndex]
    },
  },
  auditLog: {
    create: (data: Omit<AuditLog, "id" | "createdAt">) => {
      const newLog: AuditLog = {
        id: `${auditLogs.length + 1}`,
        ...data,
        createdAt: new Date(),
      }

      auditLogs.push(newLog)
      return newLog
    },
    findByUserId: (userId: string) => {
      return auditLogs.filter((log) => log.userId === userId)
    },
  },
}
