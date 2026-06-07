import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import bridalImage from "../assets/images/bridal-1.jpg";

const Hero = () => {
  const message = `Hi Renuka, I am interested in your makeup services`;
  return (
    <section className="relative overflow-hidden bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="order-1"
          >
            <img
              src={bridalImage}
              alt="Bridal Makeup"
              className="h-87.5 w-full object-cover lg:h-175"
            />
          </motion.div>

          {/* Content */}
          <div className="order-2 px-6 py-10 lg:px-16">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#D9B15A] font-medium tracking-wider uppercase"
            >
              Bridal Makeup Artist
            </motion.p>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 font-heading text-5xl font-bold leading-tight text-[#0F1C2E] lg:text-7xl"
            >
              Sai Sree
              <span className="block text-[#D9B15A]">Makeup Studio</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-gray-600 leading-relaxed"
            >
              Beauty Crafted For Your Most Cherished Moments. Professional
              bridal makeup services designed to make your special day
              unforgettable.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 flex items-center gap-4"
            >
              <div className="h-10 w-0.5 bg-[#D9B15A]" />

              <span className="text-[#0F1C2E] font-medium">
                5+ Years Experience
              </span>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href={`https://wa.me/919951743400?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#D9B15A] px-8 py-4 text-center font-medium text-white transition hover:scale-105"
              >
                Book Appointment
              </a>

              <Link
                to="/gallery"
                className="rounded-full border border-[#D9B15A] px-8 py-4 text-center text-[#0F1C2E] transition hover:bg-[#D9B15A] hover:text-white"
              >
                View Gallery
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
