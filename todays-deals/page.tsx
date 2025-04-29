import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Filter, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function TodaysDealsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white p-4 border-b">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Today's Deals</h1>
          <div className="flex items-center text-sm mt-2">
            <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-400" />
            <span>Today's Deals</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <aside className="bg-white p-4 rounded-md h-fit">
            <h2 className="font-bold text-lg mb-4">Filter Deals</h2>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Deal Type</h3>
              <div className="space-y-2">
                {dealTypes.map((type, index) => (
                  <div key={index} className="flex items-center">
                    <Checkbox id={`deal-type-${index}`} />
                    <Label htmlFor={`deal-type-${index}`} className="ml-2 text-sm">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-4" />

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Department</h3>
              <div className="space-y-2">
                {departments.map((dept, index) => (
                  <div key={index} className="flex items-center">
                    <Checkbox id={`dept-${index}`} />
                    <Label htmlFor={`dept-${index}`} className="ml-2 text-sm">
                      {dept}
                    </Label>
                  </div>
                ))}
              </div>
              <Button variant="link" className="text-[#007185] p-0 h-auto mt-1 text-sm">
                See more
              </Button>
            </div>

            <Separator className="my-4" />

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Discount</h3>
              <div className="space-y-2">
                {discounts.map((discount, index) => (
                  <div key={index} className="flex items-center">
                    <Checkbox id={`discount-${index}`} />
                    <Label htmlFor={`discount-${index}`} className="ml-2 text-sm">
                      {discount}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-4" />

            <div>
              <h3 className="font-semibold mb-2">Customer Review</h3>
              <div className="space-y-2">
                {[4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center">
                    <Checkbox id={`rating-${rating}`} />
                    <Label htmlFor={`rating-${rating}`} className="ml-2 flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-3 w-3 ${i < rating ? "fill-current" : ""}`} />
                        ))}
                      </div>
                      <span className="text-sm ml-1">& Up</span>
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Deals Content */}
          <div className="md:col-span-3">
            {/* Tabs */}
            <Tabs defaultValue="all-deals" className="mb-6">
              <TabsList className="bg-white w-full justify-start rounded-md p-1 h-auto">
                <TabsTrigger value="all-deals" className="text-sm py-2">
                  All Deals
                </TabsTrigger>
                <TabsTrigger value="available" className="text-sm py-2">
                  Available
                </TabsTrigger>
                <TabsTrigger value="upcoming" className="text-sm py-2">
                  Upcoming
                </TabsTrigger>
                <TabsTrigger value="watchlist" className="text-sm py-2">
                  Watchlist
                </TabsTrigger>
              </TabsList>

              <div className="flex justify-between items-center mt-4 bg-white p-3 rounded-md">
                <div className="text-sm">
                  <span className="font-semibold">1-24</span> of over <span className="font-semibold">1,000</span>{" "}
                  results for <span className="font-semibold">Today's Deals</span>
                </div>
                <Button variant="outline" size="sm" className="text-sm gap-1">
                  <Filter className="h-4 w-4" />
                  Sort by: Featured
                </Button>
              </div>

              <TabsContent value="all-deals" className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {dealProducts.map((product, index) => (
                    <Card key={index} className="bg-white overflow-hidden">
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
                          {product.isPrime && (
                            <Badge variant="outline" className="ml-1 bg-blue-100 text-blue-800 border-blue-200">
                              Prime
                            </Badge>
                          )}
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
                        <div className="text-xs text-gray-500 mt-1">Deal ends in {product.timeLeft}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="available" className="mt-4">
                <div className="bg-white p-8 text-center rounded-md">
                  <p>Available deals will appear here.</p>
                </div>
              </TabsContent>

              <TabsContent value="upcoming" className="mt-4">
                <div className="bg-white p-8 text-center rounded-md">
                  <p>Upcoming deals will appear here.</p>
                </div>
              </TabsContent>

              <TabsContent value="watchlist" className="mt-4">
                <div className="bg-white p-8 text-center rounded-md">
                  <p>Your watchlist is empty. Add deals to your watchlist to track them here.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

// Sample data
const dealTypes = ["Deal of the Day", "Lightning Deal", "Best Deal", "Prime Exclusive Deal"]

const departments = [
  "Electronics",
  "Home & Kitchen",
  "Computers & Accessories",
  "Beauty & Personal Care",
  "Toys & Games",
]

const discounts = ["10% off or more", "25% off or more", "50% off or more", "70% off or more"]

const dealProducts = [
  {
    name: "Wireless Noise Cancelling Headphones with 30-Hour Battery Life",
    price: 149.99,
    originalPrice: 249.99,
    discount: 40,
    rating: 4,
    reviews: 2345,
    image: "/placeholder.svg?height=300&width=300",
    isPrime: true,
    timeLeft: "12h 45m",
  },
  {
    name: "Smart Watch with Heart Rate Monitor and GPS",
    price: 199.99,
    originalPrice: 299.99,
    discount: 33,
    rating: 5,
    reviews: 1876,
    image: "/placeholder.svg?height=300&width=300",
    isPrime: true,
    timeLeft: "8h 20m",
  },
  {
    name: "Robot Vacuum Cleaner with Mapping Technology",
    price: 299.99,
    originalPrice: 499.99,
    discount: 40,
    rating: 4,
    reviews: 987,
    image: "/placeholder.svg?height=300&width=300",
    isPrime: false,
    timeLeft: "3d 5h",
  },
  {
    name: "4K Ultra HD Smart LED TV, 55 Inch",
    price: 429.99,
    originalPrice: 599.99,
    discount: 28,
    rating: 4,
    reviews: 3421,
    image: "/placeholder.svg?height=300&width=300",
    isPrime: true,
    timeLeft: "1d 12h",
  },
  {
    name: "Portable Bluetooth Speaker with 24-Hour Playtime",
    price: 79.99,
    originalPrice: 129.99,
    discount: 38,
    rating: 5,
    reviews: 2109,
    image: "/placeholder.svg?height=300&width=300",
    isPrime: true,
    timeLeft: "6h 15m",
  },
  {
    name: "Ergonomic Office Chair with Lumbar Support",
    price: 149.99,
    originalPrice: 249.99,
    discount: 40,
    rating: 4,
    reviews: 1543,
    image: "/placeholder.svg?height=300&width=300",
    isPrime: false,
    timeLeft: "2d 8h",
  },
]
