import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    bookingDate: "",
    eventDetails: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedDate = new Date(formData.bookingDate).toLocaleString(
      "en-IN",
      {
        dateStyle: "full",
        timeStyle: "short",
      },
    );

    const message = 
    `Hello Renuka,
    
    Here's my details for appointment,

    Name: ${formData.fullName}
    Phone: ${formData.phoneNumber}

    Preferred Date & Time: ${formattedDate}
  
    Event Details:
    ${formData.eventDetails}
    
    Please contact me regarding your availability.
    `;

    const whatsappUrl = `https://wa.me/919951743400?text=${encodeURIComponent(message,)}`;

    window.open(whatsappUrl, "_blank");
    setFormData({
      fullName: "",
      phoneNumber: "",
      bookingDate: "",
      eventDetails: "",
    });
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center font-heading text-4xl font-bold text-[#0F1C2E]">
          Book Appointment
        </h2>

        <form onSubmit={handleSubmit} className="mt-10">
          <input
            type="text"
            id="full-name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full rounded-xl border p-4 my-2"
            required
          />

          <input
            type="tel"
            pattern="[0-9]{10}"
            id="phone-number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full rounded-xl border p-4 my-2"
            required
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
            name="bookingDate"
            value={formData.bookingDate}
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 mb-2"
            required
          />

          <textarea
            id="event-details"
            name="eventDetails"
            value={formData.eventDetails}
            onChange={handleChange}
            rows="5"
            placeholder="Tell us about your event..."
            className="w-full rounded-xl border p-4 my-2"
            required
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
