import { Link } from "react-router-dom";
import bridal1 from "../assets/images/bridal1.jpg";
import bridal2 from "../assets/images/bridal2.jpg";
import bridal3 from "../assets/images/bridal3.jpg";

const images = [
  bridal1,
  bridal2,
  bridal3,
];

const FeaturedWork = () => {
  return (
    <section className="bg-[#F8F5EF] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="uppercase tracking-[4px] text-[#D9B15A] text-sm font-medium">
            Portfolio
          </p>

          <h2 className="mt-4 font-heading text-3xl font-bold text-[#0F1C2E] lg:text-5xl">
            Featured Bridal Looks
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group aspect-4/5 overflow-hidden rounded-3xl bg-gray-300"
            >
              <div className="flex h-full items-center justify-center transition duration-500 group-hover:scale-110">
                <img
                  src={image}
                  alt={`Bridal look ${index + 1}`}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-block rounded-full bg-[#D9B15A] px-8 py-3 text-white"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
