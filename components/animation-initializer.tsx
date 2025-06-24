"use client"

import { useEffect } from "react"
import { initScrollAnimations } from "@/app/animation-utils"

// FIX: Changed from named export to default export
export default function AnimationInitializer() {
  useEffect(() => {
    const cleanup = initScrollAnimations()
    return cleanup
  }, [])

  return null
}
