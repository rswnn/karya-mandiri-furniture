"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  'https://media.cukizufurniture.com/wp-content/uploads/2024/07/Untitled-design-2-1024x864.png',
  'https://casaindonesia.com/lkgallery/teaser/mengenal-perbedaan-built-in-furniture-loose-furniture-casa-indonesia-1-4_49_20210418223205vork2q.jpg'
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="relative max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg h-80">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="Carousel"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-1 rounded-full z-10"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white px-3 py-1 rounded-full z-10"
        >
          ▶
        </button>
      </div>
    </section>
  );
}

