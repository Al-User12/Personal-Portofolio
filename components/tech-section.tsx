"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Cloud, Cpu, Palette, Shield, Globe } from "lucide-react"
import { useMobileInteractions } from "@/hooks/use-mobile-interactions"

export function TechSection() {
  const { isMobile, isActive, getInteractionProps } = useMobileInteractions()
  
  const techCategories = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Frontend Mastery",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
        "Figma to Production",
        "Responsive Design",
        "Expo",
        "React Native",
        "Electron"
      ],
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Backend Excellence",
      technologies: [
        "Node.js",
        "Express",
        "PHP",
        "Laravel",
        "Python",
        "Django",
        "Bun",
        "Hono",
        "RESTful API Design",
        "Multi-tenancy Architecture",
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Systems",
      technologies: [
        "PostgreSQL",
        "MySQL",
        "SQL",
        "NoSQL",
        "Prisma",
        "Drizzle",
        "Database Clustering",
        "Schema Design",
      ],
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & DevOps",
      technologies: [
        "AWS",
        "Azure",
        "Docker",
        "Vercel",
        "CI/CD Pipelines",
        "Nginx",
      ],
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Emerging Tech",
      technologies: [
        "AI Integration",
        "Blockchain",
        "Smart Contracts",
        "Workflow Automation",
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Tools",
      technologies: [
        "Server Security",
        "Encryption",
        "Git",
        "Testing Automation",
        "Stress Testing",
      ],
    },
  ]

  return (
    <section id="tech" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="royal-heading text-3xl md:text-4xl font-bold mb-4 text-accent">Technical Arsenal</h2>
          <p className="royal-text text-lg text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies that form the foundation of my digital craftsmanship, constantly evolving with
            the ever-changing landscape of software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => {
            const cardId = `tech-card-${index}`
            const isCardActive = isActive(cardId)
            
            return (
            <Card
              key={index}
              className={`p-6 transition-all duration-300 border-accent/10 group ${
                isMobile 
                  ? (isCardActive ? 'shadow-xl border-accent/30' : 'hover:shadow-xl hover:border-accent/30')
                  : 'hover:shadow-xl hover:border-accent/30'
              }`}
              {...getInteractionProps(cardId)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`text-accent transition-transform ${
                  isMobile 
                    ? (isCardActive ? 'scale-110' : 'group-hover:scale-110')
                    : 'group-hover:scale-110'
                }`}>{category.icon}</div>
                <h3 className={`text-lg font-semibold text-foreground transition-colors ${
                  isMobile 
                    ? (isCardActive ? 'text-accent' : 'group-hover:text-accent')
                    : 'group-hover:text-accent'
                }`}>
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
            )
          })}
        </div>

        {/* Continuous Learning */}
        <div className="mt-16 text-center">
          <Card className="p-8 max-w-2xl mx-auto border-accent/20">
            <Palette className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="royal-heading text-2xl font-bold mb-4 text-accent">Continuous Evolution</h3>
            <p className="royal-text text-muted-foreground">
              Technology never stands still, and neither do I. I'm constantly exploring new frameworks, languages, and
              methodologies to stay at the forefront of digital innovation. Currently diving deep into advanced AI
              integration and Web3 technologies.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
