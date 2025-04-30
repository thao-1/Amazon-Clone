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
      <div className="w-full bg-pink-100 py-12">
        <div className="container mx-auto px-4">
          <Carousel
            images={[
              { 
                src: "/images/gift-cards/GiftCard1.png",
              },
              { 
                src: "/images/gift-cards/GiftCard2.png", 
              },
              { 
                src: "/images/gift-cards/GiftCard3.png", 
              },
              { 
                src: "/images/gift-cards/GiftCard4.png", 
                
              },
              { 
                src: "/images/gift-cards/GiftCard5.png", 
                
              },
              { 
                src: "/images/gift-cards/GiftCard6.png", 
                
              },
            ]}
            aspectRatio="16/9"
            className="relative h-80 md:h-[500px] rounded-lg overflow-hidden max-w-7xl mx-auto"
            objectFit="contain"
            showOverlay={false}
          />
        </div>
      </div>
      
      <main className="container mx-auto py-12 px-4">  
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
                    src="/images/gift-cards/GiftCard7.png"
                    alt="Heart Pattern Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/images/gift-cards/GiftCard8.png"
                    alt="Floral Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/images/gift-cards/GiftCard9.png"
                    alt="Amazon Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/images/gift-cards/GiftCard10.png"
                    alt="Birthday Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-2">eGift Cards</h2>
            <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline text-sm">
              Shop now
            </Link>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/images/gift-cards/GiftCard11.png"
                    alt="Email Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/images/gift-cards/GiftCard12.png"
                    alt="Print at Home Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/images/gift-cards/GiftCard13.png"
                    alt="Text Message Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/images/gift-cards/GiftCard14.png"
                    alt="Animated Gift Card"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gift Cards by Occasion */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Gift Cards by Occasion</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/images/gift-cards/GiftCard15.png"
                    alt="Birthday Gift Cards"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-medium text-center">Birthday</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/images/gift-cards/GiftCard16.png"
                    alt="Thank You Gift Cards"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-medium text-center">Thank You</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/images/gift-cards/GiftCard17.png"
                    alt="Congratulations Gift Cards"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-medium text-center">Congratulations</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="aspect-square relative mb-2">
                  <Image
                    src="/images/gift-cards/GiftCard18.png"
                    alt="Wedding Gift Cards"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-medium text-center">Wedding</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
