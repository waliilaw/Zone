"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

// Add TypeScript declarations for Phantom wallet
declare global {
  interface Window {
    phantom?: {
      solana?: {
        isPhantom?: boolean;
        connect: () => Promise<{ publicKey: { toString: () => string } }>;
      }
    }
  }
}

interface WalletResult {
  success: boolean;
  address?: string;
  error?: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const connectPhantomWallet = async (): Promise<WalletResult> => {
    if (typeof window.phantom !== 'undefined' && window.phantom.solana?.isPhantom) {
      try {
        const response = await window.phantom.solana.connect()
        const address = response.publicKey.toString()
        setWalletAddress(address)
        setWalletConnected(true)
        return { success: true, address }
      } catch (error) {
        console.error("Error connecting to Phantom wallet:", error)
        return { success: false, error: (error as Error).message }
      }
    } else {
      window.open('https://phantom.app/', '_blank')
      return { success: false, error: "Phantom wallet not installed" }
    }
  }

  const handleConnectWallet = async () => {
    if (walletConnected) {
      // Disconnect wallet
      setWalletConnected(false)
      setWalletAddress("")
      toast({
        title: "Wallet Disconnected",
        description: "Your wallet has been disconnected.",
      })
      return
    }

    const result = await connectPhantomWallet()
    
    if (result.success && result.address) {
      toast({
        title: "Wallet Connected",
        description: `Connected to ${result.address.slice(0, 4)}...${result.address.slice(-4)}`,
      })
    } else {
      toast({
        title: "Connection Failed",
        description: result.error || "Please install Phantom wallet to connect.",
        variant: "destructive"
      })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-solana-purple/20" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-solana-purple rounded-md opacity-20 blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src="/icon.png" alt="Zone Logo" width={24} height={24} className="h-5 w-5" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight">Zone</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="text-foreground">
                  Products <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Link href="/products/repository-protection" className="w-full">
                    Repository Protection
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/products/code-marketplace" className="w-full">
                    Code Marketplace
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/products/developer-tools" className="w-full">
                    Developer Tools
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="text-foreground">
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Link href="/solutions/for-developers" className="w-full">
                    For Developers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/solutions/for-teams" className="w-full">
                    For Teams
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/solutions/for-enterprises" className="w-full">
                    For Enterprises
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/pricing" className="text-foreground hover:text-solana-lavender transition-colors">
              Pricing
            </Link>

            <Link href="/docs" className="text-foreground hover:text-solana-lavender transition-colors">
              Docs
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-solana-purple text-solana-lavender hover:bg-solana-purple/10">
              Sign In
            </Button>
            <Button onClick={handleConnectWallet} className="bg-solana-purple hover:bg-solana-purple/90 text-white">
              {walletConnected ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-solana-purple/20">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <div className="space-y-3">
              <div className="font-medium text-sm text-muted-foreground">Products</div>
              <Link
                href="/products/repository-protection"
                className="block px-3 py-2 text-base hover:bg-solana-purple/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Repository Protection
              </Link>
              <Link
                href="/products/code-marketplace"
                className="block px-3 py-2 text-base hover:bg-solana-purple/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Code Marketplace
              </Link>
              <Link
                href="/products/developer-tools"
                className="block px-3 py-2 text-base hover:bg-solana-purple/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Developer Tools
              </Link>
            </div>

            <div className="space-y-3">
              <div className="font-medium text-sm text-muted-foreground">Solutions</div>
              <Link
                href="/solutions/for-developers"
                className="block px-3 py-2 text-base hover:bg-solana-purple/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                For Developers
              </Link>
              <Link
                href="/solutions/for-teams"
                className="block px-3 py-2 text-base hover:bg-solana-purple/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                For Teams
              </Link>
              <Link
                href="/solutions/for-enterprises"
                className="block px-3 py-2 text-base hover:bg-solana-purple/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                For Enterprises
              </Link>
            </div>

            <div className="space-y-3">
              <Link
                href="/pricing"
                className="block px-3 py-2 text-base hover:bg-solana-purple/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/docs"
                className="block px-3 py-2 text-base hover:bg-solana-purple/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Docs
              </Link>
            </div>

            <div className="pt-4 space-y-3">
              <Button variant="outline" className="w-full border-solana-purple text-solana-lavender">
                Sign In
              </Button>
              <Button
                onClick={handleConnectWallet}
                className="w-full bg-solana-purple hover:bg-solana-purple/90 text-white"
              >
                {walletConnected ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
