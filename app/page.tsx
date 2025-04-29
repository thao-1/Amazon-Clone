import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, Menu, ChevronDown, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-[#131921] text-white">
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
                  <Badge className="absolute -top-2 -right-2 bg-orange-400 text-white">0</Badge>
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

        {/* Secondary Nav */}
        <div className="bg-[#232f3e] py-1">
          <div className="container mx-auto flex items-center overflow-x-auto">
            <Button variant="ghost" className="text-white text-sm flex items-center">
              <Menu className="h-4 w-4 mr-1" />
              <span>All</span>
            </Button>
            <Button variant="ghost" className="text-white text-sm">
              Today's Deals
            </Button>
            <Button variant="ghost" className="text-white text-sm">
              Customer Service
            </Button>
            <Button variant="ghost" className="text-white text-sm">
              Registry
            </Button>
            <Button variant="ghost" className="text-white text-sm">
              Gift Cards
            </Button>
            <Button variant="ghost" className="text-white text-sm">
              Sell
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gray-100">
        {/* Hero Banner */}
        <div className="relative">
          <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=1600"
              alt="Hero Banner"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100"></div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="container mx-auto px-4 -mt-20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {categories.map((category, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h2 className="font-bold text-lg mb-2">{category.name}</h2>
                  <div className="aspect-square relative mb-2">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <Link href="#" className="text-sm text-blue-600 hover:text-orange-500 hover:underline">
                    Shop now
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">Today's Deals</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.map((product, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-square relative mb-2">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="mb-1">
                    <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
                      Up to {product.discount}% off
                    </Badge>
                  </div>
                  <div className="flex items-center mb-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < product.rating ? "fill-current" : ""}`} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                  <h3 className="text-sm line-clamp-2 h-10">{product.name}</h3>
                  <div className="flex items-baseline mt-1">
                    <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <Button className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-black">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {recommendations.map((product, index) => (
              <div key={index} className="bg-white p-2 rounded-md">
                <div className="aspect-square relative mb-2">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                </div>
                <h3 className="text-xs line-clamp-2 h-8">{product.name}</h3>
                <div className="flex items-center mb-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-3 w-3 ${i < product.rating ? "fill-current" : ""}`} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                </div>
                <div className="text-sm font-bold">${product.price.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#131921] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-bold mb-2">Get to Know Us</h3>
              <ul className="text-sm space-y-1 text-gray-300">
                <li>
                  <Link href="#" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    About Amazon
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Investor Relations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Amazon Devices
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Make Money with Us</h3>
              <ul className="text-sm space-y-1 text-gray-300">
                <li>
                  <Link href="#" className="hover:underline">
                    Sell products on Amazon
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Sell on Amazon Business
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Sell apps on Amazon
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Become an Affiliate
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Amazon Payment Products</h3>
              <ul className="text-sm space-y-1 text-gray-300">
                <li>
                  <Link href="#" className="hover:underline">
                    Amazon Business Card
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Shop with Points
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Reload Your Balance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Amazon Currency Converter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Let Us Help You</h3>
              <ul className="text-sm space-y-1 text-gray-300">
                <li>
                  <Link href="#" className="hover:underline">
                    Amazon and COVID-19
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Your Account
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Your Orders
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Shipping Rates & Policies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Returns & Replacements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-700 text-center">
            <Link href="/" className="flex items-center justify-center">
              <span className="text-2xl font-bold">amazon</span>
              <span className="text-orange-400 text-2xl">.clone</span>
            </Link>
            <p className="text-sm text-gray-400 mt-2">
              &copy; {new Date().getFullYear()} Amazon Clone. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample data
const categories = [
  {
    name: "Electronics",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Home & Kitchen",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Fashion",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Books",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const products = [
  {
    name: "Wireless Noise Cancelling Headphones with 30-Hour Battery Life",
    price: 149.99,
    originalPrice: 249.99,
    discount: 40,
    rating: 4,
    reviews: 2345,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Smart Watch with Heart Rate Monitor and GPS",
    price: 199.99,
    originalPrice: 299.99,
    discount: 33,
    rating: 5,
    reviews: 1876,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Robot Vacuum Cleaner with Mapping Technology",
    price: 299.99,
    originalPrice: 499.99,
    discount: 40,
    rating: 4,
    reviews: 987,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "4K Ultra HD Smart LED TV, 55 Inch",
    price: 429.99,
    originalPrice: 599.99,
    discount: 28,
    rating: 4,
    reviews: 3421,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Portable Bluetooth Speaker with 24-Hour Playtime",
    price: 79.99,
    originalPrice: 129.99,
    discount: 38,
    rating: 5,
    reviews: 2109,
    image: "/placeholder.svg?height=300&width=300",
  },
]

const recommendations = [
  {
    name: "Wireless Earbuds with Charging Case",
    price: 59.99,
    rating: 4,
    reviews: 1234,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Stainless Steel Water Bottle, 24oz",
    price: 24.99,
    rating: 5,
    reviews: 876,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Ergonomic Office Chair with Lumbar Support",
    price: 149.99,
    rating: 4,
    reviews: 543,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Wireless Charging Pad for iPhone and Android",
    price: 29.99,
    rating: 4,
    reviews: 987,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Smart Home Security Camera with Night Vision",
    price: 89.99,
    rating: 4,
    reviews: 432,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Non-Stick Cookware Set, 10-Piece",
    price: 119.99,
    rating: 5,
    reviews: 765,
    image: "/placeholder.svg?height=200&width=200",
  },
]
