"use client"

import { useState, useEffect, useCallback } from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"

import { ChevronLeft, ChevronRight, ShoppingCart, Eye } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import Image from "next/image"

 export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  badge: string
  category: string
  ingredients?: string[]
  weight?: string
}

interface ProductSliderProps {
  products: Product[]
  onProductClick?: (product: Product) => void
  autoPlay?: boolean
  slidesToShow?: number
}

export function ProductSlider({ products, onProductClick, autoPlay = true, slidesToShow = 3 }: ProductSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, products.length - slidesToShow + 1))
  }, [products.length, slidesToShow])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, products.length - slidesToShow) : prev - 1))
  }

  useEffect(() => {
    if (autoPlay && !isHovered && products.length > slidesToShow) {
      const interval = setInterval(nextSlide, 4000)
      return () => clearInterval(interval)
    }
  }, [autoPlay, isHovered, products.length, slidesToShow, nextSlide])

  const visibleProducts = products.slice(currentIndex, currentIndex + slidesToShow)

  return (
    <div className="relative w-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Navigation Buttons */}
      {products.length > slidesToShow && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg cursor-pointer"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg cursor-pointer"
            onClick={nextSlide}
            disabled={currentIndex >= products.length - slidesToShow}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Products Grid */}
      <div
        className="grid gap-6 px-12"
        style={{ gridTemplateColumns: `repeat(${Math.min(slidesToShow, products.length)}, 1fr)` }}
      >
        {visibleProducts.map((product) => (
          <Card
            key={product.id}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/20"
            onClick={() => onProductClick?.(product)}
          >
            <CardHeader className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                width={400}
                height={280}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground font-semibold">
                  {product.badge}
                </Badge>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white cursor-pointer">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" className="cursor-pointer">
                      <ShoppingCart className="h-4 w-4 mr-1 " />
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle
                className="text-xl mb-2 group-hover:text-primary transition-colors"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {product.name}
              </CardTitle>
              <CardDescription className="text-muted-foreground mb-4 line-clamp-2">
                {product.description}
              </CardDescription>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{product.price}/kg</span>
                <Badge variant="outline" className="text-xs">
                  {product.category}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Dots Indicator */}
      {products.length > slidesToShow && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: Math.ceil(products.length / slidesToShow) }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / slidesToShow) === index
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              onClick={() => setCurrentIndex(index * slidesToShow)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
