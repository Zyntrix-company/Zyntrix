import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "../components/navigation";


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Zyntrix — Building Digital Experiences that Drive Growth",
  description:
    "We turn ideas into seamless digital products. From websites to full-scale IT solutions, our team blends design, technology, and strategy to help businesses grow in the digital era.",
  generator: "Zyntrix",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Zyntrix — Building Digital Experiences that Drive Growth",
    description:
      "We turn ideas into seamless digital products that drive business growth.",
    siteName: "Zyntrix",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zyntrix",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  viewport: {
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 1.0,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} font-sans bg-[#F9FAFB] text-gray-900 antialiased`}
      >
        <Navigation />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
