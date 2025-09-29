"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Crown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobileInteractions } from "@/hooks/use-mobile-interactions"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const { isMobile, isActive, getInteractionProps } = useMobileInteractions()

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
              onClick={(e) => {
                if (isMobile) {
                  const props = getInteractionProps('nav-about')
                  props.onClick?.(e)
                  setTimeout(() => scrollToSection("about"), 100)
                } else {
                  scrollToSection("about")
                }
              }}
              className={`text-muted-foreground transition-colors ${
                isMobile && isActive('nav-about') ? 'text-accent' : 'hover:text-accent'
              }`}
            >
              About
            </button>
            <button
              onClick={(e) => {
                if (isMobile) {
                  const props = getInteractionProps('nav-experience')
                  props.onClick?.(e)
                  setTimeout(() => scrollToSection("experience"), 100)
                } else {
                  scrollToSection("experience")
                }
              }}
              className={`text-muted-foreground transition-colors ${
                isMobile && isActive('nav-experience') ? 'text-accent' : 'hover:text-accent'
              }`}
            >
              Experience
            </button>
            <button
              onClick={(e) => {
                if (isMobile) {
                  const props = getInteractionProps('nav-projects')
                  props.onClick?.(e)
                  setTimeout(() => scrollToSection("projects"), 100)
                } else {
                  scrollToSection("projects")
                }
              }}
              className={`text-muted-foreground transition-colors ${
                isMobile && isActive('nav-projects') ? 'text-accent' : 'hover:text-accent'
              }`}
            >
              Projects
            </button>
            <button
              onClick={(e) => {
                if (isMobile) {
                  const props = getInteractionProps('nav-contact')
                  props.onClick?.(e)
                  setTimeout(() => scrollToSection("contact"), 100)
                } else {
                  scrollToSection("contact")
                }
              }}
              className={`text-muted-foreground transition-colors ${
                isMobile && isActive('nav-contact') ? 'text-accent' : 'hover:text-accent'
              }`}
            >
              Contact
            </button>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={(e) => {
              if (isMobile) {
                const props = getInteractionProps('theme-toggle')
                props.onClick?.(e)
                setTimeout(toggleTheme, 100)
              } else {
                toggleTheme()
              }
            }}
            className={`${
              isMobile && isActive('theme-toggle') ? 'bg-accent/10' : 'hover:bg-accent/10'
            }`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>
      </div>
    </nav>
  )
}
