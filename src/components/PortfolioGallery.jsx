import bridal1 from "../assets/images/bridal1.jpg";
import bridal2 from "../assets/images/bridal2.jpg";
import bridal3 from "../assets/images/bridal3.jpg";
import bridal4 from "../assets/images/bridal4.jpg";
import bridal5 from "../assets/images/bridal5.jpg";
import bridal6 from "../assets/images/bridal6.jpg";
import bridal7 from "../assets/images/bridal7.jpg";
import bridal8 from "../assets/images/bridal8.jpg";
import bridal9 from "../assets/images/bridal9.jpg";
import bridal10 from "../assets/images/bridal10.jpg";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const images = [
  bridal1,
  bridal2,
  bridal3,
  bridal4,
  bridal5,
  bridal6,
  bridal7,
  bridal8,
  bridal9,
  bridal10,
];

const PortfolioGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-[#F8F5EF] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-4xl font-bold text-[#0F1C2E]">
            Featured Bridal Looks
          </h2>
        </div>

        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className="group mb-4 cursor-pointer overflow-hidden rounded-3xl shadow-md break-inside-avoid"
            >
              <img
                src={image}
                alt={`Bridal Look ${index + 1}`}
                className="w-full transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute -top-4 -right-4 rounded-full bg-white p-2 text-black shadow-lg transition hover:scale-110"
              >
                <HiX size={24} />
              </button>

              <motion.img
                src={selectedImage}
                alt="Selected Bridal Look"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="max-h-[90vh] max-w-full rounded-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;
