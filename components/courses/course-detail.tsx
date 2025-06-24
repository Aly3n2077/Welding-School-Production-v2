"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Calendar, Clock, Award, ArrowLeft } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

interface CourseDetailProps {
  id: string
  slug: string
  title: string
  description: string
  duration: string
  schedule: string
  certification: string
  topics: string[]
  image: string
  additionalImage: string
  price: number
  relatedCourses: Array<{ id: string; slug: string; title: string }>
}

export default function CourseDetail({
  id,
  slug,
  title,
  description,
  duration,
  schedule,
  certification,
  topics,
  image,
  additionalImage,
  price,
  relatedCourses,
}: CourseDetailProps) {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="py-8">
      <div className="container-custom">
        <Link href="/courses" className="inline-flex items-center text-steel-blue hover:text-welding-orange mb-6">
          <ArrowLeft size={16} className="mr-2" />
          Back to Courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <ScrollAnimation type="fade-up" delay={0.1}>
              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
                <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
              </div>
            </ScrollAnimation>

            {/* Tabs */}
            <div className="mb-6 border-b border-gray-200">
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`py-2 px-1 font-medium text-sm sm:text-base transition-colors duration-200 relative ${
                    activeTab === "overview" ? "text-welding-orange" : "text-gray-600 hover:text-welding-orange"
                  }`}
                >
                  Overview
                  {activeTab === "overview" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-welding-orange"></span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("curriculum")}
                  className={`py-2 px-1 font-medium text-sm sm:text-base transition-colors duration-200 relative ${
                    activeTab === "curriculum" ? "text-welding-orange" : "text-gray-600 hover:text-welding-orange"
                  }`}
                >
                  Curriculum
                  {activeTab === "curriculum" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-welding-orange"></span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("gallery")}
                  className={`py-2 px-1 font-medium text-sm sm:text-base transition-colors duration-200 relative ${
                    activeTab === "gallery" ? "text-welding-orange" : "text-gray-600 hover:text-welding-orange"
                  }`}
                >
                  Gallery
                  {activeTab === "gallery" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-welding-orange"></span>
                  )}
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === "overview" && (
                <ScrollAnimation type="fade-up" delay={0.2}>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-steel-blue">Course Overview</h2>
                    <p className="text-gray-700 mb-6">{description}</p>

                    <h3 className="text-xl font-bold mb-3 text-steel-blue">Who Should Take This Course</h3>
                    <p className="text-gray-700 mb-6">
                      This course is designed for individuals who want to develop professional skills in {title}.
                      Whether you're a beginner looking to start a career in welding or an experienced welder wanting to
                      expand your skillset, this course provides comprehensive training to help you achieve your goals.
                    </p>

                    <h3 className="text-xl font-bold mb-3 text-steel-blue">Career Opportunities</h3>
                    <p className="text-gray-700 mb-4">
                      Graduates of this course can pursue various career opportunities, including:
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-welding-orange mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Professional welder in manufacturing industries</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-welding-orange mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Specialized welder in construction and infrastructure</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-welding-orange mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Self-employed contractor for welding services</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-welding-orange mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Welding inspector or quality control specialist</span>
                      </li>
                    </ul>
                  </div>
                </ScrollAnimation>
              )}

              {activeTab === "curriculum" && (
                <ScrollAnimation type="fade-up" delay={0.2}>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-steel-blue">Course Curriculum</h2>
                    <p className="text-gray-700 mb-6">
                      Our comprehensive curriculum is designed to provide you with both theoretical knowledge and
                      practical skills in {title}.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="bg-light-grey p-4 rounded-lg">
                        <h3 className="font-bold text-steel-blue mb-2">Module 1: Introduction and Safety</h3>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-welding-orange mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Introduction to {title}</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-welding-orange mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Safety procedures and equipment</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-welding-orange mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">Workshop orientation</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-light-grey p-4 rounded-lg">
                        <h3 className="font-bold text-steel-blue mb-2">Module 2: Equipment and Materials</h3>
                        <ul className="space-y-1">
                          {topics.slice(0, 2).map((topic, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle size={16} className="text-welding-orange mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-light-grey p-4 rounded-lg">
                        <h3 className="font-bold text-steel-blue mb-2">Module 3: Practical Techniques</h3>
                        <ul className="space-y-1">
                          {topics.slice(2, 4).map((topic, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle size={16} className="text-welding-orange mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-light-grey p-4 rounded-lg">
                        <h3 className="font-bold text-steel-blue mb-2">Module 4: Advanced Applications</h3>
                        <ul className="space-y-1">
                          {topics.slice(4).map((topic, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle size={16} className="text-welding-orange mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              )}

              {activeTab === "gallery" && (
                <ScrollAnimation type="fade-up" delay={0.2}>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-steel-blue">Course Gallery</h2>
                    <p className="text-gray-700 mb-6">
                      Get a visual preview of what you'll learn, the professional equipment you'll use, and the skills
                      you'll develop in our {title} course.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${title} technique`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={additionalImage || "/placeholder.svg"}
                          alt={`${title} equipment`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                        <Image
                          src="/images/courses/welding-equipment-tools.jpeg"
                          alt="Professional welding torches and cutting equipment"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                        <Image
                          src="/images/courses/structural-welding.jpeg"
                          alt="Students practicing welding"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ScrollAnimation type="fade-left" delay={0.3}>
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-steel-blue">Course Details</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Calendar size={18} className="text-welding-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Duration</p>
                      <p className="text-gray-600">{duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock size={18} className="text-welding-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Schedule</p>
                      <p className="text-gray-600">{schedule}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Award size={18} className="text-welding-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Certification</p>
                      <p className="text-gray-600">{certification}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <p className="font-medium text-gray-800 mb-1">Price</p>
                    <p className="text-2xl font-bold text-welding-orange">${price.toFixed(2)} USD</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href={`/courses/${slug}/payment`} className="btn-primary w-full text-center block">
                    Enroll Now
                  </Link>
                  <Link href="/contact" className="btn-secondary w-full text-center block">
                    Request Information
                  </Link>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-left" delay={0.4}>
              <div className="bg-light-grey rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3 text-steel-blue">Related Courses</h3>
                <ul className="space-y-3">
                  {relatedCourses
                    .filter((c) => c.id !== id)
                    .slice(0, 3)
                    .map((course) => (
                      <li key={course.id} className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                        <Link href={`/courses/${course.slug}`} className="hover:text-welding-orange">
                          {course.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  )
}
