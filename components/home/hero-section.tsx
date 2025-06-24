"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToContent = () => {
    const contentSection = document.getElementById("content-section")
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-banner.png"
          alt="Welder working with sparks flying"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute top-20 left-10 w-64 h-64 bg-welding-orange/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-steel-blue/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-10"}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span
                className="block transform transition-transform duration-700 delay-100 ease-out 
                              translate-y-0 opacity-100"
              >
                Unlock a <span className="text-welding-orange">Lucrative Career</span> in Welding
              </span>
            </h1>
          </div>

          <ScrollAnimation type="fade-up" delay={0.4} duration={0.7}>
            <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional Training | Industry Certification | Business Development
            </p>
          </ScrollAnimation>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 stagger-animation">
            <ScrollAnimation type="fade-up" delay={0.6} duration={0.7}>
              <Link href="/admissions" className="btn-primary group w-full sm:w-auto">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-welding-orange to-welding-orange/80 group-hover:scale-110 transition-transform duration-500 z-[-1]"></span>
                <span className="relative">Enroll Now</span>
                <ArrowRight
                  size={16}
                  className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={0.7} duration={0.7}>
              <Link href="/courses" className="btn-secondary group w-full sm:w-auto">
                Explore Programs
                <ArrowRight
                  size={16}
                  className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </ScrollAnimation>
          </div>

          <ScrollAnimation type="fade-up" delay={0.8} duration={0.7}>
            <div className="mt-8 bg-welding-orange/80 backdrop-blur-sm p-3 sm:p-4 rounded-lg inline-block transition-all duration-300 hover:shadow-lg transform hover:scale-105 border border-welding-orange/30 text-sm sm:text-base">
              <p className="font-bold text-white">Investment: $200 | Duration: 2 Months</p>
              <p className="text-xs sm:text-sm text-white/90">Potential earnings: $3K-$4K per month in Zimbabwe</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center z-10">
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity duration-300"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} className="animate-bounce-subtle" />
        </button>
      </div>
    </section>
  )
}

export default HeroSection
