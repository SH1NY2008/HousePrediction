"use client"

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"
import { useState } from "react"
import Link from "next/link"
import { Download, User, Mail, Lock } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RaycastNavbar() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "How It Works",
      link: "#how-it-works",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    setIsLoginOpen(false)
  }

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <Link href="/">
          <NavbarLogo />
        </Link>
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
            <DialogTrigger asChild>
              <button className="text-gray-300 hover:text-white transition-colors font-medium text-sm">Log in</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Account Login
                </DialogTitle>
                <DialogDescription>
                  Enter your credentials to access your account.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleLoginSubmit} className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </div>
                  </Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">
                    <div className="flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      Password
                    </div>
                  </Label>
                  <Input id="password" type="password" placeholder="••••••••" required />
                </div>
                <DialogFooter className="pt-4">
                  <Button type="submit" variant="gradient" className="w-full">
                    Sign In
                  </Button>
                </DialogFooter>
                <div className="text-center text-sm text-muted-foreground mt-2">
                  Don't have an account?{" "}
                  <a href="#" className="text-primary hover:underline">
                    Sign up
                  </a>
                </div>
              </form>
            </DialogContent>
          </Dialog>
          <Link href="/predict">
            <NavbarButton variant="primary" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Get Started
            </NavbarButton>
          </Link>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <Link href="/">
            <NavbarLogo />
          </Link>
          <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
            >
              {item.name}
            </a>
          ))}
          <div className="flex w-full flex-col gap-4 pt-4 border-t border-gray-800">
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <button
                  className="text-gray-300 hover:text-white transition-colors font-medium text-left"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Account Login
                  </DialogTitle>
                  <DialogDescription>
                    Enter your credentials to access your account.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleLoginSubmit} className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="mobile-email">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email
                      </div>
                    </Label>
                    <Input id="mobile-email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile-password">
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        Password
                      </div>
                    </Label>
                    <Input id="mobile-password" type="password" placeholder="••••••••" required />
                  </div>
                  <DialogFooter className="pt-4">
                    <Button type="submit" variant="gradient" className="w-full">
                      Sign In
                    </Button>
                  </DialogFooter>
                  <div className="text-center text-sm text-muted-foreground mt-2">
                    Don't have an account?{" "}
                    <a href="#" className="text-primary hover:underline">
                      Sign up
                    </a>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
            <Link href="/predict">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                Get Started
              </NavbarButton>
            </Link>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
