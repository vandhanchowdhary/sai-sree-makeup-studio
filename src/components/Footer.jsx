import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F1C2E] text-white pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h3 className="text-xl font-semibold">Sai Sree Makeup Studio</h3>

        <p className="mt-3 text-sm text-gray-300">
          Beauty Crafted For Your Most Cherished Moments
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="https://www.instagram.com/saisree_makeupstudio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={22} />
          </a>

          <a
            href="https://www.facebook.com/SaiSreeMakeupStudio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={22} />
          </a>
        </div>

        <div className="mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Sai Sree Makeup Studio
        </div>
      </div>
    </footer>
  );
};

export default Footer;
