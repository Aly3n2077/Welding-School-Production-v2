import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Admissions | Daniel Muronzi Welding Training Centre",
  description: "Learn about our admissions process, requirements, and how to enroll in our welding courses.",
}

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-steel-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-xl max-w-3xl">
            Start your journey to becoming a certified welder. Our admissions process is straightforward and designed to
            help you succeed.
          </p>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">How to Enroll</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-welding-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-steel-blue">Inquiry</h3>
              <p className="text-gray-700">
                Fill out our online inquiry form or contact us directly to express your interest in our courses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-welding-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-steel-blue">Registration</h3>
              <p className="text-gray-700">
                Visit our centre to complete registration, submit required documents, and make payment arrangements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-welding-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-steel-blue">Begin Training</h3>
              <p className="text-gray-700">
                Start your practical training on the scheduled date and embark on your welding career journey.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-steel-blue">Admission Requirements</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-welding-orange rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Age Requirement</h3>
                    <p className="text-gray-700">
                      Minimum age of 16 years. Applicants under 18 require parental consent.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-welding-orange rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Education</h3>
                    <p className="text-gray-700">
                      Basic literacy and numeracy skills. No specific educational qualifications required for
                      entry-level courses.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-welding-orange rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Physical Fitness</h3>
                    <p className="text-gray-700">
                      Basic physical fitness and ability to stand for extended periods. No major physical limitations
                      that would prevent safe welding practices.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-welding-orange rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Documentation</h3>
                    <p className="text-gray-700">
                      Valid ID, proof of address, and passport-sized photographs for registration.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Student Registration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Fees */}
      <section className="py-16 bg-light-grey">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Tuition & Fees</h2>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <p className="text-gray-700 mb-6">
                Our courses are competitively priced to make quality welding education accessible. Tuition includes all
                necessary materials, equipment usage, and certification fees.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-steel-blue text-white">
                      <th className="p-4 text-left">Course</th>
                      <th className="p-4 text-left">Duration</th>
                      <th className="p-4 text-left">Tuition Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-4">Shielded Metal Arc Welding (SMAW)</td>
                      <td className="p-4">4 Weeks</td>
                      <td className="p-4">$XXX - $XXX</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4">TIG Welding</td>
                      <td className="p-4">6 Weeks</td>
                      <td className="p-4">$XXX - $XXX</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-4">MIG Welding</td>
                      <td className="p-4">5 Weeks</td>
                      <td className="p-4">$XXX - $XXX</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4">Pipe Welding</td>
                      <td className="p-4">8 Weeks</td>
                      <td className="p-4">$XXX - $XXX</td>
                    </tr>
                    <tr>
                      <td className="p-4">Boiler Making</td>
                      <td className="p-4">10 Weeks</td>
                      <td className="p-4">$XXX - $XXX</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mt-6">
                <strong>Note:</strong> Exact tuition costs are provided during the registration process. Payment plans
                and scholarships may be available for qualifying students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-16 bg-steel-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Welding Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards becoming a certified welder. Enroll today and transform your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-welding-orange hover:bg-opacity-90">
              Contact Us
            </Link>
            <Link
              href="#"
              className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-steel-blue"
            >
              Download Application Form
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
