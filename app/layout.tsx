import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Cormorant_Garamond } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import FloatingSocialMedia from "@/components/FloatingSocialMedia"
import { Chatbot } from "@/components/Chatbot"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "Vencio's Garden Hotel & Restaurant",
  description: "Experience luxury and comfort at Vencio's Garden - Your perfect getaway destination",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Vencio's Garden",
  },
  icons: {
    icon: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: "#1a4d2e",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={`${playfair.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <FloatingSocialMedia />
        <Chatbot />
        <Toaster />
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
