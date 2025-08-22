import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { Button } from '../../../components/ui/button'
import Image from 'next/image'

const Page = () => {
  return (
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
                src="/namkeen_Im_1_900x.jpg"
                alt="Our Store"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Page
