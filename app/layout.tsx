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
  title: "Zyntrix - IT Solutions & Web Development Services",
  description:
    "Professional IT solutions including web development, app development, hosting, and technology integration. 10+ successful projects delivered by experienced developers.",
  generator: "Zyntrix",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 1.0,
  },
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
