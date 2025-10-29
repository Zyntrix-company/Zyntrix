"use client";
import  Navigation from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Award, Target, Heart, Code, Smartphone, Globe, Bot, Palette, ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"



const team = [
  {
    name: "Pooja Devrari",
    role: "Co-Founder & Lead Developer",
    experience: "2+ Years",
    bio: "Full-stack developer with a passion for creating intuitive digital experiences that solve real-world problems through clean, efficient code.",
    skills: ["React", "Next.js", "Node.js", "UI/UX Design", "Project Management"],
    email: "poojadevrari07@gmail.com",
    phone: "+91 6395183380",
  },
  {
    name: "Vansh Ahuja",
    role: "Co-Founder & Technical Lead",
    experience: "2+ Years",
    bio: "Backend specialist focused on building robust, scalable systems that power exceptional digital products and drive business growth.",
    skills: ["Python", "MongoDB", "AWS", "DevOps", "AI/ML Integration"],
    email: "contact@Zyntrix.com",
    phone: "+91 8273194768",
  },
]

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description:
      "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description:
      "Your success is our success. We're committed to delivering projects that exceed expectations and drive real business results.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in code quality, design, and project delivery through rigorous testing and best practices.",
  },
  {
    icon: User,
    title: "Collaborative Approach",
    description:
      "We work closely with our clients throughout the development process, ensuring transparency and alignment at every step.",
  },
]

const milestones = [
  {
    year: "2023",
    title: "Company Founded",
    description: "Zyntrix was established with a vision to provide innovative IT solutions to businesses of all sizes.",
  },
  {
    year: "2023",
    title: "First Major Project",
    description: "Successfully delivered our first enterprise-level healthcare management system.",
  },
  {
    year: "2024",
    title: "10+ Projects Milestone",
    description: "Reached the milestone of 10+ successfully completed projects with 100% client satisfaction.",
  },
  {
    year: "2024",
    title: "AI Integration Expertise",
    description: "Expanded our services to include advanced AI and chatbot integration solutions.",
  },
]

const services = [
  { icon: Code, name: "Web Development", count: "40%" },
  { icon: Smartphone, name: "Mobile Apps", count: "25%" },
  { icon: Globe, name: "Hosting Solutions", count: "15%" },
  { icon: Bot, name: "AI Integration", count: "10%" },
  { icon: Palette, name: "Design Services", count: "10%" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              About <span className="text-primary">Zyntrix</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              We're not just another tech company - we're your digital partners in growth. With a fresh perspective and deep technical expertise, we create digital solutions that make a real impact. Our 2+ years of experience has taught us that great technology is about understanding people as much as it's about writing code.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1+</div>
                <div className="text-sm text-muted-foreground">Years in Business</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our journey began with a simple idea: technology should work for people, not the other way around. In just two years, we've grown from a two-person startup to a trusted partner for businesses looking to make their mark in the digital world.
                </p>
                <p>
                  What sets us apart? We listen. We understand that behind every line of code is a business goal, a customer need, or a dream waiting to be realized. Our approach combines technical excellence with genuine human understanding.
                </p>
                <p>
                  We've had the privilege of working with amazing clients who've trusted us to bring their visions to life. From sleek websites to complex web applications, each project has been a learning experience that's helped us grow and refine our craft.
                </p>
              </div>
            </div>
            <div className="realtive">
              <Image src="/story.png" alt="Story" width={500} height={500} className="-z-1" />

            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind Zyntrix who bring your digital dreams to reality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center p-6">
                  <div className="relative">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary/50 group-hover:scale-105 transition-transform duration-300">
                      <User size={32} />
                    </div>
                    <Badge className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-primary text-xs">
                      {member.experience}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-4">{member.name}</CardTitle>
                  <CardDescription className="text-primary/80 font-medium text-sm">{member.role}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">{member.bio}</p>

                  <div>
                    <h4 className="font-semibold mb-2 text-center">Expertise:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 space-y-2 text-sm text-center">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="text-muted-foreground">{member.email}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Zyntrix
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth and development
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && <div className="w-0.5 h-16 bg-border mt-4" />}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Distribution of our project portfolio by service type
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{service.count}</div>
                  <div className="text-sm font-medium">{service.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Ready to Work with Us?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Let's discuss your project and see how we can help bring your digital vision to life with our expertise
              and passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
