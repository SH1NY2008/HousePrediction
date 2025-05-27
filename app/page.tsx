"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Brain,
  Zap,
  Shield,
  BarChart3,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Building,
  Star,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { GlowingFeaturesGrid } from "@/components/glowing-features-grid"
import { ExpandablePropertyCards } from "@/components/expandable-property-cards"
import { RaycastNavbar } from "@/components/raycast-navbar"
import { DraggableFeatures } from "@/components/draggable-features"
import { DraggablePropertyShowcase } from "@/components/draggable-property-showcase"
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

  const stats = [
    { number: "50K+", label: "Properties Analyzed", icon: Building },
    { number: "98.5%", label: "Accuracy Rate", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "5★", label: "User Rating", icon: Star },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden relative">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3772FF]/10 via-transparent to-[#00BFB2]/10" />
        
        {/* Add continuous gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent mix-blend-overlay" />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#3772FF]/20 to-[#090C9B]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#00BFB2]/20 to-[#028090]/20 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Sparkles background */}
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.3}
          maxSize={1.2}
          particleColor="#3772FF"
          particleDensity={60}
          speed={0.6}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 overflow-hidden">
        <RaycastNavbar />

        <main className=" relative z-20">

          {/* Enhanced Features Section */}
          <section id="features" className="py-24 relative">
            {/* Section background */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%233772FF&quot; fillOpacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Badge className="mb-6 bg-gradient-to-r from-[#3772FF]/20 to-[#090C9B]/20 text-[#3772FF] border-[#3772FF]/30 py-3 px-6 text-sm font-medium backdrop-blur-sm">
                    ✨ POWERFUL FEATURES
                  </Badge>
                </motion.div>
                <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#3772FF] to-[#00BFB2] bg-clip-text text-transparent leading-tight">
                  Why Choose PricePredict?
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Experience the future of property valuation with our advanced AI technology and comprehensive market
                  analysis.
                </p>
              </motion.div>

              <GlowingFeaturesGrid />
            </div>
          </section>

          {/* Enhanced Interactive Features */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3772FF]/5 to-transparent" />
            <DraggableFeatures />
          </motion.section>

          {/* Enhanced How It Works Section */}
          <section id="how-it-works" className="py-32 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-[#3772FF]/10 to-[#090C9B]/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-[#00BFB2]/10 to-[#028090]/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <Badge className="mb-6 bg-gradient-to-r from-[#090C9B]/20 to-[#3772FF]/20 text-[#090C9B] border-[#090C9B]/30 py-3 px-6 text-sm font-medium backdrop-blur-sm">
                   SIMPLE PROCESS
                </Badge>
                <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#090C9B] to-[#3772FF] bg-clip-text text-transparent leading-tight">
                  How It Works
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Get accurate property valuations in three simple steps
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00BFB2]/10 to-[#028090]/10 rounded-2xl blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
                  <div className="relative z-10 p-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#00BFB2] to-[#028090] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-[#00BFB2]/30">
                      <span className="text-3xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Enter Property Details</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Input basic information about your property including location, size, bedrooms, and condition.
                    </p>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#028090]/10 to-[#1A5E63]/10 rounded-2xl blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
                  <div className="relative z-10 p-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#028090] to-[#1A5E63] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-[#028090]/30">
                      <span className="text-3xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">AI Analysis</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our advanced algorithms analyze market data, comparable sales, and local trends in real-time.
                    </p>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1A5E63]/10 to-[#00BFB2]/10 rounded-2xl blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
                  <div className="relative z-10 p-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#1A5E63] to-[#00BFB2] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-[#1A5E63]/30">
                      <span className="text-3xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Get Instant Results</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Receive a detailed valuation report with price estimates, confidence scores, and market insights.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Enhanced Property Showcase */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative -mt-16"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-transparent to-gray-900/30" />
            <DraggablePropertyShowcase />
          </motion.section>

          {/* Enhanced Benefits Section */}
          <section className="py-32 relative overflow-hidden -mt-16">
            {/* Enhanced background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 backdrop-blur-sm" />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#3772FF]/5 rounded-full blur-[150px]"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#00BFB2]/5 rounded-full blur-[150px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Badge className="mb-6 bg-gradient-to-r from-[#00BFB2]/20 to-[#028090]/20 text-[#00BFB2] border-[#00BFB2]/30 py-3 px-6 text-sm font-medium backdrop-blur-sm">
                    COMPREHENSIVE SOLUTION
                  </Badge>
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-[#00BFB2] to-gray-300 bg-clip-text text-transparent leading-tight">
                    Everything You Need for Smart Property Decisions
                  </h2>
                  <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                    Our comprehensive platform provides all the tools and insights you need to make informed real estate
                    decisions with confidence.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                      >
                        <div className="p-3 rounded-xl bg-gradient-to-r from-[#00BFB2]/20 to-[#028090]/20 group-hover:from-[#00BFB2]/30 group-hover:to-[#028090]/30 transition-all duration-300">
                          <CheckCircle className="h-5 w-5 text-[#00BFB2] flex-shrink-0" />
                        </div>
                        <span className="text-gray-200 font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link href="/predict">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#00BFB2] to-[#028090] hover:from-[#00BFB2]/90 hover:to-[#028090]/90 shadow-2xl shadow-[#00BFB2]/30 transition-all duration-300 text-lg px-8 py-6 rounded-xl"
                      >
                        Try It Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00BFB2]/20 to-[#028090]/20 rounded-3xl blur-3xl"></div>
                  <Card className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 p-10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#00BFB2]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#028090]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="space-y-8 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-lg">Estimated Value</span>
                        <Badge className="bg-gradient-to-r from-[#00BFB2]/20 to-[#028090]/20 text-[#00BFB2] border-[#00BFB2]/30 py-2 px-4">
                          High Confidence
                        </Badge>
                      </div>
                      <div className="text-5xl font-bold bg-gradient-to-r from-[#00BFB2] to-[#028090] bg-clip-text text-transparent">
                        $847,500
                      </div>
                      <div className="text-gray-400">Range: $820,000 - $875,000</div>
                      <div className="space-y-4">
                        <div className="flex justify-between text-lg">
                          <span className="text-gray-300">Location Impact</span>
                          <span className="text-[#00BFB2] font-semibold">+15%</span>
                        </div>
                        <div className="flex justify-between text-lg">
                          <span className="text-gray-300">Property Size</span>
                          <span className="text-[#028090] font-semibold">+8%</span>
                        </div>
                        <div className="flex justify-between text-lg">
                          <span className="text-gray-300">Market Trends</span>
                          <span className="text-[#1A5E63] font-semibold">+3%</span>
                        </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-gray-700">
                        <div className="flex items-center gap-3">
                          <Building className="h-5 w-5 text-[#00BFB2]" />
                          <span className="text-gray-300">Based on 24 similar properties in the area</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Enhanced Property Examples */}
          <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950/50 via-gray-900/30 to-gray-950/50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#3772FF]/5 rounded-full blur-[200px]"></div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#00BFB2]/5 rounded-full blur-[200px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <Badge className="mb-6 bg-gradient-to-r from-[#3772FF]/20 to-[#090C9B]/20 text-[#3772FF] border-[#3772FF]/30 py-3 px-6 text-sm font-medium backdrop-blur-sm">
                  REAL EXAMPLES
                </Badge>
                <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#3772FF] to-gray-300 bg-clip-text text-transparent leading-tight">
                  Recent Property Valuations
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Explore real examples of properties valued using our AI technology
                </p>
              </motion.div>

              <ExpandablePropertyCards />
            </div>
          </section>

          {/* Enhanced Comparison Section */}
          <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090C9B]/5 to-[#3772FF]/5 opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <Badge className="mb-6 bg-gradient-to-r from-[#090C9B]/20 to-[#3772FF]/20 text-[#090C9B] border-[#090C9B]/30 py-3 px-6 text-sm font-medium backdrop-blur-sm">
                  INTERACTIVE COMPARISON
                </Badge>
                <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#090C9B] to-[#3772FF] bg-clip-text text-transparent leading-tight">
                  Before & After Renovations
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  See how property improvements impact valuation with our interactive comparison tool
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="p-2 rounded-3xl bg-gradient-to-r from-[#090C9B] via-[#3772FF] to-[#090C9B] shadow-2xl">
                  <CompareDemo />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00BFB2]/10 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#00BFB2]/20 rounded-full blur-[200px]"></div>
            </div>

            <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-8 bg-gradient-to-r from-[#00BFB2]/20 to-[#028090]/20 text-[#00BFB2] border-[#00BFB2]/30 py-3 px-6 text-sm font-medium backdrop-blur-sm">
                  GET STARTED TODAY
                </Badge>
                <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-[#00BFB2] to-gray-300 bg-clip-text text-transparent leading-tight">
                  Ready to Discover Your Property's True Value?
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                  Join thousands of property owners, investors, and real estate professionals who trust PricePredict for
                  accurate valuations.
                </p>
                <Link href="/predict">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#00BFB2] to-[#028090] hover:from-[#00BFB2]/90 hover:to-[#028090]/90 shadow-2xl shadow-[#00BFB2]/30 transition-all duration-300 text-xl px-12 py-8 rounded-2xl"
                    >
                      Get Your Free Valuation
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Enhanced Footer */}
        <footer className="bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl border-t border-gray-700/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00BFB2]/5 to-transparent opacity-30"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-[#00BFB2] to-[#028090] rounded-xl shadow-lg">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#00BFB2] to-[#028090] bg-clip-text text-transparent">
                    PricePredict
                  </span>
                </div>
                <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                  The most advanced AI-powered property valuation platform. Get accurate, instant property valuations
                  with confidence.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white mb-6 text-lg">Product</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-3 group">
                      <span className="w-1 h-1 rounded-full bg-[#00BFB2] group-hover:w-2 transition-all"></span>
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-3 group">
                      <span className="w-1 h-1 rounded-full bg-[#00BFB2] group-hover:w-2 transition-all"></span>
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-3 group">
                      <span className="w-1 h-1 rounded-full bg-[#00BFB2] group-hover:w-2 transition-all"></span>
                      API
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white mb-6 text-lg">Company</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-3 group">
                      <span className="w-1 h-1 rounded-full bg-[#028090] group-hover:w-2 transition-all"></span>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-3 group">
                      <span className="w-1 h-1 rounded-full bg-[#028090] group-hover:w-2 transition-all"></span>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-3 group">
                      <span className="w-1 h-1 rounded-full bg-[#028090] group-hover:w-2 transition-all"></span>
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
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
