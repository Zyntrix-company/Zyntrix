"use client"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from 'usehooks-ts'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null) // Track which dropdown is open
  const pathname = usePathname()
  const isMobile = useMediaQuery('(max-width: 768px)')
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setDropdownOpen(null)
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

  // Example links data (add dropdown property for links with children)
  const links = [
    { name: "Home", href: "/" },
    { 
      name: "Services", 
      href: "/services",
      dropdown: [
        { name: "Web Development", href: "/services/web" },
        { name: "Mobile Apps", href: "/services/mobile" },
        { name: "UI/UX Design", href: "/services/design" }
      ]
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  // Animation variants
  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.3, ease: 'easeOut' }
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
    if (isMobileLink) return 'text-gray-100'
    return pathname === '/' ? 'text-white' : 'text-gray-800'
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 py-2 md:py-4 md:top-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-xl md:rounded-full shadow-2xl transition-all duration-300 overflow-hidden">
          
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between px-6 py-3 relative z-10">
            {/* Logo */}
            <motion.div initial="hidden" animate="visible" variants={linkVariants}>
              <span className="text-xl font-bold text-primary">Zyntrix</span>
            </motion.div>
            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              {links.map((link, idx) => (
                <div key={link.href} className="relative group">
                  <motion.a
                    href={link.href}
                    initial="hidden"
                    animate="visible"
                    variants={linkVariants}
                    transition={{ delay: 0.1 * idx }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-primary/10 cursor-pointer ${getLinkColor()} ${pathname === link.href ? "underline decoration-primary underline-offset-8 font-semibold" : ""}`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <span className="inline-block ml-1 align-middle">
                        <ChevronDown size={16} className="inline transition-transform group-hover:rotate-180" />
                      </span>
                    )}
                  </motion.a>
                  {/* Dropdown on Desktop */}
                  {link.dropdown && (
                    <div className="absolute left-0 mt-2 min-w-[180px] bg-white text-gray-900 rounded-lg shadow-lg p-2 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity duration-200 z-20">
                      {link.dropdown.map((sublink) => (
                        <a 
                          key={sublink.href}
                          href={sublink.href}
                          className="block px-4 py-2 rounded hover:bg-primary/10 text-sm"
                        >
                          {sublink.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* CTA Button */}
            <motion.div initial="hidden" animate="visible" variants={linkVariants} transition={{ delay: 0.6 }} className="flex items-center">
              <a href="/contact" className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg">
                Get Started
              </a>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-center justify-between px-4 py-3">
              {/* Logo */}
              <motion.div initial="hidden" animate="visible" variants={linkVariants} custom={0}>
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
                    <div className="flex flex-col space-y-2">
                      {links.map((link, i) => (
                        <div key={link.href} className="flex flex-col">
                          <motion.button
                            onClick={() => link.dropdown ? setDropdownOpen(dropdownOpen === i ? null : i) : setIsOpen(false)}
                            className={`flex items-center justify-between px-6 py-3 text-lg font-medium rounded-xl transition-colors duration-300 w-full
                              ${pathname === link.href 
                                ? 'bg-primary/20 text-white' 
                                : 'text-gray-300 hover:bg-gray-800'}`}
                            initial="hidden"
                            animate="visible"
                            variants={linkVariants}
                            custom={i}
                          >
                            <span>{link.name}</span>
                            {link.dropdown && (
                              dropdownOpen === i
                                ? <ChevronUp size={20} />
                                : <ChevronDown size={20} />
                            )}
                          </motion.button>
                          {/* Mobile Dropdown */}
                          {link.dropdown && dropdownOpen === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="flex flex-col pl-8 bg-gray-800 rounded-b-xl space-y-1 overflow-hidden"
                            >
                              {link.dropdown.map((sublink) => (
                                <a
                                  key={sublink.href}
                                  href={sublink.href}
                                  className="py-2 text-gray-100 hover:text-primary transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {sublink.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ))}
                      <motion.a
                        href="/contact"
                        custom={links.length}
                        initial="hidden"
                        animate="visible"
                        variants={linkVariants}
                        className="mt-6 bg-primary text-white px-6 py-4 rounded-xl text-lg font-semibold text-center transition-all duration-300 shadow-lg hover:bg-primary/90"
                        onClick={() => setIsOpen(false)}
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