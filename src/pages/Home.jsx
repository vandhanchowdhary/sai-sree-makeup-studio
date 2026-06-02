import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedWork from "../components/FeaturedWork";
import Testimonials from "../components/Testimonials";
import InstagramPreview from "../components/InstagramPreview";
import ContactCTA from "../components/ContactCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="mx-auto h-px w-24 bg-[#D9B15A]/40" />
      <WhyChooseUs />
      <div className="mx-auto h-px w-24 bg-[#D9B15A]/40" />
      <FeaturedWork />
      <div className="mx-auto h-px w-24 bg-[#D9B15A]/40" />
      <Testimonials />
      <div className="mx-auto h-px w-24 bg-[#D9B15A]/40" />
      <InstagramPreview />
      <div className="mx-auto h-px w-24 bg-[#D9B15A]/40" />
      <ContactCTA />
    </>
  );
};

export default Home;
