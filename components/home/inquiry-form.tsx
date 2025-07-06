"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Loader2 } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  program: string
  message: string
}

interface SubmitStatus {
  success: boolean
  message: string
}

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      program: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Create WhatsApp message
      const whatsappMessage = `Hello! I'm interested in MRONCY School of Welding.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Program: ${formData.program || "General Inquiry"}
Message: ${formData.message}

Please provide more information about the courses and enrollment process.`

      // Encode the message for WhatsApp URL
      const encodedMessage = encodeURIComponent(whatsappMessage)

      // WhatsApp admin number (with country code for Zimbabwe +263)
      const adminWhatsApp = "263785054159"

      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${adminWhatsApp}?text=${encodedMessage}`

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank')

      // Simulate success (you might want to handle actual success/failure in a real scenario)
      setSubmitStatus({
        success: true,
        message: "Redirecting to WhatsApp!",
      })

      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to open WhatsApp. Please try again.",
      })
    } finally {
      setIsSubmitting(false)

      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }
  }

  return (
    <section className="py-16 bg-light-grey relative overflow-hidden">
      {/* Background elements for visual interest */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-welding-orange/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-steel-blue/20 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">Start Your Welding Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your career? Send us your details and we'll get back to you with all the information you need.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl bg-white/95 backdrop-blur-sm border-0">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-steel-blue flex items-center justify-center gap-3">
                <MessageSquare className="w-6 h-6 text-welding-orange" />
                Get Course Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="border-gray-300 focus:border-welding-orange focus:ring-welding-orange"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="border-gray-300 focus:border-welding-orange focus:ring-welding-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="border-gray-300 focus:border-welding-orange focus:ring-welding-orange"
                    />
                  </div>
                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                      Program of Interest
                    </label>
                    <Select value={formData.program} onValueChange={handleSelectChange}>
                      <SelectTrigger className="border-gray-300 focus:border-welding-orange focus:ring-welding-orange">
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SMAW Basic">SMAW Basic Welding</SelectItem>
                        <SelectItem value="MIG/MAG">MIG/MAG Welding</SelectItem>
                        <SelectItem value="TIG">TIG Welding</SelectItem>
                        <SelectItem value="Pipe Welding">Pipe Welding</SelectItem>
                        <SelectItem value="Structural">Structural Welding</SelectItem>
                        <SelectItem value="Business">Welding Business</SelectItem>
                        <SelectItem value="General">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your goals and any questions you have..."
                    className="border-gray-300 focus:border-welding-orange focus:ring-welding-orange resize-none"
                  />
                </div>

                {submitStatus && (
                  <div className={`p-4 rounded-md ${
                    submitStatus.success 
                      ? "bg-green-50 text-green-700 border border-green-200" 
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-welding-orange hover:bg-orange-600 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Connecting to WhatsApp...
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Send via WhatsApp
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}