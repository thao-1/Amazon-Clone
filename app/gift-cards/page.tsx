import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function GiftCardsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="w-full bg-pink-100 py-8">
        <div className="container mx-auto px-4">
          <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="Shop Mother's Day gift cards"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Shop Mother's Day<br />gift cards
              </h1>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto py-12 px-4">
        {/* Pagination Dots */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-gray-800' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

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
