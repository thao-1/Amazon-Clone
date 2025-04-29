import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel } from "@/components/ui/carousel"

export default function GiftCardsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="w-full bg-pink-100 py-8">
        <div className="container mx-auto px-4">
          <Carousel
            images={[
              { src: "/placeholder.svg?text=Mother's+Day+Gift+Cards", alt: "Shop Mother's Day gift cards" },
              { src: "/placeholder.svg?text=Birthday+Gift+Cards", alt: "Birthday Gift Cards" },
              { src: "/placeholder.svg?text=Graduation+Gift+Cards", alt: "Graduation Gift Cards" },
              { src: "/placeholder.svg?text=Thank+You+Gift+Cards", alt: "Thank You Gift Cards" },
              { src: "/placeholder.svg?text=Wedding+Gift+Cards", alt: "Wedding Gift Cards" },
              { src: "/placeholder.svg?text=Holiday+Gift+Cards", alt: "Holiday Gift Cards" },
            ]}
            aspectRatio="21/9"
            className="relative h-48 md:h-64 rounded-lg overflow-hidden"
          />
        </div>
      </div>

      <main className="container mx-auto py-12 px-4">
        {/* Pagination Dots - No longer needed as the carousel has its own dots */}
        
        {/* Amazon Gift Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-2">Amazon Gift Cards</h2>
            <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline text-sm">
              Shop now
            </Link>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/placeholder.svg"
                    alt="Heart Pattern Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/placeholder.svg"
                    alt="Floral Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/placeholder.svg"
                    alt="Amazon Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Specialty Gift Cards</h2>
            <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline text-sm">
              Shop now
            </Link>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/placeholder.svg"
                    alt="Starbucks Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/placeholder.svg"
                    alt="Uber Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/placeholder.svg"
                    alt="Visa Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/placeholder.svg"
                    alt="Ulta Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/placeholder.svg"
                    alt="Apple Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Amazon Reload and Bulk Gift Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden border-0 shadow-sm">
            <CardContent className="p-0">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Amazon Reload</h2>
                <p className="text-sm mb-4">Add funds directly to your Amazon Gift Card balance</p>
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg"
                    alt="Amazon Reload"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-0 shadow-sm">
            <CardContent className="p-0">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Amazon Gift Cards in Bulk</h2>
                <p className="text-sm mb-4">Order more than $10,000 at once or integrate with Amazon Gift Cards API</p>
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg"
                    alt="Amazon Gift Cards in Bulk"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
