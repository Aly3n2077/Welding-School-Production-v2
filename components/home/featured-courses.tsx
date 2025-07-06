"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, ZoomIn, X, ZoomOut } from "lucide-react"

// Program data with unique images for each program
const programs = [
  {
    id: "welding-business",
    title: "How to Start a Welding Business",
    description: "Learn the essentials of launching and running a successful welding business from the ground up.",
    duration: "2 Weeks",
    image: "/images/programs/welding-business.jpg",
    imageAlt: "Welder in workshop setting up their own business",
  },
  {
    id: "welding-school",
    title: "How to Start a Welding Private School",
    description: "Discover how to establish your own welding training center and create additional income streams.",
    duration: "2 Weeks",
    image: "/images/programs/welding-school.jpg",
    imageAlt: "Welding instructor teaching students in a classroom setting",
  },
  {
    id: "business-planning",
    title: "Welding Business Planning and Strategy",
    description: "Develop comprehensive business plans and strategic approaches for welding enterprises.",
    duration: "2 Weeks",
    image: "/images/programs/business-planning.jpg",
    imageAlt: "Business planning session with blueprints and financial documents",
  },
  {
    id: "marketing",
    title: "Marketing for Welding Businesses",
    description: "Master effective marketing techniques specifically tailored for welding and fabrication businesses.",
    duration: "1 Week",
    image: "/images/programs/welding-marketing.jpg",
    imageAlt: "Digital marketing for welding business with social media and website",
  },
  {
    id: "sales",
    title: "Welding Sales and Customer Service",
    description: "Learn how to attract clients, close deals, and provide exceptional service in the welding industry.",
    duration: "1 Week",
    image: "/images/programs/welding-sales.jpg",
    imageAlt: "Welding professional discussing project with client",
  },
  {
    id: "side-hustle",
    title: "Welding Side Hustle Masterclass",
    description: "Turn your welding skills into a profitable side business while maintaining your day job.",
    duration: "1 Week",
    image: "/images/programs/welding-side-hustle.jpg",
    imageAlt: "Welder working on a custom metal art piece in home workshop",
  },
]

const FeaturedCourses = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState<number | null>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<"left" | "right" | null>(null)
  const scrollInterval = useRef<NodeJS.Timeout | null>(null)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [autoScrollActive, setAutoScrollActive] = useState(false)
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({})

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }

      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle mouse position tracking for hover-based scrolling
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setHoverPosition({ x, y })

    // Determine scroll direction based on mouse position
    const scrollThreshold = 0.2 // 20% from each edge triggers scrolling
    const leftThreshold = rect.width * scrollThreshold
    const rightThreshold = rect.width * (1 - scrollThreshold)

    if (x < leftThreshold) {
      if (scrollDirection !== "left") {
        setScrollDirection("left")
        startAutoScroll("left")
      }
    } else if (x > rightThreshold) {
      if (scrollDirection !== "right") {
        setScrollDirection("right")
        startAutoScroll("right")
      }
    } else {
      if (scrollDirection !== null) {
        setScrollDirection(null)
        stopAutoScroll()
      }
    }
  }

  const handleMouseEnter = () => {
    setIsScrolling(true)
  }

  const handleMouseLeave = () => {
    setIsScrolling(false)
    setScrollDirection(null)
    setHoverPosition(null)
    stopAutoScroll()
  }

  // Start auto-scrolling based on direction
  const startAutoScroll = (direction: "left" | "right") => {
    stopAutoScroll() // Clear any existing interval

    setAutoScrollActive(true)

    // Use a timeout to add a small delay before starting continuous scrolling
    autoScrollTimeoutRef.current = setTimeout(() => {
      scrollInterval.current = setInterval(() => {
        if (direction === "left") {
          prevSlide()
        } else {
          nextSlide()
        }
      }, 1000) // Scroll every second when in auto-scroll mode
    }, 300) // Small delay before starting continuous scrolling
  }

  const stopAutoScroll = () => {
    setAutoScrollActive(false)

    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current)
      autoScrollTimeoutRef.current = null
    }

    if (scrollInterval.current) {
      clearInterval(scrollInterval.current)
      scrollInterval.current = null
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1
      return nextIndex >= programs.length - visibleItems + 1 ? 0 : nextIndex
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? Math.max(0, programs.length - visibleItems) : prevIndex - 1
    })
  }

  // Mouse drag scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(currentIndex * (100 / visibleItems))
    stopAutoScroll()
  }

  const handleMouseMoveWhileDragging = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()

    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 0.5 // Adjust scrolling speed
    const newScrollLeft = scrollLeft - walk / (100 / visibleItems)

    // Clamp the scroll position
    const maxScroll = Math.max(0, programs.length - visibleItems)
    const clampedScroll = Math.max(0, Math.min(maxScroll, newScrollLeft))

    setCurrentIndex(Math.round(clampedScroll))
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeaveContainer = () => {
    setIsDragging(false)
    handleMouseLeave()
  }

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
    stopAutoScroll()
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return

    const touchX = e.touches[0].clientX
    const diff = touchStartX - touchX

    if (Math.abs(diff) > 50) {
      // Threshold to detect swipe
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
      setTouchStartX(null)
    }
  }

  const handleTouchEnd = () => {
    setTouchStartX(null)
  }

  // Image zoom functionality
  const handleZoomImage = (program: (typeof programs)[0]) => {
    setZoomedImage({ src: program.image, alt: program.imageAlt })
    setZoomLevel(1)
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden"
  }

  const handleCloseZoom = () => {
    setZoomedImage(null)
    setZoomLevel(1)
    // Restore body scrolling
    document.body.style.overflow = "auto"
  }

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5))
  }

  // Handle image load events
  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }))
  }

  // Close zoom on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && zoomedImage) {
        handleCloseZoom()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [zoomedImage])

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "auto"
      }
    }
  }, [])

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-white to-light-grey/30">
      {/* Background elements for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-light-grey opacity-50"></div>

      <div className="container-custom relative z-10">
        <h2 className="section-title text-center mb-4 animate-fade-in">Our Comprehensive Programs</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto animate-fade-in">
          Our industry-focused programs provide both practical welding skills and business knowledge to launch your
          career or business in the welding industry.
        </p>

        <div className="relative">
          {/* Left scroll trigger area - visible */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-16 z-20 flex items-center justify-start ${
              scrollDirection === "left" && autoScrollActive ? "bg-gradient-to-r from-white/40 to-transparent" : ""
            }`}
            onMouseEnter={() => {
              setScrollDirection("left")
              startAutoScroll("left")
            }}
            onMouseLeave={() => {
              setScrollDirection(null)
              stopAutoScroll()
            }}
          >
            <button
              onClick={prevSlide}
              className={`bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-light-grey transition-all duration-300 transform hover:scale-110 ml-2 ${
                scrollDirection === "left" ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
              aria-label="Previous program"
            >
              <ChevronLeft size={24} className="text-steel-blue" />
            </button>
          </div>

          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={isDragging ? handleMouseMoveWhileDragging : handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeaveContainer}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`flex transition-transform duration-500 ease-in-out ${isDragging ? "transition-none" : ""}`}
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {programs.map((program, index) => (
                <div
                  key={program.id}
                  className="flex-none w-full sm:w-1/2 lg:w-1/3 p-2 sm:p-4"
                  style={{ width: `${100 / visibleItems}%` }}
                  onMouseEnter={() => setIsHovering(index)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  <div
                    className={`bg-white/90 backdrop-blur-md rounded-lg shadow-md overflow-hidden transition-all duration-500 h-full flex flex-col ${
                      isHovering === index ? "shadow-xl transform scale-[1.03]" : ""
                    }`}
                  >
                    {/* Image Container with Improved Aspect Ratio */}
                    <div className="relative aspect-[4/3] overflow-hidden group">
                      {/* Loading Skeleton */}
                      {!imageLoaded[index] && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                          <div className="w-10 h-10 border-4 border-welding-orange border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}

                      {/* Actual Image */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          imageLoaded[index] ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <Image
                          src={program.image || "/placeholder.svg"}
                          alt={program.imageAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className={`object-cover transition-transform duration-700 ${
                            isHovering === index ? "scale-95" : "scale-100"
                          }`}
                          priority={index < 3} // Prioritize loading the first 3 images
                          onLoad={() => handleImageLoad(index)}
                          quality={90} // Higher quality for better visual representation
                        />
                      </div>

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Zoom button */}
                      <button
                        onClick={() => handleZoomImage(program)}
                        className="absolute bottom-3 right-3 bg-white/80 p-2 rounded-full hover:bg-white transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                        aria-label={`View larger image of ${program.title}`}
                      >
                        <ZoomIn size={18} className="text-steel-blue" />
                      </button>
                    </div>

                    <div className="p-4 sm:p-6 flex flex-col flex-grow">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-steel-blue line-clamp-2">
                        {program.title}
                      </h3>
                      <p className="text-gray-700 mb-4 flex-grow text-sm sm:text-base line-clamp-3">
                        {program.description}
                      </p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs sm:text-sm font-medium bg-light-grey/70 backdrop-blur-sm px-3 py-1 rounded-full">
                          Duration: {program.duration}
                        </span>
                      </div>
                      <Link
                        href={`/courses#${program.id}`}
                        className="btn-primary w-full text-center transition-all duration-300 transform hover:scale-105 py-2 sm:py-3 text-sm sm:text-base"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right scroll trigger area - visible */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-16 z-20 flex items-center justify-end ${
              scrollDirection === "right" && autoScrollActive ? "bg-gradient-to-l from-white/40 to-transparent" : ""
            }`}
            onMouseEnter={() => {
              setScrollDirection("right")
              startAutoScroll("right")
            }}
            onMouseLeave={() => {
              setScrollDirection(null)
              stopAutoScroll()
            }}
          >
            <button
              onClick={nextSlide}
              className={`bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-light-grey transition-all duration-300 transform hover:scale-110 mr-2 ${
                scrollDirection === "right" ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
              aria-label="Next program"
            >
              <ChevronRight size={24} className="text-steel-blue" />
            </button>
          </div>

          {/* Scroll indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(programs.length / visibleItems) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * visibleItems)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex >= index * visibleItems && currentIndex < (index + 1) * visibleItems
                    ? "bg-welding-orange w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/courses"
            className="btn-secondary transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View All Programs
          </Link>
        </div>
      </div>

      {/* Zoomed Image Modal with Enhanced Viewing Experience */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={handleCloseZoom}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] overflow-auto bg-black/20 rounded-lg p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="overflow-auto">
                <div
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: "center",
                    transition: "transform 0.3s ease-out",
                  }}
                  className="relative"
                >
                  <Image
                    src={zoomedImage.src || "/placeholder.svg"}
                    alt={zoomedImage.alt}
                    width={1200}
                    height={900}
                    className="object-contain rounded-lg"
                    quality={95} // Higher quality for zoomed view
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={handleZoomIn}
                  className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors duration-300"
                  aria-label="Zoom in"
                >
                  <ZoomIn size={20} className="text-white" />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors duration-300"
                  aria-label="Zoom out"
                >
                  <ZoomOut size={20} className="text-white" />
                </button>
                <button
                  onClick={handleCloseZoom}
                  className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors duration-300"
                  aria-label="Close zoom view"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>

              {/* Image Caption */}
              <div className="absolute bottom-2 left-2 right-2 bg-black/50 text-white px-3 py-2 rounded text-sm">
                <div className="flex justify-between items-center">
                  <span>{zoomedImage.alt}</span>
                  <span>{Math.round(zoomLevel * 100)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default FeaturedCourses
