import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/905438617965?text=Merhaba%20oda%20rezervasyonu%20yapmak%20istiyorum"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsappButton;
