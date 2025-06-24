"use client"

import { useParams } from "next/navigation" // Use `useParams` for client components
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// Placeholder course data - in a real app, this would come from a CMS or database
const placeholderCoursesData: { [key: string]: any } = {
  "smaw-welding": {
    id: "1",
    slug: "smaw-welding",
    title: "SMAW Welding (Placeholder)",
    description:
      "This placeholder course covers the fundamentals of Shielded Metal Arc Welding (SMAW), including safety, equipment setup, and basic welding techniques on various materials. Ideal for beginners looking to start a career in welding.",
    longDescription:
      "Detailed placeholder content for SMAW Welding. This section would elaborate on specific modules, learning outcomes, tools used, and career prospects. For example, students will learn about different types of electrodes, welding positions (flat, horizontal, vertical, overhead), and how to read welding symbols. Practical exercises will form a significant part of this course.",
    duration: "6 Months Program",
    price: "$65/month (Total: $390 + Exam fees: $100-299)",
    monthlyPrice: 65,
    totalPrice: 390,
    examFee: "100-299",
    image: "/images/courses/smaw-welding.jpeg",
  },
  "mig-welding": {
    id: "2",
    slug: "mig-welding",
    title: "MIG Welding (Placeholder)",
    description:
      "Explore Metal Inert Gas (MIG) welding with this placeholder course. Focuses on techniques for welding ferrous and non-ferrous metals, equipment maintenance, and troubleshooting common MIG welding issues.",
    longDescription:
      "Detailed placeholder content for MIG Welding. This would cover topics like wire feed speed, voltage settings, shielding gases, and different transfer modes (short circuit, globular, spray). Students will practice on various joint types and material thicknesses.",
    duration: "6 Months Program",
    price: "$65/month (Total: $390 + Exam fees: $100-299)",
    monthlyPrice: 65,
    totalPrice: 390,
    examFee: "100-299",
    image: "/images/courses/mig-welding-sparks.jpeg",
  },
  "tig-welding": {
    id: "3",
    slug: "tig-welding",
    title: "TIG Welding (Placeholder)",
    description:
      "This placeholder course is for those looking to master Tungsten Inert Gas (TIG) welding, known for its precision and clean welds. Suitable for detailed work on aluminum, stainless steel, and other alloys.",
    longDescription:
      "Detailed placeholder content for TIG Welding. This would include information on AC/DC TIG welding, tungsten electrode types and preparation, filler metal selection, and techniques for achieving high-quality welds on thin materials and complex joints.",
    duration: "8 Months Program",
    price: "$80/month (Total: $640 + Exam fees: $200-399)",
    monthlyPrice: 80,
    totalPrice: 640,
    examFee: "200-399",
    image: "/images/courses/tig-welding-closeup.jpeg",
  },
}

export default function CourseDetailPage() {
  const params = useParams()
  const slug = typeof params.slug === "string" ? params.slug : ""

  // In a real application, fetch course details from your backend/CMS using the slug
  const course = placeholderCoursesData[slug]

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
        <p className="mb-4">The course you are looking for does not exist (using placeholder data).</p>
        <Button asChild>
          <Link href="/courses">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button asChild variant="outline" className="mb-6">
        <Link href="/courses">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
        </Link>
      </Button>
      <Card>
        <CardHeader>
          {course.image && (
            <div className="relative h-64 w-full mb-4 md:h-96">
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
          )}
          <CardTitle className="text-3xl md:text-4xl">{course.title}</CardTitle>
          <CardDescription className="text-lg">{course.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Course Details (Placeholder)</h3>
            <p className="text-muted-foreground whitespace-pre-line">{course.longDescription}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <p className="font-semibold">Duration:</p>
              <p>{course.duration}</p>
            </div>
            <div>
              <p className="font-semibold">Price:</p>
              <p>{course.price}</p>
            </div>
          </div>
          <Button size="lg" className="w-full md:w-auto mt-6">
            Enroll Now (Functionality Pending Backend)
          </Button>
        </CardContent>
      </Card>
      <p className="text-center mt-8 text-sm text-muted-foreground">
        Note: All course details are placeholders. A backend/CMS is needed for actual content.
      </p>
    </div>
  )
}
