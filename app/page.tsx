"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Brain, Zap, Shield, BarChart3, MapPin, Clock, CheckCircle, ArrowRight, Building, Sparkles } from "lucide-react"
import Link from "next/link"
import { GlowingFeaturesGrid } from "@/components/glowing-features-grid"
import { ExpandablePropertyCards } from "@/components/expandable-property-cards"
import { RaycastNavbar } from "@/components/raycast-navbar"
import { DraggableFeatures } from "@/components/draggable-features"
import { DraggablePropertyShowcase } from "@/components/draggable-property-showcase"
import { PropertyParallaxHero } from "@/components/property-parallax-hero"
import { CompareDemo } from "@/components/Compare"
import { SparklesCore } from "@/components/sparkles-core"
import { motion } from "motion/react"

export default function HomePage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description:
        "Advanced machine learning algorithms analyze thousands of data points to provide accurate valuations.",
      color: "text-[#00BFB2]",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description:
        "Get property valuations in seconds, not days. Our real-time processing delivers immediate insights.",
      color: "text-[#00BFB2]",
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your data is protected with enterprise-level encryption and privacy safeguards.",
      color: "text-[#028090]",
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description: "Access comprehensive market trends, comparable sales, and neighborhood analytics.",
      color: "text-[#028090]",
    },
    {
      icon: MapPin,
      title: "Location Precision",
      description: "Hyper-local analysis considering micro-market conditions and neighborhood dynamics.",
      color: "text-[#1A5E63]",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Get property valuations anytime, anywhere. Our platform never sleeps.",
      color: "text-[#1A5E63]",
    },
  ]

  const benefits = [
    "No hidden fees or subscriptions",
    "Instant property valuation reports",
    "Market trend analysis included",
    "Mobile-optimized experience",
    "Professional-grade accuracy",
    "Continuous model updates",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary to-secondary text-white overflow-hidden transition-all duration-700 ease-in-out">
      {/* Ambient Background Effect */}
      <div className="fixed inset-0 z-0 opacity-40">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.2}
          maxSize={1.0}
          particleColor="#3772FF"
          particleDensity={70}
          speed={0.8}
          className="w-full h-full"
        />
      </div>
      
      <div className="relative z-10">
        <RaycastNavbar />

        <main className="pt-28">
          {/* Hero Section with Enhanced Parallax */}
          <section className="relative">
            <PropertyParallaxHero />
            <div className="absolute bottom-10 left-0 right-0 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-gradient-to-r from-[#00BFB2]/10 to-[#028090]/10 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-2"
              >
                <Sparkles className="h-5 w-5 text-[#00BFB2]" />
                <span className="text-sm text-gray-200">Scroll down to explore our AI-powered features</span>
              </motion.div>
            </div>
          </section>

          {/* Features Section with Enhanced Visuals */}
          <section id="features" className="py-24 bg-gray-900/30 backdrop-blur-sm border-t border-b border-gray-800/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 bg-[#3772FF]/20 text-[#3772FF] border-[#3772FF]/30 py-2 px-4 text-sm">
                  POWERFUL FEATURES
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#3772FF] to-gray-300 bg-clip-text text-transparent">
                  Why Choose PricePredict?
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Experience the future of property valuation with our advanced AI technology and comprehensive market
                  analysis.
                </p>
              </motion.div>

              <GlowingFeaturesGrid />
            </div>
          </section>

          {/* Interactive Draggable Features with Animation */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <DraggableFeatures />
          </motion.section>

          {/* How It Works Section with Enhanced Visuals */}
          <section id="how-it-works" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3772FF]/5 to-[#090C9B]/5 opacity-50"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 bg-[#090C9B]/20 text-[#090C9B] border-[#090C9B]/30 py-2 px-4 text-sm">
                  SIMPLE PROCESS
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#090C9B] to-gray-300 bg-clip-text text-transparent">
                  How It Works
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Get accurate property valuations in three simple steps
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00BFB2]/10 to-[#028090]/10 rounded-xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#00BFB2] to-[#028090] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#00BFB2]/20">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Enter Property Details</h3>
                    <p className="text-gray-400">
                      Input basic information about your property including location, size, bedrooms, and condition.
                    </p>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#028090]/10 to-[#1A5E63]/10 rounded-xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#028090] to-[#1A5E63] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#028090]/20">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">AI Analysis</h3>
                    <p className="text-gray-400">
                      Our advanced algorithms analyze market data, comparable sales, and local trends in real-time.
                    </p>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1A5E63]/10 to-[#00BFB2]/10 rounded-xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#1A5E63] to-[#00BFB2] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#1A5E63]/20">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Get Instant Results</h3>
                    <p className="text-gray-400">
                      Receive a detailed valuation report with price estimates, confidence scores, and market insights.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Draggable Property Showcase with Animation */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <DraggablePropertyShowcase />
          </motion.section>

          {/* Benefits Section with Enhanced Visuals */}
          <section className="py-24 bg-gray-900/30 backdrop-blur-sm border-t border-b border-gray-800/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#3772FF]/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#00BFB2]/10 rounded-full blur-[120px]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Badge className="mb-4 bg-[#00BFB2]/20 text-[#00BFB2] border-[#00BFB2]/30 py-2 px-4 text-sm">
                    COMPREHENSIVE SOLUTION
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00BFB2] to-gray-300 bg-clip-text text-transparent">
                    Everything You Need for Smart Property Decisions
                  </h2>
                  <p className="text-xl text-gray-400 mb-8">
                    Our comprehensive platform provides all the tools and insights you need to make informed real estate
                    decisions with confidence.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className="p-2 rounded-full bg-[#00BFB2]/10">
                          <CheckCircle className="h-5 w-5 text-[#00BFB2] flex-shrink-0" />
                        </div>
                        <span className="text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link href="/predict">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#00BFB2] to-[#028090] hover:from-[#00BFB2]/90 hover:to-[#028090]/90 shadow-lg shadow-[#00BFB2]/20 transition-all duration-300 hover:scale-105"
                    >
                      Try It Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00BFB2]/20 to-[#028090]/20 rounded-2xl blur-3xl"></div>
                  <Card className="relative bg-gray-800/50 border-gray-700 p-8 backdrop-blur-sm rounded-xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00BFB2]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#028090]/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
                    
                    <div className="space-y-6 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Estimated Value</span>
                        <Badge className="bg-[#00BFB2]/20 text-[#00BFB2] border-[#00BFB2]/30">High Confidence</Badge>
                      </div>
                      <div className="text-4xl font-bold text-white">$847,500</div>
                      <div className="text-sm text-gray-400">Range: $820,000 - $875,000</div>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Location Impact</span>
                          <span className="text-[#00BFB2]">+15%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Property Size</span>
                          <span className="text-[#028090]">+8%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Market Trends</span>
                          <span className="text-[#1A5E63]">+3%</span>
                        </div>
                      </div>
                      
                      <div className="pt-4 mt-4 border-t border-gray-700">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-[#00BFB2]" />
                          <span className="text-sm text-gray-400">Based on 24 similar properties in the area</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Property Examples Section with Animation */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#3772FF]/5 rounded-full blur-[150px]"></div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#00BFB2]/5 rounded-full blur-[150px]"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 bg-[#3772FF]/20 text-[#3772FF] border-[#3772FF]/30 py-2 px-4 text-sm">
                  REAL EXAMPLES
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#3772FF] to-gray-300 bg-clip-text text-transparent">
                  Recent Property Valuations
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Explore real examples of properties valued using our AI technology
                </p>
              </motion.div>

              <ExpandablePropertyCards />
            </div>
          </section>

          {/* Before & After Comparison Section with Enhanced Visuals */}
          <section className="py-24 bg-gray-900/30 backdrop-blur-sm border-t border-b border-gray-800/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#090C9B]/5 to-[#3772FF]/5 opacity-50"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 bg-[#090C9B]/20 text-[#090C9B] border-[#090C9B]/30 py-2 px-4 text-sm">
                  INTERACTIVE COMPARISON
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#090C9B] to-gray-300 bg-clip-text text-transparent">
                  Before & After Renovations
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  See how property improvements impact valuation with our interactive comparison tool
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="p-1 rounded-3xl bg-gradient-to-r from-[#090C9B] via-[#3772FF] to-[#090C9B] shadow-xl">
                  <CompareDemo />
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA Section with Enhanced Visuals */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00BFB2]/5 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#00BFB2]/10 rounded-full blur-[150px]"></div>
            </div>
            
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-6 bg-[#00BFB2]/20 text-[#00BFB2] border-[#00BFB2]/30 py-2 px-4 text-sm">
                  GET STARTED TODAY
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00BFB2] to-gray-300 bg-clip-text text-transparent">
                  Ready to Discover Your Property's True Value?
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Join thousands of property owners, investors, and real estate professionals who trust PricePredict for
                  accurate valuations.
                </p>
                <Link href="/predict">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#00BFB2] to-[#028090] hover:from-[#00BFB2]/90 hover:to-[#028090]/90 shadow-lg shadow-[#00BFB2]/20 transition-all duration-300 hover:scale-105"
                    >
                      Get Your Free Valuation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer with Enhanced Visuals */}
        <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00BFB2]/5 to-transparent opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-gradient-to-r from-[#00BFB2] to-[#028090] rounded-lg">
                    <Home className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-[#00BFB2] to-[#028090] bg-clip-text text-transparent">
                    PricePredict
                  </span>
                </div>
                <p className="text-gray-400 mb-4 max-w-md">
                  The most advanced AI-powered property valuation platform. Get accurate, instant property valuations with
                  confidence.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#00BFB2] group-hover:w-2 transition-all"></span>
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#00BFB2] group-hover:w-2 transition-all"></span>
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#00BFB2] group-hover:w-2 transition-all"></span>
                      API
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#028090] group-hover:w-2 transition-all"></span>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#028090] group-hover:w-2 transition-all"></span>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#028090] group-hover:w-2 transition-all"></span>
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 PricePredict. All rights reserved. | Powered by Advanced AI & Machine Learning
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
