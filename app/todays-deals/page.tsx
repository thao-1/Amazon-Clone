import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

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
                  <input type="radio" id="all" name="department" className="mr-2" checked />
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
              {/* Product 1 */}
              <Card className="overflow-hidden">
                <CardContent className="p-3">
                  <div className="aspect-square relative mb-3">
                    <Image
                      src="/placeholder.svg"
                      alt="ASUS TUF Gaming Laptop"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <Badge className="bg-red-600 text-white mb-2">25% off</Badge>
                  <p className="text-xs text-gray-500 mb-1">Limited time deal</p>
                  <h3 className="text-sm font-medium line-clamp-2">ASUS TUF Gaming A16 (2024) Gaming Laptop, 16"</h3>
                  <div className="flex items-center mt-1 mb-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < 4 ? "fill-current" : ""}`} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(1,234)</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-lg font-bold">$899.99</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$1,199.99</span>
                  </div>
                </CardContent>
              </Card>

              {/* Product 2 */}
              <Card className="overflow-hidden">
                <CardContent className="p-3">
                  <div className="aspect-square relative mb-3">
                    <Image
                      src="/placeholder.svg"
                      alt="ASUS ROG Strix G16 Gaming Laptop"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <Badge className="bg-red-600 text-white mb-2">14% off</Badge>
                  <p className="text-xs text-gray-500 mb-1">Limited time deal</p>
                  <h3 className="text-sm font-medium line-clamp-2">ASUS ROG Strix G16 Gaming Laptop, 16" 165Hz Display</h3>
                  <div className="flex items-center mt-1 mb-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < 4 ? "fill-current" : ""}`} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(567)</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-lg font-bold">$1,299.99</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$1,499.99</span>
                  </div>
                </CardContent>
              </Card>

              {/* Product 3 */}
              <Card className="overflow-hidden">
                <CardContent className="p-3">
                  <div className="aspect-square relative mb-3">
                    <Image
                      src="/placeholder.svg"
                      alt="LEVOIT Air Purifier"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <Badge className="bg-red-600 text-white mb-2">30% off</Badge>
                  <p className="text-xs text-gray-500 mb-1">Limited time deal</p>
                  <h3 className="text-sm font-medium line-clamp-2">LEVOIT Air Purifier for Home Allergies Pets Hair</h3>
                  <div className="flex items-center mt-1 mb-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < 5 ? "fill-current" : ""}`} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(4,321)</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-lg font-bold">$69.99</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$99.99</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
