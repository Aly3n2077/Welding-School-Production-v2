import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { FirebaseAuthProvider } from "@/components/providers/firebase-auth-provider"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Meronzi Welding Centre - Professional Welding Training in Zimbabwe",
    template: "%s | Meronzi Welding Centre",
  },
  description:
    "Learn professional welding skills at Meronzi Welding Centre. Offering comprehensive welding courses including SMAW, MIG, TIG, and specialized training programs in Zimbabwe.",
  keywords: [
    "welding training",
    "welding courses",
    "SMAW welding",
    "MIG welding",
    "TIG welding",
    "welding certification",
    "Zimbabwe welding school",
    "professional welding",
    "welding skills",
    "trade training",
  ],
  authors: [{ name: "Meronzi Welding Centre" }],
  creator: "Meronzi Welding Centre",
  publisher: "Meronzi Welding Centre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://meronziwelding.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Meronzi Welding Centre - Professional Welding Training",
    description:
      "Learn professional welding skills at Meronzi Welding Centre. Comprehensive welding courses and certification programs in Zimbabwe.",
    siteName: "Meronzi Welding Centre",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meronzi Welding Centre - Professional Welding Training",
    description:
      "Learn professional welding skills at Meronzi Welding Centre. Comprehensive welding courses and certification programs in Zimbabwe.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <FirebaseAuthProvider>
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            <Toaster />
            <Sonner />
          </FirebaseAuthProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
