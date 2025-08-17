import { Award, Clock, Heart, Star, Users } from 'lucide-react'
import React from 'react'
import { Button } from '../../../components/ui/button'
import Image from 'next/image'

const page = () => {
  return (
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
  )
}

export default page
