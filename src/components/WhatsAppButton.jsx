import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919951743400"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden fixed bottom-5 right-5 z-50 md:flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg" disabled
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
