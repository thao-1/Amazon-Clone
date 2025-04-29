"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  images: {
    src: string
    alt: string
    title?: string
    subtitle?: string
  }[]
  aspectRatio?: string
  objectFit?: "cover" | "contain"
  className?: string
  showOverlay?: boolean
}

export function Carousel({
  images,
  aspectRatio = "16/9",
  objectFit = "cover",
  className = "",
  showOverlay = false,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className={`relative group ${className}`}>
      <div 
        className={`relative w-full overflow-hidden`}
        style={{ aspectRatio }}
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className={`transition-opacity duration-300 object-${objectFit}`}
          priority
        />
        
        {/* Text Overlay */}
        {showOverlay && images[currentIndex].title && (
          <div className="absolute inset-0 flex items-center">
            <div className="ml-16 md:ml-24">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                {images[currentIndex].title}
              </h2>
              {images[currentIndex].subtitle && (
                <p className="text-sm md:text-base text-gray-700">
                  {images[currentIndex].subtitle}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Left Arrow */}
      <div 
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full cursor-pointer shadow-md z-10"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </div>

      {/* Right Arrow */}
      <div 
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full cursor-pointer shadow-md z-10"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-colors duration-300 ${currentIndex === slideIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  )
}
