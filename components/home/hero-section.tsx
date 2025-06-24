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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
              <span
                className="block transform transition-transform duration-700 delay-100 ease-out 
                              translate-y-0 opacity-100 text-shadow-lg"
              >
                Unlock a <span className="text-welding-orange bg-gradient-to-r from-welding-orange to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">Lucrative Career</span> in Welding
              </span>
            </h1>
          </div>

          <ScrollAnimation type="fade-up" delay={0.4} duration={0.7}>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-10 max-w-4xl mx-auto leading-relaxed font-semibold drop-shadow-lg">
              Professional Training | Industry Certification | Business Development
            </p>
          </ScrollAnimation>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 lg:px-0 mt-8 mb-16 max-w-4xl mx-auto">
            <ScrollAnimation type="fade-up" delay={0.6} duration={0.7}>
              <Link href="/admissions" className="group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-welding-orange to-yellow-500 text-white font-bold text-sm sm:text-base lg:text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto text-center border-2 border-white/30 min-w-[200px] sm:min-w-[220px] max-w-[280px] flex items-center justify-center">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 to-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                <span className="relative flex items-center justify-center whitespace-nowrap z-10">
                  Enroll Now
                  <ArrowRight
                    size={16}
                    className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2"
                  />
                </span>
              </Link>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={0.7} duration={0.7}>
              <Link href="/courses" className="group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border-2 border-white text-white font-bold text-sm sm:text-base lg:text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto text-center shadow-xl min-w-[200px] sm:min-w-[220px] max-w-[280px] hover:border-white hover:bg-white backdrop-blur-md flex items-center justify-center">
                <span className="absolute inset-0 w-full h-full bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                <span className="relative flex items-center justify-center whitespace-nowrap z-10 transition-colors duration-300 group-hover:text-steel-blue">
                  Explore Programs
                  <ArrowRight
                    size={16}
                    className="ml-2 inline-block transition-all duration-300 group-hover:translate-x-2 group-hover:text-steel-blue"
                  />
                </span>
              </Link>
            </ScrollAnimation>
          </div>

          <ScrollAnimation type="fade-up" delay={0.8} duration={0.7}>
            <div className="mt-12 bg-gradient-to-r from-steel-blue/90 to-welding-orange/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl inline-block transition-all duration-300 hover:shadow-2xl transform hover:scale-105 border-2 border-white/30 text-center max-w-2xl mx-auto">
              <p className="font-black text-white text-xl sm:text-2xl mb-2">Investment: $200 | Duration: 2 Months</p>
              <p className="text-lg sm:text-xl text-white font-semibold">Potential earnings: $3K-$4K per month in Zimbabwe</p>
              <div className="mt-4 text-sm text-white/90 font-medium">
                Lifetime support • Industry certification • Job placement assistance
              </div>
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
