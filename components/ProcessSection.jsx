"use client";
import React, { useState, useEffect, useRef } from 'react';

const ProcessSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  
  // Process steps data
  const processSteps = [
    {
      title: 'Product Discovery & Strategy',
      description: 'We begin by understanding your vision, target audience, and business goals. Through in-depth research and analysis, we identify opportunities and create a solid foundation for your product.',
      icon: (
        <svg className="w-40 h-40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Magnifying Glass */}
          <circle 
            cx="80" cy="80" r="40" 
            stroke="#60a5fa" 
            strokeWidth="4" 
            fill="none"
            className="animate-draw"
            style={{ strokeDasharray: 251, strokeDashoffset: 251 }}
          />
          <line 
            x1="120" y1="120" x2="150" y2="150" 
            stroke="#60a5fa" 
            strokeWidth="4" 
            strokeLinecap="round"
            className="animate-draw"
            style={{ strokeDasharray: 42, strokeDashoffset: 42, animationDelay: '0.3s' }}
          />
          
          {/* Chart */}
          <rect x="40" y="40" width="15" height="60" fill="#60a5fa" opacity="0.7" className="animate-grow" style={{ transformOrigin: 'bottom', transform: 'scaleY(0)' }} />
          <rect x="65" y="60" width="15" height="40" fill="#60a5fa" opacity="0.7" className="animate-grow" style={{ transformOrigin: 'bottom', transform: 'scaleY(0)', animationDelay: '0.2s' }} />
          <rect x="90" y="30" width="15" height="70" fill="#60a5fa" opacity="0.7" className="animate-grow" style={{ transformOrigin: 'bottom', transform: 'scaleY(0)', animationDelay: '0.4s' }} />
          
          {/* Dots */}
          {[30, 80, 130].map((y, i) => (
            <circle key={i} cx="160" cy={y} r="8" fill="#4ade80" className="animate-pulse" style={{ opacity: 0, animationDelay: `${0.1 * i}s` }} />
          ))}
        </svg>
      )
    },
    {
      title: 'Design & Development',
      description: 'From concept to code, we bring ideas to life with beautiful, intuitive interfaces and robust functionality. Our full-stack expertise ensures a seamless user experience from front to back.',
      icon: (
        <svg className="w-40 h-40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Laptop */}
          <rect x="50" y="60" width="100" height="70" rx="5" stroke="#60a5fa" strokeWidth="4" fill="#0a1628" />
          <rect x="65" y="70" width="70" height="45" rx="2" fill="#1e3a8a" className="animate-pulse" />
          <rect x="75" y="130" width="50" height="4" rx="2" fill="#60a5fa" />
          
          {/* Code Brackets */}
          <path d="M40 100 L30 110 L40 120" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" className="animate-bounce" style={{ animationDelay: '0.2s' }} />
          <path d="M160 100 L170 110 L160 120" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" className="animate-bounce" style={{ animationDelay: '0.3s' }} />
          
          {/* Mobile */}
          <rect x="120" y="30" width="30" height="50" rx="3" stroke="#60a5fa" strokeWidth="3" fill="#0a1628" className="animate-float" />
          <rect x="125" y="35" width="20" height="5" rx="1" fill="#60a5fa" opacity="0.5" />
          <circle cx="135" cy="70" r="1.5" fill="#60a5fa" />
        </svg>
      )
    },
    {
      title: 'Deployment & Growth',
      description: 'We don\'t just launch products, we grow them. With continuous integration, performance optimization, and data-driven improvements, we ensure your product evolves with your users\' needs.',
      icon: (
        <svg className="w-40 h-40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Rocket */}
          <path d="M100 40 L80 60 L90 70 L70 90 L80 100 L100 80 L120 100 L130 90 L110 70 L120 60 Z" fill="#60a5fa" className="animate-float" />
          <path d="M100 80 L100 150" stroke="#60a5fa" strokeWidth="4" strokeDasharray="1,8" className="animate-dash" />
          
          {/* Graph */}
          <path d="M40 150 L60 140 L80 155 L100 135 L120 145 L140 130" stroke="#4ade80" strokeWidth="4" fill="none" className="animate-draw" style={{ strokeDasharray: 200, strokeDashoffset: 200 }} />
          
          {/* Circles */}
          <circle cx="60" cy="140" r="4" fill="#4ade80" className="animate-ping" style={{ animationDelay: '0.3s' }} />
          <circle cx="100" cy="135" r="4" fill="#4ade80" className="animate-ping" style={{ animationDelay: '0.6s' }} />
          <circle cx="140" cy="130" r="4" fill="#4ade80" className="animate-ping" style={{ animationDelay: '0.9s' }} />
        </svg>
      )
    }
  ];

  // Auto-rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % processSteps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [processSteps.length]);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.process-step');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-[#0a1628] text-white py-20 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1d35] via-[#0a1628] to-[#0a1628]" />
      
      <div className="relative max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-light text-center md:text-left text-[#60a5fa] mb-16 md:mb-24"
        >
          Our Process
        </h2>

        {/* Mobile Tabs */}
        <div className="md:hidden flex justify-center mb-8 space-x-4">
          {processSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeTab === index ? 'bg-[#60a5fa] scale-125' : 'bg-gray-600'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative">
          {/* Desktop Progress Bar */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-[#60a5fa] to-[#4ade80] -translate-x-1/2">
            <div 
              className="absolute left-0 right-0 bg-white h-1/3 transition-all duration-1000 ease-in-out"
              style={{ top: `${(activeTab / (processSteps.length - 1)) * 66.66}%` }}
            />
          </div>

          {/* Process Steps */}
          <div className="space-y-32 md:space-y-0">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`process-step opacity-0 transition-all duration-1000 ${
                  activeTab === index ? 'opacity-100 scale-105' : 'opacity-40 scale-95'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex flex-col md:flex-row items-center">
                  {/* Icon */}
                  <div className={`w-40 h-40 mb-8 md:mb-0 md:mr-12 transform transition-transform ${
                    activeTab === index ? 'scale-110' : 'scale-90'
                  }`}>
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className={`text-center md:text-left max-w-md transition-all ${
                    activeTab === index ? 'opacity-100 translate-x-0' : 'opacity-0 md:opacity-60 md:translate-x-8'
                  }`}>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="hidden md:flex justify-between max-w-6xl mx-auto mt-16 px-6">
        <button 
          onClick={() => setActiveTab(prev => (prev - 1 + processSteps.length) % processSteps.length)}
          className="text-[#60a5fa] hover:text-white transition-colors"
          aria-label="Previous step"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={() => setActiveTab(prev => (prev + 1) % processSteps.length)}
          className="text-[#60a5fa] hover:text-white transition-colors"
          aria-label="Next step"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style jsx global>{`
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes grow {
          to { transform: scaleY(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-draw {
          animation: draw 1.5s ease-out forwards;
        }
        .animate-grow {
          animation: grow 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-dash {
          animation: dash 2s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .process-step {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .process-step:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
