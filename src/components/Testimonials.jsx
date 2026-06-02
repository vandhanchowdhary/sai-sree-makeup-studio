import testimonials from "../data/testimonials";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[4px] text-[#D9B15A]">
            Testimonials
          </p>

          <h2 className="mt-4 font-heading text-3xl font-bold text-[#0F1C2E] lg:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-[#F8F5EF] p-6 shadow-sm"
            >
              <div className="mb-4 flex gap-1 text-[#D9B15A]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-600">"{item.review}"</p>

              <h4 className="mt-4 font-semibold text-[#0F1C2E]">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
