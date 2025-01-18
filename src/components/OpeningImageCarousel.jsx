import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/assets/images/gallery/Image1.jpg", alt: "Image 1 - Campus Overview" },
  { src: "/assets/images/gallery/Image2.jpg", alt: "Image 2 - Robotics Demo" },
  { src: "/assets/images/gallery/Image3.jpg", alt: "Image 3 - Workshop Session" },
  { src: "/assets/images/gallery/Image4.jpg", alt: "Image 4 - Team Presentation" },
  { src: "/assets/images/gallery/Image5.jpg", alt: "Image 5 - Coding Challenge" },
  { src: "/assets/images/gallery/Image6.jpg", alt: "Image 6 - Award Ceremony" },
  { src: "/assets/images/gallery/Image7.jpg", alt: "Image 7 - Project Showcase" },
  { src: "/assets/images/gallery/Image8.jpg", alt: "Image 8 - Networking Event" },
  { src: "/assets/images/gallery/Image9.jpg", alt: "Image 9 - Group Photo" },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrevious();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full max-w-6xl mx-auto px-4 py-12"
    >
      <h2 className="text-3xl font-bold text-pink-400 mb-8 text-center">Gallery</h2>
      <div className="relative h-[400px] overflow-hidden">
        {/* Image stack */}
        <div className="relative h-full">
          {images.map((image, index) => {
            const position = (index - currentIndex) % images.length;
            const zIndex = position === 0 ? 5 : 0;

            return (
              <motion.div
                key={index}
                className="absolute w-full h-full rounded-2xl overflow-hidden"
                initial={false}
                animate={{
                  x: `${position * 40}%`,
                  scale: position === 0 ? 1 : 0.8,
                  zIndex: zIndex,
                  opacity: Math.abs(position) <= 2 ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-full backdrop-blur-lg bg-black/20 rounded-2xl border border-pink-500/50 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.src = "/assets/images/fallback.jpg")}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-pink-500/20 text-pink-400 p-2 rounded-full transition-all border border-pink-500/50 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-pink-500/20 text-pink-400 p-2 rounded-full transition-all border border-pink-500/50 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-pink-400 w-4"
                : "bg-pink-400/50 hover:bg-pink-400/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ImageCarousel;
