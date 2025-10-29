'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-5xl font-bold text-balance leading-tight">
                Transform Your Business with <span className="text-primary">Digital Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Zyntrix builds, markets, and scales your products end‑to‑end—web and app development, SEO and digital marketing, customer retention journeys, integrations and automation, AI/LLM features, rigorous testing, and smooth deployment. One team to ship faster and grow smarter.
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
                <div className="text-2xl font-bold text-primary">400+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">400+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full">
              <img
                src="/hero.png"
                alt="Hero"
                className="h-full w-full object-cover lg:object-contain z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}