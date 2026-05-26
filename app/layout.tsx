import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Cinzel_Decorative } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700", "900"],
  display: "swap",
})

const SITE_URL = "https://alfikri.xyz"
const SITE_NAME = "Al Fikri Kholil Misbah"
const SITE_TITLE = "Al Fikri Kholil Misbah — Software Engineer"
const SITE_DESCRIPTION =
  "Engineering elegant systems at the intersection of AI, Blockchain, and Modern Web development. Portfolio of Al Fikri Kholil Misbah."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Al Fikri Kholil Misbah",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Software Engineer",
    "AI",
    "Blockchain",
    "Web Development",
    "Full Stack",
    "Al Fikri",
    "alfikri",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@xafkmx",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "technology",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1D1333" },
    { media: "(prefers-color-scheme: dark)", color: "#1D1333" },
  ],
  width: "device-width",
  initialScale: 1,
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  alternateName: "alfikri",
  jobTitle: "Software Engineer",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/professional-portrait-of-al-fikri-kholil-misbah--s.png`,
  knowsAbout: [
    "Artificial Intelligence",
    "Blockchain",
    "Web Development",
    "Full Stack Development",
    "TypeScript",
    "Next.js",
  ],
  sameAs: [
    "https://github.com/Al-User12",
    "https://x.com/xafkmx",
    "https://instagram.com/yaelahfik",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${cinzel.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#E6C200] focus:text-[#1D1333] focus:rounded-md focus:font-semibold"
        >
          Skip to content
        </a>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
