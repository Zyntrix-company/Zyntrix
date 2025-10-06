'use client'

import { Code, Smartphone, Globe, Zap, Shield, Users, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    title: "Lightning Fast",
    description: "Optimized for speed and performance with modern web technologies.",
  },
  {
    icon: <Shield className="w-6 h-6 text-green-500" />,
    title: "Secure by Design",
    description: "Built with security best practices to protect your data and privacy.",
  },
  {
    icon: <Users className="w-6 h-6 text-purple-500" />,
    title: "User Focused",
    description: "Designed with user experience at the forefront of every decision.",
  },
  {
    icon: <BarChart className="w-6 h-6 text-orange-500" />,
    title: "Analytics Ready",
    description: "Integrated analytics to help you understand and grow your audience.",
  },
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(featureRefs.current, {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.7)",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Modern Web
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover how our platform can help you build better web experiences with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              initial={{ y: 30, opacity: 0 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
            Explore All Features
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
