import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GiftCardsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white p-4 border-b">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Gift Cards</h1>
          <div className="flex items-center text-sm mt-2">
            <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-400" />
            <span>Gift Cards</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4">
        {/* Hero Section */}
        <section className="relative mb-8">
          <div className="w-full h-[200px] md:h-[300px] relative overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=600&width=1600"
              alt="Gift Cards Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-6 md:p-10">
              <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">Amazon Gift Cards</h2>
              <p className="text-white mb-6 max-w-md">For any occasion, delivered your way</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-[#FFD814] hover:bg-[#F7CA00] text-black">Shop Gift Cards</Button>
                <Button variant="outline" className="bg-white text-black hover:bg-gray-100">
                  Redeem a Gift Card
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Gift Card Types */}
        <section className="mb-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="all">All Gift Cards</TabsTrigger>
              <TabsTrigger value="egift">eGift</TabsTrigger>
              <TabsTrigger value="physical">Physical Gift Cards</TabsTrigger>
              <TabsTrigger value="specialty">Specialty Gift Cards</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {giftCardTypes.map((card, index) => (
                  <Card key={index} className="bg-white overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image src={card.image || "/placeholder.svg"} alt={card.name} fill className="object-cover" />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{card.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{card.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black">Shop Now</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="egift">
              <div className="bg-white p-8 text-center rounded-md">
                <p>eGift cards will appear here.</p>
              </div>
            </TabsContent>

            <TabsContent value="physical">
              <div className="bg-white p-8 text-center rounded-md">
                <p>Physical gift cards will appear here.</p>
              </div>
            </TabsContent>

            <TabsContent value="specialty">
              <div className="bg-white p-8 text-center rounded-md">
                <p>Specialty gift cards will appear here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Featured Occasions */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Shop by Occasion</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {occasions.map((occasion, index) => (
              <Link
                key={index}
                href="#"
                className="bg-white rounded-md overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-square relative">
                  <Image src={occasion.image || "/placeholder.svg"} alt={occasion.name} fill className="object-cover" />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium">{occasion.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Gift Card Balance */}
        <section className="bg-white p-6 rounded-lg mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold mb-4">Check Gift Card Balance</h2>
              <p className="text-sm text-gray-600 mb-4">
                Enter the claim code to check the available balance on your gift card.
              </p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="claim-code" className="block text-sm font-medium mb-1">
                    Claim Code
                  </label>
                  <input id="claim-code" placeholder="Enter claim code" className="w-full p-2 border rounded-md" />
                </div>
                <Button className="bg-[#FFD814] hover:bg-[#F7CA00] text-black">Check Balance</Button>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Redeem a Gift Card</h2>
              <p className="text-sm text-gray-600 mb-4">
                Enter the claim code to add the gift card balance to your account.
              </p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="redeem-code" className="block text-sm font-medium mb-1">
                    Claim Code
                  </label>
                  <input id="redeem-code" placeholder="Enter claim code" className="w-full p-2 border rounded-md" />
                </div>
                <Button className="bg-[#FFD814] hover:bg-[#F7CA00] text-black">Redeem Gift Card</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Gift Cards */}
        <section className="bg-white p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-xl font-bold mb-2">Amazon Business Gift Cards</h2>
              <p className="text-sm text-gray-600 mb-4">
                Perfect for employee rewards, customer appreciation, and business gifts. Bulk discounts available.
              </p>
              <Button className="bg-[#FFD814] hover:bg-[#F7CA00] text-black">Learn More</Button>
            </div>
            <div className="aspect-[4/3] relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Business Gift Cards"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// Sample data
const giftCardTypes = [
  {
    name: "eGift Cards",
    description: "Send instantly via email, text, or messaging platform.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Print-at-Home",
    description: "Print and give in person for a personal touch.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Mail with Greeting Card",
    description: "Send a physical gift card with a custom greeting.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Specialty Gift Cards",
    description: "Gift cards for popular brands and services.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const occasions = [
  {
    name: "Birthday",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Thank You",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Congratulations",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Wedding",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Graduation",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Holiday",
    image: "/placeholder.svg?height=200&width=200",
  },
]
