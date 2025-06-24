import type { Metadata } from "next"
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react"
import MapContainer from "@/components/contact/map-container"
import BusinessSchema from "@/components/structured-data/business-schema"
import Breadcrumbs from "@/components/navigation/breadcrumbs"
import ContactForm from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | Daniel Muronzi Welding Training Centre",
  description:
    "Get in touch with Daniel Muronzi Welding Training Centre. Contact us for inquiries about courses, admissions, or to schedule a visit.",
}

export default function ContactPage() {
  const address = "978, Mugabe Heights, Borrowdale North, Harare, Zimbabwe"
  // Approximate coordinates for Borrowdale North, Harare
  const coordinates = {
    lat: -17.7386,
    lng: 31.0857,
  }

  // Define breadcrumb items for this page
  const breadcrumbItems = [{ label: "Contact Us", path: "/contact" }]

  return (
    <>
      {/* Add structured data for SEO */}
      <BusinessSchema />

      {/* Hero Section */}
      <section className="bg-steel-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Have questions about our courses or ready to enroll? Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-light-grey border-b border-gray-200">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title mb-8">Get In Touch</h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="bg-welding-orange p-2 sm:p-3 rounded-full text-white mr-3 sm:mr-4">
                    <MapPin size={18} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-steel-blue">Our Location</h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                      978, Mugabe Heights, Borrowdale North
                      <br />
                      52 Bradfield Rd, Harare, Zimbabwe
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-welding-orange p-2 sm:p-3 rounded-full text-white mr-3 sm:mr-4">
                    <Phone size={18} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-steel-blue">Phone</h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                      <a href="tel:+263785054159" className="hover:text-welding-orange transition-colors">
                        +263 785 054 159
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-welding-orange p-2 sm:p-3 rounded-full text-white mr-3 sm:mr-4">
                    <Mail size={18} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-steel-blue">Email</h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                      <a
                        href="mailto:futuremillionairezw@gmail.com"
                        className="hover:text-welding-orange transition-colors"
                      >
                        futuremillionairezw@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-welding-orange p-2 sm:p-3 rounded-full text-white mr-3 sm:mr-4">
                    <MessageSquare size={18} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-steel-blue">WhatsApp</h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                      <a
                        href="https://wa.me/263785054159"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-md transition-colors text-xs sm:text-sm"
                      >
                        Chat with Us on WhatsApp
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4 text-steel-blue">Hours of Operation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="section-title mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed Embed */}
      <section className="py-16 bg-light-grey">
        <div className="container-custom">
          <h2 className="section-title text-center mb-8">Latest from Facebook</h2>
          <div className="flex justify-center">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D358435960626904%26set%3Da.114722808331555&show_text=true&width=500"
              width="500"
              height="590"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Find Us</h2>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <MapContainer address={address} lat={coordinates.lat} lng={coordinates.lng} />
          </div>
        </div>
      </section>
    </>
  )
}
