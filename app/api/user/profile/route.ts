import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { z } from "zod"

const profileSchema = z.object({
  name: z.string().min(2),
  phoneNumber: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  bio: z.string().max(500).optional(),
  dateOfBirth: z.string().optional(),
  emergencyContact: z.string().optional(),
})

export async function PUT(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json()
    const validatedData = profileSchema.parse(body)

    // Convert dateOfBirth string to Date if provided
    let dateOfBirth = undefined
    if (validatedData.dateOfBirth) {
      dateOfBirth = new Date(validatedData.dateOfBirth)
    }

    // Update user name
    await db.user.update(session.user.id, { name: validatedData.name })

    // Update or create profile
    const profile = await db.profile.upsert(session.user.id, {
      phoneNumber: validatedData.phoneNumber,
      address: validatedData.address,
      city: validatedData.city,
      country: validatedData.country,
      bio: validatedData.bio,
      dateOfBirth,
      emergencyContact: validatedData.emergencyContact,
    })

    return NextResponse.json({ message: "Profile updated successfully", profile }, { status: 200 })
  } catch (error) {
    console.error("Profile update error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "Invalid input data", errors: error.errors }, { status: 400 })
    }

    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
