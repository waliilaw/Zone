"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { GitCommit, GitBranch, Shield, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

const steps = [
  {
    icon: <GitCommit className="h-6 w-6" />,
    title: "Connect Repository",
    description: "Link your GitHub repository to Zone using our secure GitHub App integration.",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "Generate NFT",
    description: "Create a compressed NFT on Solana that contains cryptographic hashes of your codebase.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Verify Ownership",
    description: "Automatic verification occurs on each commit, creating an immutable record of your work.",
  },
  {
    icon: <Check className="h-6 w-6" />,
    title: "Monetize & Protect",
    description: "Set access permissions, monetize your code, and protect against unauthorized use.",
  },
]

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const elementPosition = document.getElementById("how-it-works")?.offsetTop || 0

      if (scrollPosition > elementPosition) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isVisible])

  const handleLearnMore = () => {
    toast({
      title: "Documentation",
      description: "Documentation is currently being developed.",
    })
  }

  return (
    <section id="how-it-works" className="py-12 md:py-16 bg-black/50 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-solana-purple/10 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How Zone <span className="gradient-text">Works</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Our platform seamlessly integrates with your development workflow to provide blockchain-based protection
                for your code repositories.
              </p>
            </motion.div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    x: isVisible ? 0 : -20,
                    scale: activeStep === index ? 1.05 : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    scale: { duration: 0.3 },
                  }}
                  className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${
                    activeStep === index
                      ? "bg-solana-purple/10 border border-solana-purple/30"
                      : "hover:bg-solana-purple/5"
                  }`}
                >
                  <div
                    className={`p-3 rounded-full ${
                      activeStep === index ? "bg-solana-purple text-white" : "bg-solana-purple/10 text-solana-purple"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10"
            >
              <Button onClick={handleLearnMore} className="bg-solana-purple hover:bg-solana-purple/90 text-white">
                Learn More
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-solana-purple/30 shadow-2xl shadow-solana-purple/10">
              <div className="absolute inset-0 bg-gradient-to-br from-solana-purple/10 to-transparent"></div>

              {/* Code visualization */}
              <div className="bg-black/80 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-muted-foreground">repository-nft-auth.ts</div>
                </div>

                <div className="font-mono text-sm space-y-2">
                  <div className="flex">
                    <span className="text-muted-foreground w-8">1</span>
                    <span className="text-blue-400">import</span>
                    <span className="text-white">
                      {" "}
                      {"{"} createNFT, verifyRepository {"}"}{" "}
                    </span>
                    <span className="text-blue-400">from</span>
                    <span className="text-green-400"> &apos;@zone/solana&apos;</span>
                    <span className="text-white">;</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">2</span>
                    <span className="text-blue-400">import</span>
                    <span className="text-white">
                      {" "}
                      {"{"} Connection, PublicKey {"}"}{" "}
                    </span>
                    <span className="text-blue-400">from</span>
                    <span className="text-green-400"> &apos;@solana/web3.js&apos;</span>
                    <span className="text-white">;</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">3</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">4</span>
                    <span className="text-purple-400">async</span>
                    <span className="text-yellow-400"> function</span>
                    <span className="text-blue-400"> protectRepository</span>
                    <span className="text-white">(repoPath: </span>
                    <span className="text-yellow-400">string</span>
                    <span className="text-white">, owner: </span>
                    <span className="text-yellow-400">string</span>
                    <span className="text-white">) {"{"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">5</span>
                    <span className="text-white pl-4">const connection = </span>
                    <span className="text-blue-400">new</span>
                    <span className="text-white"> Connection(</span>
                    <span className="text-green-400">&apos;https://api.mainnet-beta.solana.com&apos;</span>
                    <span className="text-white">);</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">6</span>
                    <span className="text-white pl-4">const ownerKey = </span>
                    <span className="text-blue-400">new</span>
                    <span className="text-white"> PublicKey(owner);</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">7</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">8</span>
                    <span className="text-white pl-4">// Generate repository hash</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">9</span>
                    <span className="text-white pl-4">const repoHash = </span>
                    <span className="text-blue-400">await</span>
                    <span className="text-white"> generateRepoHash(repoPath);</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">10</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">11</span>
                    <span className="text-white pl-4">// Create compressed NFT for repository</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">12</span>
                    <span className="text-white pl-4">const nft = </span>
                    <span className="text-blue-400">await</span>
                    <span className="text-white"> createNFT({"{"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">13</span>
                    <span className="text-white pl-8">connection,</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">14</span>
                    <span className="text-white pl-8">owner: ownerKey,</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">15</span>
                    <span className="text-white pl-8">metadata: {"{"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">16</span>
                    <span className="text-white pl-12">name: </span>
                    <span className="text-green-400">
                      `Zone: ${"{"}repoPath{"}"}`
                    </span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">17</span>
                    <span className="text-white pl-12">repoHash,</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">18</span>
                    <span className="text-white pl-12">timestamp: </span>
                    <span className="text-blue-400">new</span>
                    <span className="text-white"> Date().toISOString(),</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">19</span>
                    <span className="text-white pl-8">{"}"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">20</span>
                    <span className="text-white pl-4">{"});"}</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">21</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">22</span>
                    <span className="text-white pl-4">return nft;</span>
                  </div>
                  <div className="flex">
                    <span className="text-muted-foreground w-8">23</span>
                    <span className="text-white">{"}"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-solana-purple/0 via-solana-purple/20 to-solana-purple/0 rounded-xl blur-xl opacity-30 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
