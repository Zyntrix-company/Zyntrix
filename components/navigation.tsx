"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  // Animation variants for links
  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  // Choose text color based on current route
  const getLinkColor = () => pathname === '/' ? 'text-white' : 'text-black'

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-full shadow-2xl transition-all duration-300">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between px-6 py-3 relative z-10">
            {/* Logo */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={linkVariants}
            >
              <span className="text-xl font-bold text-primary">Zyntrix</span>
            </motion.div>
            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              {links.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                  transition={{ delay: 0.1 * idx }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-primary/10
                    ${getLinkColor()}
                    ${pathname === link.href ? "underline decoration-primary underline-offset-8 font-semibold" : ""}
                  `}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            {/* CTA Button */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              transition={{ delay: 0.6 }}
              className="flex items-center"
            >
              <a
                href="/contact"
                className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg"
              >
                Get Started
              </a>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-center justify-between px-4 py-3">
              {/* Logo */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={linkVariants}
              >
                <span className="text-xl font-bold text-primary">Zyntrix</span>
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${getLinkColor()} p-2 rounded-full hover:bg-white/10 transition-colors`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="px-4 pb-4 space-y-2"
              >
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-primary/10
                      ${getLinkColor()}
                      ${pathname === link.href ? "underline decoration-primary underline-offset-8 font-semibold" : ""}
                    `}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold text-center transition-all duration-300 shadow-lg mt-2"
                >
                  Get Started
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}