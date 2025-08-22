"use client"

import { useState } from "react"

import { Star, Minus, Plus, ShoppingCart, Heart, Share2, Truck, Shield, Award } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../components/ui/dialog"
import { Separator } from "@radix-ui/react-separator"
import Image from "next/image"



interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  badge: string
  category: string
  ingredients?: string[]
  weight?: string
  rating?: number
  reviews?: number
  inStock?: boolean
}

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedWeight, setSelectedWeight] = useState("250g")

  if (!product) return null

  const weights = ["250g", "500g", "1kg"]
  const rating = product.rating || 4.8
  const reviews = product.reviews || 127

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <Image
              width={800}
              height={600}
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{product.badge}</Badge>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 rounded-lg overflow-hidden border-2 border-muted hover:border-primary cursor-pointer transition-colors"
                >
                  <Image
                  width={80}
                  height={80}
                    src={product.image}
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                {product.name}
              </h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-muted-foreground"}`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">
                    {rating} ({reviews} reviews)
                  </span>
                </div>
                <Badge variant="outline">{product.category}</Badge>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>
            </div>

            <Separator />

            {/* Price and Weight Selection */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary">{product.price}/kg</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {product.inStock !== false ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Weight:</label>
                <div className="flex gap-2">
                  {weights.map((weight) => (
                    <Button
                      key={weight}
                      variant={selectedWeight === weight ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedWeight(weight)}
                      className="min-w-16 cursor-pointer"
                    >
                      {weight}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Quantity:</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-xl font-semibold min-w-12 text-center">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full text-lg py-6 cursor-pointer">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart - ₹{selectedWeight === "250g" ? (product.price * 0.25*quantity).toFixed(2) : selectedWeight === "500g" ? (product.price * 0.5*quantity).toFixed(2) : product.price*quantity}
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Heart className="w-4 h-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <Separator />

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <Truck className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Free Delivery</span>
                <span className="text-xs text-muted-foreground">Above ₹500</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Fresh Quality</span>
                <span className="text-xs text-muted-foreground">Daily Made</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Authentic</span>
                <span className="text-xs text-muted-foreground">Traditional Recipe</span>
              </div>
            </div>

            {/* Ingredients */}
            {product.ingredients && (
              <>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-2">Ingredients:</h3>
                  <p className="text-sm text-muted-foreground">{product.ingredients.join(", ")}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
