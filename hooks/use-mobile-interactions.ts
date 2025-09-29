"use client"

import { useState, useEffect, useCallback } from "react"

export function useMobileInteractions() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeElements, setActiveElements] = useState<Set<string>>(new Set())

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleActive = useCallback((elementId: string) => {
    if (!isMobile) return
    
    setActiveElements(prev => {
      const newSet = new Set(prev)
      if (newSet.has(elementId)) {
        newSet.delete(elementId)
      } else {
        newSet.add(elementId)
      }
      return newSet
    })
  }, [isMobile])

  const isActive = useCallback((elementId: string) => {
    return isMobile ? activeElements.has(elementId) : false
  }, [isMobile, activeElements])

  const getInteractionProps = useCallback((elementId: string) => {
    if (!isMobile) {
      return {}
    }
    
    return {
      onClick: (e: React.MouseEvent) => {
        e.preventDefault()
        toggleActive(elementId)
      },
      onTouchStart: (e: React.TouchEvent) => {
        e.preventDefault()
        toggleActive(elementId)
      }
    }
  }, [isMobile, toggleActive])

  const getHoverClasses = useCallback((elementId: string, hoverClasses: string) => {
    if (!isMobile) {
      return hoverClasses
    }
    
    // Convert hover classes to active classes for mobile
    const activeClasses = hoverClasses
      .replace(/hover:/g, '')
      .replace(/group-hover:/g, '')
    
    return isActive(elementId) ? activeClasses : ''
  }, [isMobile, isActive])

  return {
    isMobile,
    isActive,
    toggleActive,
    getInteractionProps,
    getHoverClasses
  }
}
