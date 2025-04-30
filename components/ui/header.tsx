"use client";

import Link from "next/link";
import { Search, ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart-context";

export function Header() {
  const { itemCount } = useCart();

  return (
    <header>
      {/* Main Navigation Bar */}
      <div className="bg-[#131921] text-white">
        <div className="container mx-auto">
          <div className="flex items-center h-16 px-2 md:px-4">
            {/* Logo */}
            <Link href="/" className="mr-4 flex items-center">
              <span className="text-2xl font-bold">amazon</span>
              <span className="text-orange-400 text-2xl">.clone</span>
            </Link>

            {/* Delivery Location */}
            <div className="hidden md:flex items-center mr-4 text-sm">
              <div className="flex flex-col">
                <span className="text-gray-300 text-xs">Deliver to</span>
                <div className="flex items-center">
                  <span className="font-bold">Location</span>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 flex items-center mx-2">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <select className="h-full rounded-l-md border-0 bg-gray-100 py-0 pl-2 pr-7 text-gray-500 focus:ring-0 sm:text-sm">
                    <option>All</option>
                  </select>
                </div>
                <Input
                  type="text"
                  placeholder="Search Amazon"
                  className="pl-24 h-10 rounded-l-md rounded-r-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button className="absolute inset-y-0 right-0 rounded-l-none bg-orange-400 hover:bg-orange-500 h-10 px-4">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Account & Lists */}
            <div className="hidden md:flex flex-col mx-2 text-sm">
              <span className="text-gray-300">Hello, sign in</span>
              <div className="flex items-center font-bold">
                <span>Account & Lists</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
            </div>

            {/* Returns & Orders */}
            <div className="hidden md:flex flex-col mx-2 text-sm">
              <span className="text-gray-300">Returns</span>
              <span className="font-bold">& Orders</span>
            </div>

            {/* Cart */}
            <div className="flex items-center mx-2">
              <Link href="/cart" className="flex items-center">
                <div className="relative">
                  <ShoppingCart className="h-7 w-7" />
                  <Badge className="absolute -top-2 -right-2 bg-orange-400 text-white">{itemCount}</Badge>
                </div>
                <span className="hidden md:inline font-bold ml-1">Cart</span>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Secondary Nav */}
      <div className="bg-[#232f3e] py-1">
        <div className="container mx-auto flex items-center overflow-x-auto">
          <Link href="/all-menu">
            <Button variant="ghost" className="text-white text-sm flex items-center">
              <Menu className="h-4 w-4 mr-1" />
              <span>All</span>
            </Button>
          </Link>
          <Link href="/todays-deals">
            <Button variant="ghost" className="text-white text-sm">
              Today's Deals
            </Button>
          </Link>
          <Link href="/customer-service">
            <Button variant="ghost" className="text-white text-sm">
              Customer Service
            </Button>
          </Link>
          <Link href="/registry">
            <Button variant="ghost" className="text-white text-sm">
              Registry
            </Button>
          </Link>
          <Link href="/gift-cards">
            <Button variant="ghost" className="text-white text-sm">
              Gift Cards
            </Button>
          </Link>
          <Link href="/sell">
            <Button variant="ghost" className="text-white text-sm">
              Sell
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
