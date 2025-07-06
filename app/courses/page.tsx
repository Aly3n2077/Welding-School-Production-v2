"use client"

import { Suspense } from "react"
import { CoursesClientPage } from "./CoursesClientPage"

function CoursesLoadingFallback() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-200 h-64 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<CoursesLoadingFallback />}>
      <CoursesClientPage />
    </Suspense>
  )
}