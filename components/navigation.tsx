"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Crown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobileInteractions } from "@/hooks/use-mobile-interactions"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const { isMobile, getTouchInteractionProps, getTouchClasses } = useMobileInteractions()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <Crown className="w-6 h-6 text-accent royal-glow" />
            <span className="font-serif text-xl font-bold text-accent">alfikri-labs</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              {...getTouchInteractionProps('nav-about', {
                onTap: () => scrollToSection("about"),
                hapticFeedback: true
              })}
              className={getTouchClasses('nav-about', {
                baseClasses: 'text-muted-foreground transition-all duration-200',
                hoverClasses: 'hover:text-accent hover:scale-105',
                pressedClasses: 'text-accent scale-95'
              })}
            >
              About
            </button>
            <button
              {...getTouchInteractionProps('nav-experience', {
                onTap: () => scrollToSection("experience"),
                hapticFeedback: true
              })}
              className={getTouchClasses('nav-experience', {
                baseClasses: 'text-muted-foreground transition-all duration-200',
                hoverClasses: 'hover:text-accent hover:scale-105',
                pressedClasses: 'text-accent scale-95'
              })}
            >
              Experience
            </button>
            <button
              {...getTouchInteractionProps('nav-projects', {
                onTap: () => scrollToSection("projects"),
                hapticFeedback: true
              })}
              className={getTouchClasses('nav-projects', {
                baseClasses: 'text-muted-foreground transition-all duration-200',
                hoverClasses: 'hover:text-accent hover:scale-105',
                pressedClasses: 'text-accent scale-95'
              })}
            >
              Projects
            </button>
            <button
              {...getTouchInteractionProps('nav-contact', {
                onTap: () => scrollToSection("contact"),
                hapticFeedback: true
              })}
              className={getTouchClasses('nav-contact', {
                baseClasses: 'text-muted-foreground transition-all duration-200',
                hoverClasses: 'hover:text-accent hover:scale-105',
                pressedClasses: 'text-accent scale-95'
              })}
            >
              Contact
            </button>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            {...getTouchInteractionProps('theme-toggle', {
              onTap: toggleTheme,
              hapticFeedback: true
            })}
            className={getTouchClasses('theme-toggle', {
              baseClasses: 'transition-all duration-200',
              hoverClasses: 'hover:bg-accent/10 hover:scale-110',
              pressedClasses: 'bg-accent/20 scale-95'
            })}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>
      </div>
    </nav>
  )
}
