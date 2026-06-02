const ContactCTASection = () => {
  return (
    <section className="bg-[#0F1C2E] py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-heading text-4xl font-bold text-white">
          Ready To Book?
        </h2>

        <p className="mt-6 text-gray-300">
          Contact Sai Sree Makeup Studio today and reserve your bridal makeup
          appointment.
        </p>

        <a
          href="https://wa.me/919951743400"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-[#D9B15A] px-8 py-4 text-white"
        >
          WhatsApp Now
        </a>
      </div>
    </section>
  );
};

export default ContactCTASection;
