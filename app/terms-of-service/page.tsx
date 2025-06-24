import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PageWrapper } from "@/components/ui/page-wrapper"

export const metadata: Metadata = {
  title: "Terms of Service | MRONCY School of Welding",
  description: "Terms and conditions governing the use of MRONCY School of Welding services and platform.",
}

export default function TermsOfServicePage() {
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

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-steel-blue">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last Updated: May 16, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">1. Introduction</h2>
              <p>
                Welcome to MRONCY School of Welding & Fabrication Engineering ("MRONCY," "we," "our," or "us"). These
                Terms of Service ("Terms") govern your access to and use of our website, mobile applications, and
                services (collectively, the "Services").
              </p>
              <p>
                Please read these Terms carefully before using our Services. By accessing or using our Services, you
                agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not
                access or use our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">2. Eligibility</h2>
              <p>
                You must be at least 16 years old to use our Services. If you are under 18 years old, you must have
                permission from a parent or legal guardian to use our Services, and they must agree to these Terms on
                your behalf.
              </p>
              <p>
                By using our Services, you represent and warrant that you meet all eligibility requirements. If you do
                not meet all these requirements, you may not access or use our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">3. Account Registration</h2>
              <p>
                To access certain features of our Services, you may need to register for an account. When you register,
                you agree to provide accurate, current, and complete information about yourself and to update this
                information to keep it accurate, current, and complete.
              </p>
              <p>
                You are responsible for safeguarding your account credentials and for all activities that occur under
                your account. You agree to notify us immediately of any unauthorized use of your account or any other
                breach of security. We cannot and will not be liable for any loss or damage arising from your failure to
                comply with these requirements.
              </p>
              <p>
                We reserve the right to disable any user account, at any time, if in our opinion you have failed to
                comply with these Terms or if we believe your account is being used fraudulently.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">4. Educational Services</h2>

              <h3 className="text-xl font-medium text-steel-blue mb-3">4.1 Course Enrollment</h3>
              <p>
                Our Services include various educational courses and programs related to welding and fabrication. By
                enrolling in a course, you agree to pay all applicable fees and to follow the course guidelines,
                requirements, and code of conduct.
              </p>
              <p>
                Course availability, content, duration, and fees are subject to change. We reserve the right to modify,
                suspend, or discontinue any course at any time without prior notice.
              </p>

              <h3 className="text-xl font-medium text-steel-blue mb-3 mt-6">4.2 Certification</h3>
              <p>
                Some courses may offer certifications upon successful completion. Certification requirements, including
                assessments and practical examinations, must be met to receive certification. We do not guarantee that
                completion of our courses will result in any specific employment outcome or qualification.
              </p>

              <h3 className="text-xl font-medium text-steel-blue mb-3 mt-6">4.3 Course Materials</h3>
              <p>
                All course materials, including but not limited to videos, documents, images, and assessments, are
                provided for your personal, non-commercial use only. You may not reproduce, distribute, modify, create
                derivative works of, publicly display, publicly perform, republish, download, store, or transmit any
                course materials without our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">5. Payments and Refunds</h2>

              <h3 className="text-xl font-medium text-steel-blue mb-3">5.1 Fees and Payments</h3>
              <p>
                Course fees are as stated on our website or as otherwise communicated to you. All fees are in US Dollars
                unless otherwise specified. Payment must be made in full before accessing course materials, unless a
                payment plan has been arranged.
              </p>
              <p>
                We accept various payment methods as indicated on our website. By providing payment information, you
                represent and warrant that you are authorized to use the designated payment method and authorize us to
                charge your payment method for the total amount of your purchase.
              </p>

              <h3 className="text-xl font-medium text-steel-blue mb-3 mt-6">5.2 Refunds</h3>
              <p>Our refund policy is as follows:</p>
              <ul>
                <li>
                  <strong>14-Day Refund Period:</strong> You may request a full refund within 14 days of enrollment if
                  you have not accessed more than 20% of the course materials.
                </li>
                <li>
                  <strong>Partial Refunds:</strong> After 14 days or if you have accessed more than 20% of the course
                  materials, refunds may be issued on a case-by-case basis at our discretion.
                </li>
                <li>
                  <strong>No Refunds:</strong> No refunds will be issued for completed courses, downloadable materials
                  once accessed, or certification fees once the certification process has begun.
                </li>
              </ul>
              <p>
                To request a refund, please contact us at futuremillionairezw@gmail.com with your order details and
                reason for the refund request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">6. User Conduct</h2>
              <p>When using our Services, you agree not to:</p>
              <ul>
                <li>Violate any applicable law, regulation, or these Terms</li>
                <li>Use our Services for any illegal or unauthorized purpose</li>
                <li>Engage in any activity that interferes with or disrupts our Services</li>
                <li>Attempt to access any other user's account or personal information</li>
                <li>Upload or transmit viruses, malware, or other malicious code</li>
                <li>Engage in any harassing, intimidating, predatory, or stalking conduct</li>
                <li>Use our Services to send spam, chain letters, or other unsolicited communications</li>
                <li>
                  Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or
                  entity
                </li>
                <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our Services</li>
              </ul>
              <p>
                We reserve the right to terminate or suspend your access to our Services immediately, without prior
                notice or liability, for any reason, including breach of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">7. Intellectual Property Rights</h2>
              <p>
                Our Services and their entire contents, features, and functionality (including but not limited to all
                information, software, text, displays, images, video, and audio, and the design, selection, and
                arrangement thereof) are owned by MRONCY School of Welding, its licensors, or other providers of such
                material and are protected by copyright, trademark, patent, trade secret, and other intellectual
                property or proprietary rights laws.
              </p>
              <p>
                These Terms permit you to use our Services for your personal, non-commercial use only. You must not
                reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
                republish, download, store, or transmit any of the material on our Services, except as follows:
              </p>
              <ul>
                <li>
                  Your computer may temporarily store copies of such materials in RAM incidental to your accessing and
                  viewing those materials.
                </li>
                <li>
                  You may store files that are automatically cached by your Web browser for display enhancement
                  purposes.
                </li>
                <li>
                  You may print or download one copy of a reasonable number of pages of the website for your own
                  personal, non-commercial use and not for further reproduction, publication, or distribution.
                </li>
                <li>
                  If we provide social media features with certain content, you may take such actions as are enabled by
                  such features.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">8. User Content</h2>
              <p>
                Our Services may allow you to post, submit, publish, display, or transmit content such as reviews,
                comments, and forum posts ("User Content"). All User Content must comply with these Terms and must not:
              </p>
              <ul>
                <li>
                  Contain any material that is defamatory, obscene, indecent, abusive, offensive, harassing, violent,
                  hateful, inflammatory, or otherwise objectionable.
                </li>
                <li>
                  Promote sexually explicit or pornographic material, violence, or discrimination based on race, sex,
                  religion, nationality, disability, sexual orientation, or age.
                </li>
                <li>
                  Infringe any patent, trademark, trade secret, copyright, or other intellectual property or other
                  rights of any other person.
                </li>
                <li>
                  Violate the legal rights of others or contain any material that could give rise to any civil or
                  criminal liability under applicable laws or regulations.
                </li>
                <li>
                  Be likely to deceive any person or impersonate any person or misrepresent your identity or affiliation
                  with any person or organization.
                </li>
                <li>Promote any illegal activity, or advocate, promote, or assist any unlawful act.</li>
              </ul>
              <p>
                By posting User Content, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully
                sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from,
                distribute, and display such content throughout the world in any media.
              </p>
              <p>
                We have the right to remove any User Content at our sole discretion, including any User Content that we
                believe violates these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">9. Disclaimer of Warranties</h2>
              <p>
                YOUR USE OF OUR SERVICES IS AT YOUR SOLE RISK. OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS
                AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
                TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE
                OF PERFORMANCE.
              </p>
              <p>
                MRONCY SCHOOL OF WELDING, ITS SUBSIDIARIES, AFFILIATES, AND LICENSORS DO NOT WARRANT THAT (A) OUR
                SERVICES WILL FUNCTION UNINTERRUPTED, SECURE, OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; (B) ANY
                ERRORS OR DEFECTS WILL BE CORRECTED; (C) OUR SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS;
                OR (D) THE RESULTS OF USING OUR SERVICES WILL MEET YOUR REQUIREMENTS.
              </p>
              <p>
                SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE EXCLUSION MAY NOT
                APPLY TO YOU.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">10. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL MRONCY SCHOOL OF WELDING, ITS
                AFFILIATES, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS,
                GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OF, OR INABILITY
                TO USE, OUR SERVICES.
              </p>
              <p>
                IN NO EVENT WILL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS, DAMAGES, LOSSES, AND CAUSES OF ACTION
                ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF OUR SERVICES EXCEED THE AMOUNT PAID BY YOU, IF
                ANY, FOR ACCESSING OUR SERVICES DURING THE TWELVE (12) MONTHS PRIOR TO THE CLAIM OR ONE HUNDRED DOLLARS
                ($100), WHICHEVER IS GREATER.
              </p>
              <p>
                SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY FOR PERSONAL INJURY, OR OF INCIDENTAL OR
                CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">11. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless MRONCY School of Welding, its affiliates, licensors,
                and service providers, and its and their respective officers, directors, employees, contractors, agents,
                licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages,
                judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out
                of or relating to your violation of these Terms or your use of our Services, including, but not limited
                to, your User Content, any use of our Services' content, services, and products other than as expressly
                authorized in these Terms, or your use of any information obtained from our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">12. Governing Law and Jurisdiction</h2>
              <p>
                These Terms and your use of our Services shall be governed by and construed in accordance with the laws
                of Zimbabwe, without giving effect to any choice or conflict of law provision or rule.
              </p>
              <p>
                Any legal suit, action, or proceeding arising out of, or related to, these Terms or our Services shall
                be instituted exclusively in the courts of Zimbabwe. You waive any and all objections to the exercise of
                jurisdiction over you by such courts and to venue in such courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">13. Arbitration</h2>
              <p>
                At our sole discretion, we may require you to submit any disputes arising from these Terms or your use
                of our Services, including disputes arising from or concerning their interpretation, violation,
                invalidity, non-performance, or termination, to final and binding arbitration under the rules of
                arbitration of the Zimbabwe Arbitration Association.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">14. Waiver and Severability</h2>
              <p>
                No waiver by MRONCY School of Welding of any term or condition set out in these Terms shall be deemed a
                further or continuing waiver of such term or condition or a waiver of any other term or condition, and
                any failure to assert a right or provision under these Terms shall not constitute a waiver of such right
                or provision.
              </p>
              <p>
                If any provision of these Terms is held by a court or other tribunal of competent jurisdiction to be
                invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the
                minimum extent such that the remaining provisions of the Terms will continue in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">15. Entire Agreement</h2>
              <p>
                These Terms, our Privacy Policy, and any other agreements expressly incorporated by reference herein
                constitute the sole and entire agreement between you and MRONCY School of Welding regarding our Services
                and supersede all prior and contemporaneous understandings, agreements, representations, and warranties,
                both written and oral, regarding our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">16. Changes to Terms</h2>
              <p>
                We may revise and update these Terms from time to time at our sole discretion. All changes are effective
                immediately when we post them and apply to all access to and use of our Services thereafter.
              </p>
              <p>
                Your continued use of our Services following the posting of revised Terms means that you accept and
                agree to the changes. You are expected to check this page frequently so you are aware of any changes, as
                they are binding on you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-steel-blue mb-4">17. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
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
            </section>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
