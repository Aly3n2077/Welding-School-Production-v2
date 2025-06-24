import Link from "next/link"

export default function CourseNotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <h1 className="text-4xl font-bold text-steel-blue mb-4">Course Not Found</h1>
        <p className="text-gray-600 mb-8">The course you're looking for doesn't exist or may have been moved.</p>
        <Link href="/courses" className="btn-primary">
          Browse All Courses
        </Link>
      </div>
    </div>
  )
}
