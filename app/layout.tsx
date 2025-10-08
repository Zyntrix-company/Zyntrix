import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import localFont from "next/font/local"
import "./globals.css"
import Navigation from "../components/navigation"
// Enterprise-level font setup
// Satoshi (for headings), Inter (for body)
const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Variable.ttf",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
})

const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter-VariableFont_opsz,wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Zyntrix - IT Solutions & Web Development Services",
  description:
    "Professional IT solutions including web development, app development, hosting, and technology integration. 10+ successful projects delivered by experienced developers.",
  generator: "Zyntrix",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${inter.variable} font-sans bg-[#F9FAFB] text-gray-900 antialiased`}
      >
        <Navigation/>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
