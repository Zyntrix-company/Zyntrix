
"use client"
import React, { useEffect, useRef } from 'react';

const KnowWhat = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (titleRef.current) {
      setTimeout(() => {
        titleRef.current.style.opacity = '1';
        titleRef.current.style.transform = 'translateY(0)';
      }, 100);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            
            const svgElements = entry.target.querySelectorAll('.animate-draw');
            svgElements.forEach((el, i) => {
              setTimeout(() => {
                el.style.strokeDashoffset = '0';
                el.style.opacity = '1';
              }, i * 80);
            });

            const fadeElements = entry.target.querySelectorAll('.animate-fade');
            fadeElements.forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'scale(1) translateY(0)';
              }, i * 100);
            });

            const floatElements = entry.target.querySelectorAll('.animate-float');
            floatElements.forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }, i * 120 + 400);
            });

            const rotateElements = entry.target.querySelectorAll('.animate-rotate');
            rotateElements.forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'rotate(0deg) scale(1)';
              }, i * 150 + 300);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const ProductDiscoveryIcon = () => (
    <svg className="w-48 h-48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background browser window */}
      <rect 
        x="60" y="40" width="115" height="90" rx="4" 
        stroke="#3b82f6" strokeWidth="2.5" 
        fill="rgba(10, 22, 40, 0.6)"
        className="animate-draw"
        style={{ strokeDasharray: 410, strokeDashoffset: 410, opacity: 0, transition: 'all 1s ease-out' }}
      />
      
      {/* Browser dots */}
      <circle cx="68" cy="48" r="2" fill="#3b82f6" className="animate-fade" style={{ opacity: 0, transform: 'scale(0)', transition: 'all 0.3s ease-out 0.8s' }}/>
      <circle cx="76" cy="48" r="2" fill="#3b82f6" className="animate-fade" style={{ opacity: 0, transform: 'scale(0)', transition: 'all 0.3s ease-out 0.9s' }}/>
      <circle cx="84" cy="48" r="2" fill="#3b82f6" className="animate-fade" style={{ opacity: 0, transform: 'scale(0)', transition: 'all 0.3s ease-out 1s' }}/>
      
      {/* Email icons inside browser */}
      <rect 
        x="70" y="65" width="28" height="20" 
        stroke="#60a5fa" strokeWidth="2" 
        fill="none"
        className="animate-draw"
        style={{ strokeDasharray: 96, strokeDashoffset: 96, opacity: 0, transition: 'all 0.6s ease-out 1s' }}
      />
      <path 
        d="M 70 65 L 84 75 L 98 65" 
        stroke="#60a5fa" strokeWidth="2" 
        fill="none"
        className="animate-draw"
        style={{ strokeDasharray: 32, strokeDashoffset: 32, opacity: 0, transition: 'all 0.5s ease-out 1.3s' }}
      />
      
      {/* Second email */}
      <rect 
        x="110" y="85" width="28" height="20" 
        stroke="#60a5fa" strokeWidth="2" 
        fill="none"
        className="animate-draw"
        style={{ strokeDasharray: 96, strokeDashoffset: 96, opacity: 0, transition: 'all 0.6s ease-out 1.1s' }}
      />
      <path 
        d="M 110 85 L 124 95 L 138 85" 
        stroke="#60a5fa" strokeWidth="2" 
        fill="none"
        className="animate-draw"
        style={{ strokeDasharray: 32, strokeDashoffset: 32, opacity: 0, transition: 'all 0.5s ease-out 1.4s' }}
      />
      
      {/* Content lines */}
      <line x1="107" y1="70" x2="163" y2="70" stroke="#3b82f6" strokeWidth="2" opacity="0.4" className="animate-draw" style={{ strokeDasharray: 56, strokeDashoffset: 56, opacity: 0, transition: 'all 0.4s ease-out 1.5s' }}/>
      <line x1="107" y1="77" x2="150" y2="77" stroke="#3b82f6" strokeWidth="2" opacity="0.4" className="animate-draw" style={{ strokeDasharray: 43, strokeDashoffset: 43, opacity: 0, transition: 'all 0.4s ease-out 1.6s' }}/>
      <line x1="70" y1="95" x2="98" y2="95" stroke="#3b82f6" strokeWidth="2" opacity="0.4" className="animate-draw" style={{ strokeDasharray: 28, strokeDashoffset: 28, opacity: 0, transition: 'all 0.4s ease-out 1.7s' }}/>
      <line x1="70" y1="102" x2="95" y2="102" stroke="#3b82f6" strokeWidth="2" opacity="0.4" className="animate-draw" style={{ strokeDasharray: 25, strokeDashoffset: 25, opacity: 0, transition: 'all 0.4s ease-out 1.8s' }}/>
      <line x1="145" y1="95" x2="163" y2="95" stroke="#3b82f6" strokeWidth="2" opacity="0.4" className="animate-draw" style={{ strokeDasharray: 18, strokeDashoffset: 18, opacity: 0, transition: 'all 0.4s ease-out 1.9s' }}/>
      
      {/* Bar chart on left */}
      <g className="animate-fade" style={{ opacity: 0, transform: 'translateY(20px) scale(0.8)', transition: 'all 0.6s ease-out 0.5s' }}>
        <rect x="25" y="95" width="10" height="35" stroke="#3b82f6" strokeWidth="2.5" fill="none"/>
        <rect x="40" y="80" width="10" height="50" stroke="#3b82f6" strokeWidth="2.5" fill="rgba(59, 130, 246, 0.2)"/>
        <rect x="25" y="95" width="10" height="15" fill="#3b82f6"/>
      </g>
      
      {/* Arrow pointing up */}
      <g className="animate-float" style={{ opacity: 0, transform: 'translateY(10px)', transition: 'all 0.7s ease-out 1.2s' }}>
        <path d="M 32 55 L 32 75" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>
        <path d="M 32 55 L 27 62 M 32 55 L 37 62" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>
      </g>
      
      {/* Magnifying glass bottom left */}
      <g className="animate-rotate" style={{ opacity: 0, transform: 'rotate(-15deg) scale(0.8)', transformOrigin: '55px 155px', transition: 'all 0.8s ease-out 0.7s' }}>
        <circle cx="55" cy="155" r="18" stroke="#60a5fa" strokeWidth="3" fill="none"/>
        <circle cx="55" cy="155" r="8" stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.3"/>
        <line x1="68" y1="168" x2="80" y2="180" stroke="#60a5fa" strokeWidth="3.5" strokeLinecap="round"/>
      </g>
      
      {/* Magnifying glass bottom right with cursor */}
      <g className="animate-rotate" style={{ opacity: 0, transform: 'rotate(15deg) scale(0.8)', transformOrigin: '155px 158px', transition: 'all 0.8s ease-out 0.9s' }}>
        <circle cx="155" cy="158" r="20" stroke="#3b82f6" strokeWidth="3" fill="none"/>
        <circle cx="155" cy="158" r="10" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.3"/>
        <line x1="169" y1="172" x2="183" y2="186" stroke="#3b82f6" strokeWidth="3.5" strokeLinecap="round"/>
        
        {/* Cursor */}
        <path d="M 175 180 L 175 195 L 182 189 L 188 195 L 191 192 L 185 186 L 191 186 Z" fill="#60a5fa" opacity="0.9"/>
      </g>
      
      {/* Large question mark */}
      <g className="animate-draw" style={{ opacity: 0, transition: 'all 1s ease-out 0.3s' }}>
        <path 
          d="M 120 20 Q 145 15 150 35 Q 150 50 135 58 L 135 70" 
          stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" 
          fill="none"
          style={{ strokeDasharray: 120, strokeDashoffset: 120 }}
        />
        <circle cx="135" cy="80" r="4" fill="#3b82f6"/>
      </g>
      
      {/* Sparkles */}
      <g className="animate-float" style={{ opacity: 0, transform: 'translateY(5px)', transition: 'all 0.5s ease-out 2s' }}>
        <circle cx="40" cy="25" r="2" fill="#3b82f6"/>
        <circle cx="185" cy="30" r="2" fill="#3b82f6"/>
      </g>
    </svg>
  );

  const ProductDesignIcon = () => (
    <svg className="w-48 h-48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Color palette/wireframes on left */}
      <g className="animate-rotate" style={{ opacity: 0, transform: 'rotate(-25deg) scale(0.8)', transformOrigin: '50px 80px', transition: 'all 0.8s ease-out 0.3s' }}>
        {/* First frame */}
        <rect x="35" y="50" width="30" height="45" rx="2" stroke="#60a5fa" strokeWidth="2.5" fill="rgba(10, 22, 40, 0.8)"/>
        <rect x="38" y="54" width="24" height="15" fill="#3b82f6"/>
        <rect x="38" y="72" width="24" height="8" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
        <rect x="38" y="83" width="24" height="8" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
        
        {/* Second frame */}
        <rect x="50" y="40" width="30" height="45" rx="2" stroke="#60a5fa" strokeWidth="2.5" fill="rgba(10, 22, 40, 0.6)"/>
        <rect x="53" y="44" width="24" height="15" fill="#10b981"/>
        <rect x="53" y="62" width="24" height="8" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
        <rect x="53" y="73" width="24" height="8" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
        
        {/* Third frame */}
        <rect x="65" y="30" width="30" height="45" rx="2" stroke="#60a5fa" strokeWidth="2.5" fill="rgba(10, 22, 40, 0.4)"/>
        <rect x="68" y="34" width="24" height="15" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
        <rect x="68" y="52" width="24" height="8" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
        <rect x="68" y="63" width="24" height="8" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
      </g>
      
      {/* Large R letter */}
      <g className="animate-fade" style={{ opacity: 0, transform: 'scale(0.7)', transformOrigin: '115px 105px', transition: 'all 0.9s ease-out 0.6s' }}>
        <text x="80" y="135" fill="none" stroke="#3b82f6" strokeWidth="3.5" fontSize="70" fontWeight="bold" fontFamily="Arial, sans-serif">R</text>
      </g>
      
      {/* Dotted connection lines */}
      <g className="animate-draw" style={{ opacity: 0, transition: 'all 0.8s ease-out 1s' }}>
        <line x1="95" y1="70" x2="120" y2="80" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 4" style={{ strokeDasharray: '4 4', strokeDashoffset: 100 }}/>
        <line x1="145" y1="100" x2="165" y2="95" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 4" style={{ strokeDasharray: '4 4', strokeDashoffset: 100 }}/>
      </g>
      
      {/* Screen/frame on right */}
      <g className="animate-draw" style={{ opacity: 0, transition: 'all 0.9s ease-out 0.5s' }}>
        <rect 
          x="140" y="55" width="50" height="40" rx="2" 
          stroke="#3b82f6" strokeWidth="3" 
          fill="none"
          style={{ strokeDasharray: 180, strokeDashoffset: 180 }}
        />
      </g>
      
      {/* Graph line inside frame */}
      <g className="animate-draw" style={{ opacity: 0, transition: 'all 0.7s ease-out 1.3s' }}>
        <path 
          d="M 145 85 L 155 70 L 165 75 L 175 65 L 185 70" 
          stroke="#3b82f6" strokeWidth="2.5" 
          fill="none"
          style={{ strokeDasharray: 60, strokeDashoffset: 60 }}
        />
        <circle cx="175" cy="65" r="3" fill="#3b82f6"/>
      </g>
      
      {/* Pen/cursor tool */}
      <g className="animate-float" style={{ opacity: 0, transform: 'translateY(15px)', transition: 'all 0.7s ease-out 1.5s' }}>
        <path d="M 170 110 L 165 130 L 175 125 Z" fill="#60a5fa" stroke="#3b82f6" strokeWidth="2"/>
        <line x1="170" y1="110" x2="175" y2="105" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
      </g>
      
      {/* Bezier curve handles */}
      <g className="animate-fade" style={{ opacity: 0, transform: 'scale(0.8)', transition: 'all 0.6s ease-out 1.7s' }}>
        <circle cx="155" cy="70" r="3" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1.5"/>
        <line x1="155" y1="70" x2="148" y2="60" stroke="#60a5fa" strokeWidth="1.5"/>
        <circle cx="148" cy="60" r="2" fill="#60a5fa"/>
        
        <circle cx="185" cy="70" r="3" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1.5"/>
        <line x1="185" y1="70" x2="192" y2="80" stroke="#60a5fa" strokeWidth="1.5"/>
        <circle cx="192" cy="80" r="2" fill="#60a5fa"/>
      </g>
      
      {/* Ruler at bottom */}
      <g className="animate-draw" style={{ opacity: 0, transition: 'all 0.7s ease-out 0.8s' }}>
        <rect x="45" y="155" width="100" height="15" stroke="#3b82f6" strokeWidth="2.5" fill="rgba(59, 130, 246, 0.1)" style={{ strokeDasharray: 230, strokeDashoffset: 230 }}/>
        {[50, 60, 70, 80, 90, 100, 110, 120, 130, 140].map((x, i) => (
          <line 
            key={i}
            x1={x} y1="155" x2={x} y2={i % 2 === 0 ? "165" : "162"} 
            stroke="#3b82f6" strokeWidth="1.5"
            className="animate-fade"
            style={{ opacity: 0, transition: `all 0.2s ease-out ${1.5 + i * 0.05}s` }}
          />
        ))}
      </g>
      
      {/* Vertical line accent */}
      <line 
        x1="195" y1="50" x2="195" y2="170" 
        stroke="#10b981" strokeWidth="4"
        className="animate-draw"
        style={{ strokeDasharray: 120, strokeDashoffset: 120, opacity: 0, transition: 'all 1s ease-out 0.2s' }}
      />
    </svg>
  );

  const ProductDeliveryIcon = () => (
    <svg className="w-48 h-48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Box base */}
      <g className="animate-fade" style={{ opacity: 0, transform: 'translateY(20px) scale(0.9)', transition: 'all 0.8s ease-out 0.5s' }}>
        <path 
          d="M 70 115 L 70 160 L 130 160 L 130 115" 
          stroke="#3b82f6" strokeWidth="3" 
          fill="rgba(10, 22, 40, 0.6)"
        />
        <path 
          d="M 70 115 L 100 105 L 130 115 L 100 125 Z" 
          stroke="#3b82f6" strokeWidth="3" 
          fill="rgba(59, 130, 246, 0.2)"
        />
        <line x1="100" y1="105" x2="100" y2="125" stroke="#3b82f6" strokeWidth="3"/>
        <line x1="100" y1="125" x2="100" y2="160" stroke="#3b82f6" strokeWidth="2.5" opacity="0.5"/>
        <line x1="70" y1="115" x2="70" y2="160" stroke="#3b82f6" strokeWidth="2.5"/>
        <line x1="130" y1="115" x2="130" y2="160" stroke="#3b82f6" strokeWidth="2.5"/>
      </g>
      
      {/* Rocket */}
      <g className="animate-float" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 1s ease-out 0.8s' }}>
        {/* Rocket body */}
        <ellipse cx="100" cy="65" rx="14" ry="28" stroke="#3b82f6" strokeWidth="3" fill="rgba(59, 130, 246, 0.2)"/>
        
        {/* Window circles */}
        <circle cx="100" cy="55" r="8" stroke="#60a5fa" strokeWidth="2.5" fill="none"/>
        <circle cx="100" cy="55" r="4" fill="#60a5fa" opacity="0.6"/>
        
        {/* Rocket top */}
        <path d="M 100 37 L 94 28 L 100 20 L 106 28 Z" fill="#3b82f6" stroke="#3b82f6" strokeWidth="2.5"/>
        
        {/* Left fin */}
        <path d="M 86 80 L 78 95 L 86 88 Z" fill="#3b82f6" stroke="#3b82f6" strokeWidth="2.5"/>
        
        {/* Right fin */}
        <path d="M 114 80 L 122 95 L 114 88 Z" fill="#3b82f6" stroke="#3b82f6" strokeWidth="2.5"/>
        
        {/* Exhaust flames */}
        <g className="animate-fade" style={{ opacity: 0, transform: 'translateY(-5px)', transition: 'all 0.5s ease-out 1.8s' }}>
          <path d="M 100 93 Q 95 98 97 103 Q 100 100 100 103" stroke="#f59e0b" strokeWidth="2.5" fill="none"/>
          <path d="M 100 93 Q 105 98 103 103 Q 100 100 100 103" stroke="#ef4444" strokeWidth="2.5" fill="none"/>
        </g>
      </g>
      
      {/* Orbit lines */}
      <g className="animate-draw" style={{ opacity: 0, transition: 'all 1.2s ease-out 1.2s' }}>
        <path 
          d="M 40 65 Q 70 35 100 35 Q 130 35 160 65" 
          stroke="#60a5fa" strokeWidth="1.5" 
          strokeDasharray="5 5"
          fill="none"
          style={{ strokeDasharray: '5 5', strokeDashoffset: 200 }}
        />
      </g>
      
      {/* Wrench icon */}
      <g className="animate-rotate" style={{ opacity: 0, transform: 'rotate(-30deg) scale(0.8)', transformOrigin: '35px 145px', transition: 'all 0.7s ease-out 1.5s' }}>
        <circle cx="35" cy="145" r="6" stroke="#60a5fa" strokeWidth="2.5" fill="none"/>
        <rect x="32" y="151" width="6" height="20" rx="1" fill="#60a5fa" stroke="#3b82f6" strokeWidth="2"/>
      </g>
      
      {/* Code brackets */}
      <g className="animate-draw" style={{ opacity: 0, transition: 'all 0.6s ease-out 1.7s' }}>
        <path 
          d="M 25 125 L 18 132 L 25 139" 
          stroke="#3b82f6" strokeWidth="3" 
          strokeLinecap="round"
          fill="none"
          style={{ strokeDasharray: 30, strokeDashoffset: 30 }}
        />
        <path 
          d="M 45 125 L 52 132 L 45 139" 
          stroke="#3b82f6" strokeWidth="3" 
          strokeLinecap="round"
          fill="none"
          style={{ strokeDasharray: 30, strokeDashoffset: 30 }}
        />
      </g>
      
      {/* Document icon */}
      <g className="animate-fade" style={{ opacity: 0, transform: 'scale(0.8)', transition: 'all 0.6s ease-out 1.9s' }}>
        <rect x="155" y="125" width="25" height="32" rx="2" stroke="#3b82f6" strokeWidth="2.5" fill="none"/>
        <line x1="160" y1="133" x2="175" y2="133" stroke="#3b82f6" strokeWidth="2" opacity="0.5"/>
        <line x1="160" y1="140" x2="175" y2="140" stroke="#3b82f6" strokeWidth="2" opacity="0.5"/>
        <line x1="160" y1="147" x2="170" y2="147" stroke="#3b82f6" strokeWidth="2" opacity="0.5"/>
      </g>
      
      {/* Paper airplane */}
      <g className="animate-float" style={{ opacity: 0, transform: 'translate(-10px, 10px)', transition: 'all 0.8s ease-out 2.1s' }}>
        <path d="M 150 80 L 165 70 L 150 60 L 152 70 Z" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeLinejoin="round"/>
        <line x1="152" y1="70" x2="165" y2="70" stroke="#60a5fa" strokeWidth="2"/>
      </g>
      
      {/* Sparkles */}
      {[{x: 55, y: 35, delay: 2.2}, {x: 145, y: 40, delay: 2.3}, {x: 65, y: 100, delay: 2.4}, {x: 135, y: 105, delay: 2.5}].map((spark, i) => (
        <g key={i} className="animate-fade" style={{ opacity: 0, transform: 'scale(0)', transition: `all 0.4s ease-out ${spark.delay}s` }}>
          <line x1={spark.x - 4} y1={spark.y} x2={spark.x + 4} y2={spark.y} stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
          <line x1={spark.x} y1={spark.y - 4} x2={spark.x} y2={spark.y + 4} stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
        </g>
      ))}
    </svg>
  );

// Removed duplicate ProductDeliveryIcon definition (already declared above)

const services = [
  {
    title: 'Strategy & Product Discovery',
    description: 'We start with clarity: goals, audience, and opportunity. Through research, stakeholder interviews, and quick validation, we define the right problem to solve and a roadmap that balances impact and effort—so you build what matters.',
    icon: <ProductDiscoveryIcon />
  },
  {
    title: 'Design, Development & Integrations',
    description: 'We design clean, accessible interfaces and build with modern stacks (Web, App, APIs). We connect your tools—payments, CRM, analytics—and add AI/LLM features where they create leverage. Everything is tested for performance, security, and reliability.',
    icon: <ProductDesignIcon />
  },
  {
    title: 'Launch, Deployment & Growth',
    description: 'Zero‑drama releases with CI/CD and cloud deployment. Post‑launch, we drive adoption with SEO and digital marketing, set up retention journeys, and iterate with data. Documentation and handover ensure your team can scale with confidence.',
    icon: <ProductDeliveryIcon />
  }
];

return (
  <section 
    ref={sectionRef}
    className="relative min-h-screen bg-[#0a1628] text-white py-20 lg:py-28 px-6 overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-[#0d1d35] via-[#0a1628] to-[#0a1628]" />
    
    <div className="relative max-w-6xl mx-auto">
      <h2
  ref={titleRef}
  className="text-5xl sm:text-6xl lg:text-7xl font-light text-primary mb-12 sm:mb-20 opacity-0 translate-y-8 transition-all duration-1000 text-center sm:text-left"
>
  How We Deliver
</h2>


      <div className="space-y-32">
        {services.map((service, index) => (
          <div
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="service-card grid md:grid-cols-2 gap-12 items-center opacity-0 translate-y-20 transition-all duration-1000"
          >
            <div className={`flex justify-center ${index === 1 ? 'md:order-2' : ''}`}>
              <div className="relative group transform transition-transform duration-500 hover:scale-105">
                {service.icon}
              </div>
            </div>

            <div className={index === 1 ? 'md:order-1' : ''}>
              <h3 className="text-3xl font-bold mb-6 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-right"></div>
    </div>

    <div className="absolute bottom-8 right-8">
      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
    </div>

    <style jsx>{`
      .service-card.is-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
      
      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
    `}</style>
  </section>
);

};

export default KnowWhat;