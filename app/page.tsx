"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  PartyPopper,
  Utensils,
  ArrowRight,
  CheckCircle,
  BedDouble,
  HandHeart,
  BadgeCent,
  Handshake,
  ThumbsUp,
  Eye,
 } from "lucide-react"

export default function HomePage (){
const [currentSlide, setCurrentSlide] = useState(0)

const heroSlides = [
  {
    image:"/banner-1.jpg",
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

  const renderTitle = (title: string, highlight: string) => {
    if (!title.includes(highlight)) {
      return <span className="text-white drop-shadow-2xl">{title}</span>
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">

        {/* Slider Images */}
        <section className="relative h-[90vh] md:h-[60vh] overflow-hidden bg-fixed">
          <div className="relative h-full">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-80" : "opacity-0"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 brightness-60"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                />
                {/* Softer overlays */}
                <div className="absolute inset-0 bg-linear-to-b from-gray-500/10 via-black/10 to-gray-500/10" />
                <div className="absolute inset-0 bg-linear-to-r from-gray-500/10 via-transparent to-gray-500/10" />
              </div>
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center max-w-xl lg:max-w-7xl mx-auto px-6 lg:px-8 sm:my-10 pt-12">
              <h1
                className="text-3xl sm:text-3xl font-medium md:text-4xl lg:text-5xl mb-6 text-balance leading-tight tracking-wide"
              >
                {renderTitle(heroSlides[currentSlide].title, heroSlides[currentSlide].subtitle)}
              </h1>

              <p className="text-lg md:text-xl mb-10 text-pretty max-w-2xl mx-auto text-white font-medium leading-relaxed">
                {heroSlides[currentSlide].subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                <Link href="/rooms">
                  <button className="group w-60 h-16 px-10 py-4 rounded-sm sm:w-auto flex items-center justify-center font-medium text-md sm:text-lg transition-all duration-500 transform hover:scale-105 text-gray-200 shadow-2xl hover:shadow-3xl bg-[#5C0A1E] border-2 border-[#5C0A1E] hover:border-white/70 hover:text-white hover:bg-black/20 hover:backdrop-blur-sm">
                    <span className="mr-3">Book Your Stay</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="/about">
                  <button
                    className="w-60 h-16 px-10 py-4 rounded-sm sm:w-auto font-medium text-md sm:text-lg transition-all duration-500 border-2 border-white/70 text-gray-200 bg-black/20 backdrop-blur-sm hover:bg-[#5C0A1E] hover:border-[#5C0A1E] transform hover:scale-105"
                    style={{
                      textShadow: "0 0 10px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex space-x-4">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative transition-all duration-500 ${
                  index === currentSlide
                    ? "w-12 h-1 bg-linear-to-r from-red-400 to-red-500"
                    : "w-8 h-1 bg-white/40 hover:bg-red-400/70"
                }`}
              >
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-linear-to-r from-red-400 to-red-500 rounded-full shadow-lg shadow-red-400/50"></div>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-[#5C0A1E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12">
              <p className="text-red-200 uppercase tracking-widest text-lg mb-3">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
                Our Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="py-10 px-6 bg-[#f5e5c5] shadow-lg border border-red-200 hover:scale-105 transition-transform duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 justify-center mb-2">
                    <BedDouble className="text-[#D4AF37] w-8 h-8" />
                    <h3 className="text-2xl font-bold text-[#5C0A1E]">Hotel Accommodation</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-md text-justify mb-6">
                    Unwind in our comfortable, well-appointed rooms crafted to provide every guest a relaxing and delightful stay.
                  </p>
                  <div className="flex justify-end">
                    <Link href="/">
                      <button className="group flex items-center hover:underline text-[#5C0A1E] font-medium">
                        <span className="mr-1">Learn More</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="py-10 px-6 bg-[#f5e5c5] shadow-lg border border-red-200 hover:scale-105 transition-transform duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 justify-center mb-5 pb-5">
                    <Utensils className="text-[#D4AF37] w-8 h-8" />
                    <h3 className="text-2xl font-bold text-[#5C0A1E]">Seafood Café</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-md text-justify mb-6">
                    Savor a symphony of flavors with fresh seafood specialties and Filipino favorites prepared to satisfy every craving.
                  </p>
                  <div className="flex justify-end">
                    <Link href="/">
                      <button className="group flex items-center hover:underline text-[#5C0A1E] font-medium">
                        <span className="mr-1">Learn More</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="py-10 px-6 bg-[#f5e5c5] shadow-lg border border-red-200 hover:scale-105 transition-transform duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 justify-center mb-5 pb-5">
                    <PartyPopper className="text-[#D4AF37] w-8 h-8" />
                    <h3 className="text-2xl font-bold text-[#5C0A1E]">Catering Events</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-md text-justify mb-6">
                    From weddings to corporate gatherings, we elevate your celebrations with tailored menus and exceptional service.
                  </p>
                  <div className="flex justify-end">
                    <Link href="/">
                      <button className="group flex items-center hover:underline text-[#5C0A1E] font-medium">
                        <span className="mr-1">Learn More</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className="h-100 lg:h-140 w-full bg-cover bg-center rounded-lg shadow-xl border border-red-900"
                style={{
                  backgroundImage: "url('/venciosloc.jpg')"
                }}
              />
              <div>
                <p className="text-[#D4AF37] uppercase tracking-widest text-lg mb-3">Since 2008</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C0A1E] mb-6">
                  A Garden Paradise in Calapan City
                </h2>
                <div className="space-y-4 leading-relaxed">
                  <p className="text-justify">
                    Vencio's Garden Hotel and Restaurant has been a haven of comfort and Calapeño culinary delight in 
                    Oriental Mindoro for over 16 years. We take pride in offering cozy accommodations and a dining 
                    experience that celebrates local flavors and fresh ingredients. Whether you're staying for business 
                    or leisure, enjoying a meal with loved ones, or hosting a special event, Vencio's is dedicated to 
                    providing warm hospitality and unforgettable moments in a tranquil garden setting. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="pb-10 bg-linear-to-b from-white to-[#F5E6C8]/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-[#D4AF37] uppercase tracking-widest text-lg mb-3">
                Commitment to our Guests
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C0A1E]">
                Our Brand Promise
              </h2>
            </div>

            <div className="
              grid 
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5
              gap-6
              place-items-stretch
            ">
              <Card className="h-full bg-[#f5e5c5]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#5C0A1E] flex items-center justify-center">
                      <ThumbsUp className="w-7 h-7 text-[#D4AF37]" />
                    </div>
                    <span className="text-[#5C0A1E]">Exceptional Comfort</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-md leading-relaxed text-justify">
                    We provide warm, inviting spaces designed to make every stay relaxing, refreshing, and memorable.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full bg-[#f5e5c5]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#5C0A1E] flex items-center justify-center">
                      <Heart className="w-7 h-7 text-[#D4AF37]" />
                    </div>
                    <span className="text-[#5C0A1E]">Genuine Hospitality</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-md leading-relaxed text-justify">
                    Our team is dedicated to serving with sincerity, offering personalized care that makes you feel valued 
                    from the moment you arrive.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full bg-[#f5e5c5]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#5C0A1E] flex items-center justify-center">
                      <BadgeCent className="w-7 h-7 text-[#D4AF37]" />
                    </div>
                      <span className="text-[#5C0A1E]">Quality You Can Trust</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-md leading-relaxed text-justify">
                    From our accommodations to our dining and catering services, we uphold consistent standards to ensure 
                    excellence in every experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full bg-[#f5e5c5]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#5C0A1E] flex items-center justify-center">
                      <Handshake className="w-7 h-7 text-[#D4AF37]" />
                    </div>
                      <span className="text-[#5C0A1E]">Thoughtful Experiences</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-md leading-relaxed text-justify">
                    We strive to create moments that matter—whether you're staying with us, dining in, or celebrating a milestone.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full bg-[#f5e5c5]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#5C0A1E] flex items-center justify-center">
                      <HandHeart className="w-7 h-7 text-[#D4AF37]" />
                    </div>
                      <span className="text-[#5C0A1E]">Your Satisfaction, Our Priority</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-md leading-relaxed text-justify">
                    We listen, adapt, and continuously improve to deliver the service you deserve. Your comfort and 
                    happiness guide everything we do.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section className="py-10 bg-[#F5E6C8]/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-[#D4AF37] uppercase tracking-widest text-lg mb-3">Hotel Accomodation</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C0A1E]">Our Featured Rooms</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              
            </div>
          </div>
        </section>

        {/* Restaurant Section */}
        <section className="py-10 bg-[#F5E6C8]/30">
          <div className="container mx-auto px-4">
            
            {/* Restaurant Venue */}
            <div className="py-10">
              <div className="text-center mb-12">
                <p className="text-[#D4AF37] uppercase tracking-widest text-lg mb-3">
                  Garden Dining Hub
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C0A1E]">
                  Vencio's Garden Seafood Cafe
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "RESTO VENUE",
                    image: "/restaurant-venue.jpg",
                    description: (
                      <>
                        Host your next celebration or corporate event at Vencio's Garden Seafood Cafe! With a spacious 
                        and charming ambiance, delectable menus, and attentive service, we&apos;ll make your gatherings unforgettable. 
                      </>
                    )
                  },
                  {
                    title: "THEMED KTVs",
                    image: "/themed-ktv.jpg",
                    description: (
                      <>
                        Perfect setting for your small gatherings, accommodating <b>10-20 people</b> comfortably. Whether it&apos;s a 
                        birthday, family reunion, or just a fun get-together, our KTV rooms offer a private and vibrant atmosphere. 
                      </>
                    )
                  },
                  {
                    title: "CATCH & GRILL",
                    image: "/catch&grill.png",
                    description: (
                      <>
                        Experience the ultimate aquafarm-to-table dining with our unique <b>Catch & Grill</b> experience. Catch your own hito 
                        and red tilapia straight from our pond, grill it to perfection, and savor it in our cozy alfresco kubo huts 
                        while being surrounded by mangrove trees. Perfect for groups of up to 5.
                      </>
                    )
                  }
                ].map((item, idx) => (
                  <Card
                    key={idx}
                    className="rounded-2xl overflow-hidden shadow-xl border border-red-300 
                              transition-all duration-300 hover:scale-105 
                              bg-linear-to-br from-white to-red-50 p-0 pb-5"
                  >
                    <CardHeader className="p-0">
                      <CardTitle className="p-0">
                        <div
                          className="h-80 bg-cover bg-center w-full opacity-80"
                          style={{ backgroundImage: `url(${item.image})` }}
                        />
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <div className="p-2">
                        <h3 className="text-2xl font-bold mb-4 text-[#5C0A1E]">
                          {item.title}
                        </h3>
                        <p className="mb-6 text-justify">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Restaurant Menu */}
            <div className="py-16">
              <div className="text-center mb-12">
                <p className="text-[#D4AF37] uppercase tracking-widest text-lg mb-3">
                  Menu Highlights
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C0A1E]">
                  Choose Your Vencio's Craving
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "RESTO MENU",
                    image: "/resto-menu.jpg",
                    link: "/resto-menu",
                    description: (
                      <>
                        Dive into local <b>Seafood</b> and <b>Pinoy favorites</b> crafted to
                        satisfy every craving.
                      </>
                    )
                  },
                  {
                    title: "VENCIO'S TAKEOUTS",
                    image: "/takeout-menu.jpg",
                    link: "/resto-menu",
                    description: (
                      <>
                        Celebrate every occasion with our best-selling <b>Palabok</b>,
                        classic Pinoy favorites, and delightful <b>Kakanin packages</b>.
                        Perfect for any gathering, big or small.
                      </>
                    )
                  },
                  {
                    title: "BUNS & ROLLS",
                    image: "/breads&rolls-menu.jpg",
                    link: "/resto-menu",
                    description: (
                      <>
                        From fluffy <b>Ensaymada</b> to flavorful <b>Bread Floss</b> and soft
                        <b> Korean Buns</b>, our breads are made from scratch with love.
                      </>
                    )
                  }
                ].map((item, idx) => (
                  <Card
                    key={idx}
                    className="rounded-2xl overflow-hidden shadow-xl border border-red-300 
                              transition-all duration-300 hover:scale-105 
                              bg-linear-to-br from-white to-red-50 p-0 pb-5"
                  >
                    <CardHeader className="p-0">
                      <CardTitle className="p-0">
                        <div className="h-72 w-full bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                      </CardTitle>
                    </CardHeader>

                    {/* Content */}
                    <CardContent className="px-6">
                      <h3 className="text-2xl font-bold mb-3 text-[#5C0A1E] text-center">
                        {item.title}
                      </h3>

                      <p className="mb-6 text-justify leading-relaxed lg:h-28">
                        {item.description}
                      </p>

                      <Link href={item.link}>
                        <button
                          className="w-full py-3 rounded-lg font-semibold
                                    bg-[#5C0A1E] text-red-100 shadow-md
                                    transition-all duration-300 hover:bg-red-700 hover:scale-[1.03]"
                        >
                          View Menu
                        </button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Catering Section */}
        <section className="py-10 bg-[#F5E6C8]/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center justify-center items-center mb-12">
              <p className="text-[#D4AF37] uppercase tracking-widest text-lg mb-3">Event Catering</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C0A1E] mb-5">Expert Catering for Every Event</h2>
              <p className="text-lg">We understand that every event is a milestone, whether it&apos;s a heartwarming celebration with loved ones or an inspiring corporate gathering, Vencio's Garden is always the first choice.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "DOME HALL",
                  image: "/dome-hall.jpg",
                  description: (
                    <>
                      Ideal venue with seperate buffet area fit for 100 guests. 
                    </>
                  )
                },
                {
                  title: "PAVILLION HALL",
                  image: "/pavillion-hall.png",
                  description: (
                    <>
                      Rustic vibe venue with dim lighting fit for social events.
                    </>
                  )
                },
                {
                  title: "RESTO VENUE",
                  image: "/resto-venue.jpg",
                  description: (
                    <>
                      Venue recommended for small gatherings.
                    </>
                  )
                },
                {
                  title: "EXTENSION HALL",
                  image: "/extension-hall.jpg",
                  description: (
                    <>
                      A venue with Overlooking Gazebo and commonly used as an extension for the dome hall.
                    </>
                  )
                }
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="rounded-2xl overflow-hidden shadow-xl border border-red-300 
                            bg-linear-to-br from-white to-red-50 p-0 pb-5"
                >
                  <CardHeader className="p-0">
                    <CardTitle className="p-0">
                      <div
                        className="h-80 bg-cover bg-center w-full opacity-80"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="p-2">
                      <h3 className="text-2xl font-bold mb-4 text-[#5C0A1E]">
                        {item.title}
                      </h3>
                      <p className="mb-6 text-justify">{item.description}</p>

                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View All Rooms CTA */}
            <div className="mt-10 flex items-center justify-center">
              <div className="bg-[#5C0A1E] rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400/20 rounded-full -ml-12 -mb-12"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Discover All Our <span className="text-[#D4AF37]">Function Halls</span>
                  </h3>
                  <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
                    Our catering crew works closely with you to ensure every detail is just right! 
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-red-300 text-[#5C0A1E] hover:bg-red-300 hover:text-[#5C0A1E] font-bold px-8 py-3 text-lg group/cta hover:scale-105 transition-transform"
                      >
                        <Eye className="mr-3 w-5 h-5" />
                          Inquire Now
                        <ArrowRight className="ml-3 w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="h-1 bg-[#D4AF37]"/>
        {/* CTA Section*/}
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
