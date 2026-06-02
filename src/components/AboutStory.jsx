import image from "../assets/hero.jpg";

const AboutStory = () => {
  return (
    <section className="bg-[#F8F5EF] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <img
              src={image}
              alt="Renuka Kotha"
              className="rounded-3xl shadow-lg"
            />
          </div>

          <div>
            <p className="uppercase tracking-[4px] text-[#D9B15A]">
              Meet The Artist
            </p>

            <h2 className="mt-4 font-heading text-4xl font-bold text-[#0F1C2E]">
              Renuka Kotha
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              With over 5 years of experience in bridal makeup, Renuka Kotha has
              helped countless brides look and feel their absolute best on one
              of the most important days of their lives.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Her approach focuses on enhancing natural beauty, creating elegant
              looks that photograph beautifully and last throughout the
              celebration.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              She also provides makeup services at wedding venues, ensuring a
              comfortable and stress-free experience for brides and their
              families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
