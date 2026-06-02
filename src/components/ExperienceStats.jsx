const stats = [
  {
    number: "5+",
    label: "Years Experience",
  },
  {
    number: "100+",
    label: "Happy Brides",
  },
  {
    number: "100%",
    label: "Personalized Service",
  },
  {
    number: "Yes",
    label: "Venue Services",
  },
];

const ExperienceStats = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl bg-[#F8F5EF] p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-[#D9B15A]">
                {stat.number}
              </h3>

              <p className="mt-2 text-[#0F1C2E]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceStats;
