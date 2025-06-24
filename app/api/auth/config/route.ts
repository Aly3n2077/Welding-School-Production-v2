import { NextResponse } from "next/server"
import { getFirebaseStatus } from "@/lib/firebase"

export async function GET() {
  try {
    const status = getFirebaseStatus()
    
    return NextResponse.json({
      configured: status.configured,
      ready: status.app && status.auth,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error("Firebase config check error:", error)
    
    return NextResponse.json(
      {
        configured: false,
        ready: false,
        error: "Configuration check failed"
      },
      { status: 500 }
    )
  }
}

export const dynamic = "force-dynamic"
