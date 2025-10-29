"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Know = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="relative min-h-[75vh] bg-[#0a1628] text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1d35] to-[#0a1628]" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#4ade80] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-10 lg:pt-18">
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Content */}
          <div className="space-y-6">
            {/* Our Title */}
            <motion.h1 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-6xl font-light text-[#4ade80] mb-4"
              style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif',
                textShadow: '0 10px 30px rgba(74, 222, 128, 0.3)',
              }}
            >
              Zyntrix
            </motion.h1>

            {/* Main Heading */}
            <motion.h2 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-bold leading-tight"
            >
              Build, Market & Scale<br />Your Digital Products
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-base text-gray-300 leading-relaxed"
            >
              End‑to‑end delivery from idea to growth: web and app development, SEO and digital marketing, customer
              retention and CRM journeys, seamless integrations and automation, AI/LLM features, testing, and
              deployment. Every step designed to move your metrics, not just ship features.
            </motion.p>
            
            {/* Services Grid */}
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-3 pt-2"
            >
              <div className="space-y-2">
                <p className="text-[#4ade80] font-semibold">Development</p>
                <p className="text-sm text-gray-400">Web & Mobile Solutions</p>
              </div>
              <div className="space-y-2">
                <p className="text-[#4ade80] font-semibold">Marketing</p>
                <p className="text-sm text-gray-400">Digital Campaigns & Ads</p>
              </div>
              <div className="space-y-2">
                <p className="text-[#4ade80] font-semibold">Retention</p>
                <p className="text-sm text-gray-400">Customer Engagement</p>
              </div>
              <div className="space-y-2">
                <p className="text-[#4ade80] font-semibold">Connectivity</p>
                <p className="text-sm text-gray-400">Seamless Integration</p>
              </div>
            </motion.div>

            {/* CTA Link */}
            <motion.a 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              href="/portfolio"
              className="inline-block text-lg text-white border-b-2 border-white pb-1 hover:text-[#4ade80] hover:border-[#4ade80] transition-colors duration-300"
            >
              Explore our work
            </motion.a>
          </div>

          {/* Right Content - Stats & Tech Stack */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="relative space-y-6"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.03, borderColor: "rgba(74, 222, 128, 0.5)" }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#0d1d35] to-[#0a1628] p-5 rounded-lg border border-[#4ade80]/20"
              >
                <p className="text-4xl font-bold text-[#4ade80] mb-2">10+</p>
                <p className="text-sm text-gray-400">Projects Delivered</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.03, borderColor: "rgba(74, 222, 128, 0.5)" }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#0d1d35] to-[#0a1628] p-5 rounded-lg border border-[#4ade80]/20"
              >
                <p className="text-4xl font-bold text-[#4ade80] mb-2">95%</p>
                <p className="text-sm text-gray-400">Client Retention</p>
              </motion.div>
            </div>

            {/* Tech Stack */}
            <motion.div 
              whileHover={{ borderColor: "rgba(74, 222, 128, 0.3)" }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-[#0d1d35] to-[#0a1628] p-6 rounded-lg border border-[#4ade80]/20"
            >
              <h3 className="text-xl font-semibold text-[#4ade80] mb-4">Our Tech Stack</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Frontend</p>
                  <p className="text-white">React · Next.js · Vue · Tailwind CSS</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Backend</p>
                  <p className="text-white">Node.js · Python · PostgreSQL · MongoDB</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Mobile</p>
                  <p className="text-white">React Native · Flutter</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Marketing</p>
                  <p className="text-white">SEO · Google Ads · Social Media · Analytics</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Know;