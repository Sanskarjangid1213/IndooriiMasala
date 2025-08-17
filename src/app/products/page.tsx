'use client'
import { Product, ProductSlider } from '@/Components/product-slider'
import React, { useState } from 'react'


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

const Page = () => {

  const [selectedProduct, setSelectedProduct] = useState<Product>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(selectedProduct);
    const handleProductClick = (product: Product) => {
      setSelectedProduct(product);
  
      setIsModalOpen(true);
    };
  return (
    <section id="products" className="py-20">
            {/* Featured Products */}
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
  )
}

export default Page
