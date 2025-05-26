"use client"

import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square } from "lucide-react"

export function DraggablePropertyShowcase() {
  const properties = [
    {
      id: 1,
      title: "Manhattan Penthouse",
      location: "Upper East Side, NY",
      price: "$3.2M",
      image: "/images/manhattan-penthouse.jpg", // Replace with actual image
      beds: 3,
      baths: 2.5,
      sqft: "2,400",
      type: "Luxury Condo",
      confidence: 94,
    },
    {
      id: 2,
      title: "Brooklyn Brownstone",
      location: "Park Slope, NY",
      price: "$1.8M",
      image: "/images/brooklyn-brownstone.jpg",
      beds: 4,
      baths: 3,
      sqft: "2,800",
      type: "Historic Home",
      confidence: 89,
    },
    {
      id: 3,
      title: "SF Tech Loft",
      location: "SOMA, CA",
      price: "$2.9M",
      image: "/images/sanfrancisco-loft.jpg",
      beds: 2,
      baths: 2,
      sqft: "1,800",
      type: "Modern Loft",
      confidence: 91,
    },
  ]

  return (
    <div className="py-24 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Explore our latest property valuations with interactive, draggable cards
          </p>
          <p className="text-sm text-gray-500">🏠 Drag these property cards to see them in action!</p>
        </div>

        <DraggableCardContainer className="flex flex-wrap justify-center gap-8">
          {properties.map((property) => (
            <DraggableCardBody key={property.id} className="w-80 min-h-96">
              <div className="relative z-10 h-full flex flex-col">
                {/* Property Image */}
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-[#00BFB2]/20 text-[#00BFB2] border-[#00BFB2]/30">
                      {property.confidence}% Confidence
                    </Badge>
                  </div>
                </div>

                {/* Property Details */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">{property.title}</h3>
                    <span className="text-xl font-bold bg-gradient-to-r from-[#00BFB2] to-[#028090] bg-clip-text text-transparent">
                      {property.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-400">{property.location}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Bed className="h-4 w-4 text-[#00BFB2]" />
                      <span className="text-sm text-gray-300">{property.beds} beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-4 w-4 text-[#028090]" />
                      <span className="text-sm text-gray-300">{property.baths} baths</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Square className="h-4 w-4 text-[#1A5E63]" />
                      <span className="text-sm text-gray-300">{property.sqft} sqft</span>
                    </div>
                  </div>

                  <Badge variant="outline" className="border-gray-600 text-gray-300 mb-4">
                    {property.type}
                  </Badge>
                </div>

                {/* Drag Indicator */}
                <div className="mt-auto pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Drag to explore</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-[#00BFB2] rounded-full animate-pulse" />
                      <div className="w-1 h-1 bg-[#028090] rounded-full animate-pulse delay-100" />
                      <div className="w-1 h-1 bg-[#1A5E63] rounded-full animate-pulse delay-200" />
                    </div>
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
