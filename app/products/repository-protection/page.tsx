import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, GitBranch, Code, Lock } from "lucide-react"
import Link from "next/link"

export default function RepositoryProtection() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Repository Protection</h1>
            <p className="text-xl text-muted-foreground">
              Secure your code with NFT-based ownership verification on Solana
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-solana-purple/10 text-solana-lavender rounded-full border border-solana-purple/20 mb-4">
                  <Shield className="mr-2 h-4 w-4" />
                  Ownership Verification
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Establish Clear Code Ownership</h2>
                <p className="text-muted-foreground mb-6">
                  Create an immutable record of your code ownership using Solana's blockchain. Each repository is
                  represented by a unique NFT that contains cryptographic hashes of your codebase, establishing clear
                  provenance.
                </p>
                <Button
                  variant="outline"
                  className="border-solana-purple text-solana-lavender hover:bg-solana-purple/10"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-black/40 border border-solana-purple/20 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-solana-purple/20 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-solana-lavender" />
                  </div>
                  <div>
                    <h3 className="font-medium">Ownership Verification</h3>
                    <p className="text-sm text-muted-foreground">Blockchain-based proof</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-black/60 rounded-lg p-4 border border-solana-purple/10">
                    <div className="text-sm mb-2">Repository Hash</div>
                    <div className="font-mono text-xs text-muted-foreground break-all">
                      e7c82d7c8a5a5e3f7b7d8f9a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z
                    </div>
                  </div>
                  <div className="bg-black/60 rounded-lg p-4 border border-solana-purple/10">
                    <div className="text-sm mb-2">NFT Token ID</div>
                    <div className="font-mono text-xs text-muted-foreground">ZONE-3829</div>
                  </div>
                  <div className="bg-black/60 rounded-lg p-4 border border-solana-purple/10">
                    <div className="text-sm mb-2">Owner Public Key</div>
                    <div className="font-mono text-xs text-muted-foreground">Wali</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-black/40 border border-solana-purple/20 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-solana-purple/20 flex items-center justify-center">
                    <GitBranch className="h-5 w-5 text-solana-lavender" />
                  </div>
                  <div>
                    <h3 className="font-medium">Automatic Verification</h3>
                    <p className="text-sm text-muted-foreground">Continuous protection</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-black/60 rounded-lg p-4 border border-solana-purple/10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm">Latest Commit</div>
                      <div className="text-xs text-green-400">Verified</div>
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">feat: add repository protection</div>
                  </div>
                  <div className="bg-black/60 rounded-lg p-4 border border-solana-purple/10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm">Previous Commit</div>
                      <div className="text-xs text-green-400">Verified</div>
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">fix: update documentation</div>
                  </div>
                  <div className="bg-black/60 rounded-lg p-4 border border-solana-purple/10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm">Initial Commit</div>
                      <div className="text-xs text-green-400">Verified</div>
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">init: project setup</div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-solana-purple/10 text-solana-lavender rounded-full border border-solana-purple/20 mb-4">
                  <GitBranch className="mr-2 h-4 w-4" />
                  Continuous Verification
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Automatic Protection on Every Commit</h2>
                <p className="text-muted-foreground mb-6">
                  Our GitHub integration automatically verifies and updates your repository's NFT with each commit. This
                  creates a continuous chain of verification that proves the evolution of your codebase over time.
                </p>
                <Button
                  variant="outline"
                  className="border-solana-purple text-solana-lavender hover:bg-solana-purple/10"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-solana-purple/10 text-solana-lavender rounded-full border border-solana-purple/20 mb-4">
                  <Code className="mr-2 h-4 w-4" />
                  Developer Tools
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Seamless Integration with Your Workflow</h2>
                <p className="text-muted-foreground mb-6">
                  Zone integrates with your existing development tools and workflows. Our GitHub Action, CLI tools,
                  and IDE plugins make it easy to protect your code without disrupting your development process.
                </p>
                <Button
                  variant="outline"
                  className="border-solana-purple text-solana-lavender hover:bg-solana-purple/10"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-black/40 border border-solana-purple/20 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-solana-purple/20 flex items-center justify-center">
                    <Code className="h-5 w-5 text-solana-lavender" />
                  </div>
                  <div>
                    <h3 className="font-medium">Developer Tools</h3>
                    <p className="text-sm text-muted-foreground">Seamless integration</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-black/60 rounded-lg p-4 border border-solana-purple/10">
                    <div className="flex items-center space-x-3 mb-2">
                      <Lock className="h-4 w-4 text-solana-lavender" />
                      <div className="text-sm">GitHub Action</div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Automatic verification on push and pull requests
                    </div>
                  </div>
                  <div className="bg-black/60 rounded-lg p-4 border border-solana-purple/10">
                    <div className="flex items-center space-x-3 mb-2">
                      <Lock className="h-4 w-4 text-solana-lavender" />
                      <div className="text-sm">CLI Tool</div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Command-line interface for repository management
                    </div>
                  </div>
                  <div className="bg-black/60 rounded-lg p-4 border border-solana-purple/10">
                    <div className="flex items-center space-x-3 mb-2">
                      <Lock className="h-4 w-4 text-solana-lavender" />
                      <div className="text-sm">IDE Plugins</div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      VSCode and IntelliJ extensions for real-time verification
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Protect Your Code?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the waitlist for early access to Zone and be among the first to secure your repositories.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-solana-purple hover:bg-solana-purple/90 text-white">
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/docs">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-solana-purple text-solana-lavender hover:bg-solana-purple/10"
                >
                  View Documentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
