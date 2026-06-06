const faqs = [
  {
    question: "How early should I book?",
    answer: "We recommend booking at least 1–2 months in advance.",
  },
  {
    question: "Do you provide services at venues?",
    answer: "Yes, bridal makeup services are available at wedding venues.",
  },
  {
    question: "How can I book an appointment?",
    answer: "You can call or WhatsApp us directly.",
  },
];

const ServicesFAQ = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center font-heading text-4xl font-bold text-[#0F1C2E]">
          Frequently Asked Questions
        </h2>

        <div className="mt-5 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl bg-[#F8F5EF] p-6">
              <h3 className="font-semibold text-[#0F1C2E]">Q. {faq.question}</h3>

              <p className="mt-2 text-gray-600">A. {faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
