import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SellPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white p-4 border-b">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Sell on Amazon</h1>
          <div className="flex items-center text-sm mt-2">
            <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-400" />
            <span>Sell</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4">
        {/* Hero Section */}
        <section className="relative mb-8">
          <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Sell on Amazon"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6 md:p-10">
              <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">Start selling on Amazon</h2>
              <p className="text-white mb-6 max-w-md text-lg">
                Reach millions of customers and grow your business with Amazon.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-[#FFD814] hover:bg-[#F7CA00] text-black text-lg h-12">Sign up now</Button>
                <Button variant="outline" className="bg-white text-black hover:bg-gray-100 text-lg h-12">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Selling Plans */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Choose your selling plan</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {sellingPlans.map((plan, index) => (
              <Card key={index} className={`bg-white ${plan.recommended ? "border-orange-400 border-2" : ""}`}>
                {plan.recommended && (
                  <div className="bg-orange-400 text-white text-center py-1 text-sm font-medium">Recommended</div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-2xl font-bold mt-2">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-[#FFD814] hover:bg-[#F7CA00] text-black">Sign up now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">How selling on Amazon works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((step, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-[#232f3e] text-white flex items-center justify-center text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Seller Tools */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Tools to help you succeed</h2>
          <Tabs defaultValue="fulfillment" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="fulfillment">Fulfillment by Amazon</TabsTrigger>
              <TabsTrigger value="brand">Brand Building</TabsTrigger>
              <TabsTrigger value="advertising">Advertising</TabsTrigger>
            </TabsList>

            <TabsContent value="fulfillment">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-bold mb-4">Fulfillment by Amazon (FBA)</h3>
                  <p className="text-gray-600 mb-4">
                    Let Amazon handle storage, packing, and shipping to customers. With FBA, your products become
                    eligible for Amazon Prime, and we handle customer service and returns for those orders.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Amazon handles storage, packing, and shipping</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Your products become eligible for Amazon Prime</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Amazon handles customer service and returns</span>
                    </li>
                  </ul>
                  <Button className="bg-[#FFD814] hover:bg-[#F7CA00] text-black">Learn more about FBA</Button>
                </div>
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Fulfillment by Amazon"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="brand">
              <div className="bg-white p-8 text-center rounded-md">
                <p>Brand building tools will appear here.</p>
              </div>
            </TabsContent>

            <TabsContent value="advertising">
              <div className="bg-white p-8 text-center rounded-md">
                <p>Advertising tools will appear here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Success Stories */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Success stories from Amazon sellers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative mb-4 mx-auto">
                    <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center">{story.name}</h3>
                  <p className="text-sm text-gray-500 text-center mb-4">{story.business}</p>
                  <p className="text-sm text-gray-600 italic">"{story.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="pb-4 border-b border-gray-200 last:border-0">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <Button className="mt-6 bg-[#FFD814] hover:bg-[#F7CA00] text-black">See all FAQs</Button>
        </section>
      </main>
    </div>
  )
}

// Sample data
const sellingPlans = [
  {
    name: "Individual",
    price: "$0.99 per item sold",
    description: "For those selling fewer than 40 items per month.",
    features: [
      "Access to millions of customers",
      "Create listings one at a time",
      "Sell in more than 20 categories",
      "Use basic listing and order management tools",
    ],
    recommended: false,
  },
  {
    name: "Professional",
    price: "$39.99 per month",
    description: "For those selling more than 40 items per month.",
    features: [
      "All Individual features",
      "Bulk listing and inventory management tools",
      "Eligibility for top placement on product detail pages",
      "Access to sell in 10+ additional categories",
      "Ability to set shipping rates",
      "API integration capabilities",
    ],
    recommended: true,
  },
]

const howItWorks = [
  {
    title: "Register and list",
    description:
      "Create an Amazon seller account and list your products. You can list items one at a time or use bulk tools for large inventories.",
  },
  {
    title: "Sell and fulfill",
    description:
      "When customers buy your products, you can ship the items yourself or use Fulfillment by Amazon (FBA) to handle shipping, returns, and customer service.",
  },
  {
    title: "Grow your business",
    description:
      "Use Amazon's tools and programs to help grow your business, including advertising, promotions, and business reports.",
  },
]

const successStories = [
  {
    name: "Sarah Johnson",
    business: "Eco-Friendly Home Products",
    quote:
      "Amazon has allowed me to reach customers I never would have found otherwise. My business has grown 300% since I started selling on Amazon.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Michael Chen",
    business: "Tech Accessories",
    quote:
      "Using FBA has been a game-changer for my business. I can focus on product development while Amazon handles the logistics.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Lisa Rodriguez",
    business: "Handmade Jewelry",
    quote:
      "As a small business owner, Amazon has given me the platform to compete with larger brands and reach customers worldwide.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const faqs = [
  {
    question: "How much does it cost to sell on Amazon?",
    answer:
      "Amazon offers two selling plans. The Professional plan is $39.99 per month plus per-item selling fees, which vary by category. The Individual plan has no monthly fee, but you pay $0.99 per item sold plus selling fees.",
  },
  {
    question: "What can I sell on Amazon?",
    answer:
      "You can sell products in more than 20 categories, with some categories requiring approval. Prohibited items include certain electronics, alcohol, tobacco products, and weapons.",
  },
  {
    question: "How do I fulfill orders?",
    answer:
      "You can ship products yourself (self-fulfillment) or use Fulfillment by Amazon (FBA). With FBA, you send your inventory to Amazon's fulfillment centers, and we handle storage, packing, shipping, customer service, and returns.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Amazon deposits payments directly into your bank account on a regular schedule (typically every two weeks). You can view your payment history and upcoming payments in Seller Central.",
  },
]
