"use client"

import { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { useOutsideClick } from "@/hooks/use-outside-click"

export function ExpandablePropertyCards() {
  const [active, setActive] = useState<(typeof propertyCards)[number] | boolean | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false)
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-gray-900 border border-gray-700 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src || "/placeholder.svg"}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3 layoutId={`title-${active.title}-${id}`} className="font-bold text-white">
                      {active.title}
                    </motion.h3>
                    <motion.p layoutId={`description-${active.description}-${id}`} className="text-gray-400">
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.div
                    layoutId={`price-${active.title}-${id}`}
                    className="px-4 py-3 text-sm rounded-full font-bold bg-gradient-to-r from-[#00BFB2] to-[#028090] text-white"
                  >
                    {active.price}
                  </motion.div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-300 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-4xl mx-auto w-full gap-4">
        {propertyCards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-gray-800/50 rounded-xl cursor-pointer border border-gray-700/50 bg-gray-900/30"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src || "/placeholder.svg"}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-center"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-gray-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.div
              layoutId={`price-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-800 hover:bg-gradient-to-r hover:from-[#00BFB2] hover:to-[#028090] text-white mt-4 md:mt-0 transition-all duration-300"
            >
              {card.price}
            </motion.div>
          </motion.div>
        ))}
      </ul>
    </>
  )
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  )
}

const propertyCards = [
  {
    description: "Manhattan Luxury Condo",
    title: "Modern High-Rise Living",
    src: "/images/manhattan-penthouse.jpg",
    price: "$2.1M",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            This stunning 2-bedroom, 2-bathroom luxury condominium offers breathtaking city views from the 45th floor.
            Located in the heart of Manhattan's Financial District, this modern unit features floor-to-ceiling windows,
            premium finishes, and access to world-class amenities.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Size:</strong> 1,200 sq ft
            </div>
            <div>
              <strong>Bedrooms:</strong> 2
            </div>
            <div>
              <strong>Bathrooms:</strong> 2
            </div>
            <div>
              <strong>Year Built:</strong> 2018
            </div>
          </div>
          <p>
            Building amenities include a 24-hour doorman, fitness center, rooftop terrace, and concierge services.
            Perfect for professionals seeking luxury living in the city.
          </p>
        </div>
      )
    },
  },
  {
    description: "Brooklyn Family Home",
    title: "Charming Brownstone",
    src: "/images/brooklyn-brownstone.jpg",
    price: "$1.8M",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            Beautiful 4-bedroom, 3-bathroom brownstone in Park Slope. This historic home has been lovingly restored
            while maintaining its original character. Features include original hardwood floors, exposed brick walls,
            and a private garden.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Size:</strong> 2,800 sq ft
            </div>
            <div>
              <strong>Bedrooms:</strong> 4
            </div>
            <div>
              <strong>Bathrooms:</strong> 3
            </div>
            <div>
              <strong>Year Built:</strong> 1920
            </div>
          </div>
          <p>
            Located on a tree-lined street near Prospect Park, excellent schools, and trendy restaurants. Perfect for
            families looking for space and character in Brooklyn.
          </p>
        </div>
      )
    },
  },
  {
    description: "San Francisco Tech Hub",
    title: "Modern Loft Apartment",
    src: "/images/sanfrancisco-loft.jpg",
    price: "$3.2M",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            Stunning 3-bedroom, 2-bathroom loft in SOMA district. This converted warehouse space features soaring
            ceilings, industrial elements, and modern upgrades. Open floor plan perfect for entertaining with a gourmet
            kitchen and spacious living areas.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Size:</strong> 2,200 sq ft
            </div>
            <div>
              <strong>Bedrooms:</strong> 3
            </div>
            <div>
              <strong>Bathrooms:</strong> 2
            </div>
            <div>
              <strong>Year Built:</strong> 2015
            </div>
          </div>
          <p>
            Walking distance to tech companies, public transportation, and the best restaurants in the city. Ideal for
            tech professionals and urban lifestyle enthusiasts.
          </p>
        </div>
      )
    },
  },
  {
    description: "Miami Beach Condo",
    title: "Oceanfront Paradise",
    src: "/images/miamibeachcondo.jpg",
    price: "$1.5M",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            Luxurious 2-bedroom, 2-bathroom oceanfront condominium with direct beach access. Floor-to-ceiling windows
            showcase panoramic ocean views. The unit features a modern kitchen, marble bathrooms, and a private balcony
            overlooking the Atlantic.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Size:</strong> 1,400 sq ft
            </div>
            <div>
              <strong>Bedrooms:</strong> 2
            </div>
            <div>
              <strong>Bathrooms:</strong> 2
            </div>
            <div>
              <strong>Year Built:</strong> 2019
            </div>
          </div>
          <p>
            Resort-style amenities include infinity pool, spa, fitness center, and valet parking. Perfect for vacation
            home or year-round luxury living.
          </p>
        </div>
      )
    },
  },
]
