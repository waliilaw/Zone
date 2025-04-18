import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zone | NFT-Protected GitHub Repositories on Solana",
  description: "Secure your code ownership with NFTs on the Solana blockchain",
  generator: 'Created by Wali'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <Script
          src="https://unpkg.com/@solana/web3.js@latest/lib/index.iife.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" forcedTheme="dark" disableTransitionOnChange>
          <div className="flex min-h-screen flex-col bg-black">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
