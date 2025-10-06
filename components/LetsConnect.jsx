
"use client"
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LetsConnect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const containerRef = useRef(null);
  const letsGetRef = useRef(null);
  const formRef = useRef(null);
  const socialRef = useRef(null);
  const connectedRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate "Let's get" heading
      gsap.from(letsGetRef.current, {
        scrollTrigger: {
          trigger: letsGetRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
        x: -100,
        opacity: 0,
      });

      // Animate form inputs with stagger
      gsap.from(formRef.current.querySelectorAll('input, textarea, button'), {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 70%',
          end: 'top 20%',
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
      });

      // Animate social media section
      gsap.from(socialRef.current, {
        scrollTrigger: {
          trigger: socialRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        },
        y: 30,
        opacity: 0,
      });

      // Animate "connected" text
      gsap.from(connectedRef.current, {
        scrollTrigger: {
          trigger: connectedRef.current,
          start: 'top 90%',
          end: 'top 40%',
          scrub: 1,
        },
        x: 100,
        opacity: 0,
      });

      // Background color animation on scroll
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
        backgroundImage: 'linear-gradient(to bottom right, #34d399, #10b981)',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-green-400 to-green-300 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl">
        {/* Let's get connected heading */}
        <div ref={letsGetRef} className="mb-12">
          <h1 className="text-7xl font-bold text-gray-900 mb-2">
            Let's get
          </h1>
        </div>

        {/* Form Section */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            {/* Message Textarea */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 md:row-span-2 resize-none"
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded font-medium hover:bg-gray-800 transition-colors"
          >
            Send message
          </button>
        </form>

        {/* Social Media Section */}
        <div ref={socialRef}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our social media
          </h2>
          <div className="flex gap-6 text-gray-900">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-gray-700 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:hello@verter.com"
              className="underline hover:text-gray-700 transition-colors"
            >
              hello@verter.com
            </a>
            <a 
              href="#schedule" 
              className="underline hover:text-gray-700 transition-colors"
            >
              Schedule a call
            </a>
          </div>
        </div>

        {/* Connected text */}
        <div ref={connectedRef} className="mt-24 text-right">
          <h1 className="text-7xl font-bold text-gray-900">
            connected
          </h1>
        </div>
      </div>
    </div>
  );
}