"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  { name: "Solana", logo: "/placeholder.svg" },
  { name: "GitHub", logo: "/placeholder.svg" },
  { name: "Metaplex", logo: "/placeholder.svg" },
  { name: "Phantom", logo: "/placeholder.svg" },
  { name: "Anchor", logo: "/placeholder.svg" },
]

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const elementPosition = document.getElementById("partners")?.offsetTop || 0

      if (scrollPosition > elementPosition) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="partners" className="py-8 md:py-12 bg-black/50 relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-xl md:text-2xl font-medium text-muted-foreground">Trusted by Leading Web3 Platforms</h3>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-solana-purple/10 rounded-lg flex items-center justify-center mb-3 border border-solana-purple/20">
                <span className="text-2xl font-bold text-solana-purple">{partner.name.charAt(0)}</span>
              </div>
              <span className="text-sm font-medium text-solana-lavender">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
