"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
];

export default function ImageSliderSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-gray-400">A glimpse into my life</p>
        </motion.div>

        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent className="gap-4">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full h-64 rounded-lg overflow-hidden shadow-md cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <motion.img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {selectedImage && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/80 z-50 flex items-center justify-center"
            onClick={handleCloseLightbox}
          >
            <motion.img
              src={selectedImage}
              alt="Lightbox Image"
              className="max-w-5xl max-h-5xl object-contain cursor-pointer"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
