"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from 'usehooks-ts'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isMobile = useMediaQuery('(max-width: 768px)')
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, isMobile])

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  // Animation variants
  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.3,
        ease: 'easeOut'
      }
    }),
    mobileMenu: {
      open: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 300, damping: 30 }
      },
      closed: { 
        opacity: 0,
        x: '100%',
        transition: { duration: 0.2 }
      }
    }
  }

  // Choose text color based on current route
  const getLinkColor = (isMobileLink = false) => {
    if (isMobileLink) return 'text-gray-100' // Always light text for mobile menu for better contrast
    return pathname === '/' ? 'text-white' : 'text-gray-800'
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-2 md:py-4 md:top-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-xl md:rounded-full shadow-2xl transition-all duration-300 overflow-hidden">
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
                custom={0}
              >
                <span className="text-xl font-bold text-primary">Zyntrix</span>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-3 -mr-2 rounded-full ${getLinkColor()} hover:bg-white/10 transition-colors`}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
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
                    variants={linkVariants.mobileMenu}
                    className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-gray-900 z-50 shadow-2xl p-6 pt-20 overflow-y-auto"
                  >
                    <div className="flex flex-col space-y-4">
                      {links.map((link, i) => (
                        <motion.a
                          key={link.href}
                          href={link.href}
                          custom={i}
                          initial="hidden"
                          animate="visible"
                          variants={linkVariants}
                          className={`px-6 py-4 text-lg font-medium rounded-xl transition-colors duration-300
                            ${pathname === link.href 
                              ? 'bg-primary/20 text-white' 
                              : 'text-gray-300 hover:bg-gray-800'}`}
                        >
                          {link.name}
                        </motion.a>
                      ))}
                      <motion.a
                        href="/contact"
                        custom={links.length}
                        initial="hidden"
                        animate="visible"
                        variants={linkVariants}
                        className="mt-6 bg-primary text-white px-6 py-4 rounded-xl text-lg font-semibold text-center transition-all duration-300 shadow-lg hover:bg-primary/90"
                      >
                        Get Started
                      </motion.a>
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