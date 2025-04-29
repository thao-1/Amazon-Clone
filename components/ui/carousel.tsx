"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  images: {
    src: string
    alt: string
  }[]
  aspectRatio?: string
  objectFit?: "cover" | "contain"
  className?: string
}

export function Carousel({
  images,
  aspectRatio = "16/9",
  objectFit = "cover",
  className = "",
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
      </div>

      {/* Left Arrow */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ChevronLeft className="h-6 w-6" onClick={goToPrevious} />
      </div>

      {/* Right Arrow */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ChevronRight className="h-6 w-6" onClick={goToNext} />
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-colors duration-300 ${currentIndex === slideIndex ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  )
}
