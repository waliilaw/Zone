"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Code, Shield, Coins } from "lucide-react"
import { motion } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleGetStarted = () => {
    toast({
      title: "Coming Soon",
      description: "This feature is currently under development.",
    })
  }

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-solana-purple/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-solana-purple/20 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-solana-purple/10 text-solana-lavender rounded-full border border-solana-purple/20">
              <Github className="mr-2 h-4 w-4" />
              Protect your code with Solana NFTs
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            NFT-Protected{" "}
            <span className="relative">
              <span className="relative z-10 gradient-text">GitHub</span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-solana-purple/20 rounded-sm z-0"></span>
            </span>{" "}
            Repositories
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-muted-foreground mb-10 max-w-3xl"
          >
            Secure your code ownership on the Solana blockchain. Protect intellectual property, monetize repositories,
            and build a verifiable portfolio of your work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-solana-purple hover:bg-solana-purple/90 text-white"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-solana-purple text-solana-lavender hover:bg-solana-purple/10"
            >
              View Documentation
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative w-full max-w-4xl mx-auto"
          >
            <div className="relative rounded-xl overflow-hidden border border-solana-purple/30 shadow-2xl shadow-solana-purple/20">
              <div className="absolute inset-0 bg-gradient-to-br from-solana-purple/10 to-transparent"></div>

              {/* Repository visualization */}
              <div className="bg-black/80 p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-solana-purple/20 flex items-center justify-center">
                      <Code className="h-5 w-5 text-solana-lavender" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">smart-contracts/solana-nft-auth</h3>
                      <p className="text-sm text-muted-foreground">Protected by Zone</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="px-3 py-1 rounded-full bg-solana-purple/20 text-solana-lavender text-xs font-medium flex items-center">
                      <Shield className="mr-1 h-3 w-3" />
                      Verified
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium flex items-center">
                      <Coins className="mr-1 h-3 w-3" />
                      Monetized
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-black/50 rounded-lg p-4 border border-solana-purple/20">
                    <div className="text-sm text-muted-foreground mb-1">Owner</div>
                    <div className="text-sm font-mono">Wali</div>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4 border border-solana-purple/20">
                    <div className="text-sm text-muted-foreground mb-1">NFT Token</div>
                    <div className="text-sm font-mono">ZONE-3829</div>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4 border border-solana-purple/20">
                    <div className="text-sm text-muted-foreground mb-1">Last Verified</div>
                    <div className="text-sm">2 minutes ago</div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-4 border border-solana-purple/20 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-medium">Repository Hash (Latest Commit)</div>
                    <div className="text-xs text-solana-lavender">Verified on Solana</div>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground break-all">
                    e7c82d7c8a5a5e3f7b7d8f9a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm" className="border-solana-purple/30 text-solana-lavender">
                      View on Explorer
                    </Button>
                    <Button variant="outline" size="sm" className="border-solana-purple/30 text-solana-lavender">
                      Verification History
                    </Button>
                  </div>
                  <div className="text-xs text-muted-foreground">Protected since April 18, 2025</div>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-solana-purple/0 via-solana-purple/30 to-solana-purple/0 rounded-xl blur-xl opacity-30 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
