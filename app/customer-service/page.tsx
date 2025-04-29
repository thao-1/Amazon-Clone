import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CustomerServicePage() {
  return (
    <div className="min-h-screen bg-[#00464f]">
      {/* Header */}
      <header className="bg-[#00464f] text-white p-4 border-b border-[#005e6a]">
        <div className="container mx-auto">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-white hover:underline">
              Customer Service
            </Link>
            <Link href="/" className="text-white hover:underline">
              Home
            </Link>
            <Link href="/" className="text-white hover:underline">
              Digital Services and Device Support
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4 text-white">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Welcome to Amazon Customer Service</h1>
          <p className="text-lg">We can help you take care of most things here, sign in to get started.</p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
          {/* Card 1 */}
          <div className="bg-white rounded-md p-4 text-black hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#f7f7f7] rounded-md flex items-center justify-center">
                <Image src="/placeholder.svg" alt="Delivery" width={32} height={32} />
              </div>
              <div>
                <h2 className="font-medium">A delivery, order or return</h2>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-md p-4 text-black hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#f7f7f7] rounded-md flex items-center justify-center">
                <Image src="/placeholder.svg" alt="Prime" width={32} height={32} />
              </div>
              <div>
                <h2 className="font-medium">Prime</h2>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-md p-4 text-black hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#f7f7f7] rounded-md flex items-center justify-center">
                <Image src="/placeholder.svg" alt="Devices" width={32} height={32} />
              </div>
              <div>
                <h2 className="font-medium">Kindle, Fire, Alexa, or other Amazon devices</h2>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-md p-4 text-black hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#f7f7f7] rounded-md flex items-center justify-center">
                <Image src="/placeholder.svg" alt="Digital Content" width={32} height={32} />
              </div>
              <div>
                <h2 className="font-medium">eBooks, Prime Videos, Music, or Games</h2>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-md p-4 text-black hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#f7f7f7] rounded-md flex items-center justify-center">
                <Image src="/placeholder.svg" alt="Payments" width={32} height={32} />
              </div>
              <div>
                <h2 className="font-medium">Payment, charges or gift cards</h2>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-md p-4 text-black hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#f7f7f7] rounded-md flex items-center justify-center">
                <Image src="/placeholder.svg" alt="Security" width={32} height={32} />
              </div>
              <div>
                <h2 className="font-medium">Address, security & privacy</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4">Search our help library</h2>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input 
              type="text" 
              placeholder="Type something like 'question about a charge'" 
              className="pl-10 bg-white text-black border-none" 
            />
          </div>
        </div>

        {/* Help Topics */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">All help topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column - Topics */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-[#00647d] hover:bg-[#007c99] text-white border-none">
                Take Quick Actions
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-[#005e6a]">
                Where's my stuff
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-[#005e6a]">
                Shipping and Delivery
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-[#005e6a]">
                Returns and Refunds
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-[#005e6a]">
                Managing Your Account
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-[#005e6a]">
                Security & Privacy
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-[#005e6a]">
                Payment, Pricing and Promotions
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-[#005e6a]">
                Devices & Digital Solutions
              </Button>
            </div>

            {/* Middle and Right Columns - Quick Actions */}
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-md p-4 text-black">
                <h3 className="font-medium mb-2">Track your package</h3>
                <p className="text-sm text-gray-600 mb-4">Track your packages in Your Orders</p>
                <Button variant="outline" className="text-sm border-[#007185] text-[#007185] hover:bg-transparent hover:text-[#c7511f]">
                  Your Orders
                </Button>
              </div>

              <div className="bg-white rounded-md p-4 text-black">
                <h3 className="font-medium mb-2">Return Items You Ordered</h3>
                <p className="text-sm text-gray-600 mb-4">Return your orders using our Online Return Center</p>
                <Button variant="outline" className="text-sm border-[#007185] text-[#007185] hover:bg-transparent hover:text-[#c7511f]">
                  Return Center
                </Button>
              </div>

              <div className="bg-white rounded-md p-4 text-black">
                <h3 className="font-medium mb-2">Check status of a refund</h3>
                <p className="text-sm text-gray-600 mb-4">Track your returns and refunds in Your Orders</p>
                <Button variant="outline" className="text-sm border-[#007185] text-[#007185] hover:bg-transparent hover:text-[#c7511f]">
                  Your Orders
                </Button>
              </div>

              <div className="bg-white rounded-md p-4 text-black">
                <h3 className="font-medium mb-2">Track Your Return</h3>
                <p className="text-sm text-gray-600 mb-4">Learn how to track your return status and dates</p>
                <Button variant="outline" className="text-sm border-[#007185] text-[#007185] hover:bg-transparent hover:text-[#c7511f]">
                  Track Returns
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
