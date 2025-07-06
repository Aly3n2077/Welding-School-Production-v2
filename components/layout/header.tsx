"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronDown, Award, Users, BookOpen, GraduationCap } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { AuthNav } from "./auth-nav"

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Courses", 
      href: "/courses",
      hasDropdown: true,
      dropdownItems: [
        { name: "All Courses", href: "/courses", icon: BookOpen },
        { name: "SMAW Welding", href: "/courses/smaw", icon: Award },
        { name: "MIG Welding", href: "/courses/mig", icon: Award },
        { name: "TIG Welding", href: "/courses/tig", icon: Award },
        { name: "Certifications", href: "/courses#certifications", icon: GraduationCap },
      ]
    },
    { name: "Admissions", href: "/admissions" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const coursesPricing = [
    { duration: "6 months", price: "$65/month", total: "$390", exam: "$100-$299" },
    { duration: "8 months", price: "$80/month", total: "$640", exam: "$300-$599" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-steel-blue text-white py-2 px-4 text-sm hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-welding-orange transition-colors">
              <Phone size={14} />
              <a href="tel:+263771234567" className="hover:underline">+263 77 123 4567</a>
            </div>
            <div className="flex items-center space-x-2 hover:text-welding-orange transition-colors">
              <Mail size={14} />
              <a href="mailto:info@mroncywelding.com" className="hover:underline">info@mroncywelding.com</a>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={14} />
              <span>Mon-Fri: 8AM-5PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Harare, Zimbabwe</span>
            </div>
            <div className="text-xs bg-welding-orange px-2 py-1 rounded">
              📞 Call for FREE consultation
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-sm"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Logo className="h-10 md:h-12 lg:h-14 transition-transform group-hover:scale-110 drop-shadow-md" />
              <div className="ml-4 hidden md:block">
                <div className="text-steel-blue font-black text-xl lg:text-2xl tracking-tight">MRONCY</div>
                <div className="text-welding-orange text-sm lg:text-base font-bold tracking-wide">Welding Centre</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <button
                        className={`group flex items-center space-x-1 text-steel-blue hover:text-welding-orange font-medium transition-all duration-300 hover:scale-105 transform ${
                          pathname.startsWith('/courses')
                            ? "text-welding-orange"
                            : "hover:text-welding-orange"
                        }`}
                        onMouseEnter={() => setCoursesDropdownOpen(true)}
                        onMouseLeave={() => setCoursesDropdownOpen(false)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown size={16} className={`transition-transform ${coursesDropdownOpen ? 'rotate-180' : ''}`} />
                        <span
                          className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-welding-orange transition-all duration-300 group-hover:w-full ${
                            pathname.startsWith('/courses') ? "w-full" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ${
                          coursesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                        }`}
                        onMouseEnter={() => setCoursesDropdownOpen(true)}
                        onMouseLeave={() => setCoursesDropdownOpen(false)}
                      >
                        <div className="p-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center space-x-3 p-3 text-steel-blue hover:text-welding-orange hover:bg-gray-50 rounded-md transition-colors group"
                            >
                              <dropdownItem.icon size={18} className="text-welding-orange" />
                              <span className="font-medium">{dropdownItem.name}</span>
                            </Link>
                          ))}

                          {/* Pricing Info */}
                          <div className="border-t border-gray-100 mt-2 pt-2">
                            <div className="p-3 bg-gradient-to-r from-steel-blue/5 to-welding-orange/5 rounded-md">
                              <div className="text-xs font-semibold text-steel-blue mb-2">Course Pricing:</div>
                              {coursesPricing.map((pricing, index) => (
                                <div key={index} className="text-xs text-gray-600 mb-1">
                                  <span className="font-medium">{pricing.duration}:</span> {pricing.price} (Total: {pricing.total} + Exam: {pricing.exam})
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`group relative text-steel-blue hover:text-welding-orange font-medium transition-all duration-300 hover:scale-105 transform ${
                        pathname === item.href
                          ? "text-welding-orange"
                          : "hover:text-welding-orange"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-welding-orange transition-all duration-300 group-hover:w-full ${
                          pathname === item.href ? "w-full" : ""
                        }`}
                      />
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA & Auth Navigation */}
            <div className="flex items-center space-x-4">
              <Link
                href="/admissions"
                className="hidden md:inline-flex items-center px-6 py-3 bg-gradient-to-r from-welding-orange to-yellow-500 text-white font-bold rounded-full hover:from-welding-orange/90 hover:to-yellow-400/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 hover:-translate-y-1 border border-white/20"
              >
                <Users size={18} className="mr-2" />
                Apply Now
              </Link>

              <AuthNav />

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-steel-blue hover:text-welding-orange transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out border-t border-gray-200 ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="bg-white px-4 py-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between py-3 px-4 text-steel-blue hover:text-welding-orange hover:bg-gray-50 rounded-md transition-colors ${
                    pathname === item.href || (item.hasDropdown && pathname.startsWith('/courses'))
                      ? "text-welding-orange bg-gray-50"
                      : ""
                  }`}
                >
                  <span className="font-medium">{item.name}</span>
                  {item.hasDropdown && <ChevronDown size={16} />}
                </Link>

                {/* Mobile Courses Submenu */}
                {item.hasDropdown && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 py-2 px-3 text-sm text-gray-600 hover:text-welding-orange hover:bg-gray-50 rounded-md transition-colors"
                      >
                        <dropdownItem.icon size={16} className="text-welding-orange" />
                        <span>{dropdownItem.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                href="/admissions"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-4 py-3 bg-welding-orange text-white font-medium rounded-md hover:bg-welding-orange/90 transition-colors"
              >
                <Users size={18} className="mr-2" />
                Apply Now
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
