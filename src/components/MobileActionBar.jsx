import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const MobileActionBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 h-14 flex md:hidden">
      <a
        href="tel:+919951743400"
        className="flex-1 bg-[#0F1C2E] py-2 text-center text-white"
      >
        <FaPhoneAlt className="mx-auto size-3 my-1" />
        Call
      </a>

      <a
        href="https://wa.me/919951743400"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-green-500 py-2 text-center text-white"
      >
        <FaWhatsapp className="mx-auto size-4 mt-1" />
        WhatsApp
      </a>
    </div>
  );
};

export default MobileActionBar;
