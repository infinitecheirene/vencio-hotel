"use client"

import * as React from "react"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, Heart, Leaf, Users, Utensils, BedDouble, ArrowRight, PartyPopper, Car } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"

import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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

export default function AboutPage() {

  const plugin = React.useRef(
    Autoplay ({ delay: 5000 })
  )

  const images = [
  "/slide-1.jpg",
  "/slide-2.jpg",
  "/slide-3.jpg",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">

        {/* Hero Section */}
        <section className="relative h-[90vh] md:h-[60vh] sm:h-[40vh] overflow-hidden bg-fixed">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
            style={{
              backgroundImage: "url('/hero-banner.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/10 to-black/40" />
            <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-black/30" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center max-w-xl lg:max-w-7xl mx-auto px-6 lg:px-8 sm:my-10">
                <h1 className="text-3xl sm:text-3xl font-medium md:text-4xl lg:text-5xl mb-6 text-gray-200 text-balance leading-tight tracking-wide">
                  About Vencio&apos;s Garden
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-pretty max-w-2xl mx-auto text-white font-normal leading-relaxed">
                  A serene escape in the heart of Calapan City, Oriental Mindoro
                </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#5C0A1E] shadow-md">
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

        {/* Story Section */}
        <section className="py-10 bg-white-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <div>
              <p className="text-[#D4AF37] uppercase tracking-widest text-md lg:text-xl mb-3">A Place You Can Call Home</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5C0A1E] mb-6 text-balance">Our Story</h2>
              <div className="space-y-4 text-[#5C0A1E]/90 text-xl">
                <p className="text-pretty text-justify">
                    Located in Tawiran, Calapan City, Oriental Mindoro, Vencio&apos;s Garden Hotel & Restaurant 
                    has been welcoming guests since 2008 with warm Filipino hospitality and exceptional service.
                </p>
                <p className="text-pretty text-justify">
                    Our hotel features 10 comfortable rooms surrounded by lush tropical gardens, creating a 
                    peaceful retreat for both business and leisure travelers. The serene garden setting provides 
                    the perfect escape while remaining conveniently close to the city center.
                </p>
                <p className="text-pretty text-justify">
                    Beyond accommodations, our restaurant has earned recognition as the #2 dining destination 
                    in Calapan on TripAdvisor, serving a delightful mix of Filipino, Asian, and international 
                    cuisine prepared with fresh, quality ingredients.
                </p>
                <p className="text-pretty text-justify">
                    Whether you&apos;re visiting for business, leisure, or hosting a special event, Vencio&apos;s Garden 
                    offers the perfect blend of comfort, nature, and genuine Filipino hospitality.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 space-x-6 mt-10">
              <div
                className="h-100 lg:h-170 w-full bg-cover bg-center rounded-lg shadow-xl border border-red-900"
                style={{
                  backgroundImage: "url('/venciosloc.jpg')"
                }}
              />

              <div className="text-center ml-0 mb-12 lg:ml-5 mt-10 lg:mt-0">
                <p className="text-[#D4AF37] uppercase tracking-widest text-md lg:text-xl mb-3">The Commitment</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#5C0A1E] mb-4 text-balance">Our Values</h2>
                  <p className="text-[#5C0A1E]/80 text-md pb-5 px-5 text-justify">
                    At Vencio's, we are passionate about providing our guests with more than just a place to stay or dine. We strive to create an 
                    experience rooted in comfort, care, and sustainability. With plans to rebrand as a premier eco-tourism destination, our vision 
                    is to blend modern comforts with eco-friendly practices that honor the natural beauty of Oriental Mindoro. 
                  </p>

                <div className="container mx-auto px-4">
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {values.map((value, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#5C0A1E] flex items-center justify-center">
                          <value.icon className="w-7 h-7 text-[#D4AF37]" />
                        </div>
                        <h3 className="font-serif font-semibold text-[#5C0A1E] text-xl mb-2">{value.title}</h3>
                        <p className="text-[#5C0A1E]/80 text-sm">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-[#D4AF37] uppercase tracking-widest text-md lg:text-xl mb-3">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5C0A1E]">
                Our Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "HOTEL",
                  image: "/icon-256x256.png",
                  description: (
                    <>
                      Relax in our well-appointed rooms, designed to cater to every traveler’s needs.
                    </>
                  )
                },
                {
                  title: "RESTAURANT",
                  image: "/resto-logo.png",
                  description: (
                    <>
                      Enjoy a symphony of flavors with our wide array of freshly prepared dishes,
                      from seafood specialties to hearty Filipino favorites.
                    </>
                  )
                },
                {
                  title: "CATERING",
                  image: "/catering-logo.jpg",
                  description: (
                    <>
                      Whether it’s a wedding, birthday, or corporate event, we deliver unforgettable
                      experiences with customized menus and exceptional service.
                    </>
                  )
                }
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 p-0 pb-5 mb-10"
                >
                  <CardHeader className="p-0 pt-6 flex justify-center">
                    <div className="w-38 h-38 rounded-full overflow-hidden shadow-md flex items-center justify-center bg-white">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={128}
                        height={128}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="p-2">
                      <h3 className="text-2xl font-bold mb-4 text-[#5C0A1E] text-center">
                        {item.title}
                      </h3>
                      <p className="mb-6 text-justify text-[#5C0A1E]/80">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* Banner Section */}
          <section className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center my-5">
                <h2 className="text-3xl md:text-4xl font-bold text-[#5C0A1E]">
                  COME AND EXPERIENCE THE <span className="text-[#D4AF37]">VENCIO&apos;S DIEFFERENCE</span>
                </h2>
              </div>
                <div className="my-5">
                  Whether you&apos;re here for business, leisure, or celebration, Vencio&apos;s Garden Hotel & Restaurant promises warm hospitality, great food, and a memorable stay.
                </div>
                <div className="flex items-center justify-center">
                  <Carousel
                    plugins={plugin.current ? [plugin.current] : []}
                    className="max-w-md my-3"
                  >
                    <CarouselContent>
                      {images?.map((img, index) => (
                        <CarouselItem key={index}>
                          <div>
                            <Card>
                              <CardContent className="flex aspect-square items-center justify-center p-0">
                                <Image
                                  src={img}
                                  alt={`Slide ${index + 1}`}
                                  width={500}
                                  height={500}
                                  className="w-full h-full object-contain rounded-xl"
                                />
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
            </div>
          </section>

        

        {/* CTA Section*/}
        <div className="h-1 bg-[#D4AF37]"/>
        <section className="pb-10 pt-16 bg-[#5C0A1E] shadow-lg">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-300">
                  Vencio's Garden
                </h2>
                <p className="text-[#ecd8af] uppercase tracking-widest text-md">
                  Hotel & Restaurant
                </p>
              </div>
              <div
                className="h-20 w-20 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: "url('/logo.png')" }}
              />
            </div>


            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:items-end items-start mb-12">
                <div className="text-gray-200 text-lg italic space-y-1 text-right">
                  <p>Hotel: 288-7789</p>
                  <p>Restaurant: 288-7790</p>
                  <p>Takeout: 0918 957 2855</p>
                  <p>Email: venciosgarden@yahoo.com</p>
                  <p>Facebook: @venciosgardenhotel</p>
                  <p>Instagram: @venciosgarden</p>
                  <p>#08 Nautical Highway, Tawiran, Calapan City, Oriental Mindoro</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
        <div className="h-1 bg-[#D4AF37]"/>
      <Footer />
    </div>
  )
}
