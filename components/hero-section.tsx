'use client'
import { Code, Smartphone, Globe, Zap } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable);
}

export function HeroSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Norway Lights Animation - Enhanced
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Wave {
      offset: number;
      speed: number;
      amplitude: number;
      frequency: number;
      color: string;

      constructor(offset: number, speed: number, amplitude: number, frequency: number, color: string) {
        this.offset = offset;
        this.speed = speed;
        this.amplitude = amplitude;
        this.frequency = frequency;
        this.color = color;
      }

      draw(ctx: CanvasRenderingContext2D, width: number, height: number, time: number) {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);

        for (let x = 0; x < width; x++) {
          const y = height / 2 + 
                   Math.sin((x * this.frequency + time * this.speed + this.offset)) * this.amplitude +
                   Math.sin((x * this.frequency * 0.5 + time * this.speed * 0.7)) * (this.amplitude * 0.5) +
                   Math.sin((x * this.frequency * 0.3 + time * this.speed * 1.2)) * (this.amplitude * 0.3);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.5, this.color.replace(/[\d.]+\)$/g, '0.05)'));
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const waves = [
      new Wave(0, 0.35, 60, 0.008, 'rgba(16, 185, 129, 0.2)'),
      new Wave(80, 0.28, 70, 0.006, 'rgba(59, 130, 246, 0.15)'),
      new Wave(160, 0.4, 50, 0.01, 'rgba(139, 92, 246, 0.12)'),
      new Wave(240, 0.22, 65, 0.007, 'rgba(236, 72, 153, 0.1)'),
      new Wave(320, 0.32, 45, 0.009, 'rgba(14, 165, 233, 0.08)')
    ];

    let animationId: number;
    let time = 0;

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      waves.forEach(wave => {
        wave.draw(ctx, canvas.width, canvas.height, time);
      });

      time += 0.015;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Center Stage Animation
    const masterTl = gsap.timeline();

    if (heroTextRef.current) {
      const words = heroTextRef.current.textContent?.split(' ') || [];
      heroTextRef.current.innerHTML = words
        .map(word => `<span class="inline-block opacity-0">${word}</span>`)
        .join(' ');
      
      const wordElements = heroTextRef.current.querySelectorAll('span');
      
      // Get the natural position of the element before animating
      const naturalRect = heroTextRef.current.getBoundingClientRect();
      const naturalX = naturalRect.left + naturalRect.width / 2;
      const naturalY = naturalRect.top + naturalRect.height / 2;
      
      // Calculate center of viewport
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate offset needed to center the element
      const offsetX = centerX - naturalX;
      const offsetY = centerY - naturalY;
      
      // Start from center using transform
      gsap.set(heroTextRef.current, {
        x: offsetX,
        y: offsetY,
        zIndex: 50
      });

      // Animate words appearing
      masterTl.to(wordElements, {
        opacity: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out"
      });

      // Hold in center
      masterTl.to({}, { duration: 0.8 });

      // Move to natural position
      masterTl.to(heroTextRef.current, {
        x: 0,
        y: 0,
        zIndex: 10,
        duration: 1.2,
        ease: "power3.inOut"
      });
    }

    // Animate stats after text settles
    if (statsRef.current) {
      const statElements = statsRef.current.querySelectorAll('.stat-item');
      gsap.set(statElements, { opacity: 0, scale: 0, y: 20 });
      masterTl.to(statElements, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)"
      }, "-=0.4");
    }

    // Animate cards
    gsap.set(cardRefs.current, { opacity: 0, scale: 0.8, y: 30 });
    masterTl.to(cardRefs.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "back.out(1.5)"
    }, "-=0.5");

    // Make cards draggable
    const draggables: Draggable[] = [];
    cardRefs.current.forEach((card) => {
      if (!card) return;

      const draggable = Draggable.create(card, {
        type: "x,y",
        bounds: containerRef.current,
        inertia: true,
        edgeResistance: 0.7,
        onDragStart: function() {
          gsap.to(card, {
            scale: 1.15,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            zIndex: 20,
            duration: 0.3,
            ease: "power2.out"
          });
        },
        onDragEnd: function() {
          gsap.to(card, {
            scale: 1,
            boxShadow: 'none',
            zIndex: 1,
            duration: 0.4,
            ease: "power2.out"
          });
        },
        onClick: function() {
          gsap.to(card, {
            rotation: "+=360",
            duration: 0.8,
            ease: "power2.inOut"
          });
        }
      })[0];

      draggables.push(draggable);

      // Hover effects
      card.addEventListener('mouseenter', () => {
        if (!draggable.isDragging) {
          gsap.to(card, {
            scale: 1.08,
            duration: 0.3,
            ease: "power2.out"
          });

          const icon = card.querySelector('.lucide');
          if (icon) {
            gsap.to(icon, {
              scale: 1.3,
              rotation: 15,
              duration: 0.4,
              ease: "back.out(2)"
            });
          }
        }
      });

      card.addEventListener('mouseleave', () => {
        if (!draggable.isDragging) {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });

          const icon = card.querySelector('.lucide');
          if (icon) {
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "back.out(2)"
            });
          }
        }
      });
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
      draggables.forEach(d => d.kill());
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0d1d35] to-[#0f2744]">
      {/* Enhanced Norway Lights Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Main Hero Text */}
          <div className="text-center mb-14">
            <h1 
              ref={heroTextRef}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight pt-6 mb-4"
            >
              Transform Your Business <br/>with Digital Solutions
            </h1>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="flex justify-center items-center gap-16 mb-12">
            <div className="text-center stat-item">
              <div className="text-5xl font-bold text-emerald-400 mb-2">10+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Projects</div>
            </div>
            
            <div className="w-px h-16 bg-gray-700"></div>
            
            <div className="text-center stat-item">
              <div className="text-5xl font-bold text-blue-400 mb-2">7</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Days</div>
            </div>
            
            <div className="w-px h-16 bg-gray-700"></div>
            
            <div className="text-center stat-item">
              <div className="text-5xl font-bold text-purple-400 mb-2">₹9,999</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Starting</div>
            </div>
          </div>

          {/* Draggable Cards */}
          <div ref={containerRef} className="relative min-h-[200px]">
            
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div 
                ref={el => cardRefs.current[0] = el}
                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 cursor-move transition-all duration-300 will-change-transform group"
                style={{ touchAction: 'none' }}
              >
                <Code className="h-12 w-12 text-emerald-400 mb-4 transition-transform duration-300 mx-auto" />
                <h3 className="font-semibold text-white text-center text-lg mb-2">Web</h3>
                <p className="text-xs text-gray-400 text-center">Development</p>
              </div>

              <div 
                ref={el => cardRefs.current[1] = el}
                className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-md p-8 rounded-2xl border border-emerald-400/30 cursor-move transition-all duration-300 will-change-transform group"
                style={{ touchAction: 'none' }}
              >
                <Smartphone className="h-12 w-12 text-blue-400 mb-4 transition-transform duration-300 mx-auto" />
                <h3 className="font-semibold text-white text-center text-lg mb-2">App</h3>
                <p className="text-xs text-gray-400 text-center">Development</p>
              </div>

              <div 
                ref={el => cardRefs.current[2] = el}
                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 cursor-move transition-all duration-300 will-change-transform group"
                style={{ touchAction: 'none' }}
              >
                <Globe className="h-12 w-12 text-purple-400 mb-4 transition-transform duration-300 mx-auto" />
                <h3 className="font-semibold text-white text-center text-lg mb-2">Hosting</h3>
                <p className="text-xs text-gray-400 text-center">& Domain</p>
              </div>

              <div 
                ref={el => cardRefs.current[3] = el}
                className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-md p-8 rounded-2xl border border-emerald-400/30 cursor-move transition-all duration-300 will-change-transform group"
                style={{ touchAction: 'none' }}
              >
                <Zap className="h-12 w-12 text-yellow-400 mb-4 transition-transform duration-300 mx-auto" />
                <h3 className="font-semibold text-white text-center text-lg mb-2">Fast</h3>
                <p className="text-xs text-emerald-400 text-center">Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}