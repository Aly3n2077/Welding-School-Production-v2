"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

const testimonials = [
  {
    id: 1,
    name: "Tendai Moyo",
    role: "SMAW Graduate",
    image: "/placeholder.svg?height=100&width=100&text=Tendai+M",
    quote:
      "The hands-on training at Daniel Muronzi Welding Centre gave me the confidence and skills to secure a job at a major construction company within weeks of graduation.",
  },
  {
    id: 2,
    name: "Chiedza Nyathi",
    role: "TIG Welding Student",
    image: "/placeholder.svg?height=100&width=100&text=Chiedza+N",
    quote:
      "The instructors are experienced professionals who take time to ensure every student masters the techniques. The practical approach to learning makes a huge difference.",
  },
  {
    id: 3,
    name: "Farai Mutasa",
    role: "Pipe Welding Graduate",
    image: "/placeholder.svg?height=100&width=100&text=Farai+M",
    quote:
      "I came with no prior experience, but the step-by-step training methodology helped me become proficient in pipe welding. Now I work in the oil and gas industry.",
  },
  {
    id: 4,
    name: "Tatenda Mhaka",
    role: "Boiler Making Graduate",
    image: "/placeholder.svg?height=100&width=100&text=Tatenda+M",
    quote:
      "The certification I received is recognized internationally, which has opened doors for me to work on projects across Southern Africa. Best investment in my future.",
  },
  {
    id: 5,
    name: "Rumbidzai Choto",
    role: "MIG Welding Graduate",
    image: "/placeholder.svg?height=100&width=100&text=Rumbidzai+C",
    quote:
      "As a woman in welding, I found the environment at MRONCY to be supportive and empowering. The skills I gained have allowed me to break barriers in a male-dominated field.",
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"left" | "right" | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const scrollInterval = useRef<NodeJS.Timeout | null>(null)
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (autoplay) {
      autoplayInterval.current = setInterval(() => {
        changeSlide((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
      }, 5000)
    }

    return () => {
      if (autoplayInterval.current) {
        clearInterval(autoplayInterval.current)
      }
    }
  }, [autoplay])

  // Handle auto-scrolling on hover
  useEffect(() => {
    if (isScrolling && scrollDirection) {
      if (autoplayInterval.current) {
        clearInterval(autoplayInterval.current)
      }

      scrollInterval.current = setInterval(() => {
        if (scrollDirection === "right") {
          nextSlide()
        } else {
          prevSlide()
        }
      }, 2000) // Scroll every 2 seconds
    }

    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current)
      }
    }
  }, [isScrolling, scrollDirection])

  const changeSlide = (indexFn: (prevIndex: number) => number) => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex(indexFn)

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const nextSlide = () => {
    setAutoplay(false)
    changeSlide((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setAutoplay(false)
    changeSlide((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleMouseEnter = (area: "left" | "right") => {
    setAutoplay(false)
    setIsScrolling(true)
    setScrollDirection(area)
  }

  const handleMouseLeave = () => {
    setIsScrolling(false)
    setScrollDirection(null)
    setAutoplay(true)
  }

  return (
    <section className="py-16 bg-steel-blue text-white relative overflow-hidden">
      {/* Background elements for visual interest */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-welding-orange/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>

      <div className="container-custom relative z-10">
        <ScrollAnimation type="fade-up">
          <h2 className="section-title text-center text-white mb-12">What Our Students Say</h2>
        </ScrollAnimation>

        <div className="relative max-w-4xl mx-auto">
          {/* Left scroll trigger area */}
          <div
            className="absolute left-0 top-1/2 bottom-0 w-16 z-20 flex items-center justify-start opacity-0 hover:opacity-100 transition-opacity duration-300 h-1/2 -translate-y-1/2"
            onMouseEnter={() => handleMouseEnter("left")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={prevSlide}
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 ml-2"
              aria-label="Previous testimonial"
              disabled={isAnimating}
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
          </div>

          <ScrollAnimation type="fade-up" delay={0.2}>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out will-change-transform hardware-accelerate"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-none px-2 sm:px-4">
                    <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-8 rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02]">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6">
                        <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-welding-orange shadow-lg transition-transform duration-500 hover:scale-110 group">
                          <Image
                            src={`/placeholder.svg?height=100&width=100&text=${encodeURIComponent(testimonial.name.split(' ').map(n => n[0]).join('+'))}`}
                            alt={testimonial.name}
                            fill
                            sizes="100px"
                            className="object-cover transition-all duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <p className="text-base sm:text-lg italic mb-3 sm:mb-4">"{testimonial.quote}"</p>
                          <div className="transform transition-all duration-500 hover:translate-x-2">
                            <h4 className="font-bold text-lg sm:text-xl">{testimonial.name}</h4>
                            <p className="text-welding-orange text-sm sm:text-base">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Right scroll trigger area */}
          <div
            className="absolute right-0 top-1/2 bottom-0 w-16 z-20 flex items-center justify-end opacity-0 hover:opacity-100 transition-opacity duration-300 h-1/2 -translate-y-1/2"
            onMouseEnter={() => handleMouseEnter("right")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={nextSlide}
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 mr-2"
              aria-label="Next testimonial"
              disabled={isAnimating}
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setCurrentIndex(index)
                    setAutoplay(false)
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-welding-orange scale-125" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
