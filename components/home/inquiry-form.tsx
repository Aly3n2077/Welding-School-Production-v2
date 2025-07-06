"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Loader2, CheckCircle, ArrowRight } from "lucide-react"

const programs = [
  { id: "welding-business", name: "How to Start a Welding Business" },
  { id: "welding-school", name: "How to Start a Welding Private School" },
  { id: "business-planning", name: "Welding Business Planning and Strategy" },
  { id: "marketing", name: "Marketing for Welding Businesses" },
  { id: "sales", name: "Welding Sales and Customer Service" },
  { id: "operations", name: "Welding Shop Operations and Management" },
  { id: "financial", name: "Welding Business Financial Management" },
  { id: "team-building", name: "Building a Welding Team and Staff Management" },
  { id: "contracts", name: "How to Get Welding Contracts and Tenders" },
  { id: "growth", name: "Welding Business Growth and Expansion Strategies" },
]

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)
  const [activeField, setActiveField] = useState<string | null>(null)
  const [formVisible, setFormVisible] = useState(false)

  useEffect(() => {
    // Animate form visibility when component mounts
    const timer = setTimeout(() => {
      setFormVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName)
  }

  const handleBlur = () => {
    setActiveField(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitStatus({
      success: true,
      message: "Thank you for your inquiry! We will contact you shortly.",
    })

    setIsSubmitting(false)

    // Reset form after successful submission
    if (true) {
      // Replace with actual success condition
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        message: "",
      })

      // Clear success message after 5 seconds
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
        <div
          className={`max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-8 transition-all duration-1000 transform ${
            formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } hover:shadow-xl border border-white/50`}
        >
          <h2 className="section-title text-center mb-8 animate-fade-in">Ready to Start Your Welding Career?</h2>

          {submitStatus ? (
            <div
              className={`p-6 mb-6 rounded-md ${
                submitStatus.success
                  ? "bg-green-100/80 text-green-700 border border-green-200"
                  : "bg-red-100/80 text-red-700 border border-red-200"
              } backdrop-blur-sm animate-fade-in flex items-center`}
            >
              {submitStatus.success && <CheckCircle className="mr-3 text-green-500 flex-shrink-0" size={24} />}
              <p className="font-medium">{submitStatus.message}</p>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className={`transition-all duration-300 transform ${activeField === "name" ? "scale-105" : ""}`}>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={handleBlur}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-welding-orange bg-white/70 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base"
                  placeholder="Your full name"
                />
              </div>

              <div className={`transition-all duration-300 transform ${activeField === "email" ? "scale-105" : ""}`}>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-welding-orange bg-white/70 backdrop-blur-sm transition-all duration-300"
                  placeholder="Your email address"
                />
              </div>

              <div className={`transition-all duration-300 transform ${activeField === "phone" ? "scale-105" : ""}`}>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => handleFocus("phone")}
                  onBlur={handleBlur}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-welding-orange bg-white/70 backdrop-blur-sm transition-all duration-300"
                  placeholder="Your phone number"
                />
              </div>

              <div className={`transition-all duration-300 transform ${activeField === "program" ? "scale-105" : ""}`}>
                <label htmlFor="program" className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                  Program Interested In *
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  onFocus={() => handleFocus("program")}
                  onBlur={handleBlur}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-welding-orange bg-white/70 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base"
                >
                  <option value="">Select a program</option>
                  {programs.map((program) => (
                    <option key={program.id} value={program.id}>
                      {program.name}
                    </option>
                  ))}
                  <option value="full-package">Full Package (All Programs)</option>
                </select>
              </div>
            </div>

            <div
              className={`mb-6 transition-all duration-300 transform ${activeField === "message" ? "scale-[1.02]" : ""}`}
            >
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus("message")}
                onBlur={handleBlur}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-welding-orange bg-white/70 backdrop-blur-sm transition-all duration-300"
                placeholder="Tell us more about your interest"
              ></textarea>
            </div>

            <div className="bg-steel-blue/10 backdrop-blur-sm p-6 rounded-md mb-6 border border-steel-blue/20 transition-all duration-300 hover:bg-steel-blue/15">
              <h3 className="font-bold text-steel-blue mb-4 text-lg">Program Details:</h3>
              <ul className="text-sm text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center space-x-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-welding-orange inline-block"></span>
                  <span className="font-medium">Investment: $200</span>
                </li>
                <li className="flex items-center space-x-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-welding-orange inline-block"></span>
                  <span className="font-medium">Duration: 2 months</span>
                </li>
                <li className="flex items-center space-x-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-welding-orange inline-block"></span>
                  <span className="font-medium">Potential earnings: $3K-$4K per month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-welding-orange inline-block"></span>
                  <span className="font-medium">Payment options: Ecocash, Cash, Mukuru</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary min-w-[200px] transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group py-2 sm:py-3 text-sm sm:text-base"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-welding-orange to-welding-orange/80 group-hover:scale-110 transition-transform duration-500"></span>
                <span className="relative flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <ArrowRight
                        size={16}
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default InquiryForm
