import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "Ana sayfa", end: true },
    { to: "/about", label: "Hakkımızda" },
    { to: "/rooms", label: "Odalarımız" },
    { to: "/gallery", label: "Galeri" },
    { to: "/contact", label: "İletişim" },
  ];

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-[#a87947]" : "text-[#46524c] hover:text-[#a87947]"
    }`;

  return (
    <header className="fixed z-50 w-full border-b border-black/5 bg-[#fffefa]/95 shadow-[0_4px_24px_rgba(38,51,47,0.06)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Hotel Seven Park ana sayfa">
          <img src="/logo.png" className="h-12 w-14 object-contain" alt="Hotel Seven Park logosu" />
          <span className="flex flex-col">
            <span className="font-serif text-lg font-semibold leading-tight text-[#26332f]">Hotel Seven Park</span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a87947]">Nevşehir · Kapadokya</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Ana menü">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/rooms"
            className="rounded-sm bg-[#26332f] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#a87947]"
          >
            Konaklamayı keşfet
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-sm p-2 text-[#26332f] transition hover:bg-[#f3efe8] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-[#fffefa] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8" aria-label="Mobil menü">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-sm px-3 py-3 text-sm font-medium transition ${
                    isActive ? "bg-[#f3efe8] text-[#a87947]" : "text-[#46524c] hover:bg-[#f8f5ef]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              onClick={() => setOpen(false)}
              to="/rooms"
              className="mt-2 rounded-sm bg-[#26332f] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white"
            >
              Konaklamayı keşfet
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
