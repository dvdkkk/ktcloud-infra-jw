import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const next = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-800 shadow-xl h-[440px] md:h-[660px]">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Carousel image ${index + 1}`}
            referrerPolicy="no-referrer"
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Navigation Buttons */}
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70">
          <ChevronLeft size={24} />
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70">
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? 'bg-red-600' : 'bg-zinc-700 hover:bg-zinc-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
