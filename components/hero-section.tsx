'use client'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Rocket, Eye } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div aria-hidden className="pointer-events-none absolute -left-32 -top-40 h-72 w-72 rounded-full bg-primary/9 blur-3xl " />
          <div aria-hidden className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#4ade80]/6 blur-3xl lg:hidden" />


          <div className="space-y-8">
            <div className="space-y-4 text-center lg:text-left mt-28 md:mt-14 lg:mt-0">
              <motion.h1 
                className="text-3xl lg:text-5xl font-bold text-balance leading-tight text-[#0a1628]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Transform Your Business with <span className="text-primary">Digital Solutions</span>
              </motion.h1>
              <motion.p 
                className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed px-4 lg:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                We partner with forward-thinking brands to design, develop, and scale digital products that don’t just look beautiful — they perform. From web platforms to AI-driven solutions, every project we build is crafted to drive measurable growth, lasting impact, and a competitive edge in the digital era.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                size="lg" 
                asChild
                className="relative overflow-hidden group"
              >
                <Link href="/contact" className="flex items-center gap-2 relative z-10">
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                      ease: 'linear'
                    }}
                  />
                  <Rocket className="h-5 w-5" />
                  Start Your Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="group"
              >
                <Link href="/portfolio" className="flex items-center gap-2">
                  <Eye className="h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  View Our Work
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 pt-6 md:pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
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
            </motion.div>
          </div>

          <div className="relative mt-8 md:mt-12 lg:mt-0">
            <motion.div 
              className="hidden lg:block aspect-[4/3] w-full"
              initial={{ y: 0 }}
              animate={{ 
                y: [0, -15, 0],
                transition: { 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                } 
              }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <img
                src="/hero.png"
                alt="Hero"
                className="h-full w-full object-contain z-0"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}