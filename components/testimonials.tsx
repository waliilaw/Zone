"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Zone has revolutionized how we protect our open-source projects. The ability to verify ownership on-chain has been invaluable for our team.",
    author: "Alex Johnson",
    role: "Lead Developer at BlockStack",
    avatar: "AJ",
    image: "/avatars/avatar-1.jpg"
  },
  {
    quote:
      "The integration with GitHub is seamless. We can now monetize our private repositories and track usage through NFT ownership.",
    author: "Sarah Chen",
    role: "CTO at DeFi Solutions",
    avatar: "SC",
    image: "/avatars/avatar-2.jpg"
  },
  {
    quote:
      "As a freelance developer, Zone helps me build a verifiable portfolio of my work and protect my intellectual property rights.",
    author: "Miguel Rodriguez",
    role: "Independent Blockchain Developer",
    avatar: "MR",
    image: "/avatars/avatar-3.jpg"
  },
]

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const elementPosition = document.getElementById("testimonials")?.offsetTop || 0

      if (scrollPosition > elementPosition) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="testimonials" className="py-12 md:py-16 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-solana-purple/10 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Developers Are <span className="gradient-text">Saying</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join the growing community of developers protecting their code with Zone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="bg-black/40 border border-solana-purple/20 h-full">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-solana-purple mb-4 opacity-50" />
                  <p className="text-lg mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 mr-4 bg-solana-purple/20 rounded-full flex items-center justify-center">
                      <span className="text-solana-lavender font-medium">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
