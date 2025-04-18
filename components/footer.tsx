import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="border-t border-solana-purple/20 bg-black/60 py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-solana-purple rounded-md opacity-20 blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src="/icon.png" alt="Zone Logo" width={24} height={24} className="h-5 w-5" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight">Zone</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Secure your code ownership on the Solana blockchain with NFT-protected GitHub repositories.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-solana-lavender transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-solana-lavender transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-solana-lavender transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products/repository-protection"
                  className="text-muted-foreground hover:text-solana-lavender transition-colors"
                >
                  Repository Protection
                </Link>
              </li>
              <li>
                <Link
                  href="/products/code-marketplace"
                  className="text-muted-foreground hover:text-solana-lavender transition-colors"
                >
                  Code Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="/products/developer-tools"
                  className="text-muted-foreground hover:text-solana-lavender transition-colors"
                >
                  Developer Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/products/nft-analytics"
                  className="text-muted-foreground hover:text-solana-lavender transition-colors"
                >
                  NFT Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-solana-lavender transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-muted-foreground hover:text-solana-lavender transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-solana-lavender transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-solana-lavender transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-solana-lavender transition-colors">
                  About Wali
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-solana-lavender transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-solana-lavender transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-solana-lavender transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-solana-purple/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Zone. Designed & Built by Wali. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-solana-lavender transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-solana-lavender transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-solana-lavender transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
