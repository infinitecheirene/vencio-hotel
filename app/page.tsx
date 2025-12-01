"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, Heart, Leaf, Users, MapPin, Phone, Mail, Clock, Utensils } from "lucide-react"

export default function HomePage (){
const [currentSlide, setCurrentSlide] = useState(0)

const heroSlides = [
  {
    image:"/banner1.jpg",
    title:"Relax in Garden-Inspired Comfort",
    subtitle:"Your Home for Relaxation, Dining & Celebrations",
  },
  {
    image:"/restaurant.jpg",
    title:"Delicious Moments in Every Bite",
    subtitle:"Your Home for Relaxation, Dining & Celebrations",
  },
  {
    image:"/catering.jpg",
    title:"Celebrate Life’s Best Moments With Us",
    subtitle:"Your Home for Relaxation, Dining & Celebrations",
  },
]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

const stats = [
  { value: "2008", label: "Established" },
  { value: "10", label: "Hotel Rooms" },
  { value: "4.5/5", label: "TripAdvisor Rating" },
  { value: "#2", label: "Restaurant in Calapan" },
]

const values = [
  {
    icon: Heart,
    title: "Hospitality",
    description: "We treat every guest like family, ensuring personalized care and attention to detail.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every aspect of our service and accommodations.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We are committed to eco-friendly practices and preserving our beautiful gardens.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We support local artisans and contribute to our community's growth.",
  },
]

const features = [
  {
    icon: Utensils,
    title: "Award-Winning Restaurant",
    description: "Ranked #2 of 32 restaurants in Calapan on TripAdvisor, serving Filipino, Asian, and international cuisine."
  },
  {
    icon: Leaf,
    title: "Beautiful Garden Setting",
    description: "Lush tropical gardens providing a peaceful and relaxing atmosphere for all guests."
  },
  {
    icon: Users,
    title: "Event Facilities",
    description: "Perfect venue for weddings, conferences, and special occasions with dedicated event spaces."
  },
]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 bg-[#5C0A1E]">
          <div className="absolute inset-0 opacity-20">
            <Image 
              src="/placeholder.svg" 
              alt="" 
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <p className="text-[#D4AF37] uppercase tracking-widest text-sm mb-3">Our Story</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#F5E6C8] mb-6">
              About Vencio&apos;s Garden
            </h1>
            <p className="text-[#F5E6C8]/80 max-w-3xl mx-auto text-lg">
              A serene escape in the heart of Calapan City, Oriental Mindoro
            </p>
          </div>
        </section>

        {/* Main Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative w-full h-[600px]">
                  <Image 
                    src="/vencios_hero.webp" 
                    alt="Vencio's Garden Hotel" 
                    fill
                    className="rounded-lg shadow-xl object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div>
                <p className="text-[#D4AF37] uppercase tracking-widest text-sm mb-3">Since 2008</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C0A1E] mb-6">
                  A Garden Paradise in Calapan City
                </h2>
                <div className="space-y-4 text-[#5C0A1E]/70 leading-relaxed">
                  <p>
                    Located in Tawiran, Calapan City, Oriental Mindoro, Vencio&apos;s Garden Hotel & Restaurant 
                    has been welcoming guests since 2008 with warm Filipino hospitality and exceptional service.
                  </p>
                  <p>
                    Our hotel features 10 comfortable rooms surrounded by lush tropical gardens, creating a 
                    peaceful retreat for both business and leisure travelers. The serene garden setting provides 
                    the perfect escape while remaining conveniently close to the city center.
                  </p>
                  <p>
                    Beyond accommodations, our restaurant has earned recognition as the #2 dining destination 
                    in Calapan on TripAdvisor, serving a delightful mix of Filipino, Asian, and international 
                    cuisine prepared with fresh, quality ingredients.
                  </p>
                  <p>
                    Whether you&apos;re visiting for business, leisure, or hosting a special event, Vencio&apos;s Garden 
                    offers the perfect blend of comfort, nature, and genuine Filipino hospitality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#5C0A1E]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-[#D4AF37] mb-2">{stat.value}</p>
                  <p className="text-[#F5E6C8]/80 text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-white to-[#F5E6C8]/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-[#D4AF37] uppercase tracking-widest text-sm mb-3">What Makes Us Special</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C0A1E]">Our Features</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#5C0A1E] flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-serif font-semibold text-[#5C0A1E] text-xl mb-3">{feature.title}</h3>
                  <p className="text-[#5C0A1E]/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-[#F5E6C8]/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-[#D4AF37] uppercase tracking-widest text-sm mb-3">What We Stand For</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C0A1E]">Our Values</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#5C0A1E] flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-serif font-semibold text-[#5C0A1E] text-lg mb-2">{value.title}</h3>
                  <p className="text-[#5C0A1E]/70 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Contact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-[#D4AF37] uppercase tracking-widest text-sm mb-3">Visit Us</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C0A1E]">Find Us in Calapan City</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#5C0A1E] text-[#F5E6C8] p-8 rounded-lg shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-8 h-8 text-[#D4AF37]" />
                    <h3 className="font-serif font-bold text-2xl">Address</h3>
                  </div>
                  <p className="text-lg mb-2">Vencio&apos;s Garden Hotel & Restaurant</p>
                  <p className="text-[#F5E6C8]/90 mb-6">
                    Tawiran, Calapan City<br />
                    Oriental Mindoro<br />
                    Philippines
                  </p>
                  <div className="pt-4 border-t border-[#F5E6C8]/20">
                    <p className="text-sm text-[#F5E6C8]/70">
                      Easily accessible from the main highway and city center
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#F5E6C8] to-[#D4AF37]/20 p-8 rounded-lg shadow-xl">
                  <h3 className="font-serif font-bold text-2xl text-[#5C0A1E] mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#5C0A1E] flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#5C0A1E]">Phone</p>
                        <p className="text-[#5C0A1E]/70">0918 957 2855</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#5C0A1E] flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#5C0A1E]">Email</p>
                        <p className="text-[#5C0A1E]/70">venciosgarden@yahoo.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#5C0A1E] flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#5C0A1E]">Reception Hours</p>
                        <p className="text-[#5C0A1E]/70">24/7 Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-[#5C0A1E] to-[#8B1538] text-[#F5E6C8] p-6 rounded-lg text-center">
                <p className="text-lg mb-2">🌴 Located in Tawiran, Calapan City, Oriental Mindoro 🌴</p>
                <p className="text-[#F5E6C8]/80">Your peaceful garden retreat awaits</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
