"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Brain, Blocks, Globe } from "lucide-react"
import { useMobileInteractions } from "@/hooks/use-mobile-interactions"

export function AboutSection() {
  const { isMobile, isActive, getInteractionProps } = useMobileInteractions()
  
  const skills = [
    // 🧠 Languages & Frameworks
    "JavaScript",
    "TypeScript",
    "Python",
    "PHP",
    "Laravel",
    "Django",
    "Node.js",
    "React",
    "Next.js",
    "Bun",
    "Hono",
    "Prisma",
    "Drizzle",
    "shadcn/ui",
    "QT",
    "Expo",
    "React Native",
    "Electron",
    "WordPress",
  
    // 🗄️ Database
    "PostgreSQL",
    "MySQL",
    "SQL",
    "NoSQL",
    "Database Clustering",
    "Schema Design",
  
    // ☁️ Cloud & DevOps
    "AWS",
    "Azure",
    "Docker",
    "Vercel",
    "CI/CD Pipelines",
  
    // 🧱 Backend Expertise
    "RESTful API Design",
    "Multi-tenancy Architecture",
    "Application Performance Optimization",
    "Server Security",
  
    // ✨ Frontend & UI/UX
    "Figma to Production",
    "Responsive Design",
    "UX Optimization",
  
    // 🧪 Emerging Tech
    "AI Integration",
    "Smart Contracts",
    "Blockchain",
    "Workflow Automation",
  ];
  
  const specialties = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Crafting seamless experiences from frontend to backend",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Integration",
      description: "Building intelligent systems with modern AI technologies",
    },
    {
      icon: <Blocks className="w-6 h-6" />,
      title: "Blockchain Solutions",
      description: "Developing decentralized applications and smart contracts",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "REST API Design",
      description: "Designing robust, scalable RESTful APIs for seamless integration",
    },
  ]

  return (
    <section id="about" className="py-20 relative" aria-labelledby="about-heading">
      {/* Smooth Blend Overlay */}
      <div className="absolute inset-0 section-blend pointer-events-none" aria-hidden="true" />
      
      {/* Floating elements coming from hero */}
      <div className="absolute top-0 left-0 w-full h-40 pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-br from-[#9D4EDD]/60 to-[#E6C200]/40 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${Math.random() * 20}px`,
              animation: `float-to-about ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${-i * 1.2}s`,
              boxShadow: '0 0 10px rgba(157, 78, 221, 0.3)',
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Portrait & Bio */}
          <div className="space-y-6">
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-4 border-accent/20 shadow-2xl">
                <Image
                  src="/professional-portrait-of-al-fikri-kholil-misbah--s.png"
                  alt="Professional portrait of Al Fikri Kholil Misbah, Software Engineer specializing in AI, Blockchain, and Modern Web Development"
                  className="w-full h-full object-cover"
                  width={320}
                  height={320}
                  priority
                  sizes="(max-width: 768px) 280px, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-accent/10 rounded-3xl -z-10" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 id="about-heading" className="royal-heading text-3xl md:text-4xl font-bold mb-6 text-accent">The Digital Artisan</h2>
              <div className="space-y-4 royal-text text-lg text-muted-foreground">
                <p>
                  Greetings, fellow seekers of digital excellence. I am Al Fikri Kholil Misbah, a craftsman in the realm
                  of software engineering, where code becomes art and algorithms dance with purpose.
                </p>
                <p>
                  My journey spans the convergence of artificial intelligence, blockchain technology, and modern web
                  development. I believe in creating not just functional systems, but elegant solutions that stand the
                  test of time.
                </p>
                <p>
                  From architecting scalable web applications to implementing cutting-edge AI solutions, I approach each
                  project with the precision of a master craftsman and the vision of an innovator.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Technical Arsenal</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Specialties */}
        <div className="mt-16">
          <h3 className="royal-heading text-2xl font-bold text-center mb-12 text-accent">Domains of Mastery</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => {
              const cardId = `specialty-card-${index}`
              const isCardActive = isActive(cardId)
              
              return (
              <Card
                key={index}
                className={`p-6 text-center transition-all duration-300 border-accent/10 group ${
                  isMobile 
                    ? (isCardActive ? 'shadow-lg border-accent/30' : 'hover:shadow-lg hover:border-accent/30')
                    : 'hover:shadow-lg hover:border-accent/30'
                }`}
                {...getInteractionProps(cardId)}
              >
                <div className={`text-accent mb-4 flex justify-center transition-transform ${
                  isMobile 
                    ? (isCardActive ? 'scale-110' : 'group-hover:scale-110')
                    : 'group-hover:scale-110'
                }`}>
                  {specialty.icon}
                </div>
                <h4 className="font-semibold mb-2 text-foreground">{specialty.title}</h4>
                <p className="text-sm text-muted-foreground royal-text">{specialty.description}</p>
              </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
