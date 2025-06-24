import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import DashboardOverview from "@/components/dashboard/overview"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/login?callbackUrl=/dashboard")
  }

  // Fetch user data
  const user = await db.user.findById(session.user.id)

  if (!user) {
    redirect("/auth/login")
  }

  // Fetch user profile
  const profile = await db.profile.findByUserId(user.id)

  // Fetch enrollments with course data
  const enrollments = await db.enrollment.findByUserId(user.id)

  // Fetch announcements
  const courseIds = enrollments.map((enrollment) => enrollment.courseId)
  const announcements = await db.announcement.findGlobalAndForCourses(courseIds)

  // Combine user and profile data
  const userData = {
    ...user,
    profile,
  }

  return <DashboardOverview user={userData} enrollments={enrollments} announcements={announcements} />
}
