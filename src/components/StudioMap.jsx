const StudioMap = () => {
  return (
    <section className="bg-[#F8F5EF] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-center font-heading text-4xl font-bold text-[#0F1C2E]">
          Find Us
        </h2>

        <div className="overflow-hidden rounded-3xl shadow-lg">
          <iframe
            title="Studio Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d952.5639690341715!2d80.15625775483186!3d17.254851419382945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a34592dba679315%3A0x782c0208f78f0edb!2sSai%20Sree%20Makeup%20Studio%20-%20Renuka%20Makeup%20Artist!5e0!3m2!1sen!2sin!4v1780392104275!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default StudioMap;
