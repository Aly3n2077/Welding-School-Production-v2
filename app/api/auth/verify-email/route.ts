/**
 * Email Verification API
 *
 * Handles verification of user email addresses via tokens.
 */

import { NextResponse } from "next/server"
import { db } from "@/lib/database"

export async function GET(request: Request) {
  try {
    // Get token from URL
    const { searchParams } = new URL(request.url)
    const token = searchParams.get("token")

    if (!token) {
      return NextResponse.json({ message: "Verification token is required", success: false }, { status: 400 })
    }

    // Verify token
    const isValid = await db.emailVerification.verifyToken(token)

    if (!isValid) {
      return NextResponse.json({ message: "Invalid or expired verification token", success: false }, { status: 400 })
    }

    // Return success response
    return NextResponse.json({ message: "Email verified successfully", success: true }, { status: 200 })
  } catch (error) {
    console.error("Email verification error:", error)
    return NextResponse.json(
      { message: "An error occurred during email verification", success: false },
      { status: 500 },
    )
  }
}

export async function POST(request: Request) {
  try {
    // Get token from request body
    const { token } = await request.json()

    if (!token) {
      return NextResponse.json({ message: "Verification token is required", success: false }, { status: 400 })
    }

    // Verify token
    const isValid = await db.emailVerification.verifyToken(token)

    if (!isValid) {
      return NextResponse.json({ message: "Invalid or expired verification token", success: false }, { status: 400 })
    }

    // Return success response
    return NextResponse.json({ message: "Email verified successfully", success: true }, { status: 200 })
  } catch (error) {
    console.error("Email verification error:", error)
    return NextResponse.json(
      { message: "An error occurred during email verification", success: false },
      { status: 500 },
    )
  }
}

export const dynamic = "force-dynamic"
