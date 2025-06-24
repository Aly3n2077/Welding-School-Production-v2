import { PageWrapper } from "@/components/ui/page-wrapper"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Mroncy School of Welding and Fabrication Engineering",
  description:
    "Explore our gallery showcasing student projects, welding techniques, our state-of-the-art facilities, and founder Daniel Muronzi at Mroncy School of Welding.",
}

const galleryImagesData = [
  {
    id: "daniel-profile-cap",
    src: "/images/daniel/daniel-muronzi-profile-cap.jpg",
    alt: "Founder Daniel Muronzi in MRONCY cap",
    category: "Founder Daniel Muronzi",
    title: "Daniel Muronzi - Founder",
  },
  {
    id: "daniel-at-work-ladder",
    src: "/images/daniel/daniel-muronzi-at-work-ladder.jpg",
    alt: "Daniel Muronzi working on a ladder project",
    category: "Founder Daniel Muronzi",
    title: "Daniel on Site",
  },
  {
    id: "daniel-at-work-structure",
    src: "/images/daniel/daniel-muronzi-at-work-structure.jpg",
    alt: "Daniel Muronzi welding a structure",
    category: "Founder Daniel Muronzi",
    title: "Precision Work",
  },
  {
    id: "daniel-profile-casual",
    src: "/images/daniel/daniel-muronzi-profile-casual.jpg",
    alt: "Daniel Muronzi casual portrait",
    category: "Founder Daniel Muronzi",
    title: "Daniel Muronzi",
  },
  {
    id: "welding-table",
    src: "/images/workshop/welding-table.jpg",
    alt: "Professional welding table in workshop",
    category: "Workshop & Tools",
    title: "Our Welding Bay",
  },
  {
    id: "welding-machine-1",
    src: "/images/workshop/welding-machine-verson-1.jpg",
    alt: "VERSON MIG/MMA 300 welding machine",
    category: "Workshop & Tools",
    title: "Advanced Equipment",
  },
  {
    id: "welding-machine-2",
    src: "/images/workshop/welding-machine-verson-2.jpg",
    alt: "Close-up of VERSON welding machine controls",
    category: "Workshop & Tools",
    title: "Welding Machine Controls",
  },
  {
    id: "student-tig",
    src: "/images/courses/tig-welding-closeup.jpeg",
    alt: "Student practicing TIG welding",
    category: "Student Training",
    title: "TIG Welding Practice",
  },
  {
    id: "facilities-overview",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Overview of the Mroncy School of Welding workshop layout",
    category: "Our Facilities",
    title: "Workshop Overview",
  },
  {
    id: "student-projects-collection",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Collection of completed student welding projects",
    category: "Student Projects",
    title: "Student Masterpieces",
  },
  {
    id: "female-welder-sparks",
    src: "/images/female-welder-sparks.jpeg",
    alt: "Female welder creating sparks",
    category: "Student Training",
    title: "Inclusive Training",
  },
  {
    id: "instructors-teaching",
    src: "/images/instructors.jpeg",
    alt: "Instructors teaching students",
    category: "Our Instructors",
    title: "Expert Guidance",
  },
]

const getUniqueCategories = (images: typeof galleryImagesData) => {
  const categories = images.map((img) => img.category)
  return ["All", ...new Set(categories)]
}

export default function GalleryPage() {
  const categories = getUniqueCategories(galleryImagesData)

  return (
    <PageWrapper>
      <section className="bg-steel-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl max-w-3xl">
            Explore Mroncy School of Welding: See our students, state-of-the-art facilities, impressive projects, and
            our Co-Founder Daniel Muronzi in action.
          </p>
        </div>
      </section>

      {/* Filter Buttons - Consider making these functional with state */}
      <section className="py-8 sticky top-0 bg-white/80 backdrop-blur-md z-20 border-b">
        <div className="container-custom flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-welding-orange hover:text-white transition-colors text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImagesData.map((image) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/3] bg-gray-100"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 md:p-4">
                  <span className="inline-block bg-welding-orange text-white px-2 py-1 rounded-full text-xs font-medium mb-1 self-start">
                    {image.category}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white leading-tight">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-grey">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Forge Your Future?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Join our community of skilled welders and start building a rewarding career. Our expert instructors and
            hands-on training will equip you with the skills you need to succeed.
          </p>
          <Link href="/admissions" className="btn-primary inline-flex items-center justify-center px-8 py-3">
            Enroll Now
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
