import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#202a27] text-[#d3d8d3]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="mb-3 font-serif text-2xl font-semibold text-white">Hotel Seven Park</p>
          <p className="max-w-xs text-sm leading-7 text-[#aeb8b1]">
            Kapadokya’yı keşfederken konforlu ve sıcak bir konaklama için sizi bekliyoruz.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">Keşfedin</h3>
          <ul className="space-y-3 text-sm text-[#aeb8b1]">
            <li><Link to="/" className="transition hover:text-white">Ana sayfa</Link></li>
            <li><Link to="/rooms" className="transition hover:text-white">Odalarımız</Link></li>
            <li><Link to="/contact" className="transition hover:text-white">İletişim</Link></li>
            <li><a href="/surdulenir.docx" className="transition hover:text-white">Sürdürülebilirlik</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">Bizi takip edin</h3>
          <p className="mb-4 text-sm text-[#aeb8b1]">Nevşehir · Kapadokya</p>
          <div className="flex gap-3 text-lg">
            <a aria-label="Facebook" href="https://www.facebook.com/p/Hotel-Seven-Brothers-100063482442943/" className="rounded-full border border-white/15 p-3 transition hover:border-white/50 hover:text-white">
              <FaFacebook aria-hidden="true" />
            </a>
            <a aria-label="Instagram" href="https://www.instagram.com/hotel_sevenbrothers/" className="rounded-full border border-white/15 p-3 transition hover:border-white/50 hover:text-white">
              <FaInstagram aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-[#89968e]">
        © {new Date().getFullYear()} Hotel Seven Park. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;