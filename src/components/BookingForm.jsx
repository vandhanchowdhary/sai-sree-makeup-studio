const BookingForm = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center font-heading text-4xl font-bold text-[#0F1C2E]">
          Book Appointment
        </h2>

        <form onSubmit={(e) => e.preventDefault()} className="mt-10 space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border p-4"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-xl border p-4"
          />

          <input type="date" className="w-full rounded-xl border p-4" />

          <textarea
            rows="5"
            placeholder="Tell us about your event..."
            className="w-full rounded-xl border p-4"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-[#D9B15A] py-4 text-white"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
