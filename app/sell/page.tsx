import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function SellPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white p-4 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Sell with Amazon</h1>
          <div className="flex items-center space-x-2">
            <div className="text-sm text-green-700 flex items-center">
              <div className="w-3 h-3 bg-green-700 rounded-full mr-1"></div>
              <span>Get 10% back on your first $10,000 in branded sales.</span>
              <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline ml-1">
                Learn more
              </Link>
            </div>
            <Button className="bg-orange-400 hover:bg-orange-500 text-black rounded-full px-6">
              Sign up
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <h2 className="text-4xl font-bold mb-6">Create an Amazon seller account</h2>
                <Button className="bg-orange-400 hover:bg-orange-500 text-black rounded-full px-8 py-2 text-lg">
                  Sign up
                </Button>
                <div className="mt-4 text-sm text-green-700 flex items-center">
                  <div className="w-3 h-3 bg-green-700 rounded-full mr-1"></div>
                  <span>Get 10% back on your first $10,000 in branded sales.</span>
                  <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline ml-1">
                    Learn more
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative h-64 md:h-80">
                  <Image
                    src="/placeholder.svg"
                    alt="Amazon Seller Account"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <p className="text-xl text-center mb-12">More than 70% of Amazon sellers generate their first sale in less than 60 days.</p>
            
            {/* Incentives Box */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    New Seller Incentives
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Get started with $50,000 in incentives</h3>
                  <p className="text-gray-600 mb-4">Ready to sell? With Amazon & as a new seller, you can take advantage of a suite of incentives.</p>
                  <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline flex items-center">
                    See all incentives
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-700 rounded-full mr-2 mt-1"></div>
                        <div>
                          <p className="font-medium">10% back on your first $10,000 in branded sales. Get 5% back through your first year.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-700 rounded-full mr-2 mt-1"></div>
                        <div>
                          <p className="font-medium">$200 off Premium Account for the first six months of your Amazon Professional Selling plan.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-700 rounded-full mr-2 mt-1"></div>
                        <div>
                          <p className="font-medium">$50 credit for Sponsored Products or Sponsored Brands ads.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
