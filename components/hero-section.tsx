"use client"

import { Button } from "@/components/ui/button"
import { Crown, ArrowDown, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [mysticMode, setMysticMode] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Defer particle creation to improve initial load
    const timer = setTimeout(() => {
    createParticles()
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Typing effect for "Software Engineer"
  useEffect(() => {
    if (!mounted) return
    
    const text = "Software Engineer"
    let currentIndex = 0
    
    const typingTimer = setTimeout(() => {
      const typeCharacter = () => {
        if (currentIndex <= text.length) {
          setTypedText(text.slice(0, currentIndex))
          currentIndex++
          
          // Variable typing speed for more natural effect
          const nextDelay = currentIndex === text.length 
            ? 800 // Pause before completing
            : text[currentIndex - 1] === ' ' 
            ? 150 // Slower after spaces
            : 80 + Math.random() * 40 // Random variation 80-120ms
          
          setTimeout(typeCharacter, nextDelay)
        } else {
          setTypingComplete(true)
        }
      }
      
      typeCharacter()
    }, 1500) // Start typing after 1.5s delay
    
    return () => clearTimeout(typingTimer)
  }, [mounted])

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500) // Blink every 500ms
    
    return () => clearInterval(cursorInterval)
  }, [])

  const createParticles = () => {
    const particlesContainer = document.querySelector(".particles")
    if (!particlesContainer) return

    // Layer 1: Slow drifting gold particles
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div")
      particle.className = "particle particle-slow"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.animationDelay = Math.random() * 15 + "s"
      particle.style.animationDuration = 12 + Math.random() * 8 + "s"
      particlesContainer.appendChild(particle)
    }

    // Layer 2: Faster floating particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div")
      particle.className = "particle particle-fast"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.animationDelay = Math.random() * 10 + "s"
      particle.style.animationDuration = 8 + Math.random() * 6 + "s"
      particlesContainer.appendChild(particle)
    }
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleMysticMode = () => {
    setMysticMode(!mysticMode)
  }

  return (
    <section
      id="hero"
      className={`section-transition relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-20 ${
        mysticMode ? "mystic-dark" : ""
      }`}
      aria-labelledby="hero-heading"
      role="banner"
    >
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          mysticMode
            ? "bg-gradient-to-br from-[#0A0A0A] via-[#1A0B2E] to-[#2D1B4E]"
            : "bg-gradient-to-br from-[#1D1333] via-[#2A1B4B] to-[#7B2CBF]"
        }`}
      />

      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-radial from-[#7B2CBF]/20 via-[#9D4EDD]/10 to-transparent rounded-full blur-3xl transform -translate-y-1/2" />

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYXJjaGVzIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTEwMCAwQzE1NS4yIDAgMjAwIDQ0LjggMjAwIDEwMFMxNTUuMiAyMDAgMTAwIDIwMFM0LjggMTU1LjIgMCAxMDBTNDQuOCAwIDEwMCAwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZENzAwIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhcmNoZXMpIi8+PC9zdmc+')] blur-sm" />
      </div>

      <div className="particles absolute inset-0" />

      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center">
        <div className="w-full max-w-7xl py-20 md:py-20 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[70vh]">
            <div
              className={`pl-0 lg:pl-10 pr-4 flex flex-col justify-center transition-all duration-1000 ${
                mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              {/* Crest */}
              <div
                className={`mb-8 flex justify-center lg:justify-start transition-all duration-1000 delay-200 cursor-pointer ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                onClick={toggleMysticMode}
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border-2 border-[#E6C200]/40 flex items-center justify-center backdrop-blur-sm bg-[#E6C200]/5 shimmer-loop">
                    <Crown className="w-12 h-12 text-[#E6C200] crown-pulse-enhanced" />
                  </div>
                </div>
              </div>

              {/* Name */}
              <div
                className={`transition-all duration-1000 delay-400 text-center lg:text-left ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <h1 id="hero-heading" className="royal-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 tracking-wide">
                  <span
                    className="block text-[#E6C200] name-glow-enhanced"
                    data-text="Al Fikri Kholil Misbah"
                    style={{
                      filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))",
                      textShadow: "0 0 20px rgba(230, 194, 0, 0.3)",
                    }}
                  >
                    Al Fikri Kholil Misbah
                  </span>
                </h1>

                {/* Role */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#4C1D95] dark:text-[#8B5CF6] font-semibold mb-6 leading-tight">
                  <span className="inline-block">
                    {typedText}
                    <span 
                      className={`inline-block w-0.5 h-8 md:h-10 lg:h-12 ml-1 ${
                        showCursor && !typingComplete ? 'opacity-100 cursor-highlight' : 'opacity-0'
                      } ${typingComplete ? 'cursor-highlight animate-pulse' : 'bg-[#E6C200]'}`}
                      style={{
                        transition: 'opacity 0.1s ease-in-out'
                      }}
                    />
                  </span>
                </h2>

                {/* Gold Divider */}
                <div className="flex items-center justify-center lg:justify-start my-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-[#E6C200]/60 to-transparent w-64 relative">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#E6C200] text-sm">
                      ❦
                    </div>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 italic mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                  "Crafting elegant systems where AI, Blockchain, and the Modern Web converge."
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  <Button
                    size="lg"
<<<<<<< HEAD
                    className={`bg-[#7B2CBF] border-2 border-[#E6C200] px-8 py-4 text-lg font-semibold group transition-all duration-300 min-h-[64px] rounded-xl focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background ${
                      isMobile && isActive('explore-btn')
                        ? 'bg-[#E6C200] text-[#7B2CBF] shadow-[0_8px_32px_rgba(230,194,0,0.4)]'
                        : 'hover:bg-[#E6C200] hover:text-[#7B2CBF] shadow-[0_8px_32px_rgba(123,44,191,0.3)] hover:shadow-[0_8px_32px_rgba(230,194,0,0.4)]'
                    }`}
                    onClick={(e) => {
                      if (isMobile) {
                        const props = getInteractionProps('explore-btn')
                        props.onClick?.(e)
                        // Add small delay before scrolling to allow animation
                        setTimeout(() => scrollToSection("projects"), 150)
                      } else {
                        scrollToSection("projects")
                      }
                    }}
                    aria-label="Explore my portfolio projects"
                  >
                    <Sparkles className={`w-5 h-5 mr-2 transition-transform ${
                      isMobile && isActive('explore-btn') ? 'rotate-12' : 'group-hover:rotate-12'
                    }`} aria-hidden="true" />
=======
                    className="bg-[#7B2CBF] hover:bg-[#E6C200] hover:text-[#7B2CBF] border-2 border-[#E6C200] px-8 py-4 text-lg font-semibold group transition-all duration-300 shadow-[0_8px_32px_rgba(123,44,191,0.3)] hover:shadow-[0_8px_32px_rgba(230,194,0,0.4)] min-h-[64px] rounded-xl"
                    onClick={() => scrollToSection("projects")}
                  >
                    <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
>>>>>>> parent of 8ca8878 (Refactor project for mobile interactions and update project name. Added a new hook for managing mobile interactions, enhancing user experience across various sections. Updated styles and interaction logic in multiple components to support mobile-specific behaviors.)
                    Explore My Work
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
<<<<<<< HEAD
                    className={`border-2 border-[#E6C200] text-[#E6C200] px-8 py-4 text-lg bg-transparent transition-all duration-300 min-h-[64px] rounded-xl font-semibold focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background ${
                      isMobile && isActive('contact-btn')
                        ? 'bg-[#E6C200] text-[#7B2CBF] shadow-[0_8px_32px_rgba(230,194,0,0.4)]'
                        : 'hover:bg-[#E6C200] hover:text-[#7B2CBF] shadow-[0_8px_32px_rgba(230,194,0,0.2)] hover:shadow-[0_8px_32px_rgba(230,194,0,0.4)]'
                    }`}
                    onClick={(e) => {
                      if (isMobile) {
                        const props = getInteractionProps('contact-btn')
                        props.onClick?.(e)
                        setTimeout(() => scrollToSection("contact"), 150)
                      } else {
                        scrollToSection("contact")
                      }
                    }}
                    aria-label="Contact Al Fikri Kholil Misbah"
=======
                    className="border-2 border-[#E6C200] text-[#E6C200] hover:bg-[#E6C200] hover:text-[#7B2CBF] px-8 py-4 text-lg bg-transparent transition-all duration-300 shadow-[0_8px_32px_rgba(230,194,0,0.2)] hover:shadow-[0_8px_32px_rgba(230,194,0,0.4)] min-h-[64px] rounded-xl font-semibold"
                    onClick={() => scrollToSection("contact")}
>>>>>>> parent of 8ca8878 (Refactor project for mobile interactions and update project name. Added a new hook for managing mobile interactions, enhancing user experience across various sections. Updated styles and interaction logic in multiple components to support mobile-specific behaviors.)
                  >
                    Contact the Dev
                  </Button>
                </div>
              </div>
            </div>

            <div
              className={`flex items-center justify-center transition-all duration-1000 delay-600 ${
                mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="max-w-md mx-auto relative">
                {/* Glass Panel Background */}
                <div className="absolute inset-0 backdrop-blur-xl bg-white/5 rounded-3xl border border-[#E6C200]/20 shadow-[0_20px_60px_rgba(0,0,0,0.3)]" />

                {/* 3D Data Orb with Orbiting Sigils */}
                <div className="relative p-12 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {/* Central Orb */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7B2CBF] via-[#9D4EDD] to-[#E6C200] opacity-80 animate-pulse shadow-[0_0_60px_rgba(157,78,221,0.6)]" />
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#1D1333] to-[#2A1B4B] flex items-center justify-center">
                      <div className="text-[#E6C200] text-6xl font-bold opacity-90">⚡</div>
                    </div>

                    {/* Orbiting Sigils */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#E6C200] rounded-full flex items-center justify-center text-[#1D1333] font-bold text-sm shadow-lg">
                        AI
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 animate-spin"
                      style={{ animationDuration: "25s", animationDirection: "reverse" }}
                    >
                      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 bg-[#9D4EDD] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        ⛓
                      </div>
                    </div>

                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: "30s" }}>
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#E6C200] rounded-full flex items-center justify-center text-[#1D1333] font-bold text-sm shadow-lg">
                        ⚛
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 animate-spin"
                      style={{ animationDuration: "22s", animationDirection: "reverse" }}
                    >
                      <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-8 h-8 bg-[#7B2CBF] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        ⚙
                      </div>
                    </div>

                    {/* Floating Particles around Orb */}
                    <div className="absolute inset-0">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-[#E6C200] rounded-full opacity-60 animate-ping"
                          style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${20 + Math.random() * 60}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: "3s",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-32 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 z-20 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <button
<<<<<<< HEAD
          onClick={(e) => {
            if (isMobile) {
              const props = getInteractionProps('scroll-indicator')
              props.onClick?.(e)
              setTimeout(() => scrollToSection("about"), 150)
            } else {
              scrollToSection("about")
            }
          }}
          className={`flex flex-col items-center gap-2 text-white/70 transition-colors group focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-lg p-2 ${
            isMobile && isActive('scroll-indicator') ? 'text-[#E6C200]' : 'hover:text-[#E6C200]'
          }`}
          aria-label="Scroll down to About section"
        >
          <span className="text-sm font-medium">Scroll to discover</span>
          <ArrowDown className={`w-5 h-5 animate-bounce text-[#E6C200] ${
            isMobile && isActive('scroll-indicator') ? 'text-[#E6C200]' : 'group-hover:text-[#E6C200]'
          }`} aria-hidden="true" />
=======
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 text-white/70 hover:text-[#E6C200] transition-colors group"
        >
          <span className="text-sm font-medium">Scroll to discover</span>
          <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-[#E6C200] text-[#E6C200]" />
>>>>>>> parent of 8ca8878 (Refactor project for mobile interactions and update project name. Added a new hook for managing mobile interactions, enhancing user experience across various sections. Updated styles and interaction logic in multiple components to support mobile-specific behaviors.)
        </button>
      </div>

      {/* Smooth Transition Wave */}
      <div className="wave-divider" aria-hidden="true" />
      
      {/* Floating Elements for Transition */}
      <div className="floating-elements" aria-hidden="true">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
      </div>

      {/* Elements that Float to About Section */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none" aria-hidden="true">
        <div className="float-to-about-element"></div>
        <div className="float-to-about-element"></div>
        <div className="float-to-about-element"></div>
        <div className="float-to-about-element"></div>
      </div>

      {/* Mystic Particles for Transition */}
      <div className="mystic-particles" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="mystic-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
