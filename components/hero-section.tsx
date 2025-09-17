import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Transform Your Business with <span className="text-primary">Digital Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Zyntrix delivers cutting-edge IT solutions including web development, app development, and technology
                integration. With 10+ successful projects and years of combined experience, we bring your digital vision
                to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">11+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">7</div>
                <div className="text-sm text-muted-foreground">Days Delivery</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-lg border shadow-sm">
                  <Code className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Web Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Modern, responsive websites built with latest technologies
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border shadow-sm">
                  <Smartphone className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">App Development</h3>
                  <p className="text-sm text-muted-foreground">Native and cross-platform mobile applications</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-card p-6 rounded-lg border shadow-sm">
                  <Globe className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Hosting & Domain</h3>
                  <p className="text-sm text-muted-foreground">Complete hosting solutions with domain management</p>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                  <div className="text-primary font-semibold text-lg">₹9,999</div>
                  <div className="text-sm text-muted-foreground">Static website with hosting</div>
                  <div className="text-xs text-primary font-medium mt-1">Delivered in 7 days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
