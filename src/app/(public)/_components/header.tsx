"use client"
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import logo from "../../../../public/TattooUs.png"
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {

  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    {href: "#profissionais", label: "Profissionais"},
  ]

  const NavLinks = () => (
    <>
        {navItems.map((item) => (
          <Button
            onClick={() => setIsOpen(false)}
            key={item.href}
            asChild
            className="bg-transparent hover:bg-transparent text-white shadow-none"
          >
          <Link href={item.href}>
            {item.label}
          </Link>
          </Button>
      ))}
    </>
  )

  return (
    <header
      className="fixed top-0 right-0 left-0 z-[999] bg-zinc-800 h-20 px-6 py-6">
       <div className="container mx-auto flex items-center justify-between">
          <Link href={"/"}>
          <Image src={logo} alt="logo"/>
          </Link>

          <nav className="hidden md:flex items-center space-x-4">
            <NavLinks />
          </nav>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="md:hidden">
              <Button 
                className="text-red-500 hover:bg-red-500"
                variant="ghost"
                size="icon"
                >
                <Menu className="w-6 h-6"></Menu>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[240px] sm:w-[300px] z-[9999] bg-zinc-800 items-center">
              <SheetTitle className="text-red-500 mx-auto mt-4">Menu</SheetTitle>
              <SheetHeader></SheetHeader>

              <SheetDescription>
                Veja nossos links
              </SheetDescription>
                <nav className="flex flex-col space-y-4 mt-6">
                  <NavLinks />
                </nav>
            </SheetContent>
          </Sheet>
       </div>
    </header>
  )
}