import { NextResponse } from "next/server"

export async function GET() {
  // This runs on the server, so it's safe to access the environment variable here
  // Only use the secure environment variable name (without NEXT_PUBLIC_ prefix)
  const siteKey = process.env.RECAPTCHA_SITE_KEY || ""

  // Return a 500 error if the site key is not configured
  if (!siteKey) {
    return new NextResponse(JSON.stringify({ error: "reCAPTCHA site key is not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }

  // Return the site key
  return NextResponse.json({ siteKey })
}
