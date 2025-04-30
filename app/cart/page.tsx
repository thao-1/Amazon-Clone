"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCheckout = () => {
    setShowConfirmation(true);
    clearCart();
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="bg-[#131921] text-white">
        <div className="container mx-auto">
          <div className="flex items-center h-16 px-2 md:px-4">
            {/* Logo */}
            <Link href="/" className="mr-4 flex items-center">
              <span className="text-2xl font-bold">amazon</span>
              <span className="text-orange-400 text-2xl">.clone</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

          {items.length === 0 && !showConfirmation ? (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-gray-400" />
              <h2 className="text-2xl font-medium mb-2">Your Amazon Cart is empty</h2>
              <p className="text-gray-600 mb-6">Shop today's deals</p>
              <Link href="/">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Continue shopping</Button>
              </Link>
            </div>
          ) : showConfirmation ? (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <div className="bg-green-100 p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-medium mb-2 text-green-700">Thank you for your order!</h2>
                <p className="text-green-600">We received your order and will send you an email when it ships.</p>
              </div>
              <Link href="/">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Continue shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-6 border-b">
                    <h2 className="text-xl font-bold">Shopping Cart</h2>
                  </div>

                  <ul className="divide-y">
                    {items.map((item) => (
                      <li key={item.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <div className="w-24 h-24 relative flex-shrink-0 mb-4 sm:mb-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1 sm:ml-4">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-green-600 text-sm mb-2">In Stock</p>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove
                            </Button>
                          </div>
                        </div>
                        <div className="font-bold text-lg sm:ml-4 mt-2 sm:mt-0">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="p-6 bg-gray-50 text-right">
                    <p className="text-lg">
                      Subtotal ({items.reduce((acc, item) => acc + item.quantity, 0)} items):{" "}
                      <span className="font-bold">${totalPrice.toFixed(2)}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow p-6">
                  <p className="text-lg mb-4">
                    Subtotal ({items.reduce((acc, item) => acc + item.quantity, 0)} items):{" "}
                    <span className="font-bold">${totalPrice.toFixed(2)}</span>
                  </p>
                  <Button
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black mb-4"
                    onClick={handleCheckout}
                  >
                    Proceed to checkout
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#131921] text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Amazon Clone. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
