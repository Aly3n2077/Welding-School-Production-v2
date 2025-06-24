import type { Metadata } from "next"
import CoursesClientPage from "./CoursesClientPage"

export const metadata: Metadata = {
  title: "Courses | Daniel Muronzi Welding Training Centre",
  description: "Explore our comprehensive welding courses including SMAW, TIG, MIG, Pipe Welding, and Boiler Making.",
}

export default function CoursesPage() {
  return <CoursesClientPage />
}
