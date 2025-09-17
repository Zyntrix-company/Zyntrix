import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Smartphone, Globe, Bot, Palette, Server, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with modern frameworks like Next.js, React, and Node.js",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience",
    features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
  },
  {
    icon: Globe,
    title: "Domain & Hosting",
    description: "Complete hosting solutions with domain registration, SSL certificates, and reliable uptime",
    features: ["99.9% Uptime", "SSL Included", "Daily Backups", "24/7 Support"],
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Chatbots and AI-powered features to enhance user engagement and automate customer support",
    features: ["Smart Chatbots", "AI Analytics", "Automation", "Custom Training"],
  },
  {
    icon: Palette,
    title: "Design Services",
    description: "Professional design services including Figma designs, posters, and complete brand identity",
    features: ["Figma Designs", "Brand Identity", "Print Design", "UI/UX Design"],
  },
  {
    icon: Server,
    title: "Tech Integration",
    description: "Integration of new technologies and third-party services to enhance your digital ecosystem",
    features: ["API Integration", "Database Setup", "Cloud Services", "Security Implementation"],
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Comprehensive IT Solutions for Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From web development to AI integration, we provide end-to-end technology solutions that drive growth and
            innovation for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
