"use client";

import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/ui/header"
import { Button } from "@/components/ui/button"

export default function SellPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
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
                    src="/images/sell/sell1.png"
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
            
            {/* Why create an Amazon selling account */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-8 md:mb-0 pr-8">
                  <h3 className="text-2xl font-bold mb-4">Why create an Amazon selling account?</h3>
                  <p className="text-gray-600 mb-6">There are endless reasons to sell with Amazon. Here are just a few.</p>
                  
                  <div className="mb-6">
                    <div className="flex items-start mb-2">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Sell to a store more customers trust</h4>
                        <p className="text-sm text-gray-600">The Amazon brand has been around since you started your retail shopping online. We were there for customers then, and we're still here for them in 2023.</p>
                      </div>
                    </div>
                    <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline text-sm flex items-center ml-11">
                      Learn how we prevent counterfeit products
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-start mb-2">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Sell with tools and programs that help you succeed</h4>
                        <p className="text-sm text-gray-600">It's easier to sell on Amazon than you might think. We've created tools and resources to help you at every step, including the Seller Central website, powerful product pages, advertising options, and more.</p>
                      </div>
                    </div>
                    <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline text-sm flex items-center ml-11">
                      Learn more about our Professional selling plan
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-start mb-2">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Sell with high-impact, optional services</h4>
                        <p className="text-sm text-gray-600">We provide sellers of all sizes with a range of optional services and support to help grow your business. Use Fulfillment by Amazon (FBA) to store, pack, ship, and provide customer service for your products.</p>
                      </div>
                    </div>
                    <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline text-sm flex items-center ml-11">
                      Explore Amazon selling programs
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="text-right text-xs uppercase tracking-wide text-gray-500 mb-2">DIASPORA CO.</div>
                    <div className="mb-4">
                      <p className="italic text-gray-700 mb-4">"I trusted that there was a community out there that cared, and in whom we mattered. All we needed to do was find them."</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-red-500 rounded-full mr-3"></div>
                        <div>
                          <p className="font-bold">Sana Javeri Kadri</p>
                          <p className="text-xs text-gray-600">Founder & CEO, Diaspora Co.</p>
                        </div>
                      </div>
                    </div>
                    <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline text-sm flex items-center justify-end">
                      See Sana's story
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    
                    <div className="mt-8 mb-4">
                      <div className="text-right text-xs uppercase tracking-wide text-gray-500 mb-2">SPOTTED HORSE</div>
                      <p className="italic text-gray-700 mb-4">"Challenges are a sign that something fundamental needs to change. In our case, it was the way we told our product—we needed to get online."</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-red-500 rounded-full mr-3"></div>
                        <div>
                          <p className="font-bold">Margot Sanger</p>
                          <p className="text-xs text-gray-600">Owner, Spotted Horse</p>
                        </div>
                      </div>
                    </div>
                    <Link href="/" className="text-[#007185] hover:text-orange-500 hover:underline text-sm flex items-center justify-end">
                      See Margot's story
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Statistics Section */}
            <div className="bg-[#232f3e] text-white py-12 px-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-3xl font-bold mb-2">$230,000+</h3>
                  <p className="text-sm">Average sales for U.S. based sellers in 2022</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">+60%</h3>
                  <p className="text-sm">Percentage of sales in the Amazon store from independent sellers—most of which are small and medium-sized businesses</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">100+</h3>
                  <p className="text-sm">Countries and regions where Amazon ships to customers</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
