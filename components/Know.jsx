"use client"
import React, { useEffect, useRef } from 'react';

const Know = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const linkRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const frameRef = useRef(null);
  const linesRef = useRef([]);
  const aboutRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    // Load GSAP and ScrollTrigger
    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
    script2.async = true;
    document.body.appendChild(script2);

    script2.onload = () => {
      const { gsap } = window;
      const { ScrollTrigger } = window;
      
      gsap.registerPlugin(ScrollTrigger);

      // Initial state - everything hidden
      gsap.set([titleRef.current, subtitleRef.current, descRef.current, linkRef.current, imageContainerRef.current, aboutRef.current], {
        opacity: 0,
        y: 50
      });

      // Create master timeline
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });

      // 1. First show "Know" title
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.3
      });

      // 2. Then show subtitle, description, and link
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
      }, "-=0.4");

      tl.to(descRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
      }, "-=0.7");

      tl.to(linkRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, "-=0.6");

      // 3. Show image and frame together
      tl.to(imageContainerRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
      }, "-=0.5");

      // Animate SVG lines
      if (linesRef.current.length > 0) {
        linesRef.current.forEach((line, i) => {
          if (line) {
            tl.to(line, {
              strokeDashoffset: 0,
              duration: 1,
              ease: 'power2.inOut'
            }, i === 0 ? "-=0.8" : "-=0.6");
          }
        });
      }

      // 4. Finally reveal "about us" on scroll
      gsap.to(aboutRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // Parallax effects on scroll
      gsap.to(titleRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

      gsap.to([subtitleRef.current, descRef.current, linkRef.current], {
        y: -150,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

      gsap.to(imageContainerRef.current, {
        y: -80,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Floating particles animation
      particlesRef.current.forEach((particle, i) => {
        if (particle) {
          gsap.to(particle, {
            y: -30,
            duration: 3 + Math.random() * 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: Math.random() * 2
          });
        }
      });

      // Hover effect for CTA link
      if (linkRef.current) {
        linkRef.current.addEventListener('mouseenter', () => {
          gsap.to(linkRef.current, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        linkRef.current.addEventListener('mouseleave', () => {
          gsap.to(linkRef.current, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      }

      // 3D tilt effect on image
      if (imageRef.current) {
        imageRef.current.addEventListener('mousemove', (e) => {
          const rect = imageRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 20;
          const rotateY = (centerX - x) / 20;

          gsap.to(imageRef.current, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            duration: 0.5,
            ease: 'power2.out'
          });
        });

        imageRef.current.addEventListener('mouseleave', () => {
          gsap.to(imageRef.current, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.5,
            ease: 'power2.out'
          });
        });
      }
    };

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen bg-[#0a1628] text-white overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1d35] to-[#0a1628]" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            ref={el => particlesRef.current[i] = el}
            className="absolute w-1 h-1 bg-[#4ade80] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Know Title with 3D effect */}
            <h1 
              ref={titleRef}
              className="text-7xl lg:text-8xl font-light text-[#4ade80] mb-12"
              style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif',
                textShadow: '0 10px 30px rgba(74, 222, 128, 0.3)',
              }}
            >
              Know
            </h1>

            {/* Main Heading */}
            <h2 
              ref={subtitleRef}
              className="text-4xl lg:text-5xl font-bold leading-tight"
            >
              We build what<br />you imagine
            </h2>

            {/* Welcome Text */}
            <p className="text-lg text-gray-300" ref={descRef}>
              <span className="block mb-4 text-xl">We're glad you're here.</span>
              Zentrix is a forward-thinking design and development studio committed to creating exceptional digital experiences. Our expert team combines innovative UX/UI design with cutting-edge development to transform your ideas into remarkable digital solutions. We prioritize seamless functionality, elegant design, and delivering outstanding results that make an impact.
            </p>

            {/* CTA Link */}
            <a 
              ref={linkRef}
              href="#about"
              className="inline-block text-lg text-white border-b-2 border-white pb-1 hover:text-[#4ade80] hover:border-[#4ade80] transition-colors duration-300"
            >
              Know more about us
            </a>
          </div>

          {/* Right Content - Image with Frame */}
          <div 
            ref={imageContainerRef}
            className="relative"
          >
            {/* SVG Lines with glow effect */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 600 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(74, 222, 128, 0.5))'
              }}
            >
              <path 
                ref={el => linesRef.current[0] = el}
                d="M 50 50 L 150 150"
                stroke="#4ade80"
                strokeWidth="2"
                strokeDasharray="150"
                strokeDashoffset="150"
              />
              
              <path 
                ref={el => linesRef.current[1] = el}
                d="M 150 150 L 550 50"
                stroke="#4ade80"
                strokeWidth="2"
                strokeDasharray="450"
                strokeDashoffset="450"
              />
              
              <path 
                ref={el => linesRef.current[2] = el}
                d="M 550 50 L 550 250"
                stroke="#4ade80"
                strokeWidth="2"
                strokeDasharray="200"
                strokeDashoffset="200"
              />
            </svg>

            {/* Green Frame with 3D perspective */}
            <div 
              ref={frameRef}
              className="absolute left-0 top-1/4 w-64 h-48 border-4 border-[#4ade80] z-0"
              style={{
                boxShadow: '0 0 30px rgba(74, 222, 128, 0.3)'
              }}
            />

            {/* Image Container with 3D hover effect */}
            <div 
              ref={imageRef}
              className="relative z-20 rounded-lg overflow-hidden shadow-2xl"
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
                alt="Modern workspace"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* About Us Text with scroll trigger */}
        <div 
          ref={aboutRef}
          className="mt-16 text-right"
        >
          <h3 
            className="text-6xl lg:text-8xl font-light text-[#4ade80]"
            style={{
              textShadow: '0 10px 30px rgba(74, 222, 128, 0.3)',
            }}
          >
            about us
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Know;