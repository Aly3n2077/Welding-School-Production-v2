import Script from "next/script"

/**
 * Business Schema Component
 *
 * Adds structured data for the business to improve SEO and search results.
 * This component should be included in the root layout.
 */
// FIX: Changed from named export to default export
export default function BusinessSchema() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Mroncy School of Welding and Fabrication Engineering",
    alternateName: "Mroncy Welding School",
    url: "https://mroncyschoolofwelding.com",
    logo: "https://mroncyschoolofwelding.com/images/mroncy-logo.png",
    sameAs: [
      "https://www.facebook.com/mroncyschoolofwelding",
      "https://www.instagram.com/mroncyschoolofwelding",
      "https://www.linkedin.com/company/mroncy-school-of-welding",
    ],
    description:
      "Mroncy School of Welding and Fabrication Engineering offers comprehensive welding training programs and certification courses in Zimbabwe.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Industrial Avenue",
      addressLocality: "Harare",
      addressRegion: "Harare Province",
      postalCode: "00263",
      addressCountry: "ZW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-17.8252",
      longitude: "31.0335",
    },
    telephone: "+263-77-123-4567",
    email: "info@mroncyschoolofwelding.com",
    openingHours: "Mo,Tu,We,Th,Fr 08:00-17:00",
    founder: {
      "@type": "Person",
      name: "Daniel Muronzi",
      jobTitle: "Founder & Lead Instructor",
      image: "https://mroncyschoolofwelding.com/images/daniel/daniel-muronzi-profile-cap.jpg",
    },
    employee: [
      {
        "@type": "Person",
        name: "Tafadzwa Katsholo",
        jobTitle: "Co-Founder & Instructor",
        image: "https://mroncyschoolofwelding.com/images/team/tafadzwa-katsholo.jpg",
      },
      {
        "@type": "Person",
        name: "Takunda Chidenyika",
        jobTitle: "Partner & Business Development",
        image: "https://mroncyschoolofwelding.com/images/team/takunda-chidenyika.jpg",
      },
    ],
    hasOfferCatalog: {
      "@type": "Offer",
      itemOffered: [
        {
          "@type": "Course",
          name: "SMAW Welding Certification",
          description: "Comprehensive training in Shielded Metal Arc Welding techniques and certification.",
          provider: {
            "@type": "Organization",
            name: "Mroncy School of Welding and Fabrication Engineering",
            sameAs: "https://mroncyschoolofwelding.com",
          },
        },
        {
          "@type": "Course",
          name: "TIG Welding Mastery",
          description: "Advanced training in Tungsten Inert Gas welding for precision applications.",
          provider: {
            "@type": "Organization",
            name: "Mroncy School of Welding and Fabrication Engineering",
            sameAs: "https://mroncyschoolofwelding.com",
          },
        },
        {
          "@type": "Course",
          name: "MIG Welding Fundamentals",
          description: "Essential training in Metal Inert Gas welding techniques for industrial applications.",
          provider: {
            "@type": "Organization",
            name: "Mroncy School of Welding and Fabrication Engineering",
            sameAs: "https://mroncyschoolofwelding.com",
          },
        },
      ],
    },
  }

  return (
    <Script
      id="business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
    />
  )
}
