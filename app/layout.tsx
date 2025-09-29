import type React from "react"
import type { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "Al Fikri Kholil Misbah — Software Engineer",
  description:
    "Engineering elegant systems at the intersection of AI, Blockchain, and Modern Web development. Portfolio of Al Fikri Kholil Misbah.",
  generator: "v0.app",
  keywords: ["Software Engineer", "AI", "Blockchain", "Web Development", "Full Stack"],
  authors: [{ name: "Al Fikri Kholil Misbah" }],
  openGraph: {
    title: "Al Fikri Kholil Misbah — Software Engineer",
    description: "Engineering elegant systems at the intersection of AI, Blockchain, and Modern Web development.",
    type: "website",
  },
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
        <link rel="preload" href="https://fonts.gstatic.com/s/cinzeldecorative/v16/daaCSScvJGqLYhG8nNt8KPPswUAPnh7URs0LaCpbBw.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.gstatic.com/s/cinzeldecorative/v16/daaCSScvJGqLYhG8nNt8KPPswUAPnh7URs0LaCpbBw.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${cinzel.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
