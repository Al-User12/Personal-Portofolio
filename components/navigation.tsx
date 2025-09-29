"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Crown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)

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
    <header role="banner">
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent",
        )}
        role="navigation"
        aria-label="Main navigation"
      >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-lg p-2 -m-2" 
            onClick={() => scrollToSection("hero")}
            aria-label="Go to top of page"
          >
            <Crown className="w-6 h-6 text-accent royal-glow" aria-hidden="true" />
            <span className="font-serif text-xl font-bold text-accent">alfikri-labs</span>
          </button>

<<<<<<< HEAD
          <ul className="hidden md:flex items-center gap-8" role="menubar">
            <li role="none">
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
                className={`text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded px-3 py-2 ${
                  isMobile && isActive('nav-about') ? 'text-accent' : 'hover:text-accent'
                }`}
                role="menuitem"
                aria-label="Navigate to About section"
              >
                About
              </button>
            </li>
            <li role="none">
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
                className={`text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded px-3 py-2 ${
                  isMobile && isActive('nav-experience') ? 'text-accent' : 'hover:text-accent'
                }`}
                role="menuitem"
                aria-label="Navigate to Experience section"
              >
                Experience
              </button>
            </li>
            <li role="none">
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
                className={`text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded px-3 py-2 ${
                  isMobile && isActive('nav-projects') ? 'text-accent' : 'hover:text-accent'
                }`}
                role="menuitem"
                aria-label="Navigate to Projects section"
              >
                Projects
              </button>
            </li>
            <li role="none">
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
                className={`text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded px-3 py-2 ${
                  isMobile && isActive('nav-contact') ? 'text-accent' : 'hover:text-accent'
                }`}
                role="menuitem"
                aria-label="Navigate to Contact section"
              >
                Contact
              </button>
            </li>
          </ul>

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
            className={`focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background ${
              isMobile && isActive('theme-toggle') ? 'bg-accent/10' : 'hover:bg-accent/10'
            }`}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {isDark ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
=======
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
          </div>

          <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-accent/10">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
>>>>>>> parent of 8ca8878 (Refactor project for mobile interactions and update project name. Added a new hook for managing mobile interactions, enhancing user experience across various sections. Updated styles and interaction logic in multiple components to support mobile-specific behaviors.)
          </Button>
        </div>
      </div>
      </nav>
    </header>
  )
}
