"use client"

import Link from "next/link"
import { LogIn } from "lucide-react"

interface AuthButtonsProps {
  isMobile?: boolean
  scrolled?: boolean
  onItemClick?: () => void
}

export function AuthButtons({ isMobile = false, scrolled = false, onItemClick }: AuthButtonsProps) {
  if (isMobile) {
    return (
      <>
        <Link
          href="/auth/login"
          className="flex items-center text-steel-blue hover:text-welding-orange font-medium transition-colors py-3 pl-2 border-l-2 border-transparent hover:border-welding-orange"
          onClick={onItemClick}
        >
          <LogIn size={18} className="mr-2" />
          Login
        </Link>
        <Link
          href="/auth/register"
          className="btn-primary text-center mt-4 py-3 transform transition-transform duration-300 hover:scale-105"
          onClick={onItemClick}
        >
          Sign Up
        </Link>
      </>
    )
  }

  return (
    <div className="flex items-center space-x-3">
      <Link
        href="/auth/login"
        className="flex items-center text-steel-blue hover:text-welding-orange font-medium transition-all duration-300 hover:scale-105 transform"
      >
        <LogIn size={18} className="mr-1" />
        Login
      </Link>
      <Link
        href="/auth/register"
        className={`btn-primary transition-all duration-500 transform hover:scale-105 hover:shadow-lg ${
          scrolled ? "py-2 px-4" : "py-3 px-6"
        }`}
      >
        Sign Up
      </Link>
    </div>
  )
}
