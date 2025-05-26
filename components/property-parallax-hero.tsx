"use client"

import { HeroParallax } from "@/components/ui/hero-parallax"

export function PropertyParallaxHero() {
  const properties = [
    {
      title: "Manhattan Penthouse - $3.2M",
      link: "/predict",
      thumbnail: "/images/manhattan-penthouse.jpg", // Replace with actual image
    },
    {
      title: "Brooklyn Brownstone - $1.8M",
      link: "/predict",
      thumbnail: "/images/brooklyn-brownstone.jpg", // Replace with actual image
    },
    {
      title: "San Francisco Loft - $2.9M",
      link: "/predict",
      thumbnail: "/images/sanfrancisco-loft.jpg",
    },
    {
      title: "Miami Beach Condo - $1.5M",
      link: "/predict",
      thumbnail: "/images/miamibeachcondo.jpg",
    },
    {
      title: "Chicago High-Rise - $950K",
      link: "/predict",
      thumbnail: "/images/chicago.jpg",
    },
    {
      title: "Austin Modern Home - $750K",
      link: "/predict",
      thumbnail: "/images/austin.jpg",
    },
    {
      title: "Seattle Waterfront - $1.2M",
      link: "/predict",
      thumbnail: "/images/seattle.jpg",
    },
    {
      title: "LA Hills Villa - $2.5M",
      link: "/predict",
      thumbnail: "/images/lahillsvilla.jpg",
    },
    {
      title: "Boston Historic - $1.1M",
      link: "/predict",
      thumbnail: "/images/boston.jpg",
    },
    {
      title: "Denver Mountain View - $850K",
      link: "/predict",
      thumbnail: "/images/denver.jpg",
    },
    {
      title: "Nashville Music Row - $650K",
      link: "/predict",
      thumbnail: "/images/nashville.jpg",
    },
    {
      title: "Portland Pearl District - $700K",
      link: "/predict",
      thumbnail: "/images/portland.jpg",
    },
    {
      title: "Phoenix Desert Modern - $550K",
      link: "/predict",
      thumbnail: "/images/phoenix.jpg",
    },
    {
      title: "Atlanta Midtown - $480K",
      link: "/predict",
      thumbnail: "/images/atlanta.jpg",
    },
    {
      title: "Tampa Bay Front - $620K",
      link: "/predict",
      thumbnail: "/images/tampa.jpg", // Replace with actual image
    },
  ]

  return <HeroParallax products={properties} />
}
