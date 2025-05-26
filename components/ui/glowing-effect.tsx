"use client"

import { useRef, useEffect, useState } from "react"

interface GlowingEffectProps {
  spread?: number
  glow?: boolean
  disabled?: boolean
  proximity?: number
  inactiveZone?: number
}

export function GlowingEffect({
  spread = 40,
  glow = true,
  disabled = false,
  proximity = 64,
  inactiveZone = 0.01,
}: GlowingEffectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (disabled || !glow) return

    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const distance = Math.sqrt(x * x + y * y)

      if (distance < proximity) {
        setIsVisible(true)
        element.style.setProperty("--mouse-x", `${x}px`)
        element.style.setProperty("--mouse-y", `${y}px`)
      } else {
        setIsVisible(false)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [disabled, glow, proximity])

  if (disabled || !glow) return null

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none"
      style={{
        background: isVisible
          ? `radial-gradient(${spread}px circle at var(--mouse-x) var(--mouse-y), rgba(0, 191, 178, 0.15), transparent 70%)`
          : "transparent",
        transition: "background 0.2s ease",
      }}
    />
  )
}
