const ContactCTA = () => {
  const message = `Hi Renuka, I am interested in your makeup services`;
  return (
    <section className="bg-[#0F1C2E] py-10">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="uppercase tracking-[4px] text-[#D9B15A]">
          Book Your Appointment
        </p>

        <h2 className="mt-4 font-heading text-4xl font-bold text-white">
          Ready For Your Special Day?
        </h2>

        <p className="mt-6 text-gray-300">
          Let's create a bridal look that makes you feel confident, elegant, and
          beautiful.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href={`https://wa.me/919951743400?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#D9B15A] px-8 py-4 text-white"
          >
            Book Appointment
          </a>

          <a
            href="tel:+919951743400"
            className="rounded-full border border-white px-8 py-4 text-white"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
