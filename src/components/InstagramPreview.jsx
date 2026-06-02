import { FaInstagram } from "react-icons/fa";

import bridal4 from "../assets/images/bridal4.jpg";
import bridal5 from "../assets/images/bridal5.jpg";
import bridal6 from "../assets/images/bridal6.jpg";

const posts = [
  bridal4,
  bridal5,
  bridal6,
];

const InstagramPreview = () => {
  return (
    <section className="bg-[#F8F5EF] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[4px] text-[#D9B15A]">
            Follow Us
          </p>

          <h2 className="mt-4 font-heading text-3xl font-bold text-[#0F1C2E] lg:text-5xl">
            Instagram Gallery
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-3">
          {posts.map((post, index) => (
            <div
              key={index}
              className="group aspect-4/5 overflow-hidden rounded-3xl bg-gray-300"
            >
              <div className="flex h-full items-center justify-center transition duration-500 group-hover:scale-110">
                <img
                  src={post}
                  alt={`Bridal look ${index + 1}`}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/saisree_makeupstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#D9B15A] px-6 py-3 text-white"
          >
            <FaInstagram />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramPreview;
