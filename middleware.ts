import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isAuthenticatedCookie = request.cookies.get("fb-authed")?.value === "true"

  const isAdminRoute = pathname.startsWith("/admin")
  const isDashboardRoute = pathname.startsWith("/dashboard")
  const isAuthRoute = pathname.startsWith("/auth")

  // If trying to access auth pages while authenticated, redirect to dashboard
  if (isAuthRoute && isAuthenticatedCookie && pathname !== "/auth/logout") {
    // Assuming /auth/logout might be a page that clears things
    // Check if it's the admin login page and if the user is potentially an admin
    // This part is tricky without knowing admin status from cookie alone.
    // A simpler approach: always redirect from /auth/login to a default dashboard.
    // Client-side logic in dashboard will then route to admin dashboard if applicable.
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // If trying to access protected admin routes without auth cookie, redirect to admin login
  if (isAdminRoute && !isAuthenticatedCookie && pathname !== "/admin/login") {
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  // If trying to access protected dashboard routes without auth cookie, redirect to login
  if (isDashboardRoute && !isAuthenticatedCookie) {
    return NextResponse.redirect(new URL("/auth/login?callbackUrl=" + pathname, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/auth/login",
    "/auth/register", // Keep if you have a register page, though current setup redirects it
    // Add other auth-related pages if necessary
  ],
}
