"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, X } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showWaitlistDialog, setShowWaitlistDialog] = useState(false)
  const [email, setEmail] = useState("humaidwali20@gmail.com")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const elementPosition = document.getElementById("cta")?.offsetTop || 0

      if (scrollPosition > elementPosition) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleGetStarted = () => {
    setShowWaitlistDialog(true)
  }

  const handleSubmitWaitlist = async () => {
    if (!email.trim() || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call with a delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    toast({
      title: "Waitlist Joined!",
      description: `Thank you for joining our waitlist with ${email}. We'll be in touch soon!`,
    })
  }

  return (
    <>
      <section id="cta" className="py-12 md:py-16 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-radial from-solana-purple/20 to-transparent opacity-30"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl bg-black/60 border border-solana-purple/30 p-8 md:p-12 relative overflow-hidden animated-border">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-solana-purple/10 to-transparent"></div>
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
                >
                  <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Ready to Protect Your Code with{" "}
                      <span className="gradient-text">Zone</span>?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-6">
                      Join the waitlist for early access to our platform and be among the first
                      to secure your repositories with Solana NFTs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={handleGetStarted}
                        size="lg"
                        className="bg-solana-purple hover:bg-solana-purple/90 text-white"
                      >
                        Join Waitlist
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-solana-purple text-solana-lavender hover:bg-solana-purple/10"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </Button>
                    </div>
                  </div>
                  
                  <div className="hidden md:block">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 bg-solana-purple rounded-full opacity-20 blur-md"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image src="/icon.png" alt="Zone Logo" width={64} height={64} className="h-16 w-16" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showWaitlistDialog} onOpenChange={setShowWaitlistDialog}>
        <DialogContent className="sm:max-w-[425px] bg-black border border-solana-purple/30">
          <DialogHeader>
            <DialogTitle className="text-2xl">Join the Waitlist</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {isSubmitted 
                ? "Thank you for joining our waitlist! We'll notify you when we launch."
                : "Enter your email to get early access to Zone."}
            </DialogDescription>
          </DialogHeader>
          
          {!isSubmitted ? (
            <>
              <div className="py-4">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/50 border-solana-purple/30 focus:border-solana-purple"
                />
              </div>
              <DialogFooter>
                <Button 
                  type="submit" 
                  onClick={handleSubmitWaitlist}
                  className="bg-solana-purple hover:bg-solana-purple/90 text-white w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Join Waitlist"}
                </Button>
              </DialogFooter>
            </>
          ) : (
            <div className="py-6 text-center">
              <div className="w-16 h-16 bg-solana-purple/20 rounded-full mx-auto flex items-center justify-center mb-4">
                <ArrowRight className="h-8 w-8 text-solana-purple" />
              </div>
              <p className="text-lg font-medium text-white">You're on the list!</p>
              <p className="text-muted-foreground mt-2">We'll notify {email} when we launch.</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CTA
