import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import AnimationInitializer from "@/components/animation-initializer"
import BusinessSchema from "@/components/structured-data/business-schema"
import { AuthStatus } from '@/components/auth-status'
import { FirebaseAuthProvider } from '@/components/providers/firebase-auth-provider'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mroncy School of Welding - Professional Welding Training",
  description:
    "Join Mroncy School of Welding for top-tier welding education and certification. Offering diverse courses in SMAW, TIG, MIG, and more. Start your welding career today!",
  keywords:
    "welding school, welding training, Mroncy, Zimbabwe welding, professional welding, certified welder, welding courses, SMAW, TIG, MIG",
  authors: [{ name: "Mroncy School of Welding" }],
  publisher: "Mroncy School of Welding",
  openGraph: {
    title: "Mroncy School of Welding - Professional Welding Training",
    description: "Expert-led welding courses in Zimbabwe. Get certified with Mroncy School of Welding.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://mroncywelding.com",
    siteName: "Mroncy School of Welding",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/hero-banner.png`,
        width: 1200,
        height: 630,
        alt: "Mroncy School of Welding Hero Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mroncy School of Welding - Professional Welding Training",
    description: "Join Mroncy School of Welding for top-tier welding education and certification.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/hero-banner.png`],
  },
  robots: "index, follow",
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: "#FFA500", // Welding orange
  initialScale: 1,
  width: "device-width",
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <BusinessSchema />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <FirebaseAuthProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <AuthStatus />
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
            <AnimationInitializer />
          </FirebaseAuthProvider>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}