import type { Metadata } from "next"
import HeroSection from "@/components/home/hero-section"
import KeyHighlights from "@/components/home/key-highlights"
import FeaturedCourses from "@/components/home/featured-courses"
import ProfessionalNetwork from "@/components/home/professional-network"
import AboutTeaser from "@/components/home/about-teaser"
import GenderDiverseSection from "@/components/home/gender-diverse-section"
import Testimonials from "@/components/home/testimonials"
import InquiryForm from "@/components/home/inquiry-form"

export const metadata: Metadata = {
  title: "Unlock a Lucrative Career in Welding | MRONCY School of Welding",
  description:
    "Professional Training | Industry Certification | Business Development | MRONCY School of Welding & Fabrication Engineering",
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <KeyHighlights />
      <FeaturedCourses />
      <ProfessionalNetwork />
      <AboutTeaser />
      <GenderDiverseSection />
      <Testimonials />
      <InquiryForm />
    </>
  )
}
