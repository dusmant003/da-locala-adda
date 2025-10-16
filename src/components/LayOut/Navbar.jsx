import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import "aos/dist/aos.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <header
      className="flex items-center justify-between py-4 px-6 md:px-8 bg-white shadow-sm relative z-50"
      data-aos="fade-down"
    >
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Da Local Adda Logo"
          className="h-14 w-auto md:h-20"
          data-aos="zoom-in"
        />
        <div className="font-extrabold text-xl md:text-2xl text-black">
          Da Local <span className="text-red-600 ">Adda</span>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-black uppercase tracking-wider">
        <Link to="/" className="hover:text-red-600 transition" data-aos="fade-up">
          Home
        </Link>
        <Link to="/about" className="hover:text-red-600 transition" data-aos="fade-up" data-aos-delay="100">
          About
        </Link>
        <Link to="/menu" className="hover:text-red-600 transition" data-aos="fade-up" data-aos-delay="200">
          Menu
        </Link>
        <Link to="/contact" className="hover:text-red-600 transition" data-aos="fade-up" data-aos-delay="300">
          Contact
        </Link>
      </nav>

      {/* Icons + Button */}
      <div className="hidden md:flex items-center gap-4">
        {/* Search Icon */}
        <div
          className="border border-gray-300 rounded-full p-2 cursor-pointer hover:border-red-500 transition"
          data-aos="zoom-in"
        >
          <Search className="w-5 h-5 text-black" />
        </div>

        {/* Cart Icon */}
        <div
          className="relative border border-gray-300 rounded-full p-2 cursor-pointer hover:border-red-500 transition"
          data-aos="zoom-in"
        >
          <ShoppingCart className="w-5 h-5 text-black" />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            0
          </span>
        </div>

        {/* Seller Login */}
        <button
          data-aos="fade-left"
          className="bg-red-600 text-white text-sm font-semibold uppercase px-5 py-2 hover:bg-red-700 transition"
        >
          Seller Login
        </button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black focus:outline-none"
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-4 text-black font-semibold uppercase text-sm md:hidden animate-fadeIn"
          data-aos="fade-down"
        >
          <Link to="/" className="hover:text-red-600 transition" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="hover:text-red-600 transition" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/menu" className="hover:text-red-600 transition" onClick={() => setMenuOpen(false)}>
            Menu
          </Link>
          <Link to="/contact" className="hover:text-red-600 transition" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          {/* Mobile Icons */}
          <div className="flex items-center gap-6 mt-4">
            <Search className="w-5 h-5 text-black" />
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-black" />
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
          </div>

          {/* Seller Login */}
          <button className="bg-red-600 text-white px-6 py-2 font-semibold mt-4">
            Seller Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
