"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  path: string
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
  homeLabel?: string
}

export const Breadcrumbs = ({ items = [], homeLabel = "Home" }: BreadcrumbsProps) => {
  const pathname = usePathname()

  // If no items are provided, generate them from the pathname
  const breadcrumbItems = items.length > 0 ? items : generateBreadcrumbItems(pathname, homeLabel)

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex flex-wrap items-center text-sm md:text-base">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1

          return (
            <li key={item.path} className="flex items-center">
              {index > 0 && <ChevronRight size={16} className="mx-2 text-gray-400 flex-shrink-0" aria-hidden="true" />}

              {isLast ? (
                <span className="text-gray-600 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="text-welding-orange hover:text-welding-orange hover:underline flex items-center"
                >
                  {index === 0 && <Home size={16} className="mr-1" />}
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

// Helper function to generate breadcrumb items from pathname
function generateBreadcrumbItems(pathname: string, homeLabel: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean)

  // Start with home
  const items: BreadcrumbItem[] = [{ label: homeLabel, path: "/" }]

  // Add each segment
  let path = ""
  segments.forEach((segment) => {
    path += `/${segment}`
    items.push({
      label: formatBreadcrumbLabel(segment),
      path,
    })
  })

  return items
}

// Helper function to format segment names
function formatBreadcrumbLabel(segment: string): string {
  // Replace hyphens with spaces and capitalize each word
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

// Export as default as well to maintain backward compatibility
export default Breadcrumbs
