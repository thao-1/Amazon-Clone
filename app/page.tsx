"use client";

import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, Menu, ChevronDown, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel } from "@/components/ui/carousel"
import { useCart } from "@/lib/cart-context"

export default function Home() {
  const { addToCart, itemCount } = useCart()

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

      <main className="flex-1 bg-gray-100">
        {/* Hero Banner Carousel */}
        <div className="relative">
          <Carousel 
            images={[
              { 
                src: "/images/main/Amazon1.png", 
                alt: "Shop Books",
              },
              { 
                src: "/images/main/Amazon2.png", 
                alt: "Free international returns",
              },
              { 
                src: "/images/main/Amazon3.png", 
                alt: "Kitchen favorites",
              },
              { 
                src: "/images/main/Amazon4.png", 
                alt: "New arrivals in Toys",
              },
              { 
                src: "/images/main/Amazon5.png", 
                alt: "Gifts for Mother's Day",
              },
            ]}
            aspectRatio="21/9"
            className="w-full relative max-w-6xl mx-auto"
            showOverlay={true}
          />
        </div>

        

        {/* Product Categories */}
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Gaming accessories */}
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <h2 className="font-bold text-lg mb-3">Gaming accessories</h2>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="aspect-square relative mb-2">
                      <Image
                        src="/images/main/Amazon6.png"
                        alt="Headsets"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-xs text-center">Headsets</p>
                  </div>
                  <div>
                    <div className="aspect-square relative mb-2">
                      <Image
                        src="/images/main/Amazon7.png"
                        alt="Keyboards"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-xs text-center">Keyboards</p>
                  </div>
                  <div>
                    <div className="aspect-square relative mb-2">
                      <Image
                        src="/images/main/Amazon8.png"
                        alt="Computer mice"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-xs text-center">Computer mice</p>
                  </div>
                  <div>
                    <div className="aspect-square relative mb-2">
                      <Image
                        src="/images/main/Amazon9.png"
                        alt="Chairs"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-xs text-center">Chairs</p>
                  </div>
                </div>
                <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline text-sm block mt-3">
                  See more
                </Link>
              </CardContent>
            </Card>

            {/* Shop deals in Fashion */}
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <h2 className="font-bold text-lg mb-3">Shop deals in Fashion</h2>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="aspect-square relative mb-2">
                      <Image
                        src="/images/main/Amazon10.png"
                        alt="Jeans under $50"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs text-center">Jeans under $50</p>
                  </div>
                  <div>
                    <div className="aspect-square relative mb-2">
                      <Image
                        src="/images/main/Amazon11.png"
                        alt="Tops under $25"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs text-center">Tops under $25</p>
                  </div>
                  <div>
                    <div className="aspect-square relative mb-2">
                      <Image
                        src="/images/main/Amazon12.png"
                        alt="Dresses under $30"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs text-center">Dresses under $30</p>
                  </div>
                  <div>
                    <div className="aspect-square relative mb-2">
                      <Image
                        src="/images/main/Amazon13.png"
                        alt="Shoes under $50"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs text-center">Shoes under $50</p>
                  </div>
                </div>
                <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline text-sm block mt-3">
                  See all deals
                </Link>
              </CardContent>
            </Card>

            {/* Get your game on */}
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <h2 className="font-bold text-lg mb-3">Get your game on</h2>
                <div className="aspect-[4/5] relative mb-3">
                  <Image
                    src="/images/main/Amazon14.png"
                    alt="Gaming PC"
                    fill
                    className="object-contain"
                  />
                </div>
                <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline text-sm block mt-3">
                  Shop gaming
                </Link>
              </CardContent>
            </Card>

            {/* Shop for your home essentials */}
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <h2 className="font-bold text-lg mb-3">Shop for your home essentials</h2>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="aspect-square relative mb-2">
                      <Image
                        src="/images/main/Amazon15.png"
                        alt="Cleaning Tools"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-xs text-center">Cleaning Tools</p>
                  </div>
                  <div>
                    <div className="aspect-square relative mb-2">
                      <Image
                        src="/images/main/Amazon16.png"
                        alt="Home Storage"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-xs text-center">Home Storage</p>
                  </div>
                  <div>
                    <div className="aspect-square relative mb-2">
                      <Image
                        src="/images/main/Amazon17.png"
                        alt="Home Decor"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-xs text-center">Home Decor</p>
                  </div>
                  <div>
                    <div className="aspect-square relative mb-2">
                      <Image
                        src="/images/main/Amazon18.png"
                        alt="Bedding"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-xs text-center">Bedding</p>
                  </div>
                </div>
                <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline text-sm block mt-3">
                  Discover more in Home
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Featured Products */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Today's Deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {recommendations.map((product, index) => (
              <RecommendationCard key={index} product={product} />
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

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="aspect-square relative mb-2">
          <Image
            src={product.image || "/images/main/Amazon19.png"}
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
        <Button className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-black" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}

const RecommendationCard = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div className="bg-white p-2 rounded-md">
      <div className="aspect-square relative mb-2">
        <Image src={product.image || "/images/main/Amazon20.png"} alt={product.name} fill className="object-contain" />
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
      <Button className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-black" onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
    </div>
  )
}

const products = [
  {
    name: "Wireless Noise Cancelling Headphones with 30-Hour Battery Life",
    price: 149.99,
    originalPrice: 249.99,
    discount: 40,
    rating: 4,
    reviews: 2345,
    image: "/images/main/Amazon22.png",
  },
  {
    name: "Smart Watch with Heart Rate Monitor and GPS",
    price: 199.99,
    originalPrice: 299.99,
    discount: 33,
    rating: 5,
    reviews: 1876,
    image: "/images/main/Amazon23.png",
  },
  {
    name: "Robot Vacuum Cleaner with Mapping Technology",
    price: 299.99,
    originalPrice: 499.99,
    discount: 40,
    rating: 4,
    reviews: 987,
    image: "/images/main/Amazon24.png",
  },
  {
    name: "4K Ultra HD Smart LED TV, 55 Inch",
    price: 429.99,
    originalPrice: 599.99,
    discount: 28,
    rating: 4,
    reviews: 3421,
    image: "/images/main/Amazon25.png",
  },
  {
    name: "Portable Bluetooth Speaker with 24-Hour Playtime",
    price: 79.99,
    originalPrice: 129.99,
    discount: 38,
    rating: 5,
    reviews: 2109,
    image: "/images/main/Amazon26.png",
  },
]

const recommendations = [
  {
    name: "Wireless Earbuds with Charging Case",
    price: 59.99,
    rating: 4,
    reviews: 1234,
    image: "/images/main/Amazon27.png",
  },
  {
    name: "Stainless Steel Water Bottle, 24oz",
    price: 24.99,
    rating: 5,
    reviews: 876,
    image: "/images/main/Amazon28.png",
  },
  {
    name: "Ergonomic Office Chair with Lumbar Support",
    price: 149.99,
    rating: 4,
    reviews: 543,
    image: "/images/main/Amazon29.png",
  },
  {
    name: "Wireless Charging Pad for iPhone and Android",
    price: 29.99,
    rating: 4,
    reviews: 987,
    image: "/images/main/Amazon30.png",
  },
  {
    name: "Smart Home Security Camera with Night Vision",
    price: 89.99,
    rating: 4,
    reviews: 432,
    image: "/images/main/Amazon31.png",
  },
  {
    name: "Non-Stick Cookware Set, 10-Piece",
    price: 119.99,
    rating: 5,
    reviews: 765,
    image: "/images/main/Amazon32.png",
  },
]
