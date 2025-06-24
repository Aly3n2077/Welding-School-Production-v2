"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

const AboutTeaser = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-welding-orange opacity-5 transform translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-welding-orange opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <ScrollAnimation type="fade-down" delay={0.1} duration={0.7}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">About Our School</h2>
            <div className="w-20 h-1 bg-welding-orange mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm md:text-base">
              Founded by Daniel Muronzi, our school combines technical expertise with business acumen to prepare
              students for successful careers in welding.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {" "}
          {/* Changed to items-stretch */}
          {/* First column - Main image of Daniel */}
          <div className="md:col-span-1">
            <ScrollAnimation type="fade-right" delay={0.3} duration={0.7} className="h-full">
              <div className="relative h-full min-h-[300px] sm:min-h-[400px] w-full rounded-lg overflow-hidden shadow-xl group">
                <Image
                  src="/images/daniel/daniel-muronzi-at-work-structure.jpg"
                  alt="Daniel Muronzi, founder of Mroncy School of Welding, at work"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white text-lg font-semibold">Daniel Muronzi, Founder</h3>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          {/* Second column - Additional images (workshop/tools) */}
          <div className="md:col-span-1">
            <div className="grid grid-cols-1 gap-4 h-full">
              <ScrollAnimation type="fade-up" delay={0.4} duration={0.7} className="h-1/2">
                <div className="relative h-full w-full rounded-lg overflow-hidden shadow-lg group">
                  <Image
                    src="/images/workshop/welding-table.jpg"
                    alt="Professional welding table at Mroncy School"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <p className="text-white text-sm font-medium">State-of-the-Art Workshop</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={0.5} duration={0.7} className="h-1/2">
                <div className="relative h-full w-full rounded-lg overflow-hidden shadow-lg group">
                  <Image
                    src="/images/workshop/welding-machine-verson-1.jpg"
                    alt="Advanced Verson welding machine"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <p className="text-white text-sm font-medium">Modern Equipment</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          {/* Third column - Text content */}
          <div className="md:col-span-1 space-y-6 flex flex-col justify-center bg-white p-6 rounded-lg shadow-lg">
            <ScrollAnimation type="fade-left" delay={0.4} duration={0.7}>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">Our Mission</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                To empower individuals with practical welding skills and business knowledge, enabling them to build
                successful careers and contribute to economic development.
              </p>
            </ScrollAnimation>

            <ScrollAnimation type="fade-left" delay={0.5} duration={0.7}>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">Our Approach</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                We combine hands-on technical training with business education, preparing our students not just to be
                skilled welders, but successful entrepreneurs and industry leaders.
              </p>
            </ScrollAnimation>

            <ScrollAnimation type="fade-left" delay={0.6} duration={0.7}>
              <Link
                href="/about"
                className="inline-flex items-center text-welding-orange font-medium hover:underline group"
              >
                Learn more about us
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
    </section>
  )
}

export default AboutTeaser
