"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, BookOpen, CreditCard, Settings, Bell, FileText, Menu, X } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { cn } from "@/lib/utils"

export default function AdminSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const navItems = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Students",
      href: "/admin/students",
      icon: Users,
    },
    {
      title: "Courses",
      href: "/admin/courses",
      icon: BookOpen,
    },
    {
      title: "Payments",
      href: "/admin/payments",
      icon: CreditCard,
    },
    {
      title: "Announcements",
      href: "/admin/announcements",
      icon: Bell,
    },
    {
      title: "Reports",
      href: "/admin/reports",
      icon: FileText,
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ]

  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <button
        className="fixed bottom-4 right-4 z-50 md:hidden bg-welding-orange text-white p-3 rounded-full shadow-lg"
        onClick={toggleMobileSidebar}
        aria-label="Toggle mobile sidebar"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden md:flex flex-col h-screen bg-white border-r transition-all duration-300",
          isCollapsed ? "w-16" : "w-64",
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          {!isCollapsed && <Logo width={120} height={48} />}
          <button onClick={toggleSidebar} className="p-1 rounded-md hover:bg-gray-100" aria-label="Toggle sidebar">
            <Menu size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center py-2 px-3 rounded-md transition-colors",
                    pathname === item.href ? "bg-welding-orange text-white" : "text-gray-700 hover:bg-gray-100",
                    isCollapsed && "justify-center",
                  )}
                >
                  <item.icon size={20} className={cn(!isCollapsed && "mr-3")} />
                  {!isCollapsed && <span>{item.title}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r shadow-lg transition-transform duration-300 transform md:hidden",
          isMobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Logo width={120} height={48} />
          <button onClick={toggleMobileSidebar} className="p-1 rounded-md hover:bg-gray-100" aria-label="Close sidebar">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center py-2 px-3 rounded-md transition-colors",
                    pathname === item.href ? "bg-welding-orange text-white" : "text-gray-700 hover:bg-gray-100",
                  )}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <item.icon size={20} className="mr-3" />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}
