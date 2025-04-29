import Link from "next/link"
import { ChevronRight, Globe, User } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AllMenuPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#232f3e] text-white p-4 flex items-center">
        <User className="h-6 w-6 mr-2" />
        <h1 className="text-lg font-medium">Hello, sign in</h1>
      </header>

      {/* Menu Sections */}
      <div className="divide-y">
        {/* Digital Content & Devices */}
        <section className="p-4">
          <h2 className="text-xl font-bold mb-4">Digital Content & Devices</h2>
          <nav>
            <ul className="space-y-4">
              {digitalContentItems.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="flex items-center justify-between py-2">
                    <span>{item}</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {/* Shop by Department */}
        <section className="p-4">
          <h2 className="text-xl font-bold mb-4">Shop by Department</h2>
          <nav>
            <ul className="space-y-4">
              {departmentItems.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="flex items-center justify-between py-2">
                    <span>{item}</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button variant="ghost" className="mt-4 text-[#007185] flex items-center">
            See all
            <ChevronRight className="h-4 w-4 ml-1 rotate-90" />
          </Button>
        </section>

        {/* Programs & Features */}
        <section className="p-4">
          <h2 className="text-xl font-bold mb-4">Programs & Features</h2>
          <nav>
            <ul className="space-y-4">
              {programsItems.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="flex items-center justify-between py-2">
                    <span>{item.name}</span>
                    {item.hasArrow && <ChevronRight className="h-5 w-5 text-gray-400" />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button variant="ghost" className="mt-4 text-[#007185] flex items-center">
            See all
            <ChevronRight className="h-4 w-4 ml-1 rotate-90" />
          </Button>
        </section>

        {/* Help & Settings */}
        <section className="p-4">
          <h2 className="text-xl font-bold mb-4">Help & Settings</h2>
          <nav>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="flex items-center py-2">
                  <span>Your Account</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center py-2">
                  <Globe className="h-5 w-5 mr-2" />
                  <span>English</span>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </div>
  )
}

// Menu data
const digitalContentItems = ["Prime Video", "Amazon Music", "Kindle E-readers & Books", "Amazon Appstore"]

const departmentItems = ["Electronics", "Computers", "Smart Home", "Arts & Crafts"]

const programsItems = [
  { name: "Gift Cards", hasArrow: true },
  { name: "Shop By Interest", hasArrow: false },
  { name: "Amazon Live", hasArrow: true },
  { name: "International Shopping", hasArrow: true },
]
