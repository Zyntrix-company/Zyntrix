"use client";
import Navigation from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Users, Code, Smartphone, Globe, Star, Music, X, type LucideIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { useEffect, useMemo, useState } from "react"

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
    title: "Qruzine – QR-based Ordering System",
    category: "Full-Stack",
    description:
      "Qruzine is a comprehensive QR-based ordering platform that transforms the dining experience. Built for enterprise-scale reliability, it enables seamless menu browsing, real-time order placement, secure payment processing, and kitchen management—all through a simple QR code scan.",
    image: "/heroo.png",
    technologies: [
      "Next.js",
      "Express.js",
      "TailwindCSS",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "AWS EC2",
    ],
    features: [
      "Used by 10+ restaurants",
      "Serving 500+ customers daily",
      "QR Menus",
      "Real-time Orders",
      "Secure Payments",
      "Kitchen Management",
    ],
    duration: "—",
    client: "Hospitality Businesses",
    year: "2025",
    icon: Smartphone,
    link: "https://qruzine.com/",
  },
  {
    id: 2,
    title: "Multi‑Vendor E‑Commerce Platform",
    category: "Web App",
    description:
      "E‑commerce platform with admin and seller portals: product listings, orders, payouts, and role-based dashboards.",
    image: "/multi_vendor.png",
    technologies: ["Flutter", "Node.js", "MongoDB", "Razorpay"],
    features: ["Admin Dashboard", "Seller Accounts", "Inventory & Orders", "Payments"],
    duration: "—",
    client: "—",
    year: "2025",
    icon: Code,
    link: "https://landing-page2-f1v9.vercel.app/",
    apkUrl: "/apks/ecom-app.apk",
  },
  {
    id: 3,
    title: "Google Play Console – Publishing & Accounts",
    category: "Mobile Publishing",
    description:
      "Managing releases and testing tracks on Google Play Console with multiple apps published, closed testing, and account setups.",
    image: "/google_console.png",
    technologies: ["Android", "React Native", "Google Play Console"],
    features: ["Production Releases", "Closed Testing", "App Management"],
    duration: "—",
    client: "Internal",
    year: "2025",
    icon: Smartphone,
    link: "#",
    showView: false,
  },
  {
    id: 4,
    title: "Google AdMob & AdSense Integration",
    category: "Monetization",
    description:
      "Implemented AdMob and AdSense for apps and web with banner, interstitial, rewarded formats, mediation setup, and policy-compliant limits.",
    image: "/adsense.png",
    technologies: ["AdMob", "AdSense", "Android", "iOS", "Flutter", "React Native"],
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
    title: "Systematic Human Resource Management (SHRM) Portal",
    category: "Web App",
    description:
      "An end-to-end HRMS focused on streamlined workflows, accurate data, and team productivity across hiring, onboarding, and performance.",
    image: "/shrm.png",
    technologies: ["Next.js", "Node.js", "MongoDB", "TailwindCSS", "REST API", "AWS EC2"],
    features: ["Used by 2 organizations managing 200+ employees", "Hiring & Onboarding", "Attendance & Payroll", "Performance"],
    duration: "—",
    client: "—",
    year: "2025",
    icon: Globe,
    link: "https://shrm-temp-wf5b.vercel.app/landing",
    showView: false,
  },
  {
    id: 6,
    title: "Mizaazi - Music Brand Platform",
    category: "Web Development",
    description:
      "A comprehensive digital platform for Mizaazi to enhance online presence, featuring artist profiles, music streaming, event management, and e-commerce integration for merchandise sales.",
    image: "/mizzazi.png",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
    features: [
      "Artist & Music Showcase",
      "E-commerce Integration",
      "Event Management",
      "Fan Engagement Tools",
      "Merchandise Store"
    ],
    duration: "4 Months",
    client: "Mizaazi Records",
    year: "2025",
    icon: Music,
    link: "https://www.mizaazi.live/",
    showView: true,
    review: {
      rating: 5,
      text: "The platform has transformed our online presence and significantly increased our merchandise sales.",
      author: "John Doe, Founder"
    }
  }
]

const stats: Stat[] = [
  { number: "10+", label: "Projects Completed" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "7", label: "Average Delivery Days" },
  { number: "2", label: "Expert Developers" },
]

export default function PortfolioPage() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isProbablyBlocked, setIsProbablyBlocked] = useState(false)

  const safePreviewUrl = useMemo(() => (previewUrl && previewUrl !== "#" ? previewUrl : null), [previewUrl])

  useEffect(() => {
    if (!isPreviewOpen) return
    setIsProbablyBlocked(false)
    const t = setTimeout(() => {
      setIsProbablyBlocked(true)
    }, 3500)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        closePreview()
      }
    }
    document.addEventListener("keydown", onKey)
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      clearTimeout(t)
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = originalOverflow
    }
  }, [isPreviewOpen, previewUrl])

  const openPreview = (url: string) => {
    setPreviewUrl(url)
    setIsPreviewOpen(true)
  }

  const closePreview = () => {
    setIsPreviewOpen(false)
    setPreviewUrl(null)
    setIsProbablyBlocked(false)
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
  Our <span className="text-primary">Portfolio</span>
</h1>

<p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
  We craft digital products that don’t just look beautiful—but deliver impact. 
  From startups to enterprises, we design and build platforms that blend clean UI, 
  seamless performance, and real business value across web, mobile, and beyond.
</p>

{/* note */}
<div className="flex flex-col items-center gap-3 mb-4">
  <Badge className="bg-primary/10 text-primary border-primary/20">
    Featured Projects
  </Badge>
  <p className="text-sm text-muted-foreground text-center">
    Explore how we’ve helped brands elevate their digital presence through design, 
    technology, and innovation.
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
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-xl border-muted/40">
                <div className="relative w-full aspect-[16/9]">
                  {project.video ? (
                    <video
                      src={project.video}
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      playsInline
                      muted
                      loop
                    />
                  ) : (
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                    />
                  )}
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-primary/90 text-primary-foreground text-[11px] px-2 py-0.5">{project.category}</Badge>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5" />
                      {project.year} • {project.duration}
                    </div>
                  </div>

                  <CardHeader className="p-0">
                    <CardTitle className="text-lg md:text-xl tracking-tight">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 space-y-4">
                    {project.client && project.client !== "—" && (
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Client: {project.client}
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Features</h4>
                      <div className="grid grid-cols-1 gap-1.5">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </div>
                        ))}
                        {project.features.length > 3 && (
                          <div className="text-xs text-muted-foreground">and more…</div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-[11px]">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      {project.showView !== false && project.link && project.link !== "#" && (
                        <Button
                          size="sm"
                          onClick={() => openPreview(project.link)}
                        >
                          <span className="flex items-center gap-2">View<ExternalLink className="h-4 w-4" /></span>
                        </Button>
                      )}
                    </div>
                  </CardContent>
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

      {isPreviewOpen && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Website preview">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closePreview} />
          <div className="absolute inset-4 md:inset-8 bg-background rounded-xl overflow-hidden shadow-2xl border">
            <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/40">
              <div className="text-sm text-muted-foreground truncate">
                {safePreviewUrl || "Preview"}
              </div>
              <div className="flex items-center gap-2">
                {safePreviewUrl && (
                  <Button size="sm" variant="ghost" asChild>
                    <a href={safePreviewUrl} target="_blank" rel="noreferrer">
                      <span className="flex items-center gap-1.5">Open in new tab<ExternalLink className="h-4 w-4" /></span>
                    </a>
                  </Button>
                )}
                <Button size="icon" variant="ghost" onClick={closePreview}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="w-full h-[calc(100%-44px)] bg-muted">
              {safePreviewUrl ? (
                <iframe
                  src={safePreviewUrl}
                  className="w-full h-full"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads allow-top-navigation-by-user-activation"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-sm text-muted-foreground">
                  No preview available
                </div>
              )}
              {isProbablyBlocked && (
                <div className="absolute inset-x-4 bottom-4 md:inset-auto md:bottom-6 md:right-6 bg-background/95 border rounded-lg p-3 shadow-lg">
                  <div className="text-sm">This site may block embedding in an iframe.</div>
                  {safePreviewUrl && (
                    <div className="mt-2">
                      <Button size="sm" asChild>
                        <a href={safePreviewUrl} target="_blank" rel="noreferrer">Open in new tab</a>
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
