import React from "react";
import { Button } from "../../components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">IN</span>
              </div>

              <h4
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Indori Namkeen
              </h4>
            </div>
            <p className="text-background/80 mb-4">
              Authentic taste of Indore since 1952. Quality you can trust,
              flavors you&#39;ll love.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-background/80">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-primary transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Products</h5>
            <ul className="space-y-2 text-background/80">
              <li>Bhujia & Sev</li>
              <li>Mixture & Namkeen</li>
              <li>Sweet & Sour</li>
              <li>Traditional Snacks</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Newsletter</h5>
            <p className="text-background/80 mb-4">
              Subscribe for special offers and new product updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded bg-background/10 border border-background/20 text-background placeholder:text-background/60"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>
            &copy; 2024 Indori Namkeen. All rights reserved. Made with ❤️ in
            Indore.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
