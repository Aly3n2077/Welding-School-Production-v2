import { PageWrapper } from "@/components/ui/page-wrapper"
import Image from "next/image"
import type { Metadata } from "next"
import { Award, Briefcase, MapPin, Mail, Clock } from "lucide-react"
import VideoPlayer from "@/components/ui/video-player" // Assuming this is correctly imported
import Breadcrumbs from "@/components/navigation/breadcrumbs" // Assuming this is correctly imported

export const metadata: Metadata = {
  title: "About Us | Mroncy School of Welding and Fabrication Engineering",
  description:
    "Learn about Mroncy School of Welding and Fabrication Engineering, our mission, values, and the expert team led by founder Daniel Muronzi, with partners Tafadzwa Katsholo and Takunda Chidenyika.",
}

export default function AboutPage() {
  const breadcrumbItems = [{ label: "About Us", path: "/about" }]

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative bg-steel-blue text-white py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-welding-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">About Us</h1>
          <p className="text-xl max-w-3xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Discover the story behind Mroncy School of Welding and our commitment to excellence in welding education.
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-light-grey border-b border-gray-200">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Founder Story & Instructor Video Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Founder Info & Instructor Details */}
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-md transition-all duration-500 hover:shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-steel-blue">Meet Our Founder & Lead Instructor</h2>
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                <div className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-full overflow-hidden shadow-lg border-4 border-welding-orange flex-shrink-0">
                  <Image
                    src="/images/daniel/daniel-muronzi-profile-cap.jpg"
                    alt="Daniel Muronzi, Founder of Mroncy School of Welding"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-steel-blue">Daniel Muronzi</h3>
                  <p className="text-welding-orange font-medium mb-2">Co-Founder & Lead Instructor</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    With over 15 years of international experience, Daniel brings a wealth of practical knowledge and a
                    passion for teaching to Mroncy School of Welding.
                  </p>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-steel-blue">
                Expert Guidance from Industry Professionals
              </h3>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                At MRONCY School of Welding, our instructors bring decades of real-world experience. They are active
                professionals who understand the demands of the welding industry. Our teaching combines hands-on
                training with personalized mentorship.
              </p>
              <div className="relative h-[150px] sm:h-[200px] rounded-lg overflow-hidden shadow-lg mb-4 sm:mb-6">
                <Image
                  src="/images/instructors.jpeg" // General instructors image
                  alt="MRONCY School of Welding Instructors"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <div className="flex items-center bg-light-grey/70 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm">
                  <Award size={14} className="text-welding-orange mr-1 sm:mr-2 sm:w-[18px] sm:h-[18px]" />
                  <span className="font-medium">Certified Instructors</span>
                </div>
                <div className="flex items-center bg-light-grey/70 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm">
                  <Briefcase size={14} className="text-welding-orange mr-1 sm:mr-2 sm:w-[18px] sm:h-[18px]" />
                  <span className="font-medium">Industry Experience</span>
                </div>
              </div>
            </div>

            {/* Right Column: Video Player & Daniel at Work */}
            <div className="space-y-8">
              <div className="relative">
                <VideoPlayer
                  src="/videos/instructor-video.mp4" // General instructor video
                  poster="/images/instructors.jpeg"
                  className="aspect-video w-full rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-welding-orange text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-lg transform rotate-3 z-10 text-xs sm:text-sm">
                  <p className="font-bold">Watch our team in action!</p>
                </div>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl group">
                <Image
                  src="/images/daniel/daniel-muronzi-at-work-structure.jpg"
                  alt="Daniel Muronzi working on a welding project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">Daniel Leading by Example</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-light-grey relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-welding-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-steel-blue/10 rounded-full blur-3xl"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02]">
              <h2 className="text-2xl font-bold mb-4 text-steel-blue">Our Vision</h2>
              <p className="text-gray-700">
                To be Zimbabwe's premier welding training centre through excellence, innovation, and practical
                education, fostering a self-sufficient, skilled workforce.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02]">
              <h2 className="text-2xl font-bold mb-4 text-steel-blue">Our Mission</h2>
              <p className="text-gray-700">
                Empowering individuals with real-world welding skills and business knowledge through hands-on training
                and internationally recognized certification programs, leading to sustainable employment and
                entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team / Partners Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-steel-blue">Our Leadership Team</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Mroncy School of Welding is driven by a passionate team. Co-Founder Daniel Muronzi leads with his extensive
            industry expertise, supported by dedicated partners Tafadzwa Katsholo and Takunda Chidenyika.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-light-grey p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
              <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4 border-4 border-welding-orange">
                <Image
                  src="/images/daniel/daniel-muronzi-profile-cap.jpg"
                  alt="Daniel Muronzi"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-steel-blue">Daniel Muronzi</h3>
              <p className="text-welding-orange">Co-Founder & Lead Instructor</p>
            </div>
            <div className="bg-light-grey p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
              <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4 border-4 border-steel-blue">
                <Image
                  src="/placeholder.svg?height=192&width=192"
                  alt="Tafadzwa Katsholo"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-steel-blue">Tafadzwa Katsholo</h3>
              <p className="text-gray-600">Partner</p>
            </div>
            <div className="bg-light-grey p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
              <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4 border-4 border-steel-blue">
                <Image
                  src="/placeholder.svg?height=192&width=192"
                  alt="Takunda Chidenyika"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-steel-blue">Takunda Chidenyika</h3>
              <p className="text-gray-600">Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* A Deeper Look: Co-Founder Daniel Muronzi Section */}
      <section className="py-16 bg-light-grey relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-steel-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-welding-orange/10 rounded-full blur-3xl"></div>
        <div className="container-custom relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-steel-blue">
            A Deeper Look: Co-Founder Daniel Muronzi
          </h2>
          <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:scale-[1.01] max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-full min-h-[300px] md:col-span-1">
                <Image
                  src="/images/daniel/daniel-muronzi-at-work-ladder.jpg"
                  alt="Daniel Muronzi - Mroncy School of Welding"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:col-span-2">
                <h3 className="text-2xl font-bold mb-2 text-steel-blue">Daniel Muronzi</h3>
                <p className="text-welding-orange font-medium mb-4">Founder & Lead Instructor</p>
                <p className="text-gray-700 mb-4">
                  Daniel Muronzi brings over 15 years of welding expertise to his role. His career spans major
                  infrastructure projects across Southern Africa, where he developed a deep understanding of industry
                  needs and standards.
                </p>
                <p className="text-gray-700 mb-4">
                  Passionate about education and skills development, Daniel established this training centre to bridge
                  the gap between theoretical knowledge and practical application, ensuring graduates are fully prepared
                  for successful careers.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-welding-orange rounded-full mr-2"></div>
                    <span className="text-gray-700">AWS Certified</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-welding-orange rounded-full mr-2"></div>
                    <span className="text-gray-700">Master Fabricator</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-welding-orange rounded-full mr-2"></div>
                    <span className="text-gray-700">Business Development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-welding-orange rounded-full mr-2"></div>
                    <span className="text-gray-700">Industry Consultant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations & Hours */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12 text-3xl md:text-4xl font-bold text-steel-blue">
            Our Locations & Hours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Borrowdale Location */}
            <div className="bg-light-grey/50 backdrop-blur-md p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02]">
              <div className="flex items-start mb-4">
                <div className="bg-welding-orange p-3 rounded-full text-white mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-steel-blue">Borrowdale</h3>
                  <p className="text-gray-700 text-sm">978 Sally Mugabe Heights, Harare</p>
                  <a href="tel:+263710896129" className="text-sm text-welding-orange hover:underline block mt-1">
                    +263 71 089 6129
                  </a>
                </div>
              </div>
            </div>
            {/* Waterfalls Location */}
            <div className="bg-light-grey/50 backdrop-blur-md p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02]">
              <div className="flex items-start mb-4">
                <div className="bg-welding-orange p-3 rounded-full text-white mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-steel-blue">Waterfalls</h3>
                  <p className="text-gray-700 text-sm">52 Bradfield Road, Waterfalls, Harare</p>
                  <a href="tel:+263787449904" className="text-sm text-welding-orange hover:underline block mt-1">
                    +263 78 744 9904
                  </a>
                </div>
              </div>
            </div>
            {/* Hours & Email */}
            <div className="bg-light-grey/50 backdrop-blur-md p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02]">
              <div className="flex items-start mb-4">
                <div className="bg-welding-orange p-3 rounded-full text-white mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-steel-blue">Hours</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>Mon - Fri: 8 AM - 5 PM</li>
                    <li>Saturday: 9 AM - 1 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-welding-orange p-3 rounded-full text-white mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-steel-blue">Email</h3>
                  <a
                    href="mailto:futuremillionairezw@gmail.com"
                    className="text-sm text-welding-orange hover:underline break-all"
                  >
                    futuremillionairezw@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-light-grey">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12 text-3xl md:text-4xl font-bold text-steel-blue">
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Workshops",
                img: "/images/workshop/welding-table.jpg",
                alt: "Modern Welding Workshop with table",
                desc: "Fully-equipped workshops with industry-standard machines.",
              },
              {
                title: "Learning Spaces",
                img: "/placeholder.svg?height=300&width=500",
                alt: "Welding Classroom",
                desc: "Comfortable classrooms for theoretical instruction.",
              },
              {
                title: "Testing Areas",
                img: "/images/workshop/welding-machine-verson-1.jpg",
                alt: "Welding machine for testing",
                desc: "Dedicated spaces for certification testing and quality control.",
              },
            ].map((facility) => (
              <div
                key={facility.title}
                className="bg-white/80 backdrop-blur-md rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02] group"
              >
                <div className="relative h-64">
                  <Image
                    src={facility.img || "/placeholder.svg"}
                    alt={facility.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-steel-blue">{facility.title}</h3>
                  <p className="text-gray-700 text-sm">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
