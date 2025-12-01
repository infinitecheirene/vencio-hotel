"use client"

import { useState } from 'react'
import { Facebook, Phone, Mail, Send, MessageCircle, Share2, X } from 'lucide-react'

const FloatingSocialMedia = () => {
  const [isOpen, setIsOpen] = useState(false)

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/venciosgarden',
      label: 'Facebook',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/639189572855',
      label: 'WhatsApp',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: Send,
      href: 'https://www.tiktok.com/@vencios.garden',
      label: 'TikTok',
      color: 'bg-cyan-500 hover:bg-cyan-600',
    },
    {
      icon: Mail,
      href: 'mailto:venciosgarden@yahoo.com',
      label: 'Email',
      color: 'bg-red-600 hover:bg-red-700',
    },
    {
      icon: Phone,
      href: 'tel:+639189572855',
      label: 'Phone',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
  ]

  return (
    <>
      {/* Desktop View - Always Visible */}
      <div className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
        {socialLinks.map((link, index) => {
          const Icon = link.icon
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`${link.color} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl`}
            >
              <Icon className="w-6 h-6" />
            </a>
          )
        })}
      </div>

      {/* Mobile View - Toggle Button */}
      <div className="lg:hidden fixed right-4 bottom-24 z-40">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Toggle social media"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Share2 className="w-6 h-6" />}
        </button>

        {/* Social Icons - Animated Menu */}
        {isOpen && (
          <>

            {/* Social Links */}
            <div className="absolute bottom-16 right-0 flex flex-col gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`${link.color} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-in slide-in-from-bottom-4 fade-in`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationFillMode: 'backwards'
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                )
              })}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default FloatingSocialMedia
