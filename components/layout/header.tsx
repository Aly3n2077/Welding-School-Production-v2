"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Sparkles } from "lucide-react"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/ui/logo"
import { AuthNav } from "./auth-nav"

// FIX: Changed from named export to default export
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Add loading animation
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

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

    window.addEventListener("scroll", handleScroll, { passive: true })
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick)
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [isMenuOpen])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isMenuOpen])

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? "py-2 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100/50" 
          : "py-4 bg-white/90 backdrop-blur-sm"
      } ${visible ? "translate-y-0" : "-translate-y-full"} ${
        isLoaded ? "animate-in slide-in-from-top-4 fade-in-0 duration-700" : "opacity-0"
      }`}
    >
      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-welding-orange to-transparent opacity-70"></div>
      
      <div className="container-custom flex justify-between items-center relative">
        {/* Logo with enhanced animation */}
        <div className="flex items-center space-x-2 group">
          <Logo 
            width={scrolled ? 130 : 150} 
            height={scrolled ? 52 : 60} 
            className={`max-w-[120px] xs:max-w-full transition-all duration-500 ease-out ${
              scrolled ? "scale-95" : "scale-100"
            } group-hover:scale-105`}
          />
          {!scrolled && (
            <Sparkles 
              size={16} 
              className="text-welding-orange animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
            />
          )}
        </div>

        {/* Desktop Navigation with enhanced effects */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { href: "/", label: "Home" },
            { href: "/courses", label: "Programs" },
            { href: "/admissions", label: "Admissions" },
            { href: "/gallery", label: "Gallery" },
            { href: "/contact", label: "Contact" },
            { href: "/about", label: "About Us" }
          ].map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                group relative text-steel-blue hover:text-welding-orange font-medium 
                transition-all duration-300 hover:scale-105 transform px-3 py-2 rounded-lg
                hover:bg-welding-orange/5 hover:shadow-sm
                ${isActive(item.href)
                  ? "text-welding-orange bg-welding-orange/10 shadow-sm" 
                  : ""
                }
                animate-in slide-in-from-top-2 fade-in-0 duration-500
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
              {/* Enhanced underline effect */}
              <span 
                className={`
                  absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-welding-orange 
                  transition-all duration-300 rounded-full
                  ${isActive(item.href) 
                    ? "w-3/4 opacity-100" 
                    : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100"
                  }
                `}
              />
              {/* Subtle glow effect on hover */}
              <span 
                className="absolute inset-0 rounded-lg bg-welding-orange/0 group-hover:bg-welding-orange/5 
                           transition-colors duration-300 -z-10"
              />
            </Link>
          ))}
          
          {/* Auth Nav with enhanced styling */}
          <div className="ml-4 pl-4 border-l border-gray-200/60">
            <AuthNav scrolled={scrolled} />
          </div>
        </nav>

        {/* Enhanced Mobile Menu Button */}
        <button
          className={`
            md:hidden relative p-2 rounded-lg text-steel-blue transition-all duration-300 
            hover:bg-welding-orange/10 hover:scale-110 focus:outline-none focus:ring-2 
            focus:ring-welding-orange/50 focus:ring-offset-2
            ${isMenuOpen ? "bg-welding-orange/10 scale-105" : ""}
          `}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="relative w-6 h-6">
            <Menu 
              size={24} 
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`} 
            />
            <X 
              size={24} 
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`} 
            />
          </div>
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      <div
        className={`
          md:hidden absolute top-full left-0 right-0 z-50 
          transition-all duration-500 ease-out overflow-hidden
          ${isMenuOpen 
            ? "max-h-[85vh] opacity-100 translate-y-0" 
            : "max-h-0 opacity-0 -translate-y-4"
          }
        `}
      >
        <div className="bg-white/98 backdrop-blur-xl shadow-2xl border-t border-gray-100/50">
          <nav className="container-custom py-6 flex flex-col space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/courses", label: "Programs" },
              { href: "/admissions", label: "Admissions" },
              { href: "/gallery", label: "Gallery" },
              { href: "/contact", label: "Contact" },
              { href: "/about", label: "About Us" }
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group relative text-steel-blue hover:text-welding-orange font-medium 
                  transition-all duration-300 py-3 px-4 rounded-lg
                  hover:bg-welding-orange/5 hover:shadow-sm hover:translate-x-2
                  border-l-3 transition-all duration-300
                  ${isActive(item.href)
                    ? "border-welding-orange text-welding-orange bg-welding-orange/10 translate-x-2 shadow-sm"
                    : "border-transparent hover:border-welding-orange/50"
                  }
                  ${isMenuOpen ? "animate-in slide-in-from-left-4 fade-in-0 duration-500" : ""}
                `}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center justify-between">
                  {item.label}
                  <ChevronDown 
                    size={16} 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -rotate-90" 
                  />
                </span>
              </Link>
            ))}
            
            {/* Mobile Auth Nav */}
            <div className="pt-4 mt-4 border-t border-gray-200/50">
              <AuthNav isMobile={true} onItemClick={() => setIsMenuOpen(false)} />
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  )
}