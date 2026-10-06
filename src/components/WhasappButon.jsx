import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X, Send } from "lucide-react";

const WhatsappButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "905492134979";
  const defaultMessage = "Merhaba, oda rezervasyonu hakkında bilgi almak istiyorum.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Pop-up Sohbet Penceresi */}
      {isOpen && (
        <div className="mb-4 w-72 sm:w-80 overflow-hidden rounded-2xl bg-white shadow-2xl border border-[#e5e1d8] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-[#26332f] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <FaWhatsapp size={22} />
                </div>
                {/* Yeşil Canlı Nokta */}
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#26332f]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold leading-tight">Hotel Seven Park</h4>
                <p className="text-[11px] text-[#e8c69c]">Resepsiyon · Çevrimiçi</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors p-1"
              aria-label="Kapat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="bg-[#f7f5f0] p-4 text-xs">
            <div className="mb-3 max-w-[85%] rounded-2xl rounded-tl-none bg-white p-3 text-[#26332f] shadow-sm border border-[#eee9df]">
              <p className="font-medium text-[#a87947] mb-1">Hotel Seven Park</p>
              <p className="leading-relaxed">
                Merhaba! 👋 Konaklama ve rezervasyon talepleriniz için bize WhatsApp üzerinden 7/24 ulaşabilirsiniz.
              </p>
              <span className="mt-1 block text-[9px] text-[#89918b] text-right">
                Anında Yanıt
              </span>
            </div>
          </div>

          {/* Action Button */}
          <div className="p-3 bg-white border-t border-[#eee9df]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#1ebe5d]"
            >
              <FaWhatsapp size={18} />
              Sohbete Başla
              <Send size={14} className="ml-auto" />
            </a>
          </div>
        </div>
      )}

      {/* Tetikleyici Yeşil Buton */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5d] active:scale-95"
        aria-label="WhatsApp İletişim"
      >
        {/* Dalga (Pulse) Efekti */}
        <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30 group-hover:hidden" />
        
        {isOpen ? <X size={26} /> : <FaWhatsapp size={30} />}
      </button>
    </div>
  );
};

export default WhatsappButton;