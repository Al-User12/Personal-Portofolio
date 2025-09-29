"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { useMobileInteractions } from "@/hooks/use-mobile-interactions"

export function ExperienceSection() {
  const { isMobile, isActive, getInteractionProps } = useMobileInteractions()
  
  const experiences = [
    {
      company: "MeetGeek (via Cerulean Studio / Going Macro)",
      role: "Full-Stack Developer",
      period: "August 2025 — Present",
      location: "Remote",
      description:
        "Collaborating with Cerulean Studio to build and maintain end-to-end MarTech automation workflows for MeetGeek AI, covering backend, frontend, APIs, and infrastructure within a design-driven environment.",
      achievements: [
        "Designed and implemented marketing automation workflows and customer success pipelines tailored to client needs",
        "Built and maintained scalable software solutions spanning backend services, frontend interfaces, and cloud infrastructure",
        "Contributed to product research and prototyping to translate client requirements into production-ready solutions",
        "Worked closely within Cerulean Studio and Going Macro to deliver high-quality, user-centric applications"
      ],
      technologies: ["Next.js", "Node.js", "TypeScript", "Bun", "PostgreSQL", "AWS", "MarTech Automation", "APIs"]
    },
    {
      company: "Voice Sonic Labs LTD",
      role: "Backend Developer & DevOps",
      period: "May 2024 — August 2024",
      location: "Remote",
      description:
        "Led the backend architecture and development of an innovative SaaS platform leveraging AI to automate the dubbing process, ensuring scalability, reliability, and smooth integration with the core product.",
      achievements: [
        "Designed and implemented scalable backend services to support AI-driven dubbing workflows",
        "Optimized API performance and ensured robust data handling for real-time processing",
        "Maintained high availability and stability of core infrastructure throughout product development",
        "Set up and managed CI/CD pipelines for automated testing and deployment using GitHub Actions and AWS",
      ],
      technologies: ["Node.js","TypeScript", "Express", "Firebase", "AWS", "SaaS Architecture", "API Development"]
    },
    {
      company: "PT. Daya Rekadigital",
      role: "Backend Developer & Quality Assurance Specialist",
      period: "August 2023 — March 2024",
      location: "Indonesia (Onsite)",
      description:
        "Contributed to the backend architecture and quality assurance of large-scale applications, focusing on performance optimization, security, and multi-tenancy for both web and mobile platforms.",
      achievements: [
        "Designed and implemented a REST API with multi-tenancy architecture to support mobile and web clients for Betty App",
        "Identified and resolved critical server-side bottlenecks, significantly improving web app performance",
        "Conducted comprehensive security audits, integration testing, and performance testing for the Selasih application to ensure reliability and quality",
        "Developed and documented security policies and tracked defects systematically for effective resolution"
      ],
      technologies: ["Node.js", "Express", "MySQL", "Azure", "REST API", "Security Auditing", "Testing"]
    },
    {
      company: "Mojosemi Forest Park",
      role: "Software Engineer",
      period: "2022 — 2023",
      location: "Indonesia",
      description:
        "Led the development and deployment of a large-scale e-payment platform for a major tourist destination, enabling digital transactions for thousands of visitors daily.",
      achievements: [
        "Architected and deployed a web and desktop-based e-payment application to handle high visitor transaction volumes",
        "Collaborated with stakeholders to break down requirements and align technical solutions with business operations",
        "Installed and configured local servers, ensuring stable network infrastructure and secure data flow",
        "Performed security auditing and knowledge transfer sessions for local operators to ensure long-term system reliability"
      ],
      technologies: ["PHP", "Python", "MySQL", "Local Server Deployment", "Security Auditing", "Networking"]
    },
    {
      company: "Freelance & Consulting",
      role: "Software Development Consultant",
      period: "2021 — Present",
      location: "Global",
      description: "Providing technical expertise and development services to startups and established businesses.",
      achievements: [
        "Delivered tailored software solutions for diverse clients ranging from retail businesses and notary offices to tourism enterprises and digital agencies",
        "Handled end-to-end development across backend architecture, frontend implementation, infrastructure setup, and security auditing for multiple organizations",
        "Collaborated closely with stakeholders and design teams to translate complex business flows into scalable digital products with real-world impact"
      ],
      technologies: ["Various", "SaaS Architecture", "Security Auditing", "Blockchain", "Smart Contracts", "AI/ML", "Cloud Services"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="royal-heading text-3xl md:text-4xl font-bold mb-4 text-accent">Professional Journey</h2>
          <p className="royal-text text-lg text-muted-foreground max-w-2xl mx-auto">
            A chronicle of my adventures in the digital realm, where each role has shaped my craft and expanded my
            expertise.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const cardId = `experience-card-${index}`
              const isCardActive = isActive(cardId)
              
              return (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 royal-glow z-10" />

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card 
                    className={`p-6 ml-8 md:ml-0 transition-all duration-300 border-accent/10 group ${
                      isMobile 
                        ? (isCardActive ? 'shadow-xl border-accent/30' : 'hover:shadow-xl hover:border-accent/30')
                        : 'hover:shadow-xl hover:border-accent/30'
                    }`}
                    {...getInteractionProps(cardId)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-bold text-foreground transition-colors ${
                          isMobile 
                            ? (isCardActive ? 'text-accent' : 'group-hover:text-accent')
                            : 'group-hover:text-accent'
                        }`}>
                          {exp.role}
                        </h3>
                        <p className="text-accent font-semibold">{exp.company}</p>
                      </div>
                      <ExternalLink className={`w-5 h-5 text-muted-foreground transition-colors ${
                        isMobile 
                          ? (isCardActive ? 'text-accent opacity-100' : 'group-hover:text-accent opacity-0 group-hover:opacity-100')
                          : 'group-hover:text-accent opacity-0 group-hover:opacity-100'
                      }`} />
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="royal-text text-muted-foreground mb-4">{exp.description}</p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-accent/30 text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
