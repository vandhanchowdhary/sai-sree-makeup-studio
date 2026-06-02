import { FaCheckCircle } from "react-icons/fa";

const includes = [
  "Pre-Makeup Consultation",
  "Skin Preparation",
  "Long-Lasting Bridal Makeup",
  "Customized Bridal Look",
  "Touch-Up Guidance",
  "Venue Service Available",
];

const ServiceIncludes = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="font-heading text-4xl font-bold text-[#0F1C2E]">
            What's Included
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {includes.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl bg-[#F8F5EF] p-5"
            >
              <FaCheckCircle className="text-[#D9B15A]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIncludes;
