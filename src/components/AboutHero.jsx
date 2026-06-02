import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="bg-[#0F1C2E] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl font-bold"
        >
          About Renuka Kotha
        </motion.h1>

        <p className="mx-auto mt-6 max-w-2xl text-gray-300">
          Passionate bridal makeup artist helping brides feel confident,
          elegant, and beautiful on their special day.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
