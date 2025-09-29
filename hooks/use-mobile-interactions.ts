"use client"

import { useState, useEffect, useCallback, useRef } from "react"

interface TouchState {
  isPressed: boolean
  isHovered: boolean
  startTime: number
  startPosition: { x: number; y: number }
}

export function useMobileInteractions() {
  const [isMobile, setIsMobile] = useState(false)
  const [touchStates, setTouchStates] = useState<Map<string, TouchState>>(new Map())
  const touchTimeoutRefs = useRef<Map<string, NodeJS.Timeout>>(new Map())

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isSmallScreen = window.innerWidth < 768
      setIsMobile(isTouchDevice || isSmallScreen)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      // Clear all timeouts on cleanup
      touchTimeoutRefs.current.forEach(timeout => clearTimeout(timeout))
      touchTimeoutRefs.current.clear()
    }
  }, [])

  const setTouchState = useCallback((elementId: string, state: Partial<TouchState>) => {
    setTouchStates(prev => {
      const newMap = new Map(prev)
      const currentState = newMap.get(elementId) || {
        isPressed: false,
        isHovered: false,
        startTime: 0,
        startPosition: { x: 0, y: 0 }
      }
      newMap.set(elementId, { ...currentState, ...state })
      return newMap
    })
  }, [])

  const clearTouchState = useCallback((elementId: string) => {
    setTouchStates(prev => {
      const newMap = new Map(prev)
      newMap.delete(elementId)
      return newMap
    })
    
    // Clear any pending timeout
    const timeout = touchTimeoutRefs.current.get(elementId)
    if (timeout) {
      clearTimeout(timeout)
      touchTimeoutRefs.current.delete(elementId)
    }
  }, [])

  const isPressed = useCallback((elementId: string) => {
    return isMobile ? touchStates.get(elementId)?.isPressed || false : false
  }, [isMobile, touchStates])

  const isHovered = useCallback((elementId: string) => {
    return isMobile ? touchStates.get(elementId)?.isHovered || false : false
  }, [isMobile, touchStates])

  const getTouchInteractionProps = useCallback((elementId: string, options?: {
    onTap?: () => void
    onLongPress?: () => void
    longPressDelay?: number
    hapticFeedback?: boolean
  }) => {
    if (!isMobile) {
      return {
        onClick: options?.onTap
      }
    }

    const { onTap, onLongPress, longPressDelay = 500, hapticFeedback = true } = options || {}

    return {
      onTouchStart: (e: React.TouchEvent) => {
        e.preventDefault()
        const touch = e.touches[0]
        const startTime = Date.now()
        
        setTouchState(elementId, {
          isPressed: true,
          isHovered: true,
          startTime,
          startPosition: { x: touch.clientX, y: touch.clientY }
        })

        // Haptic feedback for touch start
        if (hapticFeedback && 'vibrate' in navigator) {
          navigator.vibrate(10)
        }

        // Set up long press detection
        if (onLongPress) {
          const timeout = setTimeout(() => {
            const currentState = touchStates.get(elementId)
            if (currentState?.isPressed) {
              onLongPress()
              if (hapticFeedback && 'vibrate' in navigator) {
                navigator.vibrate([20, 10, 20])
              }
            }
          }, longPressDelay)
          
          touchTimeoutRefs.current.set(elementId, timeout)
        }
      },

      onTouchMove: (e: React.TouchEvent) => {
        const touch = e.touches[0]
        const currentState = touchStates.get(elementId)
        
        if (!currentState?.isPressed) return

        const { startPosition } = currentState
        const deltaX = Math.abs(touch.clientX - startPosition.x)
        const deltaY = Math.abs(touch.clientY - startPosition.y)
        const threshold = 10 // pixels

        // If moved too far, cancel the touch
        if (deltaX > threshold || deltaY > threshold) {
          setTouchState(elementId, { isPressed: false, isHovered: false })
          
          // Clear long press timeout
          const timeout = touchTimeoutRefs.current.get(elementId)
          if (timeout) {
            clearTimeout(timeout)
            touchTimeoutRefs.current.delete(elementId)
          }
        }
      },

      onTouchEnd: (e: React.TouchEvent) => {
        e.preventDefault()
        const currentState = touchStates.get(elementId)
        
        if (currentState?.isPressed) {
          const touchDuration = Date.now() - currentState.startTime
          
          // Only trigger tap if it was a short press (not a long press)
          if (touchDuration < (longPressDelay || 500) && onTap) {
            onTap()
          }
        }

        // Smooth transition out of pressed state
        setTouchState(elementId, { isPressed: false })
        
        // Remove hover state after a short delay for smooth animation
        setTimeout(() => {
          setTouchState(elementId, { isHovered: false })
        }, 150)

        // Clear long press timeout
        const timeout = touchTimeoutRefs.current.get(elementId)
        if (timeout) {
          clearTimeout(timeout)
          touchTimeoutRefs.current.delete(elementId)
        }
      },

      onTouchCancel: () => {
        setTouchState(elementId, { isPressed: false, isHovered: false })
        
        // Clear long press timeout
        const timeout = touchTimeoutRefs.current.get(elementId)
        if (timeout) {
          clearTimeout(timeout)
          touchTimeoutRefs.current.delete(elementId)
        }
      },

      // Fallback for devices that don't support touch events properly
      onClick: (e: React.MouseEvent) => {
        // Only handle click if no touch events were processed
        const currentState = touchStates.get(elementId)
        if (!currentState?.isPressed && onTap) {
          onTap()
        }
      }
    }
  }, [isMobile, touchStates, setTouchState])

  const getTouchClasses = useCallback((elementId: string, options?: {
    baseClasses?: string
    hoverClasses?: string
    pressedClasses?: string
    activeClasses?: string
  }) => {
    const {
      baseClasses = '',
      hoverClasses = '',
      pressedClasses = '',
      activeClasses = ''
    } = options || {}

    if (!isMobile) {
      return `${baseClasses} ${hoverClasses}`.trim()
    }

    const state = touchStates.get(elementId)
    let classes = baseClasses

    if (state?.isHovered && !state?.isPressed) {
      // Convert hover classes to active classes for mobile
      const mobileHoverClasses = hoverClasses
        .replace(/hover:/g, '')
        .replace(/group-hover:/g, '')
      classes += ` ${mobileHoverClasses} ${activeClasses}`
    }

    if (state?.isPressed) {
      const mobilePressedClasses = pressedClasses || hoverClasses
        .replace(/hover:/g, '')
        .replace(/group-hover:/g, '')
      classes += ` ${mobilePressedClasses} ${activeClasses}`
    }

    return classes.trim()
  }, [isMobile, touchStates])

  // Legacy compatibility methods
  const isActive = useCallback((elementId: string) => {
    return isHovered(elementId) || isPressed(elementId)
  }, [isHovered, isPressed])

  const getInteractionProps = useCallback((elementId: string) => {
    return getTouchInteractionProps(elementId)
  }, [getTouchInteractionProps])

  const getHoverClasses = useCallback((elementId: string, hoverClasses: string) => {
    return getTouchClasses(elementId, { hoverClasses })
  }, [getTouchClasses])

  return {
    isMobile,
    isActive,
    isPressed,
    isHovered,
    clearTouchState,
    getTouchInteractionProps,
    getTouchClasses,
    // Legacy compatibility
    toggleActive: () => {}, // Deprecated
    getInteractionProps,
    getHoverClasses
  }
}