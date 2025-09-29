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
          </Button>
        </div>
      </div>
    </nav>
  )
}
