"use client"

import { useState, useEffect } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const MapComponent = () => {
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Set map as loaded after component mounts
    setMapLoaded(true)
  }, [])

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-64 sm:h-80 md:h-96">
        {mapLoaded ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.1536054444227!2d31.0733!3d-17.7833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ3JzAwLjAiUyAzMcKwMDQnMjQuMCJF!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Daniel Muronzi Welding Training Centre Location"
            aria-label="Map showing the location of Daniel Muronzi Welding Training Centre"
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <p className="text-gray-500">Loading map...</p>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>

        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="text-welding-orange flex-shrink-0 mt-1 mr-3" size={20} />
            <div>
              <p className="font-medium text-gray-800">Address:</p>
              <p className="text-gray-600 text-sm sm:text-base">
                978, Mugabe Heights, Borrowdale North
                <br />
                52 Bradfield Rd, Harare, Zimbabwe
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="text-welding-orange flex-shrink-0 mt-1 mr-3" size={20} />
            <div>
              <p className="font-medium text-gray-800">Phone:</p>
              <a href="tel:+263785054159" className="text-gray-600 hover:text-welding-orange text-sm sm:text-base">
                +263 785 054 159
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="text-welding-orange flex-shrink-0 mt-1 mr-3" size={20} />
            <div>
              <p className="font-medium text-gray-800">Email:</p>
              <a
                href="mailto:info@meronziwelding.co.zw"
                className="text-gray-600 hover:text-welding-orange text-sm sm:text-base break-words"
              >
                info@meronziwelding.co.zw
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="text-welding-orange flex-shrink-0 mt-1 mr-3" size={20} />
            <div>
              <p className="font-medium text-gray-800">Hours:</p>
              <p className="text-gray-600 text-sm sm:text-base">
                Monday - Friday: 8:00 AM - 5:00 PM
                <br />
                Saturday: 9:00 AM - 1:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapComponent
