"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, MessageCircle, Play } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "AI Dubbing SaaS",
      description:
        "Revolutionary AI-powered dubbing platform that transforms video content with natural voice synthesis and multi-language support.",
      image: "/ai-dubbing-interface-with-waveforms-and-voice-cont.jpg",
      technologies: ["Next.js", "Python", "AI/ML", "Node.js", "Firebase", "AWS"],
      category: "AI & SaaS",
      status: "Live",
      features: [
        "Real-time voice cloning and synthesis",
        "Multi-language dubbing automation",
        "Advanced audio processing pipeline",
        "AI-powered dubbing technology",
      ],
    },
    {
      title: "Hotels Booking Platform",
      description:
        "Comprehensive hotel management and booking system with real-time availability, payment processing, and guest management.",
      image: "/hotel-booking-platform-interface-with-room-listing.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io", "Redis"],
      category: "Web Platform",
      status: "Live",
      features: [
        "Real-time room availability system",
        "Integrated payment gateway",
        "Guest management dashboard",
        "Mobile-responsive design",
      ],
    },
    {
      title: "Advanced POS System",
      description:
        "Enterprise-grade Point of Sale system supporting both retail and wholesale operations with inventory management and analytics.",
      image: "/modern-pos-system-interface-with-product-catalog-a.jpg",
      technologies: ["Next.js", "Node.js", "MySQL", "Redis", "Docker", "PWA"],
      category: "Enterprise",
      status: "Live",
      features: [
        "Multi-store inventory management",
        "Real-time sales analytics",
        "Wholesale pricing tiers",
        "Offline-capable PWA",
      ],
    },
    {
      title: "ERP & HRIS",
      description:
        "Integrated Enterprise Resource Planning and Human Resource Information System tailored for creative agencies.",
      image: "/erp-dashboard-with-charts-and-employee-management-.jpg",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "JWT", "Chart.js"],
      category: "Enterprise",
      status: "Live",
      features: [
        "Employee lifecycle management",
        "Project resource allocation",
        "Financial reporting and analytics",
        "Role-based access control",
      ],
    },
    {
      title: "Blockchain Voting System",
      description:
        "Decentralized voting platform ensuring transparency and immutability using smart contracts and modern web technologies.",
      image: "/blockchain-voting-interface-with-candidate-selecti.jpg",
      technologies: ["React", "Solidity", "Web3.js", "Ethereum", "IPFS", "MetaMask"],
      category: "Blockchain",
      status: "Demo",
      features: [
        "Smart contract-based voting",
        "Immutable vote records",
        "Real-time result tracking",
        "Voter identity verification",
      ],
    },
    {
      title: "AI-Powered Content Generator",
      description:
        "Intelligent content creation platform leveraging GPT models for automated blog posts, social media content, and marketing copy.",
      image: "/ai-content-generator-interface-with-text-editor-an.jpg",
      technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "Stripe", "Vercel"],
      category: "AI & SaaS",
      status: "Beta",
      features: [
        "Multi-format content generation",
        "SEO optimization suggestions",
        "Brand voice customization",
        "Content scheduling and publishing",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="royal-heading text-3xl md:text-4xl font-bold mb-4 text-accent">Featured Masterpieces</h2>
          <p className="royal-text text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated gallery of digital creations, each representing a unique challenge conquered and a vision brought
            to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-accent/10 hover:border-accent/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-accent/90 text-accent-foreground">
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="bg-accent hover:bg-accent/90"
                      asChild
                    >
                      <a href="https://instagram.com/yaelahfik" target="_blank" rel="noopener noreferrer" aria-label={`View demo of ${project.title}`}>
                        <Play className="w-4 h-4 mr-1" aria-hidden="true" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                      asChild
                    >
                      <a href="https://instagram.com/yaelahfik" target="_blank" rel="noopener noreferrer" aria-label={`Ask for more information about ${project.title}`}>
                        <MessageCircle className="w-4 h-4 mr-1" aria-hidden="true" />
                        Ask Info
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs border-accent/30 text-accent">
                    {project.category}
                  </Badge>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="royal-text text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-accent/20 text-muted-foreground">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs border-accent/20 text-muted-foreground">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            asChild
            >
            <a href="https://github.com/Al-User12" target="_blank" rel="noopener noreferrer" aria-label="View all projects on GitHub (opens in new tab)">
            <Github className="w-5 h-5 mr-2" aria-hidden="true" />
            View All Projects on GitHub
              <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
