"use client";

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Star, ShoppingCart } from "lucide-react"
import { Header } from "@/components/ui/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"

type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  reviews?: number;
};

export default function TodaysDealsPage() {
  const { addToCart, itemCount } = useCart();

  // Sample product data
  const products: Product[] = [
    {
      id: "laptop-1",
      name: "ASUS TUF Gaming A16 (2024) Gaming Laptop, 16\"",
      price: 899.99,
      originalPrice: 1199.99,
      discount: 25,
      rating: 4,
      reviews: 1234,
      image: "/images/main/Amazon25.png"
    },
    {
      id: "laptop-2",
      name: "ASUS ROG Strix G16 Gaming Laptop, 16\" 165Hz Display",
      price: 1299.99,
      originalPrice: 1499.99,
      discount: 14,
      rating: 4,
      reviews: 567,
      image: "/images/main/Amazon26.png"
    },
    {
      id: "purifier-1",
      name: "LEVOIT Air Purifier for Home Allergies Pets Hair",
      price: 69.99,
      originalPrice: 99.99,
      discount: 30,
      rating: 5,
      reviews: 4321,
      image: "/images/main/Amazon27.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <main className="flex-1">
        {/* Header */}
        <header className="bg-white p-4 border-b">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Today's Deals</h1>
              <Link href="/cart" className="flex items-center">
                <div className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  <Badge className="absolute -top-2 -right-2 bg-orange-400 text-white">{itemCount}</Badge>
                </div>
                <span className="ml-2">Cart</span>
              </Link>
            </div>
            <div className="flex items-center text-sm mt-2">
              <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 text-gray-400" />
              <span>Today's Deals</span>
            </div>
          </div>
        </header>

        {/* Categories */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Trending
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Lightning deals
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Customers' Most-Loved
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Spring Favorites
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Fashion
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Home
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Toys & Games
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Beauty
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Electronics
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Devices
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Kitchen
            </Button>
          </div>
        </div>

        {/* Filters and Products */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white p-4 rounded-md">
              <h2 className="font-bold mb-4">Department</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="radio" id="all" name="department" className="mr-2" defaultChecked />
                  <label htmlFor="all">All</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="devices" name="department" className="mr-2" />
                  <label htmlFor="devices">Amazon Devices & Accessories</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="appliances" name="department" className="mr-2" />
                  <label htmlFor="appliances">Appliances</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="arts" name="department" className="mr-2" />
                  <label htmlFor="arts">Arts, Crafts & Sewing</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="automotive" name="department" className="mr-2" />
                  <label htmlFor="automotive">Automotive</label>
                </div>
                <div className="text-[#007185] text-sm cursor-pointer hover:text-orange-500 hover:underline">
                  See more
                </div>
              </div>

              <h2 className="font-bold mt-6 mb-4">Brands</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="asus" className="mr-2" />
                  <label htmlFor="asus">ASUS</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="levoit" className="mr-2" />
                  <label htmlFor="levoit">LEVOIT</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="laura" className="mr-2" />
                  <label htmlFor="laura">LAURA GELLER NEW YORK</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="boka" className="mr-2" />
                  <label htmlFor="boka">Boka</label>
                </div>
                <div className="text-[#007185] text-sm cursor-pointer hover:text-orange-500 hover:underline">
                  See more
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <Card key={product.id} className="bg-white overflow-hidden">
                  <CardContent className="p-4">
                    <div className="aspect-square relative mb-4">
                      <Image 
                        src={product.image || "/images/main/Amazon19.png"} 
                        alt={product.name} 
                        fill 
                        className="object-contain" 
                      />
                    </div>
                    <div className="mb-2">
                      <Badge className="bg-red-600 text-white">
                        {product.discount || 0}% OFF
                      </Badge>
                    </div>
                    <h3 className="text-sm font-medium line-clamp-2 mb-1">{product.name}</h3>
                    <div className="flex items-center mb-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-3 w-3 ${i < (product.rating || 0) ? "fill-current" : ""}`} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">({product.reviews || 0})</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <Button 
                      onClick={() => addToCart(product)}
                      className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-black"
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
