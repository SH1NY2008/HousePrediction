"use client"

import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card"
import { Brain, Zap, Shield, BarChart3, MapPin, Clock } from "lucide-react"

export function DraggableFeatures() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description:
        "Advanced machine learning algorithms analyze thousands of data points to provide accurate valuations.",
      color: "text-[#00BFB2]",
      gradient: "from-[#00BFB2]/20 to-[#028090]/20",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get property valuations in seconds, not days. Real-time processing delivers immediate insights.",
      color: "text-[#00BFB2]",
      gradient: "from-[#028090]/20 to-[#1A5E63]/20",
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your data is protected with enterprise-level encryption and privacy safeguards.",
      color: "text-[#028090]",
      gradient: "from-[#1A5E63]/20 to-[#00BFB2]/20",
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description: "Access comprehensive market trends, comparable sales, and neighborhood analytics.",
      color: "text-[#028090]",
      gradient: "from-[#00BFB2]/20 to-[#028090]/20",
    },
    {
      icon: MapPin,
      title: "Location Precision",
      description: "Hyper-local analysis considering micro-market conditions and neighborhood dynamics.",
      color: "text-[#1A5E63]",
      gradient: "from-[#028090]/20 to-[#1A5E63]/20",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Get property valuations anytime, anywhere. Our platform never sleeps.",
      color: "text-[#1A5E63]",
      gradient: "from-[#1A5E63]/20 to-[#00BFB2]/20",
    },
  ]

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Interactive Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Drag and explore our key features. Each card is interactive and physics-enabled.
          </p>
          <p className="text-sm text-gray-500">💡 Try dragging the cards around and watch the physics in action!</p>
        </div>

        <DraggableCardContainer className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <DraggableCardBody key={index} className="w-80 min-h-96">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-md`} />
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800/50 border border-gray-600 mb-6">
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">{feature.description}</p>
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Drag me around!</span>
                    <div className="w-2 h-2 bg-[#00BFB2] rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </div>
    </div>
  )
}
