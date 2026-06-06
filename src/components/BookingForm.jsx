const BookingForm = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center font-heading text-4xl font-bold text-[#0F1C2E]">
          Book Appointment
        </h2>

        <form onSubmit={(e) => e.preventDefault()} className="mt-10">
          <input
            type="text"
            name="client-name"
            placeholder="Full Name"
            className="w-full rounded-xl border p-4 my-2"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            name="client-phone-number"
            className="w-full rounded-xl border p-4 my-2"
          />

          <label
            htmlFor="booking-date"
            className="block w-full my-2 pl-4 text-[#6a6b6b]"
          >
            Preferred Booking Date & Time
          </label>
          <input
            type="datetime-local"
            id="booking-date"
            className="w-full rounded-xl border px-4 py-3 mb-2"
          />

          <textarea
            rows="5"
            placeholder="Tell us about your event..."
            name="event-details"
            className="w-full rounded-xl border p-4 my-2"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-[#D9B15A] py-4 text-white my-2"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
