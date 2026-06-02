import bridalImage from "../assets/images/bridal-1.jpg";

const BridalService = () => {
  return (
    <section className="bg-[#F8F5EF] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <img
            src={bridalImage}
            alt="Bridal Makeup"
            className="rounded-3xl shadow-lg"
          />

          <div>
            <p className="uppercase tracking-[4px] text-[#D9B15A]">
              Signature Service
            </p>

            <h2 className="mt-4 font-heading text-4xl font-bold text-[#0F1C2E]">
              Bridal Makeup
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              A personalized bridal makeup experience designed to highlight your
              natural beauty while ensuring a flawless look that lasts
              throughout your wedding celebrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridalService;
