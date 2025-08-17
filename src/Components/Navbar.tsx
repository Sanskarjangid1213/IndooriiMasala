import React from "react";
import { Button } from "../../components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center 
                bg-[linear-gradient(135deg,#8b0000_0%,#e11d48_50%,#ff6b6b_100%)]"
          >
            <span className="text-white font-bold text-lg">IN</span>
          </div>
          <h1
            className="text-2xl font-bold bg-[linear-gradient(135deg,#8b0000_0%,#e11d48_50%,#ff6b6b_100%)] bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Indori Namkeen
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#home"
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </a>
          <Link
            href="/products"
            className="text-foreground hover:text-primary transition-colors"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
        <Button className="">Order Now</Button>
      </div>
    </header>
  );
};

export default Navbar;
