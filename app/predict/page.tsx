"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Home, MapPin, Bed, Bath, Car, Trees, Calculator, TrendingUp } from "lucide-react"
import { motion } from "motion/react"
import { RaycastNavbar } from "@/components/raycast-navbar"

interface HouseFeatures {
  location: string
  propertyType: string
  size: string
  bedrooms: string
  bathrooms: string
  age: string
  garage: string
  garden: string
  condition: string
}

interface PredictionResult {
  estimatedPrice: number
  priceRange: {
    min: number
    max: number
  }
  confidence: number
  factors: Array<{
    name: string
    impact: string
    description: string
  }>
}

export default function PredictPage() {
  const [features, setFeatures] = useState<HouseFeatures>({
    location: "",
    propertyType: "",
    size: "",
    bedrooms: "",
    bathrooms: "",
    age: "",
    garage: "",
    garden: "",
    condition: "",
  })

  const [prediction, setPrediction] = useState<PredictionResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: keyof HouseFeatures, value: string) => {
    setFeatures((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const calculatePrediction = async () => {
    setIsLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Mock prediction algorithm
    let basePrice = 200000

    // Location multiplier
    const locationMultipliers: Record<string, number> = {
      manhattan: 3.5,
      brooklyn: 2.2,
      queens: 1.8,
      bronx: 1.4,
      "staten-island": 1.6,
      "san-francisco": 4.0,
      "los-angeles": 2.8,
      chicago: 1.9,
      miami: 2.3,
      austin: 2.1,
    }

    basePrice *= locationMultipliers[features.location] || 1.5

    // Property type adjustment
    const propertyAdjustments: Record<string, number> = {
      "single-family": 1.2,
      condo: 1.0,
      townhouse: 1.1,
      apartment: 0.9,
      duplex: 1.15,
    }

    basePrice *= propertyAdjustments[features.propertyType] || 1.0

    // Size impact
    const size = Number.parseInt(features.size) || 1000
    const pricePerSqFt = basePrice / 1000
    basePrice = size * pricePerSqFt

    // Bedrooms and bathrooms
    const bedrooms = Number.parseInt(features.bedrooms) || 2
    const bathrooms = Number.parseFloat(features.bathrooms) || 1
    basePrice += (bedrooms - 2) * 15000
    basePrice += (bathrooms - 1) * 10000

    // Age adjustment
    const age = Number.parseInt(features.age) || 10
    if (age < 5) basePrice *= 1.1
    else if (age > 30) basePrice *= 0.9

    // Amenities
    if (features.garage === "yes") basePrice += 25000
    if (features.garden === "yes") basePrice += 15000

    // Condition adjustment
    const conditionMultipliers: Record<string, number> = {
      excellent: 1.15,
      good: 1.05,
      fair: 1.0,
      poor: 0.85,
    }

    basePrice *= conditionMultipliers[features.condition] || 1.0

    const estimatedPrice = Math.round(basePrice)
    const variance = estimatedPrice * 0.15

    const factors = [
      {
        name: "Location",
        impact: locationMultipliers[features.location] > 2 ? "High positive" : "Moderate positive",
        description: "Prime location significantly increases property value",
      },
      {
        name: "Property Size",
        impact: size > 2000 ? "High positive" : size < 1000 ? "Negative" : "Neutral",
        description: `${size} sq ft is ${size > 2000 ? "above" : size < 1000 ? "below" : "within"} average`,
      },
      {
        name: "Bedrooms & Bathrooms",
        impact: bedrooms >= 3 && bathrooms >= 2 ? "Positive" : "Neutral",
        description: `${bedrooms} bed, ${bathrooms} bath configuration`,
      },
    ]

    setPrediction({
      estimatedPrice,
      priceRange: {
        min: Math.round(estimatedPrice - variance),
        max: Math.round(estimatedPrice + variance),
      },
      confidence: Math.round(85 + Math.random() * 10),
      factors,
    })

    setIsLoading(false)
  }

  const isFormValid = Object.values(features).every((value) => value !== "")

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <RaycastNavbar />

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Property Price Prediction
          </h1>
          <p className="text-gray-400">Enter your property details to get an AI-powered valuation</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Calculator className="h-5 w-5" />
                Property Details
              </CardTitle>
              <CardDescription className="text-gray-400">
                Enter your property information to get an accurate price prediction
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center gap-2 text-gray-300">
                  <MapPin className="h-4 w-4" />
                  Location
                </Label>
                <Select value={features.location} onValueChange={(value) => handleInputChange("location", value)}>
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="manhattan">Manhattan, NY</SelectItem>
                    <SelectItem value="brooklyn">Brooklyn, NY</SelectItem>
                    <SelectItem value="queens">Queens, NY</SelectItem>
                    <SelectItem value="bronx">Bronx, NY</SelectItem>
                    <SelectItem value="staten-island">Staten Island, NY</SelectItem>
                    <SelectItem value="san-francisco">San Francisco, CA</SelectItem>
                    <SelectItem value="los-angeles">Los Angeles, CA</SelectItem>
                    <SelectItem value="chicago">Chicago, IL</SelectItem>
                    <SelectItem value="miami">Miami, FL</SelectItem>
                    <SelectItem value="austin">Austin, TX</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Property Type */}
              <div className="space-y-2">
                <Label htmlFor="propertyType" className="flex items-center gap-2 text-gray-300">
                  <Home className="h-4 w-4" />
                  Property Type
                </Label>
                <Select
                  value={features.propertyType}
                  onValueChange={(value) => handleInputChange("propertyType", value)}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="single-family">Single Family Home</SelectItem>
                    <SelectItem value="condo">Condominium</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="duplex">Duplex</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Size */}
              <div className="space-y-2">
                <Label htmlFor="size" className="text-gray-300">
                  Size (Square Feet)
                </Label>
                <Input
                  id="size"
                  type="number"
                  placeholder="e.g., 1500"
                  value={features.size}
                  onChange={(e) => handleInputChange("size", e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              {/* Bedrooms and Bathrooms */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-300">
                    <Bed className="h-4 w-4" />
                    Bedrooms
                  </Label>
                  <Select value={features.bedrooms} onValueChange={(value) => handleInputChange("bedrooms", value)}>
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="Beds" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-300">
                    <Bath className="h-4 w-4" />
                    Bathrooms
                  </Label>
                  <Select value={features.bathrooms} onValueChange={(value) => handleInputChange("bathrooms", value)}>
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="Baths" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="1.5">1.5</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="2.5">2.5</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="3.5">3.5</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Age */}
              <div className="space-y-2">
                <Label htmlFor="age" className="text-gray-300">
                  Property Age (Years)
                </Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="e.g., 15"
                  value={features.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              {/* Amenities */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-300">
                    <Car className="h-4 w-4" />
                    Garage
                  </Label>
                  <Select value={features.garage} onValueChange={(value) => handleInputChange("garage", value)}>
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="Has garage?" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-gray-300">
                    <Trees className="h-4 w-4" />
                    Garden/Yard
                  </Label>
                  <Select value={features.garden} onValueChange={(value) => handleInputChange("garden", value)}>
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="Has garden?" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Condition */}
              <div className="space-y-2">
                <Label htmlFor="condition" className="text-gray-300">
                  Property Condition
                </Label>
                <Select value={features.condition} onValueChange={(value) => handleInputChange("condition", value)}>
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={calculatePrediction}
                disabled={!isFormValid || isLoading}
                className="w-full h-12 text-lg bg-gradient-to-r from-[#00BFB2] to-[#028090] hover:from-[#00BFB2]/90 hover:to-[#028090]/90"
              >
                {isLoading ? "Calculating..." : "Predict Price"}
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <TrendingUp className="h-5 w-5" />
                Price Prediction
              </CardTitle>
              <CardDescription className="text-gray-400">
                AI-generated property valuation based on your inputs
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!prediction && !isLoading && (
                <div className="text-center py-12">
                  <Home className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500">Fill out the form to get your price prediction</p>
                </div>
              )}

              {isLoading && (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#00BFB2] mx-auto mb-4"></div>
                  <p className="text-gray-400">Analyzing property data...</p>
                </div>
              )}

              {prediction && (
                <div className="space-y-6">
                  {/* Main Price */}
                  <div className="text-center p-6 bg-gradient-to-r from-[#1A5E63]/30 to-[#028090]/30 rounded-lg border border-[#00BFB2]/20">
                    <p className="text-sm text-gray-400 mb-2">Estimated Value</p>
                    <p className="text-4xl font-bold bg-gradient-to-r from-[#00BFB2] to-[#028090] bg-clip-text text-transparent">
                      ${prediction.estimatedPrice.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Range: ${prediction.priceRange.min.toLocaleString()} - $
                      {prediction.priceRange.max.toLocaleString()}
                    </p>
                  </div>

                  {/* Confidence */}
                  <div className="flex items-center justify-between p-4 bg-[#00BFB2]/10 rounded-lg border border-[#00BFB2]/20">
                    <span className="text-sm font-medium text-[#00BFB2]">Confidence Score</span>
                    <Badge className="bg-[#00BFB2]/20 text-[#00BFB2] border-[#00BFB2]/30">
                      {prediction.confidence}%
                    </Badge>
                  </div>

                  <Separator className="bg-gray-700" />

                  {/* Factors */}
                  <div>
                    <h4 className="font-semibold mb-4 text-white">Key Price Factors</h4>
                    <div className="space-y-3">
                      {prediction.factors.map((factor, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700"
                        >
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm text-white">{factor.name}</span>
                              <Badge
                                variant={
                                  factor.impact.includes("positive")
                                    ? "default"
                                    : factor.impact.includes("Negative")
                                      ? "destructive"
                                      : "secondary"
                                }
                                className="text-xs"
                              >
                                {factor.impact}
                              </Badge>
                            </div>
                            <p className="text-xs text-gray-400">{factor.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 text-center pt-4 border-t border-gray-700">
                    * This is an AI-generated estimate. Actual market value may vary based on current market conditions,
                    comparable sales, and other factors not captured in this model.
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </motion.main>
    </div>
  )
}
