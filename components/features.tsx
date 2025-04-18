"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, Code, Coins, Users, GitBranch, Lock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: <Shield className="h-10 w-10 text-solana-purple" />,
    title: "Repository Protection",
    description:
      "Secure your code with NFT-based ownership verification. Prevent unauthorized use and establish clear provenance for your intellectual property.",
  },
  {
    icon: <Code className="h-10 w-10 text-solana-purple" />,
    title: "Compressed NFTs",
    description:
      "Leverage Solana's state compression for cost-effective NFT minting. Create tokens that represent your repositories at a fraction of the cost.",
  },
  {
    icon: <Coins className="h-10 w-10 text-solana-purple" />,
    title: "Code Monetization",
    description:
      "Sell access to private repositories through NFT ownership. Implement automated royalty distribution when your code is used commercially.",
  },
  {
    icon: <Users className="h-10 w-10 text-solana-purple" />,
    title: "Collaborative Development",
    description:
      "Build a reputation system for code contributors. Create decentralized code review workflows and resolve ownership conflicts.",
  },
  {
    icon: <GitBranch className="h-10 w-10 text-solana-purple" />,
    title: "Developer Tools Integration",
    description:
      "Seamlessly integrate with popular IDEs and GitHub. Automatic NFT verification through GitHub Actions and CLI tools.",
  },
  {
    icon: <Lock className="h-10 w-10 text-solana-purple" />,
    title: "Immutable Verification",
    description:
      "Cryptographic hashes of your codebase stored on Solana. Immutable proof of ownership that can be verified at any time.",
  },
]

const Features = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const elementPosition = document.getElementById("features")?.offsetTop || 0

      if (scrollPosition > elementPosition) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="features" className="py-12 md:py-16 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-solana-purple/10 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Secure Your Code Ownership on <span className="gradient-text">Solana</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Zone provides a comprehensive solution for protecting your code repositories using the power of Solana
            blockchain technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="bg-black/40 border border-solana-purple/20 hover:border-solana-purple/40 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="mb-4 p-3 w-16 h-16 rounded-lg bg-solana-purple/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
