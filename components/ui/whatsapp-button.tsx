
"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "./button"

interface WhatsAppButtonProps {
  message?: string
  className?: string
}

export function WhatsAppButton({ 
  message = "Hi! I'm interested in your welding courses. Can you help me?",
  className = "" 
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const adminWhatsApp = "263785054159"
    const whatsappUrl = `https://wa.me/${adminWhatsApp}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Button 
      onClick={handleWhatsAppClick}
      className={`bg-green-500 hover:bg-green-600 text-white ${className}`}
    >
      <MessageCircle className="w-4 h-4 mr-2" />
      WhatsApp Us
    </Button>
  )
}
