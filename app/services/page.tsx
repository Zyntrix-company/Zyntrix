import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Smartphone,
  Globe,
  Bot,
  Palette,
  Server,
  Check,
  ArrowRight,
  Clock,
  Shield,
  Zap,
  Users,
} from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies",
    features: [
      "Responsive Design for all devices",
      "SEO Optimized for better rankings",
      "Fast loading performance",
      "Modern UI/UX design",
      "Content Management Systems",
      "E-commerce integration",
      "Progressive Web Apps (PWA)",
      "API development and integration",
    ],
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript"],
    startingPrice: "₹15,000",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android",
    features: [
      "Cross-platform compatibility",
      "Native performance optimization",
      "App Store submission ready",
      "Push notifications",
      "Offline functionality",
      "Real-time data synchronization",
      "In-app purchases integration",
      "Analytics and crash reporting",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    startingPrice: "₹25,000",
  },
  {
    icon: Globe,
    title: "Domain & Hosting Solutions",
    description: "Complete hosting packages with domain registration and management",
    features: [
      "99.9% uptime guarantee",
      "Free SSL certificates",
      "Daily automated backups",
      "24/7 technical support",
      "CDN integration",
      "Email hosting included",
      "One-click WordPress install",
      "Scalable hosting plans",
    ],
    technologies: ["cPanel", "CloudFlare", "AWS", "DigitalOcean", "Vercel"],
    startingPrice: "₹3,000/year",
  },
  {
    icon: Bot,
    title: "AI & Chatbot Integration",
    description: "Intelligent chatbots and AI-powered features for enhanced user engagement",
    features: [
      "Custom chatbot development",
      "Natural language processing",
      "Multi-platform integration",
      "Analytics and insights",
      "24/7 automated support",
      "Lead generation automation",
      "Custom AI model training",
      "Voice assistant integration",
    ],
    technologies: ["OpenAI", "Dialogflow", "TensorFlow", "Python", "Node.js"],
    startingPrice: "₹20,000",
  },
  {
    icon: Palette,
    title: "Design Services",
    description: "Professional design services for web, mobile, and print media",
    features: [
      "UI/UX design in Figma",
      "Brand identity design",
      "Logo and graphic design",
      "Print design (posters, brochures)",
      "Social media graphics",
      "Website mockups and prototypes",
      "Design system creation",
      "Responsive design layouts",
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle"],
    startingPrice: "₹8,000",
  },
  {
    icon: Server,
    title: "Technology Integration",
    description: "Seamless integration of third-party services and modern technologies",
    features: [
      "Payment gateway integration",
      "Social media API integration",
      "Database design and setup",
      "Cloud services configuration",
      "Security implementation",
      "Performance optimization",
      "DevOps and CI/CD setup",
      "Legacy system modernization",
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "MongoDB"],
    startingPrice: "₹12,000",
  },
]

const packages = [
  {
    name: "Starter Package",
    price: "₹9,999",
    duration: "7 days",
    description: "Perfect for small businesses and startups",
    features: [
      "Static website (up to 5 pages)",
      "Responsive design",
      "Domain registration (.com/.in)",
      "1 year hosting included",
      "SSL certificate",
      "Basic SEO setup",
      "Contact form integration",
      "2 rounds of revisions",
    ],
    popular: false,
    color: "border-border",
  },
  {
    name: "Professional Package",
    price: "₹24,999",
    duration: "14 days",
    description: "Ideal for growing businesses with dynamic needs",
    features: [
      "Dynamic website (up to 10 pages)",
      "Content Management System",
      "Advanced responsive design",
      "Domain + hosting (1 year)",
      "Premium SSL certificate",
      "Advanced SEO optimization",
      "Social media integration",
      "Analytics setup",
      "Email hosting (5 accounts)",
      "3 rounds of revisions",
      "Basic maintenance (3 months)",
    ],
    popular: true,
    color: "border-primary",
  },
  {
    name: "Enterprise Package",
    price: "₹49,999",
    duration: "30 days",
    description: "Complete solution for established businesses",
    features: [
      "Custom web application",
      "E-commerce functionality",
      "Advanced CMS with user roles",
      "Premium hosting (1 year)",
      "Multi-domain SSL",
      "Advanced SEO + marketing tools",
      "Payment gateway integration",
      "Custom API development",
      "Mobile app (basic version)",
      "Email marketing setup",
      "Analytics dashboard",
      "Unlimited revisions",
      "6 months maintenance included",
      "Priority support",
    ],
    popular: false,
    color: "border-accent",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Our <span className="text-primary">Services</span> & Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Comprehensive IT services designed to transform your business with cutting-edge technology solutions. From
              web development to AI integration, we deliver excellence in every project.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>Latest Technology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Detailed Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of services designed to meet all your digital needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <Badge variant="secondary" className="text-primary font-semibold">
                          From {service.startingPrice}
                        </Badge>
                      </div>
                      <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your business needs. All packages include our quality guarantee and
              support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? "ring-2 ring-primary shadow-xl scale-105" : ""} ${pkg.color} transition-all duration-300 hover:shadow-lg`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-primary">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground">Delivered in {pkg.duration}</div>
                  </div>
                  <CardDescription className="text-base pt-2">{pkg.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full mt-6" variant={pkg.popular ? "default" : "outline"} size="lg" asChild>
                    <Link href="/contact" className="flex items-center gap-2">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Need a custom solution? We create tailored packages for unique requirements.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Get in touch with our expert team to discuss your requirements and receive a detailed proposal tailored to
              your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  )
}
