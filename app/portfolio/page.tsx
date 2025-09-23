import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Users, Code, Smartphone, Globe, Star, type LucideIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

type Project = {
  id: number
  title: string
  category: string
  description: string
  image?: string
  video?: string
  technologies: string[]
  features: string[]
  duration: string
  client: string
  year: string
  icon: LucideIcon
  link: string
  showView?: boolean
  apkUrl?: string
  review?: {
    rating: number
    text: string
    author: string
  }
}

type Stat = {
  number: string
  label: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "One Aim – Client Website",
    category: "Client Website",
    description:
      "Corporate website for an IT services company with responsive layout, service pages, and SEO-focused structure.",
    image: "/ONEAIM.png",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    features: ["Responsive Design", "SEO", "Contact & Inquiry Forms"],
    duration: "—",
    client: "One Aim",
    year: "2025",
    icon: Globe,
    link: "https://www.theoneaim.in/",
    review: {
      rating: 5,
      text: "Delivered on time with great SEO and clean design.",
      author: "Rahul Mehta, One Aim",
    },
  },
  {
    id: 2,
    title: "Console Profile & App Publishing",
    category: "Mobile Publishing",
    description:
      "Managing releases and testing tracks on Google Play Console with multiple apps published and in testing.",
    image: "/b1.jpg",
    technologies: ["Android", "React Native", "Google Play Console"],
    features: ["Production Releases", "Closed Testing", "App Management"],
    duration: "—",
    client: "Internal",
    year: "2025",
    icon: Smartphone,
    link: "#",
    showView: false,
    review: {
      rating: 5,
      text: "Smooth release management and quick turnaround on updates.",
      author: "Product Lead",
    },
  },
  {
    id: 3,
    title: "Multi‑Vendor E‑Commerce Platform",
    category: "Web App",
    description:
      "E‑commerce web app with admin and seller portals: product listings, orders, payouts, and role-based dashboards.",
    image: "/mobile.png",
    technologies: ["Flutter", "Node.js", "MongoDB", "Razorpay"],
    features: ["Admin Dashboard", "Seller Accounts", "Inventory & Orders", "Payments"],
    duration: "—",
    client: "—",
    year: "2025",
    icon: Code,
    link: "#",
    apkUrl: "/apks/ecom-app.apk",
    review: {
      rating: 4,
      text: "Robust features and reliable performance across modules.",
      author: "Store Admin",
    },
  },
  {
    id: 4,
    title: "AdMob Integration & Monetization",
    category: "Mobile Monetization",
    description:
      "Implemented AdMob for multiple apps with banner, interstitial, and rewarded ads, including mediation setup and policy-compliant ad limits.",
    image: "/c.png",
    technologies: ["AdMob", "Android", "iOS", "Flutter", "React Native"],
    features: ["Banner Ads", "Interstitial Ads", "Rewarded Ads", "Mediation"],
    duration: "—",
    client: "Multiple Apps",
    year: "2025",
    icon: Smartphone,
    link: "#",
    showView: false,
  },
  {
    id: 5,
    title: "Qruzine – QR Scanning System",
    category: "Full-Stack",
    description:
      "QR-based ordering and management for hotels, cafes, and restaurants: table QR menus, order routing, and kitchen dashboard.",
    image: "/d.png",
    technologies: ["Node.js", "React", "MongoDB", "Express"],
    features: ["QR Menus", "Order Management", "Kitchen Display", "Analytics"],
    duration: "—",
    client: "Hospitality Businesses",
    year: "2025",
    icon: Smartphone,
    link: "#",
  },
]

const stats: Stat[] = [
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

            {/* AdMob capability note */}
            <div className="flex flex-col items-center gap-3 mb-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">AdMob Integration</Badge>
              <p className="text-sm text-muted-foreground">
                We manage an active AdMob account and integrate banner, interstitial, and rewarded ads into apps.
              </p>
            </div>

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
                    {project.video ? (
                      <video
                        src={project.video}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        autoPlay
                        playsInline
                        muted
                        loop
                      />
                    ) : (
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
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

                      {project.apkUrl && (
                        <div className="pt-4">
                          <Button asChild>
                            <a href={project.apkUrl} download>
                              Download APK
                            </a>
                          </Button>
                        </div>
                      )}

                      {project.showView !== false && (
                        <Button variant="outline" className="w-fit bg-transparent" asChild>
                          <Link href={project.link} className="flex items-center gap-2">
                            View Project
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}

                      {/* Review Footer */}
                      {project.review && (
                        <div className="mt-6 border-t pt-4">
                          <div className="flex items-center gap-1" aria-label={`Rating: ${project.review.rating} out of 5`}>
                            {[0, 1, 2, 3, 4].map((i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < (project.review?.rating ?? 0) ? "text-yellow-500" : "text-muted-foreground"}`}
                              />
                            ))}
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">“{project.review.text}”</p>
                          <p className="mt-1 text-xs text-muted-foreground">— {project.review.author}</p>
                        </div>
                      )}
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
