import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function CustomerServicePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white p-4 border-b">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Customer Service</h1>
          <div className="flex items-center text-sm mt-2">
            <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-400" />
            <span>Customer Service</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4">
        {/* Search Section */}
        <section className="bg-white p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">What can we help you with?</h2>
          <div className="relative max-w-2xl">
            <Input type="text" placeholder="Search our help library" className="pl-10 h-12" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </section>

        {/* Common Issues */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-4">Some things you can do here</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {commonIssues.map((issue, index) => (
              <Card key={index} className="bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{issue.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {issue.items.map((item, idx) => (
                      <li key={idx}>
                        <Link href="#" className="text-[#007185] hover:text-orange-500 hover:underline text-sm">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Digital Services */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-4">Digital Services and Device Support</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {digitalServices.map((service, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-4">
                  <div className="aspect-square relative mb-3">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{service.name}</h3>
                  <Link href="#" className="text-[#007185] hover:text-orange-500 hover:underline text-sm">
                    Get help
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Options */}
        <section className="bg-white p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm mb-2">We'll connect you with a customer service representative</p>
              <Button className="bg-[#FFD814] hover:bg-[#F7CA00] text-black">Call Customer Service</Button>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Chat with Us</h3>
              <p className="text-sm mb-2">Chat with one of our virtual customer service agents</p>
              <Button className="bg-[#FFD814] hover:bg-[#F7CA00] text-black">Start chatting now</Button>
            </div>
          </div>
        </section>

        {/* Browse Help Topics */}
        <section>
          <h2 className="text-xl font-bold mb-4">Browse Help Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {helpTopics.map((topic, index) => (
              <Link key={index} href="#" className="bg-white p-4 rounded-md hover:shadow-md transition-shadow">
                <h3 className="font-semibold">{topic}</h3>
                <div className="flex items-center text-[#007185] mt-1 text-sm">
                  <span>Learn more</span>
                  <ChevronRight className="h-3 w-3 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

// Sample data
const commonIssues = [
  {
    title: "Where's my stuff?",
    items: ["Track your package", "View or manage your orders", "Report a missing package", "Shipping rates & times"],
  },
  {
    title: "Returns & Refunds",
    items: [
      "Return or replace items",
      "Check return status",
      "Return shipping information",
      "Refund timing and status",
    ],
  },
  {
    title: "Manage Prime",
    items: [
      "Learn about Prime benefits",
      "Cancel Prime membership",
      "Request a Prime refund",
      "Update payment information",
    ],
  },
]

const digitalServices = [
  {
    name: "Prime Video",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Kindle E-readers",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Amazon Music",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Fire Tablets",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const helpTopics = [
  "Shipping & Delivery",
  "Amazon Prime",
  "Returns & Refunds",
  "Payment, Pricing & Promotions",
  "Gift Cards",
  "Account Settings",
  "Digital Services & Device Support",
  "Accessibility",
  "Security & Privacy",
]
