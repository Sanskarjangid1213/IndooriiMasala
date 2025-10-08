"use client"

import type React from "react"
import { User, ShoppingCart, LogOut, Settings } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../../components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import Cookies from "js-cookie";

import { useGetProfileQuery } from "store/services/User"


interface ProfileDropdownProps {
  children: React.ReactNode
}

export function ProfileDropdown({ children }: ProfileDropdownProps) {
  const {data} = useGetProfileQuery();
 const userProfile = data?.data;
    const handleLogout = () => {
    Cookies.remove("token");
    localStorage.setItem("showLogoutToast", "Logged out successfully!");
        window.location.reload()
    // console.log("Logging out...")
  }

  const handleProfile = () => {
    // console.log("Opening profile...")
  }

  const handleCart = () => {
    // console.log("Opening cart...")
  }

  const handleSettings = () => {
    // console.log("Opening account settings...")
  }
  
    // console.log("User in ProfileDropdown:", user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-64" align="end" sideOffset={5}>
        <DropdownMenuLabel className="font-normal">
          <div className="flex items-center space-x-3 p-2 cursor-pointer ">
            <Avatar className="h-10 w-10">
               <AvatarImage src={"/default-avatar.png"} alt="Profile" />
  <AvatarFallback className="bg-red-100 text-red-600">
    {userProfile?.firstName?.[0]}{userProfile?.lastName?.[0]}
  </AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-sm font-semibold">{userProfile?.firstName +" "+ userProfile?.lastName}</p>
              <p className="text-xs text-muted-foreground">{userProfile?.email}</p>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleProfile}
          className="cursor-pointer hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600"
        >
          <User className="mr-3 h-4 w-4" />
          Profile Settings
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={handleCart}
          className="cursor-pointer hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600"
        >
          <ShoppingCart className="mr-3 h-4 w-4" />
          Shopping Cart
          <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">3</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={handleSettings}
          className="cursor-pointer hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600"
        >
          <Settings className="mr-3 h-4 w-4" />
          Account Settings
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600"
        >
          <LogOut className="mr-3 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
