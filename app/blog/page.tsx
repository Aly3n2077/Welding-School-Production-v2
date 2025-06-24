import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog | Daniel Muronzi Welding Training Centre",
  description:
    "Read our latest articles on welding techniques, industry trends, career opportunities, and success stories.",
}

const blogPosts = [
  {
    id: "welding-career-opportunities",
    title: "Career Opportunities in the Welding Industry",
    excerpt:
      "Explore the diverse career paths available to skilled welders in Zimbabwe and beyond, from construction to manufacturing and beyond.",
    date: "June 15, 2023",
    author: "Daniel Muronzi",
    category: "Careers",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "welding-safety-tips",
    title: "Essential Safety Tips Every Welder Should Know",
    excerpt:
      "Safety is paramount in welding. Learn the essential safety practices that every professional welder follows to prevent injuries and accidents.",
    date: "May 22, 2023",
    author: "Technical Instructor",
    category: "Safety",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "tig-vs-mig",
    title: "TIG vs MIG Welding: Which Should You Learn First?",
    excerpt:
      "A comprehensive comparison of TIG and MIG welding processes to help beginners decide which technique to master first.",
    date: "April 10, 2023",
    author: "Senior Instructor",
    category: "Techniques",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "success-story-tendai",
    title: "From Student to Business Owner: Tendai's Success Story",
    excerpt:
      "Read how our graduate Tendai went from a beginner welder to owning his own successful fabrication business in just two years.",
    date: "March 5, 2023",
    author: "Admin Team",
    category: "Success Stories",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "welding-industry-zimbabwe",
    title: "The State of the Welding Industry in Zimbabwe",
    excerpt:
      "An analysis of the current welding industry in Zimbabwe, including challenges, opportunities, and future outlook.",
    date: "February 18, 2023",
    author: "Daniel Muronzi",
    category: "Industry Insights",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "welding-certification-guide",
    title: "A Complete Guide to Welding Certifications",
    excerpt:
      "Understanding the different welding certifications available, their requirements, and how they can advance your career.",
    date: "January 30, 2023",
    author: "Certification Specialist",
    category: "Education",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-steel-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl max-w-3xl">
            Insights, tips, and stories from the world of welding and our training centre.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  alt="Featured blog post"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <span className="inline-block bg-welding-orange text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-steel-blue">
                  The Growing Demand for Skilled Welders in Africa
                </h2>
                <p className="text-gray-700 mb-6">
                  As infrastructure development accelerates across Africa, the demand for skilled welders has never been
                  higher. This article explores the opportunities and challenges facing the welding industry on the
                  continent.
                </p>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <p className="font-medium">Daniel Muronzi</p>
                    <p className="text-sm text-gray-500">July 10, 2023</p>
                  </div>
                </div>
                <Link href="#" className="btn-primary">
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-light-grey">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-welding-orange">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-steel-blue">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">By {post.author}</span>
                    <Link href={`/blog/${post.id}`} className="text-welding-orange font-medium hover:underline">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-secondary">Load More Articles</button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-steel-blue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg mb-8">Stay updated with the latest articles, welding tips, and industry insights.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none text-gray-900"
                required
              />
              <button type="submit" className="btn-primary bg-welding-orange hover:bg-opacity-90 whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
