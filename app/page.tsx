import  Navigation  from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { Footer } from "@/components/footer"
import Know from "@/components/Know"
import KnowWhat from "@/components/KnowWhat"
import LetsConnect from "@/components/LetsConnect"
import ZyntrixScrollSection from "@/components/zyntrix"
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <Know />
      <ZyntrixScrollSection />
      <ServicesOverview />
      <KnowWhat/>
      <LetsConnect />
      <Footer />
    </main>
  )
}
