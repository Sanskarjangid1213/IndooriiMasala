'use client';
import allRoutes from "constanse/allRoutes";
import { Button } from "../../components/ui/button";
import Link from "next/link";
// import { useLoginMutation } from "@/store/services/auth";
// import { openModal } from "@/store/slices/authModalSlice";
import { useDispatch } from "react-redux";
import { ProfileDropdown } from "./ui/ProfileDropdown";
import { User } from "lucide-react";
import { openModal } from "store/slices/authModalSlice";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
// import { RootState } from "store/store";



const Navbar = () => {

 const dispatch = useDispatch();
  const [token, setToken] = useState<string | null>(null);

 useEffect(() => {
    const storedToken = Cookies.get("token");
    setToken(storedToken || null);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
             <Link href='/' className='cursor-pointer'>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center 
                bg-[linear-gradient(135deg,#8b0000_0%,#e11d48_50%,#ff6b6b_100%)]"
          >
            <span className="text-white font-bold text-lg">IN</span>
          </div>
          </Link>
           <Link href='/' className='cursor-pointer'>
          <h1
            className="text-2xl font-bold bg-[linear-gradient(135deg,#8b0000_0%,#e11d48_50%,#ff6b6b_100%)] bg-clip-text text-transparent"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Indori Namkeen
          </h1>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href={allRoutes.products}
            className="text-foreground hover:text-primary transition-colors"
          >
            Products
          </Link>
          <Link
            href={allRoutes.about}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href={allRoutes.contact}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div  className="flex items-center space-x-4">


        <Button className="cursor-pointer" onClick={() => dispatch(openModal("login"))}>Order Now</Button>
        {/* drop down */}
        
      {token && (
        <ProfileDropdown>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-red-50 hover:text-red-600 cursor-pointer border-2 rounded-md focus:bg-red-50 focus:text-red-600"
          >
            <User className="h-5 w-5" />
          </Button>
        </ProfileDropdown>
      )}
        </div>
      </div>

  
    </header>
  );
};

export default Navbar;
