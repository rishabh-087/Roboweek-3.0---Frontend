import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  { src: "/assets/images/gallery/Image1.jpg", alt: "Image 1 - Campus Overview" },
  { src: "/assets/images/gallery/Image2.jpg", alt: "Image 2 - Robotics Demo" },
  { src: "/assets/images/gallery/Image3.jpg", alt: "Image 3 - Workshop Session" },
  { src: "/assets/images/gallery/Image4.jpg", alt: "Image 4 - Team Presentation" },
  { src: "/assets/images/gallery/Image6.jpg", alt: "Image 6 - Award Ceremony" },
  { src: "/assets/images/gallery/Image7.jpg", alt: "Image 7 - Project Showcase" },
  { src: "/assets/images/gallery/Image8.jpg", alt: "Image 8 - Networking Event" },
  { src: "/assets/images/gallery/Image9.jpg", alt: "Image 9 - Group Photo" },
  { src: "/assets/images/gallery/image10.jpg", alt: "Image 10 - Campus Overview" },
  { src: "/assets/images/gallery/image11.jpg", alt: "Image 11 - Campus Overview" },
  { src: "/assets/images/gallery/image12.jpg", alt: "Image 12 - Campus Overview" },
  { src: "/assets/images/gallery/image13.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image14.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image15.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image16.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image17.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image18.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image19.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image20.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image21.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image22.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image23.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image24.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image25.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image26.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image27.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image28.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image29.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image30.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image31.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image32.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image33.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image34.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image35.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image36.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image37.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image38.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image39.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image40.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image41.jpg", alt: "Campus Overview" },
  { src: "/assets/images/gallery/image42.jpg", alt: "Campus Overview" },
];

const AUTO_SCROLL_DELAY = 3000; // 3 seconds

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalImageSize, setModalImageSize] = useState({ width: 0, height: 0 });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsPaused(true);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setIsPaused(true);
  };

  const openModal = (index) => {
    const img = new Image();
    img.src = images[index].src;

    img.onload = () => {
      const aspectRatio = img.naturalWidth / img.naturalHeight;

      const maxModalWidth = window.innerWidth * 0.9;
      const maxModalHeight = window.innerHeight * 0.9;

      if (img.naturalWidth > maxModalWidth || img.naturalHeight > maxModalHeight) {
        if (maxModalWidth / aspectRatio < maxModalHeight) {
          setModalImageSize({
            width: maxModalWidth,
            height: maxModalWidth / aspectRatio,
          });
        } else {
          setModalImageSize({
            width: maxModalHeight * aspectRatio,
            height: maxModalHeight,
          });
        }
      } else {
        setModalImageSize({ width: img.naturalWidth, height: img.naturalHeight });
      }

      setModalImage(images[index]);
      setIsModalOpen(true);
    };
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, AUTO_SCROLL_DELAY);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  useEffect(() => {
    if (isPaused) {
      const timeout = setTimeout(() => setIsPaused(false), AUTO_SCROLL_DELAY * 2);
      return () => clearTimeout(timeout);
    }
  }, [isPaused]);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 text-pink-600 font-squidFont">
          Gallery
        </h2>

        <div className="relative flex justify-center items-center">
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-pink-500 p-3 rounded-full shadow-lg hover:bg-pink-600 transition z-10"
          >
            ❮
          </button>

          <div className="flex items-center space-x-8">
            <motion.div
              className="w-64 h-96 flex-shrink-0 overflow-hidden rounded-lg shadow-md bg-gray-200"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ filter: "blur(5px)" }}
            >
              <img
                src={images[(currentIndex - 1 + images.length) % images.length].src}
                alt={images[(currentIndex - 1 + images.length) % images.length].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              key={currentIndex}
              className="w-96 h-[500px] flex-shrink-0 overflow-hidden rounded-lg shadow-2xl bg-gray-300 cursor-pointer"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => openModal(currentIndex)}
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="w-64 h-96 flex-shrink-0 overflow-hidden rounded-lg shadow-md bg-gray-200"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ filter: "blur(5px)" }}
            >
              <img
                src={images[(currentIndex + 1) % images.length].src}
                alt={images[(currentIndex + 1) % images.length].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-500 p-3 rounded-full shadow-lg hover:bg-pink-600 transition z-10"
          >
            ❯
          </button>
        </div>
      </div>

      {isModalOpen && modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div
            className="relative rounded-lg bg-transparent"
            style={{
              width: modalImageSize.width,
              height: modalImageSize.height,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg z-10"
            >
              ❌
            </button>
            <motion.img
              src={modalImage.src}
              alt={modalImage.alt}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                backgroundColor: "transparent",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageCarousel;
