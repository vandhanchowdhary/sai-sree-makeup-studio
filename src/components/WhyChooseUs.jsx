import { motion } from "framer-motion";
import { FaAward, FaGem, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    title: "5+ Years Experience",
    description:
      "Professional bridal makeup expertise for your most special occasions.",
  },
  {
    icon: <FaGem />,
    title: "Premium Products",
    description:
      "Using high-quality products to ensure long-lasting and flawless makeup.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Venue Services",
    description:
      "Available at wedding venues for a comfortable and stress-free experience.",
  },
  {
    icon: <FaHeart />,
    title: "Personalized Styling",
    description:
      "Every bridal look is customized to complement your unique beauty.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[4px] text-[#D9B15A] text-sm font-medium">
            Why Choose Us
          </p>

          <h2 className="mt-4 font-heading text-3xl font-bold text-[#0F1C2E] lg:text-5xl">
            Beauty With Expertise
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Creating elegant bridal looks that enhance your natural beauty while
            ensuring confidence on your special day.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="group rounded-3xl border border-gray-100 bg-[#F8F5EF] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D9B15A] text-2xl text-white">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#0F1C2E]">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
