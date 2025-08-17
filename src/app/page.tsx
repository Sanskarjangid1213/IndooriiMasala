"use client";

import {
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Users,
  Heart,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useState } from "react";
import { HeroSection } from "@/Components/hero-section";
import { Product, ProductSlider } from "@/Components/product-slider";
import { ProductModal } from "@/Components/Product-modal";

const products = [
  {
    id: "1",
    name: "Indori Poha Jalebi Mix",
    description:
      "A unique blend of crispy poha and sweet jalebi pieces, capturing the essence of Indore's famous breakfast combination",
    price: 180,
    image: "/namkeen_Im_1_900x.jpg",
    badge: "Bestseller",
    category: "Sweet & Savory",
    ingredients: [
      "Poha (Flattened Rice)",
      "Jalebi Pieces",
      "Cardamom",
      "Sugar",
      "Ghee",
      "Traditional Spices",
    ],
    rating: 4.9,
    reviews: 234,
    inStock: true,
  },
  {
    id: "2",
    name: "Spicy Bhujia",
    description:
      "Traditional gram flour noodles with authentic spices, made using our 70-year-old family recipe",
    price: 220,
    image: "/namkeen_Im_1_900x.jpg",
    badge: "Spicy",
    category: "Traditional",
    ingredients: [
      "Gram Flour",
      "Red Chili",
      "Turmeric",
      "Asafoetida",
      "Salt",
      "Refined Oil",
    ],
    rating: 4.8,
    reviews: 189,
    inStock: true,
  },
  {
    id: "3",
    name: "Indori Mixture",
    description:
      "Classic mix of sev, peanuts, and traditional namkeen with the authentic taste of Indore",
    price: 200,
    image: "/namkeen_Im_1_900x.jpg",
    badge: "Traditional",
    category: "Mixture",
    ingredients: [
      "Sev",
      "Peanuts",
      "Curry Leaves",
      "Green Peas",
      "Raisins",
      "Mixed Spices",
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
  },
  {
    id: "4",
    name: "Khatta Meetha",
    description:
      "Perfect balance of sweet and tangy flavors with dried fruits and nuts",
    price: 240,
    image: "/namkeen_Im_1_900x.jpg",
    badge: "Sweet & Sour",
    category: "Premium",
    ingredients: [
      "Sev",
      "Dates",
      "Tamarind",
      "Jaggery",
      "Cashews",
      "Almonds",
      "Raisins",
    ],
    rating: 4.9,
    reviews: 203,
    inStock: true,
  },
  {
    id: "5",
    name: "Aloo Bhujia",
    description:
      "Potato-based crispy snack with aromatic spices, a modern twist on traditional bhujia",
    price: 190,
    image: "/namkeen_Im_1_900x.jpg",
    badge: "Crispy",
    category: "Modern",
    ingredients: [
      "Potato Starch",
      "Gram Flour",
      "Red Chili",
      "Black Pepper",
      "Chat Masala",
    ],
    rating: 4.6,
    reviews: 142,
    inStock: true,
  },
  {
    id: "6",
    name: "Masala Peanuts",
    description:
      "Roasted peanuts coated with special Indori masala blend for the perfect crunch",
    price: 160,
    image: "/namkeen_Im_1_900x.jpg",
    badge: "Healthy",
    category: "Nuts",
    ingredients: [
      "Peanuts",
      "Gram Flour",
      "Red Chili Powder",
      "Turmeric",
      "Salt",
      "Oil",
    ],
    rating: 4.5,
    reviews: 98,
    inStock: true,
  },
];
const heroSlides = [
  {
    id: "1",
    title: "Authentic Taste of Indore",
    subtitle: "Traditional Namkeen Since 1952",
    description:
      "Experience the rich flavors and traditional recipes of Indori namkeen, crafted with love and passed down through generations",
    image: "/namkeen_Im_1_900x.jpg",
    badge: "70+ Years of Tradition",
    primaryAction: "Explore Our Snacks",
    secondaryAction: "Watch Our Story",
  },
  {
    id: "2",
    title: "Fresh Made Daily",
    subtitle: "Quality You Can Taste",
    description:
      "Every batch is prepared fresh using premium ingredients and time-tested methods to ensure authentic flavors in every bite",
    image: "/namkeen_Im_1_900x.jpg",
    badge: "Made Fresh Daily",
    primaryAction: "Order Fresh Now",
    secondaryAction: "See Process",
  },
  {
    id: "3",
    title: "From Indore to Your Home",
    subtitle: "Nationwide Delivery",
    description:
      "Bringing the authentic taste of Indore's famous namkeen directly to your doorstep with careful packaging and fast delivery",
    image: "/namkeen_Im_1_900x.jpg",
    badge: "Free Delivery Above ₹500",
    primaryAction: "Order Online",
    secondaryAction: "Track Order",
  },
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(selectedProduct);
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);

    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <HeroSection slides={heroSlides} />

      {/* Featured Products */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3
              className="text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Signature Snacks
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handcrafted with premium ingredients and traditional methods for
              an authentic taste experience
            </p>
          </div>

          {
            <ProductSlider
              products={products}
              onProductClick={handleProductClick}
              slidesToShow={3}
              autoPlay={true}
            />
          }
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3
                className="text-4xl font-bold text-foreground mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Three Generations of{" "}
                <span className="text-primary">Authentic Flavors</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Since 1952, our family has been crafting the finest namkeen in
                Indore. What started as a small shop in Sarafa Bazaar has grown
                into a beloved brand, but our commitment to quality and
                tradition remains unchanged.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">Premium Quality</h4>
                    <p className="text-sm text-muted-foreground">
                      Only the finest ingredients
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">Family Recipe</h4>
                    <p className="text-sm text-muted-foreground">
                      Traditional methods preserved
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-8 h-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">Made with Love</h4>
                    <p className="text-sm text-muted-foreground">
                      Every batch crafted carefully
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-8 h-8 text-primary" />
                  <div>
                    <h4 className="font-semibold">Fresh Daily</h4>
                    <p className="text-sm text-muted-foreground">
                      Made fresh every morning
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <Image
                width={500}
                height={300}
                src="/indian-family-namkeen.png"
                alt="Traditional Namkeen Making Process"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-sm font-semibold">10,000+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3
              className="text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What Our Customers Say
            </h3>
            <p className="text-lg text-muted-foreground">
              Real reviews from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                location: "Mumbai",
                review:
                  "The taste reminds me of my childhood visits to Indore. Absolutely authentic and fresh!",
                rating: 5,
              },
              {
                name: "Rajesh Patel",
                location: "Delhi",
                review:
                  "Best namkeen I've ever had outside of Indore. The spice blend is perfect.",
                rating: 5,
              },
              {
                name: "Anita Singh",
                location: "Bangalore",
                review:
                  "Ordered for a family gathering and everyone loved it. Will definitely order again!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    {testimonial.review}
                  </p>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3
              className="text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Get in Touch
            </h3>
            <p className="text-lg text-muted-foreground">
              Visit our store or contact us for bulk orders
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4
                className="text-2xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Visit Our Store
              </h4>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground">
                      123 Sarafa Bazaar, Indore, MP 452001
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">
                      info@indorinamkeen.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-muted-foreground">
                      Mon-Sun: 9:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                Get Directions
              </Button>
            </div>

            <div>
              <Image
               width={500}
                height={300}
                src="/indian-namkeen-shop.png"
                alt="Our Store"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>


      <ProductModal
        product={selectedProduct || null}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
