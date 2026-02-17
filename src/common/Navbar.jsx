import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

<div className="text-center leading-none">
  <h1 className="luxury-font text-navy text-3xl md:text-4xl tracking-[0.08em] text-[#3577a1]">
    Seven Brothers
  </h1>
</div>

        {/* Desktop Menü */}
        <nav className="hidden md:flex gap-6 font-medium">
          <Link to="/">Anasayfa</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/rooms">Odalarımız</Link>
          <Link to="/contact">İletişim</Link>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col text-center p-4 gap-4 font-medium">
            <Link onClick={() => setOpen(false)} to="/">Anasayfa</Link>
            <Link onClick={() => setOpen(false)} to="/about">Hakkımızda</Link>
            <Link onClick={() => setOpen(false)} to="/rooms">Odalarımız</Link>
            <Link onClick={() => setOpen(false)} to="/contact">İletişim</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
