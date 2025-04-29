import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RegistryPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white p-4 border-b">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Registry & Gifting</h1>
          <div className="flex items-center text-sm mt-2">
            <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-400" />
            <span>Registry</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4">
        {/* Hero Section */}
        <section className="relative mb-8">
          <div className="w-full h-[200px] md:h-[300px] relative overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=600&width=1600"
              alt="Registry Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-6 md:p-10">
              <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">Create or find a registry</h2>
              <p className="text-white mb-6 max-w-md">Celebrate life's special moments with Amazon Registry</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-[#FFD814] hover:bg-[#F7CA00] text-black">Create a registry</Button>
                <Button variant="outline" className="bg-white text-black hover:bg-gray-100">
                  Find a registry
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Registry Types */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Registry Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {registryTypes.map((type, index) => (
              <Card key={index} className="bg-white overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image src={type.image || "/placeholder.svg"} alt={type.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{type.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{type.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black">Create {type.name}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Find a Registry */}
        <section className="bg-white p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Find a Registry</h2>
          <Tabs defaultValue="name" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="name">Search by Name</TabsTrigger>
              <TabsTrigger value="email">Search by Email</TabsTrigger>
              <TabsTrigger value="id">Search by Registry ID</TabsTrigger>
            </TabsList>
            <TabsContent value="name" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium mb-1">
                    First Name
                  </label>
                  <Input id="first-name" placeholder="First name" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium mb-1">
                    Last Name
                  </label>
                  <Input id="last-name" placeholder="Last name" />
                </div>
              </div>
              <div>
                <label htmlFor="registry-type" className="block text-sm font-medium mb-1">
                  Registry Type (Optional)
                </label>
                <select id="registry-type" className="w-full p-2 border rounded-md">
                  <option value="">All Registry Types</option>
                  <option value="wedding">Wedding</option>
                  <option value="baby">Baby</option>
                  <option value="birthday">Birthday</option>
                </select>
              </div>
              <Button className="w-full md:w-auto">Search</Button>
            </TabsContent>
            <TabsContent value="email" className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Email address" />
              </div>
              <Button className="w-full md:w-auto">Search</Button>
            </TabsContent>
            <TabsContent value="id" className="space-y-4">
              <div>
                <label htmlFor="registry-id" className="block text-sm font-medium mb-1">
                  Registry ID
                </label>
                <Input id="registry-id" placeholder="Registry ID" />
              </div>
              <Button className="w-full md:w-auto">Search</Button>
            </TabsContent>
          </Tabs>
        </section>

        {/* Registry Benefits */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Registry Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Registry Items */}
        <section>
          <h2 className="text-xl font-bold mb-4">Featured Registry Items</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {featuredItems.map((item, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-4">
                  <div className="aspect-square relative mb-2">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-contain" />
                  </div>
                  <h3 className="text-sm font-medium line-clamp-2">{item.name}</h3>
                  <div className="text-sm font-bold mt-1">${item.price.toFixed(2)}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

// Sample data
const registryTypes = [
  {
    name: "Wedding Registry",
    description: "Create a wedding registry to share with friends and family for your special day.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Baby Registry",
    description: "Prepare for your little one with a baby registry that includes everything you need.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Birthday Registry",
    description: "Celebrate your birthday with a registry of gifts you'll love.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const benefits = [
  {
    title: "Completion Discount",
    description: "Save up to 20% on remaining items in your registry after your event date.",
  },
  {
    title: "Free Returns",
    description: "Return eligible items from your registry for free within 365 days.",
  },
  {
    title: "Universal Registry",
    description: "Add items from any website to your Amazon registry with our browser extension.",
  },
]

const featuredItems = [
  {
    name: "KitchenAid Stand Mixer, 5-Quart",
    price: 279.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Ninja Air Fryer, 4-Quart",
    price: 99.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dyson V11 Cordless Vacuum Cleaner",
    price: 499.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "iRobot Roomba Robot Vacuum",
    price: 299.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Cuisinart 12-Piece Stainless Steel Cookware Set",
    price: 199.99,
    image: "/placeholder.svg?height=200&width=200",
  },
]
