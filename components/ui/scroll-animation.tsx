"use client"

import { type ReactNode, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade" | "scale" | "none"

interface ScrollAnimationProps {
  children: ReactNode
  type?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

export function ScrollAnimation({
  children,
  type = "fade-up",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once the element is visible, we don't need to observe it anymore
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      {
        threshold,
        rootMargin: "0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  // Define animation variants based on type
  const variants = {
    hidden: {
      opacity: 0,
      y: type === "fade-up" ? 20 : type === "fade-down" ? -20 : 0,
      x: type === "fade-left" ? -20 : type === "fade-right" ? 20 : 0,
      scale: type === "scale" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={type === "none" ? {} : variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
