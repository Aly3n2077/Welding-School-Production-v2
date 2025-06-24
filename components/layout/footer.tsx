import Link from "next/link"
import { Phone, Mail, MapPin, Facebook } from "lucide-react"
import { Logo } from "@/components/ui/logo"

// FIX: Changed from named export to default export
export default function Footer() {
  return (
    <footer className="bg-steel-blue text-white relative overflow-hidden">
      {/* Background elements (optional, keep if desired) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-welding-orange/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl opacity-50"></div>

      <div className="container-custom py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <Logo /> {/* Use your actual logo component */}
            <p className="text-white/90 text-sm">
              Mroncy School of Welding and Fabrication Engineering: Empowering individuals with real-world welding
              skills and business knowledge.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/people/Daniel-Muronzi/100093815093396/?fref=nf&ref=embed_post"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-white/10 p-2 rounded-full hover:bg-welding-orange transition-all duration-300 hover:scale-110 transform"
              >
                <Facebook size={18} />
              </a>
              {/* Add Instagram and LinkedIn if links are available */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-welding-orange">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-welding-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-welding-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-welding-orange transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-welding-orange transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-welding-orange transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-welding-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Programs */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-welding-orange">Featured Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses#welding-business" className="hover:text-welding-orange transition-colors">
                  Start a Welding Business
                </Link>
              </li>
              <li>
                <Link href="/courses#welding-school" className="hover:text-welding-orange transition-colors">
                  Start a Welding School
                </Link>
              </li>
              {/* Add more featured programs */}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-welding-orange">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-welding-orange" />
                <span>978 Mugabe Heights, Borrowdale North, Harare, Zimbabwe</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-welding-orange" />
                <a href="tel:+263710896129" className="hover:text-welding-orange transition-colors">
                  +263 71 089 6129
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-welding-orange" />
                <a
                  href="mailto:futuremillionairezw@gmail.com"
                  className="hover:text-welding-orange transition-colors break-all"
                >
                  futuremillionairezw@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="border-t border-gray-700/50 pt-8 mt-8 text-center">
          <p className="text-sm text-white/80 mb-2">
            &copy; {new Date().getFullYear()} Mroncy School of Welding and Fabrication Engineering. All rights reserved.
          </p>
          <p className="text-xs text-white/60 mb-4">
            A venture by Co-Founder Daniel Muronzi with partners Tafadzwa Katsholo & Takunda Chidenyika.
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <Link href="/privacy-policy" className="text-white/80 hover:text-welding-orange transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-white/80 hover:text-welding-orange transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
