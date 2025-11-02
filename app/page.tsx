
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { Footer } from "@/components/footer"
import Know from "@/components/Know"
import KnowWhat from "@/components/KnowWhat"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Zyntrix — IT Solutions, Web & App Development",
  description:
    "Zyntrix builds high‑quality websites, apps, and full‑stack digital solutions that drive growth.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Zyntrix — IT Solutions, Web & App Development",
    description:
      "We craft performant, accessible, and scalable digital products for modern businesses.",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Know />
      <ServicesOverview />
      <KnowWhat/>
      <Footer />
    </main>
  )
}
