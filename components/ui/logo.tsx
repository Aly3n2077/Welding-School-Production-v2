import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  width?: number
  height?: number
  className?: string
  linkClassName?: string
  variant?: "default" | "white"
}

export function Logo({ width = 150, height = 60, className = "", linkClassName = "", variant = "default" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${linkClassName}`}>
      <div className="relative overflow-hidden transition-all duration-300 ease-in-out">
        <Image
          src="/images/mroncy-logo.png"
          alt="MRONCY School of Welding & Fabrication Engineering"
          width={width}
          height={height}
          className={`h-auto transition-all duration-300 ${className}`}
          priority
        />
      </div>
    </Link>
  )
}
