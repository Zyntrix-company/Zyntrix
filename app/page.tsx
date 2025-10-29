
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { Footer } from "@/components/footer"
import Know from "@/components/Know"
import KnowWhat from "@/components/KnowWhat"
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
