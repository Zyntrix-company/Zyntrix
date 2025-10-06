'use client'
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export function HeroSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial animation for cards
    gsap.set(cardRefs.current, { y: 20, opacity: 0 });
    
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Staggered animation for cards
    tl.to(cardRefs.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)"
    });

    // Hover animation
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -5,
          scale: 1.02,
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
          duration: 0.3
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
          duration: 0.3
        });
      });

      // Click animation
      card.addEventListener('click', () => {
        // Reset all cards
        cardRefs.current.forEach((c, idx) => {
          if (c && idx !== i) {
            gsap.to(c, {
              opacity: 0.7,
              scale: 0.95,
              duration: 0.3
            });
          }
        });

        // Animate clicked card
        gsap.to(card, {
          scale: 1.03,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          duration: 0.3,
          onComplete: () => {
            // Reset after animation
            setTimeout(() => {
              cardRefs.current.forEach(c => {
                if (c) {
                  gsap.to(c, {
                    opacity: 1,
                    scale: 1,
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
                    duration: 0.3
                  });
                }
              });
            }, 1500);
          }
        });
      });
    });

    return () => {
      // Cleanup event listeners
      cardRefs.current.forEach(card => {
        if (card) {
          card.removeEventListener('mouseenter', () => {});
          card.removeEventListener('mouseleave', () => {});
          card.removeEventListener('click', () => {});
        }
      });
    };
  }, []);
  return (
    <section className="relative py-10 lg:py-16 overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0d1d35] via-white to-white to-75%">
      <div className="py-10">

      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
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
                <div className="text-2xl font-bold text-primary">7</div>
                <div className="text-sm text-muted-foreground">Days Delivery</div>
              </div>
            </div>
          </div>

          <div className="relative" ref={containerRef}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div 
                  ref={el => cardRefs.current[0] = el}
                  className="bg-card p-6 rounded-lg border shadow-sm cursor-pointer transition-all duration-300 will-change-transform hover:shadow-md"
                >
                  <Code className="h-8 w-8 text-primary mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-semibold mb-2">Web Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Modern, responsive websites built with latest technologies
                  </p>
                </div>
                <div 
                  ref={el => cardRefs.current[1] = el}
                  className="bg-card p-6 rounded-lg border shadow-sm cursor-pointer transition-all duration-300 will-change-transform hover:shadow-md"
                >
                  <Smartphone className="h-8 w-8 text-primary mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-semibold mb-2">App Development</h3>
                  <p className="text-sm text-muted-foreground">Native and cross-platform mobile applications</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div 
                  ref={el => cardRefs.current[2] = el}
                  className="bg-card p-6 rounded-lg border shadow-sm cursor-pointer transition-all duration-300 will-change-transform hover:shadow-md"
                >
                  <Globe className="h-8 w-8 text-primary mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-semibold mb-2">Hosting & Domain</h3>
                  <p className="text-sm text-muted-foreground">Complete hosting solutions with domain management</p>
                </div>
                <div 
                  ref={el => cardRefs.current[3] = el}
                  className="bg-primary/10 p-6 rounded-lg border border-primary/20 cursor-pointer transition-all duration-300 will-change-transform hover:shadow-md hover:bg-primary/15"
                >
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
