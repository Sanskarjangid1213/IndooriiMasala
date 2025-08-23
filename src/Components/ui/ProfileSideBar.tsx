"use client"

import type React from "react"

import { useState } from "react"
import { User, ShoppingCart, LogOut, Settings } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../../../components/ui/sheet"
// import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { Button } from "../../../components/ui/button"
import { Separator } from "../../../components/ui/separator"

interface ProfileSidebarProps {
  children: React.ReactNode
}

export function ProfileSidebar({ children }: ProfileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    console.log("Logging out...")
    setIsOpen(false)
  }

  const handleProfile = () => {
    console.log("Opening profile...")
    setIsOpen(false)
  }

  const handleCart = () => {
    console.log("Opening cart...")
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="right" className="w-80">
        <SheetHeader className="pb-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/user-profile-avatar.png" alt="Profile" />
              <AvatarFallback className="bg-red-100 text-red-600">JD</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <SheetTitle className="text-lg font-semibold">John Doe</SheetTitle>
              <p className="text-sm text-muted-foreground">john.doe@example.com</p>
            </div>
          </div>
        </SheetHeader>

        <div className="space-y-4">
          <Button
            onClick={handleProfile}
            variant="ghost"
            className="w-full justify-start h-12 text-left hover:bg-red-50 hover:text-red-600"
          >
            <User className="mr-3 h-5 w-5" />
            Profile Settings
          </Button>

          <Button
            onClick={handleCart}
            variant="ghost"
            className="w-full justify-start h-12 text-left hover:bg-red-50 hover:text-red-600"
          >
            <ShoppingCart className="mr-3 h-5 w-5" />
            Shopping Cart
            <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
          </Button>

          <Separator className="my-4" />

          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full justify-start h-12 text-left hover:bg-red-50 hover:text-red-600"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </Button>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
            <Settings className="mr-2 h-4 w-4" />
            Account Settings
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
