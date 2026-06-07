const GalleryCTA = () => {
  const message = `Hi Renuka, I am interested in your makeup services`;
  return (
    <section className="bg-[#0F1C2E] py-10">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-heading text-4xl font-bold text-white">
          Love What You See?
        </h2>

        <p className="mt-6 text-gray-300">
          Book your bridal makeup appointment and let us create a look that
          perfectly complements your special day.
        </p>

        <a
          href={`https://wa.me/919951743400?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-[#D9B15A] px-8 py-4 text-white"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
};

export default GalleryCTA;
