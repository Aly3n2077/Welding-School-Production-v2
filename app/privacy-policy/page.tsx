import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PageWrapper } from "@/components/ui/page-wrapper"

export const metadata: Metadata = {
  title: "Privacy Policy | MRONCY School of Welding",
  description: "Our commitment to protecting your privacy and personal information at MRONCY School of Welding.",
}

export default function PrivacyPolicyPage() {
  return (
    <PageWrapper>
      <div className="container-custom py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-steel-blue hover:text-welding-orange transition-colors mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-steel-blue">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: May 16, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">1. Introduction</h2>
              <p>
                Welcome to MRONCY School of Welding & Fabrication Engineering ("we," "our," or "us"). We are committed
                to protecting your privacy and personal information. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website, use our services, or interact with
                our platform.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you
                have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy. If you do
                not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-medium text-steel-blue mb-3">2.1 Personal Information</h3>
              <p>We may collect the following types of personal information:</p>
              <ul>
                <li>
                  <strong>Contact Information:</strong> Name, email address, phone number, and mailing address.
                </li>
                <li>
                  <strong>Account Information:</strong> Username, password, account preferences, and profile details.
                </li>
                <li>
                  <strong>Educational Information:</strong> Academic history, certifications, course enrollments, and
                  progress data.
                </li>
                <li>
                  <strong>Payment Information:</strong> Credit card details, billing address, and transaction history.
                </li>
                <li>
                  <strong>Demographic Information:</strong> Age, gender, nationality, and employment status.
                </li>
                <li>
                  <strong>Identity Verification:</strong> Government-issued identification documents when required for
                  course registration or certification.
                </li>
              </ul>

              <h3 className="text-xl font-medium text-steel-blue mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <p>
                When you visit our website or use our platform, we automatically collect certain information, including:
              </p>
              <ul>
                <li>
                  <strong>Device Information:</strong> IP address, browser type, operating system, device type, and
                  unique device identifiers.
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, and interaction with
                  course materials.
                </li>
                <li>
                  <strong>Location Information:</strong> General location based on IP address.
                </li>
                <li>
                  <strong>Cookies and Similar Technologies:</strong> Information collected through cookies, web beacons,
                  and similar tracking technologies.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul>
                <li>Providing and managing our educational services and courses</li>
                <li>Processing enrollments, payments, and issuing certificates</li>
                <li>Creating and maintaining your student account</li>
                <li>Personalizing your learning experience</li>
                <li>Communicating with you about courses, updates, and promotional offers</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Improving our website, services, and educational content</li>
                <li>Conducting research and analysis to enhance our educational offerings</li>
                <li>Ensuring compliance with legal obligations and our policies</li>
                <li>Detecting and preventing fraudulent activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">4. Information Sharing and Disclosure</h2>
              <p>We may share your information with the following parties:</p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, such as
                  payment processing, data analysis, email delivery, and hosting services.
                </li>
                <li>
                  <strong>Educational Partners:</strong> Certification bodies, accreditation organizations, and
                  educational institutions we partner with to provide courses and certifications.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, reorganization, or sale
                  of assets, your information may be transferred as a business asset.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or governmental regulation, or
                  to protect our rights, property, or safety.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share your information with third parties when you have
                  given us your consent to do so.
                </li>
              </ul>
              <p>
                We do not sell, rent, or lease your personal information to third parties for their marketing purposes
                without your explicit consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              <p>
                We regularly review our security procedures and consider appropriate new security technology and
                methods. We also maintain physical, electronic, and procedural safeguards to protect your information
                during collection, storage, and disclosure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">6. Your Rights and Choices</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information:</p>
              <ul>
                <li>Access and review the personal information we hold about you</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict certain processing of your information</li>
                <li>Data portability (receiving your data in a structured, commonly used format)</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section
                below. We will respond to your request within the timeframe required by applicable law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities
                and to distinguish you from other users of our website. Cookies help us provide you with a better
                experience when you browse our website and allow us to improve our site.
              </p>
              <p>We use the following types of cookies:</p>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong> Necessary for the website to function properly.
                </li>
                <li>
                  <strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count visitors and see how
                  they move around our website.
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> Used to recognize you when you return to our website.
                </li>
                <li>
                  <strong>Targeting Cookies:</strong> Record your visit to our website, the pages you visit, and the
                  links you follow.
                </li>
              </ul>
              <p>
                You can set your browser to refuse all or some browser cookies or to alert you when websites set or
                access cookies. If you disable or refuse cookies, please note that some parts of our website may become
                inaccessible or not function properly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">8. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 16. We do not knowingly collect personal
                information from children under 16. If we become aware that we have collected personal information from
                a child under 16 without verification of parental consent, we will take steps to remove that information
                from our servers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">9. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than the country in which you
                reside. These countries may have data protection laws that are different from the laws of your country.
              </p>
              <p>
                Whenever we transfer your personal information to other countries, we will ensure that appropriate
                safeguards are in place to protect your information and that the transfer complies with applicable data
                protection laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">10. Retention of Information</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, unless a longer retention period is required or permitted by law. The criteria used to
                determine our retention periods include:
              </p>
              <ul>
                <li>The length of time we have an ongoing relationship with you</li>
                <li>Legal obligations to which we are subject</li>
                <li>Whether retention is advisable considering our legal position</li>
                <li>Relevant industry standards</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons. The updated version will be indicated by an updated "Last
                Updated" date at the top of this Privacy Policy.
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting
                your information. Your continued use of our services after any changes to this Privacy Policy
                constitutes your acceptance of the changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">12. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
                please contact us at:
              </p>
              <div className="bg-gray-100 p-4 rounded-md mt-4">
                <p>
                  <strong>MRONCY School of Welding & Fabrication Engineering</strong>
                  <br />
                  978 Mugabe Heights, Borrowdale North
                  <br />
                  Harare, Zimbabwe
                  <br />
                  Email:{" "}
                  <a href="mailto:futuremillionairezw@gmail.com" className="text-welding-orange">
                    futuremillionairezw@gmail.com
                  </a>
                  <br />
                  Phone:{" "}
                  <a href="tel:+263710896129" className="text-welding-orange">
                    +263 71 089 6129
                  </a>
                </p>
              </div>
              <p className="mt-4">
                We will respond to your inquiry as soon as possible and within the timeframe required by applicable law.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
