"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ZyntrixScrollSection() {
  const descriptionRef = useRef(null);
  const zenithRef = useRef(null);
  const matrixRef = useRef(null);
  const plusRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle entrance animation
      gsap.from([zenithRef.current, plusRef.current, matrixRef.current], {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      gsap.from(descriptionRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  const handleHover = (ref, scale = 1.05) => {
    gsap.to(ref.current, {
      scale: scale,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleHoverOut = (ref) => {
    gsap.to(ref.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-10">
      <div className="max-w-2xl mx-auto text-center">
        {/* Zyntrix means section */}
        <div className="mb-4">
          <p className="text-sm text-gray-500 tracking-wide">Zyntrix means</p>
        </div>

        {/* Zenith + Matrix */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span
            ref={zenithRef}
            onMouseEnter={() => handleHover(zenithRef)}
            onMouseLeave={() => handleHoverOut(zenithRef)}
            className="text-4xl md:text-5xl font-bold text-black cursor-default transition-colors hover:text-blue-600"
          >
            Zenith
          </span>
          <span
            ref={plusRef}
            className="text-3xl md:text-4xl text-gray-400 font-light"
          >
            +
          </span>
          <span
            ref={matrixRef}
            onMouseEnter={() => handleHover(matrixRef)}
            onMouseLeave={() => handleHoverOut(matrixRef)}
            className="text-4xl md:text-5xl font-bold text-black cursor-default transition-colors hover:text-purple-600"
          >
            Matrix
          </span>
        </div>

        {/* Description */}
        <div
          ref={descriptionRef}
          onMouseEnter={() => handleHover(descriptionRef, 1.02)}
          onMouseLeave={() => handleHoverOut(descriptionRef)}
          className="cursor-default"
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-xl mx-auto">
            At the pinnacle of innovation, where advanced technology meets boundless possibilities, 
            we transform visionary ideas into exceptional digital experiences.
          </p>
        </div>

        {/* Optional decorative line */}
        <div className="mt-12 w-16 h-0.5 bg-gray-300 mx-auto"></div>
      </div>
    </section>
  );
}