import Image from "next/image"
import Link from "next/link"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { CheckCircle } from "lucide-react"

const ProfessionalNetwork = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="w-full lg:w-1/2 relative">
            <ScrollAnimation type="fade-right" delay={0.2} duration={0.7}>
              <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/male-welder.jpeg"
                  alt="Professional welder in workshop"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-steel-blue text-white p-3 md:p-4 rounded-md shadow-lg hidden sm:block">
                <p className="font-bold text-sm md:text-base">Industry Connections</p>
              </div>
            </ScrollAnimation>
          </div>
          <div className="w-full lg:w-1/2">
            <ScrollAnimation type="fade-left" delay={0.4} duration={0.7}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Join Our Professional Network
              </h2>
              <div className="w-20 h-1 bg-steel-blue mb-6"></div>
              <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
                At MRONCY School of Welding, we don't just provide training – we connect you with a network of industry
                professionals and business opportunities. Our graduates become part of a community that continues to
                support their career growth.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-steel-blue mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700 text-sm md:text-base">
                    Access to job placement services and industry connections
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-steel-blue mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700 text-sm md:text-base">
                    Mentorship from experienced welding professionals
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-steel-blue mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700 text-sm md:text-base">
                    Opportunities to collaborate on real-world projects
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-steel-blue mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700 text-sm md:text-base">
                    Ongoing professional development and advanced training
                  </span>
                </li>
              </ul>
              <Link
                href="/about#network"
                className="inline-block bg-steel-blue text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-md shadow-md hover:bg-steel-blue-dark transition-colors duration-300 text-sm md:text-base"
              >
                Learn More
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalNetwork
