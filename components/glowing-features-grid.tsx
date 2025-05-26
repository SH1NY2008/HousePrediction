"use client"

import type React from "react"

import { Brain, Zap, Shield, BarChart3, MapPin } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

export function GlowingFeaturesGrid() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Brain className="h-4 w-4 text-[#3772FF]" />}
        title="AI-Powered Analysis"
        description="Advanced machine learning algorithms analyze thousands of data points for accurate valuations."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Zap className="h-4 w-4 text-[#3772FF]" />}
        title="Instant Results"
        description="Get property valuations in seconds, not days. Real-time processing delivers immediate insights."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Shield className="h-4 w-4 text-[#090C9B]" />}
        title="Bank-Grade Security"
        description="Your data is protected with enterprise-level encryption and privacy safeguards."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<BarChart3 className="h-4 w-4 text-[#090C9B]" />}
        title="Market Intelligence"
        description="Access comprehensive market trends, comparable sales, and neighborhood analytics."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<MapPin className="h-4 w-4 text-[#1A3A8F]" />}
        title="Location Precision"
        description="Hyper-local analysis considering micro-market conditions and neighborhood dynamics."
      />
    </ul>
  )
}

interface GridItemProps {
  area: string
  icon: React.ReactNode
  title: string
  description: React.ReactNode
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-gray-700 p-2 md:rounded-3xl md:p-3 bg-gray-900/30">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-gray-800/20 border border-gray-700/50">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 bg-gray-800/50">{icon}</div>
            <div className="space-y-3">
              <h3 className="font-sans text-xl/[1.375rem] font-semibold text-white md:text-2xl/[1.875rem]">{title}</h3>
              <p className="font-sans text-sm/[1.125rem] text-gray-400 md:text-base/[1.375rem]">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
