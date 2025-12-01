"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
  quickReplies?: string[]
}

const VENCIOS_KNOWLEDGE = {
  greetings: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
  about: [
    "Vencio's Garden Hotel & Restaurant is your perfect getaway destination offering luxury and comfort.",
    "We provide exceptional hospitality services including comfortable accommodations and delicious dining experiences.",
    "Located in a serene environment, we offer a peaceful retreat for our guests."
  ],
  rooms: [
    "We offer various room types to suit your needs:",
    "- Standard Rooms: Comfortable and affordable",
    "- Deluxe Rooms: Spacious with premium amenities",
    "- Family Suites: Perfect for families with children",
    "- Luxury Suites: Ultimate comfort and elegance",
    "All rooms feature air conditioning, Wi-Fi, flat-screen TVs, and en-suite bathrooms."
  ],
  restaurant: [
    "Our restaurant serves a variety of local and international cuisines.",
    "We offer breakfast, lunch, and dinner with both buffet and à la carte options.",
    "Special dietary requirements can be accommodated upon request."
  ],
  amenities: [
    "Our facilities include:",
    "- Swimming pool",
    "- Restaurant and bar",
    "- Free Wi-Fi throughout the property",
    "- Garden and outdoor seating areas",
    "- Free parking",
    "- 24/7 front desk service",
    "- Room service"
  ],
  booking: [
    "You can make a reservation through our website by visiting the Reservation page.",
    "For immediate assistance, please contact our front desk.",
    "We recommend booking in advance, especially during peak seasons."
  ],
  contact: [
    "You can reach us through:",
    "- Phone: Available on our Contact page",
    "- Email: Check our Contact page for details",
    "- Visit us: Location details on our Contact page",
    "Our team is available 24/7 to assist you."
  ],
  checkin: [
    "Check-in time: 2:00 PM",
    "Check-out time: 12:00 PM noon",
    "Early check-in and late check-out are subject to availability and may incur additional charges."
  ],
  payment: [
    "We accept various payment methods:",
    "- Cash",
    "- Credit/Debit cards",
    "- Bank transfers",
    "Payment is required upon check-in or as per reservation terms."
  ]
}

const QUICK_REPLIES = [
  "Show me rooms",
  "Restaurant menu",
  "Book a room",
  "Amenities",
  "Contact info",
  "Check-in times"
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! 👋 I'm your Vencio's Garden assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
      quickReplies: QUICK_REPLIES
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): { text: string; quickReplies?: string[] } => {
    const lowerMessage = userMessage.toLowerCase()

    // Greetings
    if (VENCIOS_KNOWLEDGE.greetings.some(greeting => lowerMessage.includes(greeting))) {
      return {
        text: "Hello! Welcome to Vencio's Garden Hotel & Restaurant. How can I help you today?",
        quickReplies: QUICK_REPLIES
      }
    }

    // About
    if (lowerMessage.includes("about") || lowerMessage.includes("who are you") || lowerMessage.includes("what is vencio")) {
      return {
        text: VENCIOS_KNOWLEDGE.about.join(" "),
        quickReplies: ["Show me rooms", "Restaurant menu", "Book a room"]
      }
    }

    // Rooms
    if (lowerMessage.includes("room") || lowerMessage.includes("accommodation") || lowerMessage.includes("stay")) {
      return {
        text: VENCIOS_KNOWLEDGE.rooms.join("\n"),
        quickReplies: ["Book a room", "Check prices", "Contact info"]
      }
    }

    // Restaurant
    if (lowerMessage.includes("food") || lowerMessage.includes("restaurant") || lowerMessage.includes("dining") || lowerMessage.includes("eat") || lowerMessage.includes("menu")) {
      return {
        text: VENCIOS_KNOWLEDGE.restaurant.join(" "),
        quickReplies: ["Show me rooms", "Amenities", "Book a room"]
      }
    }

    // Amenities
    if (lowerMessage.includes("amenities") || lowerMessage.includes("facilities") || lowerMessage.includes("pool") || lowerMessage.includes("wifi")) {
      return {
        text: VENCIOS_KNOWLEDGE.amenities.join("\n"),
        quickReplies: ["Show me rooms", "Restaurant menu", "Book a room"]
      }
    }

    // Booking/Reservation
    if (lowerMessage.includes("book") || lowerMessage.includes("reserv") || lowerMessage.includes("availability")) {
      return {
        text: VENCIOS_KNOWLEDGE.booking.join(" "),
        quickReplies: ["Show me rooms", "Contact info", "Check-in times"]
      }
    }

    // Contact
    if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email") || lowerMessage.includes("location") || lowerMessage.includes("address")) {
      return {
        text: VENCIOS_KNOWLEDGE.contact.join("\n"),
        quickReplies: ["Book a room", "Show me rooms", "Restaurant menu"]
      }
    }

    // Check-in/out
    if (lowerMessage.includes("check") || lowerMessage.includes("time")) {
      return {
        text: VENCIOS_KNOWLEDGE.checkin.join("\n"),
        quickReplies: ["Book a room", "Show me rooms", "Contact info"]
      }
    }

    // Payment
    if (lowerMessage.includes("pay") || lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("rate")) {
      return {
        text: VENCIOS_KNOWLEDGE.payment.join("\n") + "\n\nFor specific room rates, please visit our Rooms page or contact us directly.",
        quickReplies: ["Show me rooms", "Book a room", "Contact info"]
      }
    }

    // Default response
    return {
      text: "I'd be happy to help you! What would you like to know?",
      quickReplies: QUICK_REPLIES
    }
  }

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue
    if (!messageText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)
    setShowQuickReplies(false)

    // Simulate bot typing delay
    setTimeout(() => {
      const response = getBotResponse(messageText)
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: "bot",
        timestamp: new Date(),
        quickReplies: response.quickReplies
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
      setShowQuickReplies(true)
    }, 1000)
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-red-900 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[calc(100vh-8rem)] sm:h-[600px] max-w-md bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-900 via-red-950 to-black p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <img 
                  src="/vencios.jpg" 
                  alt="Vencio's Garden" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-amber-100 font-semibold">Vencios Assistant</h3>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <p className="text-amber-400 text-xs">Online</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-amber-100 hover:text-amber-300 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div key={message.id}>
                <div
                  className={`flex gap-2 ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === "user"
                      ? "bg-gradient-to-br from-amber-400 to-amber-600"
                      : "bg-white border-2 border-gray-200"
                  }`}>
                    {message.sender === "user" ? (
                      <User className="w-5 h-5 text-red-900" />
                    ) : (
                      <img 
                        src="/vencios.jpg" 
                        alt="Bot" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    )}
                  </div>
                  <div className={`max-w-[75%] ${message.sender === "user" ? "items-end" : "items-start"}`}>
                    <div className={`rounded-2xl px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-tr-none"
                        : "bg-white text-gray-800 border border-gray-200 rounded-tl-none"
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    </div>
                    <p className="text-xs text-gray-400 mt-1 px-2">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>

                {/* Quick Replies */}
                {message.sender === "bot" && 
                 message.quickReplies && 
                 showQuickReplies && 
                 index === messages.length - 1 && (
                  <div className="mt-3 ml-10 flex flex-wrap gap-2">
                    <p className="w-full text-xs text-gray-500 mb-1">Quick replies:</p>
                    {message.quickReplies.map((reply, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickReply(reply)}
                        className="px-3 py-1.5 bg-white border-2 border-amber-500 text-amber-600 rounded-full text-xs font-medium hover:bg-amber-500 hover:text-white transition-all duration-200"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
                  <img 
                    src="/vencios.jpg" 
                    alt="Bot" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              />
              <Button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-full w-10 h-10 p-0"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
