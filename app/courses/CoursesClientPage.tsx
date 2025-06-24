"use client"

import Image from "next/image"
import Link from "next/link"
import { Download, CheckCircle, ArrowRight } from "lucide-react"
import Breadcrumbs from "@/components/navigation/breadcrumbs"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react";

const placeholderCourses = [
  {
    id: "1",
    slug: "smaw-welding",
    title: "SMAW Welding",
    description:
      "Learn the fundamentals of Shielded Metal Arc Welding (SMAW), including safety, equipment setup, and basic welding techniques on various materials.",
    duration: "6 Months",
    schedule: "Mon-Fri 8:00 AM - 4:00 PM",
    certification: "SMAW Certification",
    image: "/images/courses/smaw-welding.jpeg",
    price: 65,
    totalPrice: 390,
    examFee: "100-299",
    programLength: "6 months",
  },
  {
    id: "2",
    slug: "mig-welding",
    title: "MIG Welding",
    description:
      "Explore Metal Inert Gas (MIG) welding with focus on techniques for welding ferrous and non-ferrous metals, equipment maintenance, and troubleshooting.",
    duration: "6 Months",
    schedule: "Mon-Fri 8:00 AM - 4:00 PM",
    certification: "MIG Certification",
    image: "/images/courses/mig-welding-sparks.jpeg",
    price: 65,
    totalPrice: 390,
    examFee: "100-299",
    programLength: "6 months",
  },
  {
    id: "3",
    slug: "tig-welding",
    title: "TIG Welding",
    description:
      "Master Tungsten Inert Gas (TIG) welding, known for its precision and clean welds. Suitable for detailed work on aluminum, stainless steel, and other alloys.",
    duration: "8 Months",
    schedule: "Mon-Fri 8:00 AM - 4:00 PM",
    certification: "TIG Certification",
    image: "/images/courses/tig-welding-closeup.jpeg",
    price: 80,
    totalPrice: 640,
    examFee: "200-399",
    programLength: "8 months",
  },
  {
    id: "4",
    slug: "pipe-welding",
    title: "Pipe Welding",
    description:
      "Specialized course focusing on pipe welding techniques, including position welding, root passes, and fill passes for various pipe materials and sizes.",
    duration: "8 Months",
    schedule: "Mon-Fri 8:00 AM - 4:00 PM",
    certification: "Pipe Welding Certification",
    image: "/images/courses/pipe-joint-welding.jpeg",
    price: 80,
    totalPrice: 640,
    examFee: "300-499",
    programLength: "8 months",
  },
  {
    id: "5",
    slug: "boiler-making",
    title: "Boiler Making",
    description:
      "Comprehensive training in boiler construction, repair, and maintenance. Covers pressure vessel fabrication, safety regulations, and quality control.",
    duration: "8 Months",
    schedule: "Mon-Fri 8:00 AM - 4:00 PM",
    certification: "Boiler Making Certification",
    image: "/images/courses/boiler-equipment.jpeg",
    price: 80,
    totalPrice: 640,
    examFee: "400-599",
    programLength: "8 months",
  },
]

const courses = [
  {
    id: "smaw",
    title: "Shielded Metal Arc Welding (SMAW)",
    description:
      "Master the fundamentals of stick welding with hands-on training. This course covers electrode selection, joint preparation, and various welding positions.",
    duration: "4 Weeks",
    schedule: "Monday to Friday, 9am - 3pm",
    certification: "International Welding Society (IWS) Certification",
    topics: [
      "Safety procedures and equipment",
      "Electrode classification and selection",
      "Joint preparation and fit-up",
      "Welding in flat, horizontal, vertical, and overhead positions",
      "Weld inspection and testing",
      "Troubleshooting common welding defects",
    ],
    image: "/images/courses/smaw-welding.jpeg",
    additionalImage: "/images/courses/mig-welding-sparks.jpeg",
  },
  {
    id: "tig",
    title: "TIG Welding",
    description:
      "Learn precision welding techniques for thin materials and detailed work. This course focuses on the Tungsten Inert Gas welding process used for high-quality, precision welds.",
    duration: "6 Weeks",
    schedule: "Monday to Friday, 9am - 3pm",
    certification: "International Welding Society (IWS) Certification",
    topics: [
      "TIG welding equipment setup and maintenance",
      "Tungsten electrode preparation and selection",
      "Filler metal selection for various materials",
      "Gas flow rates and shielding techniques",
      "Welding aluminum, stainless steel, and exotic metals",
      "Advanced techniques for thin materials",
    ],
    image: "/images/courses/tig-welding-closeup.jpeg",
    additionalImage: "/images/courses/tig-pipe-welding.jpeg",
  },
  {
    id: "mig",
    title: "MIG Welding",
    description:
      "Develop skills in the most versatile and widely used welding process. Metal Inert Gas welding is known for its speed and versatility across various materials and thicknesses.",
    duration: "5 Weeks",
    schedule: "Monday to Friday, 9am - 3pm",
    certification: "International Welding Society (IWS) Certification",
    topics: [
      "MIG welding machine setup and calibration",
      "Wire selection and feed rate adjustment",
      "Shielding gas selection and flow rates",
      "Welding techniques for different joint types",
      "Troubleshooting porosity and other defects",
      "Production welding techniques and efficiency",
    ],
    image: "/images/courses/mig-welding-sparks.jpeg",
    additionalImage: "/images/courses/structural-welding.jpeg",
  },
  {
    id: "pipe",
    title: "Pipe Welding",
    description:
      "Specialize in high-demand pipe welding techniques for industrial applications. This advanced course prepares welders for careers in oil and gas, construction, and manufacturing.",
    duration: "8 Weeks",
    schedule: "Monday to Friday, 9am - 3pm",
    certification: "ASME Section IX Certification",
    topics: [
      "Pipe joint preparation and fit-up",
      "Root pass techniques and hot passes",
      "Vertical up and overhead pipe welding",
      "Multiple process pipe welding (SMAW, TIG, MIG)",
      "Pressure vessel code requirements",
      "X-ray and ultrasonic testing preparation",
    ],
    image: "/images/courses/pipe-joint-welding.jpeg",
    additionalImage: "/images/courses/confined-space-welding.jpeg",
  },
  {
    id: "boiler",
    title: "Boiler Making",
    description:
      "Comprehensive training in fabrication, assembly, and installation of boilers and pressure vessels. This course combines welding skills with blueprint reading and layout techniques.",
    duration: "10 Weeks",
    schedule: "Monday to Friday, 9am - 3pm",
    certification: "National Boilermaker Certification",
    topics: [
      "Blueprint reading and interpretation",
      "Layout and fabrication techniques",
      "Pressure vessel code compliance",
      "Multi-process welding for boiler components",
      "Quality control and inspection procedures",
      "Assembly and installation techniques",
    ],
    image: "/images/courses/pressure-vessel-welding.jpeg",
    additionalImage: "/images/courses/boiler-equipment.jpeg",
  },
  {
    id: "construction",
    title: "Construction Welding",
    description:
      "Learn specialized welding techniques for construction and structural applications. This course prepares you for careers in building construction, infrastructure projects, and more.",
    duration: "8 Weeks",
    schedule: "Monday to Friday, 9am - 3pm",
    certification: "Construction Welding Certification",
    topics: [
      "Structural steel welding techniques",
      "Blueprint reading for construction",
      "Field welding practices and safety",
      "Welding code compliance for structures",
      "Inspection and quality control",
      "Heavy equipment and infrastructure welding",
    ],
    image: "/images/courses/construction-welding.jpeg",
    additionalImage: "/images/courses/structural-welding.jpeg",
  },
]

export default function CoursesClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedFormat, setSelectedFormat] = useState("all")
  const [selectedDuration, setSelectedDuration] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  // Use useEffect for any side effects
  useEffect(() => {
    // Any initialization logic should go here
  }, [])

  // Define breadcrumb items for this page
  const breadcrumbItems = [{ label: "Courses", path: "/courses" }]

  // In a real application, fetch courses from your backend/CMS
  const coursesData = placeholderCourses.length > 0 ? placeholderCourses : courses

  return (
    <>
      {/* Hero Section */}
      <section className="bg-steel-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive welding training programs designed to build practical skills and launch successful careers.
          </p>
          <div className="mt-8">
            <Link href="#" className="btn-primary bg-welding-orange hover:bg-opacity-90 inline-flex items-center">
              <Download size={18} className="mr-2" />
              Download Course Brochure
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-light-grey border-b border-gray-200">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Courses List */}
      <section className="py-16">
        <div className="container-custom">
          <div className="space-y-16">
            {coursesData.map((course, index) => (
              <ScrollAnimation
                key={course.id}
                id={course.id}
                type={index % 2 === 0 ? "fade-right" : "fade-left"}
                delay={0.1}
                className="scroll-mt-16 sm:scroll-mt-24"
              >
                {placeholderCourses.includes(course) ? (
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                      <div className="relative h-48 sm:h-64 lg:h-auto">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 text-white">
                            <span className="inline-block bg-welding-orange px-2 py-1 rounded-md text-sm font-medium">
                              {course.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-2 p-4 sm:p-8">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-steel-blue">
                          {course.title}
                        </h2>
                        <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">{course.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 sm:mb-6">
                          <div>
                            <h3 className="font-bold text-base sm:text-lg mb-2">Course Details</h3>
                            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                              <li className="flex items-start">
                                <span className="font-medium mr-2">Duration:</span> {course.duration}
                              </li>
                              <li className="flex items-start">
                                <span className="font-medium mr-2">Schedule:</span> {course.schedule}
                              </li>
                              <li className="flex items-start">
                                <span className="font-medium mr-2">Certification:</span> {course.certification}
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-bold text-base sm:text-lg mb-2">What You'll Learn</h3>
                            <ul className="space-y-1 text-sm sm:text-base">
                              {course.topics && course.topics.length > 0 ? (
                                <>
                                  {course.topics.slice(0, 4).map((topic, index) => (
                                    <li key={index} className="flex items-start">
                                      <CheckCircle size={16} className="text-welding-orange mr-2 mt-1 flex-shrink-0" />
                                      <span className="text-gray-700">{topic}</span>
                                    </li>
                                  ))}
                                  {course.topics.length > 4 && (
                                    <li className="text-welding-orange font-medium">And more...</li>
                                  )}
                                </>
                              ) : (
                                <li className="text-gray-500 italic">Course topics will be available soon</li>
                              )}
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                          <div className="flex flex-col space-y-1">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg sm:text-xl font-bold text-welding-orange">
                                ${course.price}/month
                              </span>
                              <span className="text-sm text-gray-500">({course.programLength})</span>
                            </div>
                            <div className="text-sm text-gray-600">
                              Total: ${course.totalPrice} + Exam: ${course.examFee}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                          <Link href="/admissions" className="btn-primary text-center">
                            Enroll Now
                          </Link>
                          <Link href="/contact" className="btn-secondary text-center">
                            Request Information
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Card key={course.id} className="flex flex-col">
                    <CardHeader>
                      {course.image && (
                        <div className="relative h-48 w-full mb-4">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            fill
                            objectFit="cover"
                            className="rounded-t-lg"
                          />
                        </div>
                      )}
                      <CardTitle>{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription>{course.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href={`/courses/${course.id}`}>
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                )}
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Course Gallery Section */}
      <section className="py-16 bg-light-grey">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Welding Techniques in Action</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData.map((course) => (
              <ScrollAnimation key={`gallery-${course.id}`} type="fade-up" delay={0.2} className="h-full">
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative h-64">
                    <Image
                      src={course.additionalImage || course.image}
                      alt={`${course.title} technique`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white w-full">
                        <h3 className="font-bold text-lg">{course.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-steel-blue mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description.substring(0, 100)}...</p>
                    <Link
                      href={`/courses#${course.id}`}
                      className="text-welding-orange font-medium hover:underline flex items-center text-sm"
                    >
                      Learn more about this course
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment and Facilities Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <ScrollAnimation type="fade-right" delay={0.2}>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/courses/welding-equipment-tools.jpeg"
                  alt="Professional welding equipment and tools including torches and gas cutting equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-left" delay={0.3}>
              <h2 className="section-title mb-6">Professional-Grade Equipment</h2>
              <p className="text-gray-700 mb-4">
                At MRONCY School of Welding, we train you on the same professional equipment you'll use in the industry.
                From oxy-acetylene torches and cutting tools to advanced welding machines, you'll gain hands-on
                experience with every tool of the trade, ensuring your skills directly translate to the workplace.
              </p>
              <p className="text-gray-700 mb-6">
                From the latest in TIG, MIG, and stick welders to specialized equipment for pipe and pressure vessel
                welding, you'll have access to everything you need to master your craft.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-welding-orange mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Industry-standard welding machines and tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-welding-orange mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Specialized equipment for each welding process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-welding-orange mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Modern safety gear and ventilation systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-welding-orange mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Testing and inspection equipment</span>
                </li>
              </ul>
              <Link href="/gallery" className="btn-primary">
                View Our Facilities
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light-grey">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <ScrollAnimation type="fade-up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-steel-blue">Do I need prior experience to enroll?</h3>
                <p className="text-gray-700">
                  No prior experience is required for our beginner courses. We start with the fundamentals and build
                  your skills progressively. For advanced courses like Pipe Welding, basic welding knowledge is
                  recommended.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-steel-blue">
                  Are the certifications internationally recognized?
                </h3>
                <p className="text-gray-700">
                  Yes, our certifications are recognized internationally, allowing our graduates to pursue opportunities
                  both locally and abroad. Our programs follow international welding standards and best practices.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-steel-blue">What materials and equipment are provided?</h3>
                <p className="text-gray-700">
                  All necessary welding equipment, safety gear, and materials are provided during the training. Students
                  receive comprehensive learning materials and access to our fully-equipped workshops.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-steel-blue">Do you offer job placement assistance?</h3>
                <p className="text-gray-700">
                  Yes, we provide job placement assistance to our graduates. We have strong industry connections and
                  regularly share employment opportunities with our alumni network.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  )
}
