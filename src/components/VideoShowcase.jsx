const videos = Array.from({ length: 3 });

const VideoShowcase = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center font-heading text-4xl font-bold text-[#0F1C2E]">
          Video Highlights
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {videos.map((_, index) => (
            <div key={index} className="aspect-9/16 rounded-3xl bg-gray-300">
              <div className="flex h-full items-center justify-center text-gray-600">
                Video Placeholder
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
