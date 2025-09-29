"use client"

import { useEffect, useRef, useState } from "react"

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isLowPerformance, setIsLowPerformance] = useState(false)

  useEffect(() => {
    // Check device capabilities
    const checkDeviceCapabilities = () => {
      const isMobileDevice = window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const isLowPerfDevice = Boolean(navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4)
      
      setIsMobile(isMobileDevice)
      setIsLowPerformance(isLowPerfDevice)
    }

    checkDeviceCapabilities()
    window.addEventListener("resize", checkDeviceCapabilities)

    // Intersection Observer for performance optimization
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (canvasRef.current) {
      observer.observe(canvasRef.current)
    }

    return () => {
      window.removeEventListener("resize", checkDeviceCapabilities)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !isVisible) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2) // Limit DPR for performance
      const rect = canvas.getBoundingClientRect()
      
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = rect.width + "px"
      canvas.style.height = rect.height + "px"
      
      ctx.scale(dpr, dpr)
      
      return { width: rect.width, height: rect.height }
    }

    const canvasSize = resizeCanvas()
    
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    // Adaptive particle count based on device capabilities
    let particleCount = 50
    if (isMobile) particleCount = 15
    if (isLowPerformance) particleCount = Math.min(particleCount, 10)

    // Create particles with proper canvas dimensions
    const initializeParticles = () => {
      particles.length = 0 // Clear existing particles
      const currentSize = canvas.getBoundingClientRect()
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * currentSize.width,
          y: Math.random() * currentSize.height,
          vx: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.8),
          vy: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.8),
          size: Math.random() * (isMobile ? 1.5 : 2) + (isMobile ? 0.5 : 1),
          opacity: Math.random() * 0.4 + 0.1,
        })
      }
    }

    initializeParticles()

    const handleResize = () => {
      resizeCanvas()
      initializeParticles() // Reinitialize particles on resize
    }

    window.addEventListener("resize", handleResize)

    let lastTime = 0
    const targetFPS = isMobile ? 30 : 60
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime: number) => {
      if (!isVisible) return

      if (currentTime - lastTime >= frameInterval) {
        const rect = canvas.getBoundingClientRect()
        ctx.clearRect(0, 0, rect.width, rect.height)

        particles.forEach((particle) => {
          // Update position
          particle.x += particle.vx
          particle.y += particle.vy

          // Wrap around edges with proper boundary checking
          if (particle.x < -particle.size) {
            particle.x = rect.width + particle.size
          } else if (particle.x > rect.width + particle.size) {
            particle.x = -particle.size
          }
          
          if (particle.y < -particle.size) {
            particle.y = rect.height + particle.size
          } else if (particle.y > rect.height + particle.size) {
            particle.y = -particle.size
          }

          // Draw particle with improved rendering
          ctx.save()
          ctx.globalAlpha = particle.opacity * (isMobile ? 0.7 : 1)
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(230, 194, 0, 1)" // Accessible gold color
          ctx.fill()
          ctx.restore()
        })

        lastTime = currentTime
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isVisible, isMobile, isLowPerformance])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0" 
      style={{ background: "transparent" }}
      aria-hidden="true"
    />
  )
}
