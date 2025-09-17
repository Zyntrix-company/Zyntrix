import Link from "next/link"
import { Phone, Mail, MapPin, Code, Smartphone, Globe, Bot, Palette, Server } from "lucide-react"

const services = [
  { name: "Web Development", href: "/services", icon: Code },
  { name: "Mobile Apps", href: "/services", icon: Smartphone },
  { name: "Hosting & Domain", href: "/services", icon: Globe },
  { name: "AI Integration", href: "/services", icon: Bot },
  { name: "Design Services", href: "/services", icon: Palette },
  { name: "Tech Integration", href: "/services", icon: Server },
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              Zyntrix
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Transforming businesses with innovative IT solutions. Professional web development, mobile apps, and
              technology integration services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 8273194768</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 6395183380</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>poojadevrari07@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>India & Remote Worldwide</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <service.icon className="h-3 w-3" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Business Info</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <div className="font-medium text-foreground mb-1">Experience</div>
                <div>11+ Years Combined</div>
              </div>
              <div>
                <div className="font-medium text-foreground mb-1">Projects</div>
                <div>10+ Successfully Delivered</div>
              </div>
              <div>
                <div className="font-medium text-foreground mb-1">Delivery</div>
                <div>7-30 Days Average</div>
              </div>
              <div>
                <div className="font-medium text-foreground mb-1">Support</div>
                <div>24/7 Available</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 Zyntrix. All rights reserved. Built with passion by our expert team.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
