import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Logo / Açıklama */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Hotel Seven Park
          </h2>
          <p className="text-sm text-gray-400">
            Konforlu ve unutulmaz bir konaklama deneyimi için sizi bekliyoruz.
          </p>
        </div>

        {/* Menü */}
        <div>
          <h3 className="text-white font-semibold mb-3">Menü</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white transition">
                Anasayfa
              </a>
            </li>
            <li>
              <a href="/otel.pdf" className="hover:text-white transition">
                Sürdürülebilirlik
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                İletişim
              </a>
            </li>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div>
          <h3 className="text-white font-semibold mb-3">Bizi Takip Et</h3>
          <div className="flex gap-4 text-xl">
         
            <a href="https://www.facebook.com/p/Hotel-Seven-Brothers-100063482442943/" className="hover:text-white transition">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/hotel_sevenbrothers/" className="hover:text-white transition">
            <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* Alt Kısım */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Hotel Seven Park. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;