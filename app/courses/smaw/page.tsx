import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumbs from "@/components/navigation/breadcrumbs"

export const metadata: Metadata = {
  title: "SMAW Course | Daniel Muronzi Welding Training Centre",
  description: "Master the fundamentals of stick welding with our comprehensive SMAW course.",
}

export default function SmawCoursePage() {
  // Define breadcrumb items for this nested page
  const breadcrumbItems = [
    { label: "Courses", path: "/courses" },
    { label: "Shielded Metal Arc Welding", path: "/courses/smaw" },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-steel-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Shielded Metal Arc Welding (SMAW)</h1>
          <p className="text-xl max-w-3xl">
            Master the fundamentals of stick welding with hands-on training and expert instruction.
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-light-grey border-b border-gray-200">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Course content would go here */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="section-title">Course Overview</h2>
            <p className="text-gray-700 mb-6">
              This is a placeholder for the SMAW course detail page. In a complete implementation, this page would
              contain detailed information about the course curriculum, prerequisites, schedules, and enrollment
              options.
            </p>
            <Link href="/admissions" className="btn-primary">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
