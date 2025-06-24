/**
 * Utility functions for image optimization
 */

/**
 * Get appropriate image sizes attribute for responsive images
 * @param defaultSize Default size as percentage of viewport width
 * @returns A sizes attribute string for the Image component
 */
export function getResponsiveSizes(defaultSize = 33): string {
  return `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${defaultSize}vw`
}

/**
 * Calculate optimal image quality based on device pixel ratio and viewport width
 * Balances quality and performance
 * @returns A number between 1-100 representing image quality
 */
export function getOptimalImageQuality(): number {
  // Default to 85 for a good balance between quality and file size
  if (typeof window === "undefined") return 85

  const dpr = window.devicePixelRatio || 1
  const viewportWidth = window.innerWidth

  // Higher quality for high-DPR devices and larger screens
  if (dpr >= 2 && viewportWidth >= 1440) return 90
  if (dpr >= 2) return 85
  if (viewportWidth >= 1440) return 85

  // Lower quality for smaller screens to improve performance
  if (viewportWidth <= 640) return 80

  return 85
}

/**
 * Determine if an image should be lazy loaded based on its position
 * @param index Position of the image
 * @param visibleCount Number of initially visible items
 * @returns Boolean indicating if the image should be lazy loaded
 */
export function shouldLazyLoad(index: number, visibleCount = 3): boolean {
  return index >= visibleCount
}
