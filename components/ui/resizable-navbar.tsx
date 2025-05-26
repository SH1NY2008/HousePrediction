"use client"

import type React from "react"

import { useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-950/90 backdrop-blur-md border border-gray-800 rounded-2xl shadow-2xl max-w-6xl w-[calc(100%-2rem)] mx-auto",
        className,
      )}
    >
      {children}
    </nav>
  )
}

export function NavBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("hidden md:flex items-center justify-between px-8 py-4", className)}>{children}</div>
}

export function NavbarLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="p-2 bg-gradient-to-r from-[#3772FF] to-[#090C9B] rounded-lg">
        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </div>
    </div>
  )
}

export function NavItems({ items, className }: { items: Array<{ name: string; link: string }>; className?: string }) {
  return (
    <div className={cn("flex items-center space-x-8", className)}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm"
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}

export function NavbarButton({
  children,
  variant = "primary",
  className,
  onClick,
  ...props
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
  onClick?: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClasses = "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200"
  const variants = {
    primary: "bg-gradient-to-r from-[#00BFB2] to-[#028090] hover:from-[#00BFB2]/90 hover:to-[#028090]/90 text-white",
    secondary: "text-gray-300 hover:text-white hover:bg-gray-800",
  }

  return (
    <button className={cn(baseClasses, variants[variant], className)} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export function MobileNav({ children }: { children: React.ReactNode }) {
  return <div className="md:hidden">{children}</div>
}

export function MobileNavHeader({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-between px-8 py-4">{children}</div>
}

export function MobileNavToggle({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="p-2 text-gray-300 hover:text-white transition-colors"
      aria-label="Toggle mobile menu"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  )
}

export function MobileNavMenu({
  children,
  isOpen,
  onClose,
}: {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-gray-950/95 backdrop-blur-md border-t border-gray-800 rounded-b-2xl"
        >
          <div className="px-8 py-6 space-y-6">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
