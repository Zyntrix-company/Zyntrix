'use client'
import Link from 'next/link'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Rocket, Eye, BarChart3, Users, Heart } from 'lucide-react'

function Counter({ from, to, duration = 2, suffix = '+' }) {
  const [count, setCount] = useState(from)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (inView) {
      let start = from
      const end = to
      const increment = (end - start) / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          start = end
          clearInterval(timer)
        }
        setCount(start)
      }, 1000 / 60)
      return () => clearInterval(timer)
    }
  }, [inView, from, to, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold text-primary"
    >
      {to % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* --- Left Text Area --- */}
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
                We partner with forward-thinking brands to design, develop, and scale digital products that don’t just look beautiful — they perform.
              </motion.p>
            </div>

            {/* --- Buttons --- */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" asChild className="relative overflow-hidden group">
                <Link href="/contact" className="flex items-center gap-2 relative z-10">
                  <Rocket className="h-5 w-5" />
                  Start Your Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild className="group">
                <Link href="/portfolio" className="flex items-center gap-2">
                  <Eye className="h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  View Our Work
                </Link>
              </Button>
            </motion.div>

            {/* --- Impact Stats --- */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 pt-6 md:pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-center">
                <Counter from={0} to={10} />
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>

              <div className="text-center">
                
                <Counter from={0} to={400} />
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>

              <div className="text-center">
                
                <Counter from={0} to={98} suffix="%" />
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>

              <div className="text-center">
                
                <Counter from={0} to={3.5} suffix="×" />
                <div className="text-sm text-muted-foreground">Efficiency Improvement</div>
              </div>
            </motion.div>
          </div>

          {/* --- Hero Image --- */}
          <div className="relative mt-8 md:mt-12 lg:mt-0">
            <motion.div 
              className="hidden lg:block aspect-[4/3] w-full"
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <img src="/hero.png" alt="Hero" className="h-full w-full object-contain z-0" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
