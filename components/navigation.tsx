"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const linksRef = useRef([])
  const ctaRef = useRef(null)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    // Load GSAP from CDN
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
    script.async = true
    
    script.onload = () => {
      const gsap = window.gsap

      // Initial animation on load
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })

      gsap.from(logoRef.current, {
        x: -30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out"
      })

      gsap.from(linksRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.5,
        ease: "power2.out"
      })

      gsap.from(ctaRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        delay: 0.9,
        ease: "back.out(1.7)"
      })

      // Scroll animation - navbar background opacity
      let lastScroll = 0
      window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset
        
        if (currentScroll > 50) {
          gsap.to(navRef.current, {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            duration: 0.3,
            ease: "power2.out"
          })
        } else {
          gsap.to(navRef.current, {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            duration: 0.3,
            ease: "power2.out"
          })
        }
        
        lastScroll = currentScroll
      })

      // Hover animations for links with magnetic effect
      linksRef.current.forEach(link => {
        if (link) {
          link.addEventListener('mouseenter', () => {
            gsap.to(link, {
              y: -5,
              scale: 1.1,
              backgroundColor: "rgba(139, 92, 246, 0.15)",
              color: "#8b5cf6",
              duration: 0.4,
              ease: "power3.out"
            })
          })
          
          link.addEventListener('mouseleave', () => {
            gsap.to(link, {
              y: 0,
              scale: 1,
              backgroundColor: "rgba(255, 255, 255, 0)",
              color: "#000000",
              duration: 0.4,
              ease: "power3.out"
            })
          })
        }
      })

      // CTA button hover animation
      if (ctaRef.current) {
        ctaRef.current.addEventListener('mouseenter', () => {
          gsap.to(ctaRef.current, {
            scale: 1.08,
            boxShadow: "0 10px 40px rgba(139, 92, 246, 0.4)",
            duration: 0.3,
            ease: "power2.out"
          })
        })
        
        ctaRef.current.addEventListener('mouseleave', () => {
          gsap.to(ctaRef.current, {
            scale: 1,
            boxShadow: "0 4px 20px rgba(139, 92, 246, 0.2)",
            duration: 0.3,
            ease: "power2.out"
          })
        })
      }
    }
    
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  useEffect(() => {
    if (window.gsap && mobileMenuRef.current) {
      if (isOpen) {
        window.gsap.from(mobileMenuRef.current.children, {
          x: -20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out"
        })
      }
    }
  }, [isOpen])

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Glass Container */}
        <div 
          ref={navRef}
          className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-full shadow-2xl"
        >
          
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between px-6 py-3 relative z-10">
            {/* Logo */}
            <div ref={logoRef} className="flex items-center">
              <span className="text-xl font-bold text-primary">Zyntrix</span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              <a
                ref={el => linksRef.current[0] = el}
                href="/"
                className="text-white/90 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-white/10"
              >
                Home
              </a>
              <a
                ref={el => linksRef.current[1] = el}
                href="/services"
                className="text-white/90 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-white/10"
              >
                Services
              </a>
              <a
                ref={el => linksRef.current[2] = el}
                href="/portfolio"
                className="text-white/90 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-white/10"
              >
                Portfolio
              </a>
              <a
                ref={el => linksRef.current[3] = el}
                href="/about"
                className="text-white/90 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-white/10"
              >
                About
              </a>
              <a
                ref={el => linksRef.current[4] = el}
                href="/contact"
                className="text-white/90 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-white/10"
              >
                Contact
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex items-center">
              <a
                ref={ctaRef}
                href="/contact"
                className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden relative z-10">
            <div className="flex justify-between items-center px-5 py-3">
              <span className="text-lg font-bold text-primary">Zyntrix</span>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:bg-white/10 rounded-full p-2 transition-all duration-300"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div ref={mobileMenuRef} className="px-5 pb-5 space-y-1">
                <a
                  href="/"
                  className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                >
                  Home
                </a>
                <a
                  href="/services"
                  className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                >
                  Services
                </a>
                <a
                  href="/portfolio"
                  className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                >
                  Portfolio
                </a>
                <a
                  href="/about"
                  className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="block text-white/90 hover:text-white hover:bg-white/10 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                >
                  Contact
                </a>
                <a
                  href="/contact"
                  className="block bg-primary text-white px-4 py-2.5 rounded-full text-sm font-semibold text-center transition-all duration-300 mt-3"
                >
                  Get Started
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}