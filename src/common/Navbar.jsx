import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
       <header className="fixed w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between p-4">
        <h1 className="text-2xl font-bold">Hotel</h1>
        <nav className="flex gap-6">
          <Link to="/">Anasayfa</Link>
             <Link to="/about">Hakkımızda</Link>
          <Link to="/rooms">Odalarımız</Link>
          <Link to="/contact">İletişim</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
