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
              { 
                src: "/placeholder.svg?text=Mother's+Day+Gift+Cards&bg=pink", 
                alt: "Shop Mother's Day gift cards",
                title: "Gifts for Mother's Day",
                subtitle: ""
              },
              { 
                src: "/placeholder.svg?text=Birthday+Gift+Cards&bg=blue", 
                alt: "Birthday Gift Cards",
                title: "Birthday Gift Cards",
                subtitle: "for everyone on your list"
              },
              { 
                src: "/placeholder.svg?text=Graduation+Gift+Cards&bg=yellow", 
                alt: "Graduation Gift Cards",
                title: "Graduation Gift Cards",
                subtitle: "celebrate their achievement"
              },
              { 
                src: "/placeholder.svg?text=Thank+You+Gift+Cards&bg=green", 
                alt: "Thank You Gift Cards",
                title: "Thank You Gift Cards",
                subtitle: "show your appreciation"
              },
              { 
                src: "/placeholder.svg?text=Wedding+Gift+Cards&bg=lavender", 
                alt: "Wedding Gift Cards",
                title: "Wedding Gift Cards",
                subtitle: "perfect for the happy couple"
              },
              { 
                src: "/placeholder.svg?text=Holiday+Gift+Cards&bg=red", 
                alt: "Holiday Gift Cards",
                title: "Holiday Gift Cards",
                subtitle: "spread some cheer"
              },
            ]}
            aspectRatio="21/9"
            className="relative h-48 md:h-64 rounded-lg overflow-hidden"
            showOverlay={true}
          />
        </div>
      </div>

      <main className="container mx-auto py-12 px-4">
        {/* Amazon Canada Notice */}
        <div className="bg-white border-b border-t py-2 px-4 text-center text-sm mb-8">
          You are on amazon.com. You can also shop on Amazon Canada for millions of products with fast local delivery. 
          <Link href="https://amazon.ca" className="text-[#007185] hover:text-orange-500 hover:underline ml-1">
            Click here to go to amazon.ca
          </Link>
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
                    src="/placeholder.svg?text=Heart+Pattern"
                    alt="Heart Pattern Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/placeholder.svg?text=Floral"
                    alt="Floral Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/placeholder.svg?text=Amazon"
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
                    src="/placeholder.svg?text=Starbucks"
                    alt="Starbucks Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/placeholder.svg?text=Uber"
                    alt="Uber Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/placeholder.svg?text=Visa"
                    alt="Visa Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/placeholder.svg?text=Ulta"
                    alt="Ulta Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/placeholder.svg?text=Apple"
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
                    src="/placeholder.svg?text=Amazon+Reload"
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
                    src="/placeholder.svg?text=Bulk+Gift+Cards"
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
