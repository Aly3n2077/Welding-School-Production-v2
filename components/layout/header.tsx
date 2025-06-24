"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/ui/logo"
import { AuthNav } from "./auth-nav"

// FIX: Changed from named export to default export
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      const isScrollingDown = prevScrollPos < currentScrollPos
      const isScrollingUp = prevScrollPos > currentScrollPos
      const isScrollingSignificantly = Math.abs(prevScrollPos - currentScrollPos) > 10

      if (isScrollingDown && isScrollingSignificantly && currentScrollPos > 100) {
        setVisible(false)
      } else if (isScrollingUp || currentScrollPos < 10) {
        setVisible(true)
      }

      setPrevScrollPos(currentScrollPos)

      if (currentScrollPos > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2 bg-white/90 backdrop-blur-md shadow-md" : "py-4 bg-white"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container-custom flex justify-between items-center">
        <Logo width={scrolled ? 130 : 150} height={scrolled ? 52 : 60} className="max-w-[120px] xs:max-w-full" />

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`text-steel-blue hover:text-welding-orange font-medium transition-all duration-300 hover:scale-105 transform relative ${
              isActive("/")
                ? "text-welding-orange after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-welding-orange"
                : "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-welding-orange hover:after:w-full after:transition-all after:duration-300"
            }`}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className={`text-steel-blue hover:text-welding-orange font-medium transition-all duration-300 hover:scale-105 transform relative ${
              isActive("/courses")
                ? "text-welding-orange after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-welding-orange"
                : "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-welding-orange hover:after:w-full after:transition-all after:duration-300"
            }`}
          >
            Programs
          </Link>
          <Link
            href="/admissions"
            className={`text-steel-blue hover:text-welding-orange font-medium transition-all duration-300 hover:scale-105 transform relative ${
              isActive("/admissions")
                ? "text-welding-orange after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-welding-orange"
                : "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-welding-orange hover:after:w-full after:transition-all after:duration-300"
            }`}
          >
            Admissions
          </Link>
          <Link
            href="/gallery"
            className={`text-steel-blue hover:text-welding-orange font-medium transition-all duration-300 hover:scale-105 transform relative ${
              isActive("/gallery")
                ? "text-welding-orange after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-welding-orange"
                : "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-welding-orange hover:after:w-full after:transition-all after:duration-300"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className={`text-steel-blue hover:text-welding-orange font-medium transition-all duration-300 hover:scale-105 transform relative ${
              isActive("/contact")
                ? "text-welding-orange after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-welding-orange"
                : "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-welding-orange hover:after:w-full after:transition-all after:duration-300"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/about"
            className={`text-steel-blue hover:text-welding-orange font-medium transition-all duration-300 hover:scale-105 transform relative ${
              isActive("/about")
                ? "text-welding-orange after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-welding-orange"
                : "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-welding-orange hover:after:w-full after:transition-all after:duration-300"
            }`}
          >
            About Us
          </Link>
          <AuthNav scrolled={scrolled} />
        </nav>

        <button
          className="md:hidden text-steel-blue transition-transform duration-300 transform hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-full left-0 right-0 z-50 transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className={`container-custom py-4 flex flex-col space-y-4 transition-all duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        >
          <Link
            href="/"
            className={`text-steel-blue hover:text-welding-orange font-medium transition-colors py-3 pl-2 border-l-2 ${
              isActive("/")
                ? "border-welding-orange text-welding-orange"
                : "border-transparent hover:border-welding-orange"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className={`text-steel-blue hover:text-welding-orange font-medium transition-colors py-3 pl-2 border-l-2 ${
              isActive("/courses")
                ? "border-welding-orange text-welding-orange"
                : "border-transparent hover:border-welding-orange"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Programs
          </Link>
          <Link
            href="/admissions"
            className={`text-steel-blue hover:text-welding-orange font-medium transition-colors py-3 pl-2 border-l-2 ${
              isActive("/admissions")
                ? "border-welding-orange text-welding-orange"
                : "border-transparent hover:border-welding-orange"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Admissions
          </Link>
          <Link
            href="/gallery"
            className={`text-steel-blue hover:text-welding-orange font-medium transition-colors py-3 pl-2 border-l-2 ${
              isActive("/gallery")
                ? "border-welding-orange text-welding-orange"
                : "border-transparent hover:border-welding-orange"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className={`text-steel-blue hover:text-welding-orange font-medium transition-colors py-3 pl-2 border-l-2 ${
              isActive("/contact")
                ? "border-welding-orange text-welding-orange"
                : "border-transparent hover:border-welding-orange"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/about"
            className={`text-steel-blue hover:text-welding-orange font-medium transition-colors py-3 pl-2 border-l-2 ${
              isActive("/about")
                ? "border-welding-orange text-welding-orange"
                : "border-transparent hover:border-welding-orange"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <AuthNav isMobile={true} onItemClick={() => setIsMenuOpen(false)} />
        </nav>
      </div>
    </header>
  )
}
