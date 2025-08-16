"use client"

import { useState, useEffect } from "react"

import { Badge, ChevronLeft, ChevronRight, PhoneCall, Play } from "lucide-react"
import { Button } from "../../components/ui/button"
import Image from "next/image"

interface HeroSlide {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  badge?: string
  primaryAction: string
  secondaryAction: string
}

interface HeroSectionProps {
  slides: HeroSlide[]
  autoPlay?: boolean
  interval?: number
}

export function HeroSection({ slides, autoPlay = true, interval = 5000 }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (isPlaying && slides.length > 1) {
      const timer = setInterval(nextSlide, interval)
      return () => clearInterval(timer)
    }
  }, [isPlaying, slides.length, interval])

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/30 to-accent/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {currentSlideData.badge && (
              <Badge className="bg-accent text-accent-foreground text-sm px-4 py-2 animate-pulse">
                {currentSlideData.badge}
              </Badge>
            )}

            <div className="space-y-4">
              <h1
                className="text-5xl md:text-7xl font-bold text-foreground leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {currentSlideData.title.split(" ").map((word, index) => (
                  <span key={index} className={word === "Indore" ? "text-primary" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>

              <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">{currentSlideData.subtitle}</h2>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">{currentSlideData.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className=" text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
              >
                {currentSlideData.primaryAction}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 bg-background/80 backdrop-blur-sm hover:bg-background"
              >
                <Play className="w-5 h-5 mr-2" />
                {currentSlideData.secondaryAction}
              </Button>
            </div>

            {/* Slide Indicators */}
            {slides.length > 1 && (
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-primary w-8"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-muted-foreground hover:text-foreground transition-colors cu-p"
                >
                  {isPlaying ? "Pause" : "Play"}
                </button>
              </div>
            )}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
              width={800}
              height={600}
                src={currentSlideData.image}
                alt={currentSlideData.title}
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Elements */}
            <div className="fixed  right-6  text-accent-foreground px-4 py-3 rounded-full font-semibold shadow-lg animate-bounce bg-red-500 cursor-pointer">
              <PhoneCall className="w-4 h-5 inline-block " />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-xl border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">70+</div>
                <div className="text-sm text-muted-foreground">Years of Tradition</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </>
      )}
    </section>
  )
}
