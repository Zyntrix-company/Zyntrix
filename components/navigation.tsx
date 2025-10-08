"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "usehooks-ts"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname() || "/"
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen, isMobile])

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.2 },
    },
  }

  const getLinkColor = (isMobileLink = false) => {
    if (isMobileLink) return "text-gray-100"
    return pathname === "/" ? "text-white" : "text-gray-800"
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 py-2 md:py-4 md:top-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-xl md:rounded-full shadow-2xl transition-all duration-300 overflow-hidden">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between px-6 py-3 relative z-10">
            {/* Logo */}
            <div>
              <Link href="/" className="text-xl font-bold text-primary">
                Zyntrix
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              {links.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-primary/10 cursor-pointer ${getLinkColor()} ${
                      pathname === link.href ? "underline decoration-primary underline-offset-8 font-semibold" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="/contact"
                className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:bg-primary/90"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-center justify-between px-4 py-3">
              {/* Logo */}
              <div>
                <Link href="/" className="text-xl font-bold text-primary">
                  Zyntrix
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full ${getLinkColor()} hover:bg-white/10 transition-colors z-50 relative`}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>

            {/* Mobile Menu Overlay and Dropdown */}
            <AnimatePresence>
              {isOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={() => setIsOpen(false)}
                  />
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={mobileMenuVariants}
                    className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-gray-900 z-50 shadow-2xl p-6 pt-20 overflow-y-auto"
                  >
                    <div className="flex flex-col space-y-2">
                      {links.map((link, i) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.1 * i, duration: 0.3 },
                          }}
                        >
                          <Link
                            href={link.href}
                            className={`block px-6 py-3 text-lg font-medium rounded-xl transition-colors duration-300 ${
                              pathname === link.href ? "bg-primary/20 text-white" : "text-gray-300 hover:bg-gray-800"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
                        </motion.div>
                      ))}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { delay: 0.1 * links.length, duration: 0.3 },
                        }}
                      >
                        <Link
                          href="/contact"
                          className="block w-full px-6 py-3 mt-4 text-lg font-semibold text-center text-white transition-colors duration-300 bg-primary rounded-lg hover:bg-primary/90"
                          onClick={() => setIsOpen(false)}
                        >
                          Get Started
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  )
}
