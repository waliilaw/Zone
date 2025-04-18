import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import Partners from "@/components/partners"
import CTA from "@/components/cta"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none z-0"></div>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Partners />
      <CTA />
      <Toaster />
    </div>
  )
}
