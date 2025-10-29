"use client";
import  Navigation  from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, Users } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+91 8273194768", "+91 6395183380"],
    description: "Call us directly for immediate assistance",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["zyntrix.company@gmail.com"],
    description: "Send us an email and we'll respond within 24 hours",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    description: "We're available during these hours for calls and meetings",
  },
  {
    icon: MapPin,
    title: "Service Areas",
    details: ["India", "Remote Worldwide"],
    description: "We serve clients locally and internationally",
  },
]

const services = [
  "Web Development",
  "Mobile App Development",
  "Domain & Hosting",
  "AI Integration",
  "Design Services",
  "Technology Integration",
  "Custom Solution",
]

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Our standard website delivery time is 7-30 days depending on complexity. Simple static websites can be delivered in 7 days, while complex web applications may take up to 30 days. We provide detailed timelines during project planning.",
  },
  {
    question: "What is included in your ₹9,999 package?",
    answer:
      "Our starter package includes a static website (up to 5 pages), responsive design, domain registration (.com/.in), 1 year hosting, SSL certificate, basic SEO setup, contact form integration, and 2 rounds of revisions.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes! We offer various maintenance packages ranging from basic updates to comprehensive support. Our packages include security updates, content updates, performance monitoring, and technical support.",
  },
  {
    question: "Can you help with existing website improvements?",
    answer:
      "We can redesign, optimize, add new features, or completely rebuild your existing website. We'll analyze your current site and provide recommendations for improvements.",
  },
  {
    question: "Do you develop mobile apps for both iOS and Android?",
    answer:
      "Yes, we develop both native and cross-platform mobile applications. We use technologies like React Native and Flutter to ensure your app works seamlessly on both iOS and Android platforms.",
  },
  {
    question: "What technologies do you use for development?",
    answer:
      "We use modern technologies including Next.js, React, Node.js, MongoDB, Python, and cloud services like AWS. We choose the best technology stack based on your project requirements.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We maintain regular communication through WhatsApp, email, and video calls. You'll receive regular updates on project progress, and we're always available to answer questions during business hours.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We typically work with a 50% advance payment to start the project and 50% upon completion. For larger projects, we can arrange milestone-based payments. We accept bank transfers and digital payments.",
  },
  {
    question: "Do you provide hosting and domain services?",
    answer:
      "Yes, we provide complete hosting solutions including domain registration, SSL certificates, email hosting, and reliable web hosting with 99.9% uptime guarantee.",
  },
  {
    question: "Can you integrate AI chatbots into websites?",
    answer:
      "Yes! We specialize in AI integration including custom chatbots, natural language processing, and automated customer support systems. We can integrate AI features into new or existing websites.",
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Ready to start your project? Have questions about our services? We'd love to hear from you. Contact us
              today and let's discuss how we can help bring your digital vision to life.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, "-")}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Project Budget</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under ₹10,000</SelectItem>
                        <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                        <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                        <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                        <SelectItem value="above-100k">Above ₹1,00,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need this completed?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="2-3-months">2-3 months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're here to help you succeed. Reach out to us through any of the following methods, and our team
                  will respond promptly to discuss your project needs.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="group hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <div className="space-y-1 mb-2">
                            {info.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="text-foreground font-medium">
                                {detail}
                              </div>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-primary">Quick Response Guarantee</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We understand that time is valuable. That's why we guarantee a response to all inquiries within 24
                    hours during business days, and often much sooner. For urgent projects, call us directly for
                    immediate assistance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services, processes, and pricing
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="group hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-left group-hover:text-primary transition-colors">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions? We're here to help!</p>
            <Button size="lg" asChild>
              <a href="tel:+918273194768" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Join our satisfied clients and let us help you achieve your digital goals. Contact us today for a free
              consultation and detailed project proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:poojadevrari07@gmail.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://wa.me/918273194768"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
