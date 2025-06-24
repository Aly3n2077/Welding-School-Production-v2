"use client"

import { CheckCircle } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

const KeyHighlights = () => {
  const highlights = [
    {
      title: "Industry-Standard Equipment",
      description: "Train on the same equipment used in professional welding environments.",
      icon: "equipment",
    },
    {
      title: "Certified Instructors",
      description: "Learn from welders with years of industry experience and teaching expertise.",
      icon: "instructors",
    },
    {
      title: "Hands-on Training",
      description: "Spend 80% of your course time with hands-on welding practice.",
      icon: "handson",
    },
    {
      title: "Job Placement Assistance",
      description: "Get help finding employment through our industry connections.",
      icon: "placement",
    },
  ]

  return (
    <section id="content-section" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollAnimation type="fade-up">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Welding Training?
            </h2>
            <div className="w-20 h-1 bg-welding-orange mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Our training center offers state-of-the-art facilities and expert instruction to prepare you for a
              successful career in welding.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((highlight, index) => (
            <ScrollAnimation key={index} type="fade-up" delay={0.1 * index} className="h-full">
              <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full group">
                <div className="mb-4 text-welding-orange transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <CheckCircle size={32} className="mx-auto" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-center text-gray-800 transition-colors duration-300 group-hover:text-welding-orange">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-center text-sm md:text-base flex-grow">{highlight.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation type="fade-up" delay={0.4}>
          <div className="mt-12 md:mt-16 text-center">
            <a
              href="/courses"
              className="inline-block bg-welding-orange text-white font-medium py-3 px-6 rounded-md shadow-md hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-sm md:text-base"
            >
              Explore Our Courses
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default KeyHighlights
