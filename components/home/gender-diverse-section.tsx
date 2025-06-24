import Image from "next/image"
import Link from "next/link"
import { ScrollAnimation } from "@/components/ui/scroll-animation"

const GenderDiverseSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <ScrollAnimation type="fade-right" delay={0.2} duration={0.7}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Welding Careers for Everyone
              </h2>
              <div className="w-20 h-1 bg-welding-orange mb-6"></div>
              <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
                At Daniel Muronzi Welding Training Centre, we're committed to creating an inclusive learning environment
                that welcomes students of all genders. We believe that welding is a skill that anyone can master with
                the right training and dedication.
              </p>
              <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
                Our female graduates have gone on to successful careers in manufacturing, construction, automotive
                repair, and artistic metalwork. We provide specialized support and mentorship to help all our students
                succeed in this rewarding field.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/courses"
                  className="inline-block bg-welding-orange text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-md shadow-md hover:bg-welding-orange-dark transition-colors duration-300 text-sm md:text-base"
                >
                  View Our Courses
                </Link>
                <Link
                  href="/admissions"
                  className="inline-block bg-white text-welding-orange border border-welding-orange font-medium py-2 md:py-3 px-4 md:px-6 rounded-md hover:bg-gray-50 transition-colors duration-300 text-sm md:text-base"
                >
                  Apply Today
                </Link>
              </div>
            </ScrollAnimation>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <ScrollAnimation type="fade-left" delay={0.4} duration={0.7}>
              <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/female-welder-sparks.jpeg"
                  alt="Female welding student working on a project"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-welding-orange text-white p-3 md:p-4 rounded-md shadow-lg hidden sm:block">
                <p className="font-bold text-sm md:text-base">Inclusive Training Environment</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GenderDiverseSection
