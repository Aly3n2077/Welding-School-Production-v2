import Image from "next/image"

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/mroncy-logo.png"
      alt="Mroncy Welding Centre Logo"
      width={40}
      height={40}
      className={className}
    />
  )
}
