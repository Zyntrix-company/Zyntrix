import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Users, Code, Smartphone, Globe, Bot, Palette, Server } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

const projects = [
  {
    id: 1,
    title: "E-Commerce Fashion Store",
    category: "Web Development",
    description:
      "Complete e-commerce solution with payment gateway integration, inventory management, and responsive design for a fashion retailer.",
    image: "/modern-ecommerce-fashion-website.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    features: ["Payment Integration", "Inventory Management", "Admin Dashboard", "Mobile Responsive"],
    duration: "21 days",
    client: "Fashion Forward Ltd.",
    year: "2024",
    icon: Globe,
    link: "#",
  },
  {
    id: 2,
    title: "Restaurant Management App",
    category: "Mobile App",
    description:
      "Cross-platform mobile application for restaurant order management with real-time notifications and analytics dashboard.",
    image: "/restaurant-management-mobile-app-interface.jpg",
    technologies: ["React Native", "Firebase", "Node.js", "Express", "MongoDB"],
    features: ["Real-time Orders", "Push Notifications", "Analytics", "Multi-platform"],
    duration: "28 days",
    client: "Taste Buds Restaurant",
    year: "2024",
    icon: Smartphone,
    link: "#",
  },
  {
    id: 3,
    title: "AI Customer Support Chatbot",
    category: "AI Integration",
    description:
      "Intelligent chatbot system with natural language processing for automated customer support and lead generation.",
    image: "/ai-chatbot-dashboard.png",
    technologies: ["Python", "OpenAI", "Node.js", "React", "TensorFlow"],
    features: ["NLP Processing", "Multi-language", "Analytics", "CRM Integration"],
    duration: "14 days",
    client: "TechCorp Solutions",
    year: "2024",
    icon: Bot,
    link: "#",
  },
  {
    id: 4,
    title: "Healthcare Portal",
    category: "Web Development",
    description:
      "Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine features.",
    image: "/healthcare-management-portal-dashboard.jpg",
    technologies: ["Next.js", "PostgreSQL", "Node.js", "Socket.io", "Tailwind CSS"],
    features: ["Patient Management", "Appointment System", "Video Calls", "Secure Data"],
    duration: "35 days",
    client: "MediCare Plus",
    year: "2023",
    icon: Code,
    link: "#",
  },
  {
    id: 5,
    title: "Brand Identity & Website",
    category: "Design + Development",
    description:
      "Complete brand identity design with logo, marketing materials, and modern website for a startup company.",
    image: "/modern-brand-identity-and-website-design.jpg",
    technologies: ["Figma", "Next.js", "Framer Motion", "Tailwind CSS"],
    features: ["Brand Design", "Logo Creation", "Marketing Materials", "Responsive Website"],
    duration: "18 days",
    client: "InnovateTech Startup",
    year: "2023",
    icon: Palette,
    link: "#",
  },
  {
    id: 6,
    title: "Cloud Infrastructure Setup",
    category: "Technology Integration",
    description:
      "Complete cloud migration and infrastructure setup with automated deployment pipelines and monitoring systems.",
    image: "/cloud-infrastructure-dashboard-monitoring.jpg",
    technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
    features: ["Cloud Migration", "Auto Deployment", "Monitoring", "Scalable Architecture"],
    duration: "25 days",
    client: "DataFlow Enterprises",
    year: "2023",
    icon: Server,
    link: "#",
  },
]

const stats = [
  { number: "10+", label: "Projects Completed" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "7", label: "Average Delivery Days" },
  { number: "2", label: "Expert Developers" },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Explore our successful projects and see how we've helped businesses transform their digital presence with
              innovative solutions and cutting-edge technology.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/90 text-primary-foreground">{project.category}</Badge>
                    </div>
                  </div>

                  <div
                    className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {project.year} • {project.duration}
                        </div>
                      </div>
                    </div>

                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl lg:text-3xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Client: {project.client}
                        </h4>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button variant="outline" className="w-fit bg-transparent" asChild>
                        <Link href={project.link} className="flex items-center gap-2">
                          View Project
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Ready to Start Your Next Project?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Join our satisfied clients and let us help you bring your digital vision to life with our expertise and
              dedication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">View Our Services</Link>
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
