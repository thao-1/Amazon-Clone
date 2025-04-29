import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function RegistryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white p-4 border-b">
        <div className="container mx-auto">
          <div className="flex items-center space-x-4 text-sm">
            <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline">
              registry & gifting
            </Link>
            <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline">
              Find a registry or gift list
            </Link>
            <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline">
              Create a registry or gift list
            </Link>
            <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline">
              Help
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <h2 className="text-xl font-bold mb-2">Gifts for life's biggest moments</h2>
                <p className="text-sm mb-4">For weddings, babies, birthdays, or any life event, registries and gift lists make the perfect gift.</p>
                <Link href="/">
                  <Button className="bg-[#FFD814] hover:bg-[#F7CA00] text-black rounded-full w-full">
                    Find a registry
                  </Button>
                </Link>
                <Link href="/">
                  <Button className="bg-[#FFD814] hover:bg-[#F7CA00] text-black rounded-full w-full mt-2">
                    Create
                  </Button>
                </Link>
              </div>
              
              <div className="md:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Baby Registry */}
                  <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] relative">
                        <Image 
                          src="/placeholder.svg" 
                          alt="Baby Registry" 
                          fill 
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold mb-1">Baby Registry</h3>
                        <p className="text-sm">Get help preparing for your new arrival.</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Wedding Registry */}
                  <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] relative">
                        <Image 
                          src="/placeholder.svg" 
                          alt="Wedding Registry" 
                          fill 
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold mb-1">Wedding Registry</h3>
                        <p className="text-sm">Register for gifts to start your new chapter.</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Gift List */}
                  <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] relative">
                        <Image 
                          src="/placeholder.svg" 
                          alt="Gift List" 
                          fill 
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold mb-1">Gift List</h3>
                        <p className="text-sm">Share gift ideas or needs for birthdays, holidays, graduations, new homes, and more.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">Reasons to register with Amazon</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Reason 1 */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                    <Image src="/placeholder.svg" alt="Selection" width={32} height={32} />
                  </div>
                </div>
                <h3 className="font-bold text-center mb-2">Earth's biggest selection</h3>
                <p className="text-sm text-center">Add items from Amazon's vast gift registry for any occasion.</p>
              </CardContent>
            </Card>

            {/* Reason 2 */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                    <Image src="/placeholder.svg" alt="Easy to share" width={32} height={32} />
                  </div>
                </div>
                <h3 className="font-bold text-center mb-2">Easy to share</h3>
                <p className="text-sm text-center">Share your gift registry with friends and family so they'll know exactly what gifts to get.</p>
              </CardContent>
            </Card>

            {/* Reason 3 */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                    <Image src="/placeholder.svg" alt="Extended returns" width={32} height={32} />
                  </div>
                </div>
                <h3 className="font-bold text-center mb-2">Extended returns</h3>
                <p className="text-sm text-center">Not quite right? Return gifts with one-extended return period.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Registry Types */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Create a registry or gift list</h2>
            <Button variant="ghost" className="text-[#007185] hover:text-orange-500 hover:underline">
              <span className="text-xl mr-1">+</span> Add new
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Baby */}
            <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <Image 
                    src="/placeholder.svg" 
                    alt="Baby" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Baby</h3>
                  <p className="text-sm text-gray-600">Essentials to support your growing family</p>
                </div>
              </CardContent>
            </Card>

            {/* Wedding */}
            <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <Image 
                    src="/placeholder.svg" 
                    alt="Wedding" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Wedding</h3>
                  <p className="text-sm text-gray-600">Everything you need for a life together</p>
                </div>
              </CardContent>
            </Card>

            {/* Birthday */}
            <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <Image 
                    src="/placeholder.svg" 
                    alt="Birthday" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Birthday</h3>
                  <p className="text-sm text-gray-600">Celebrate another year around the sun</p>
                </div>
              </CardContent>
            </Card>

            {/* Holiday */}
            <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <Image 
                    src="/placeholder.svg" 
                    alt="Holiday" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Holiday</h3>
                  <p className="text-sm text-gray-600">Share gift ideas with family and friends</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
