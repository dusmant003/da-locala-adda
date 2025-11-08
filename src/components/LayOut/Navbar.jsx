import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { Search, ShoppingCart, Menu, X, User } from "lucide-react";
import "aos/dist/aos.css";
import logo from "../../assets/images/logo.png";
import SellerLoginModal from "../../Modal/SellerLoginModal";
import SignInModal from "../../Modal/UserSigninModal";
import UserSignUpModal from "../../Modal/SignUpModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSellerLoginModal, setIsSellerLoginModal] = useState(false);
  const [isUserSignInModal, setIsUserSignInModal] = useState(false);
  const [isUserSignUpModal, setIsUserSignUpModal] = useState(false); // ✅ signup modal state

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <header
      className="flex items-center justify-between py-4 px-6 md:px-8 bg-white shadow-sm relative z-50"
      data-aos="fade-down"
    >
      {/* Logo Section */}
      <Link to="/">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Da Local Adda Logo"
            className="h-14 w-auto md:h-20"
            data-aos="zoom-in"
          />
          <div className="font-extrabold text-xl md:text-2xl text-black">
            Da Local <span className="text-red-600">Adda</span>
          </div>
        </div>
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-black uppercase tracking-wider">
        <Link to="/" className="hover:text-orange-600 transition" data-aos="fade-up">
          Home
        </Link>
        <Link to="/aboutus" className="hover:text-orange-600 transition" data-aos="fade-up" data-aos-delay="100">
          About
        </Link>
        <Link to="/menulist" className="hover:text-orange-600 transition" data-aos="fade-up" data-aos-delay="200">
          Menu
        </Link>
        <Link to="/contact" className="hover:text-orange-600 transition" data-aos="fade-up" data-aos-delay="300">
          Contact
        </Link>
        <Link to="/Galleries" className="hover:text-orange-600 transition" data-aos="fade-up" data-aos-delay="300">
          Galleries
        </Link>
      </nav>

      {/* Icons + Buttons */}
      <div className="hidden md:flex items-center gap-4">
        {/* Cart Icon */}
        <div className="relative border border-gray-300 rounded-full p-2 cursor-pointer hover:border-red-500 transition" data-aos="zoom-in">
          <ShoppingCart className="w-5 h-5 text-black" />
          <span className="absolute -top-1 -right-1 bg-orange-500 rounded-full text-white text-xs w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>

        {/* Seller Login */}
        <button
          onClick={() => setIsSellerLoginModal(true)}
          data-aos="fade-left"
          className="bg-orange-500 rounded-full text-white text-sm font-semibold uppercase px-5 py-2 hover:bg-black transition"
        >
          Seller Login
        </button>

        {/* signin button */}
        <div
          onClick={() => {
            setIsUserSignInModal(true);
            setIsUserSignUpModal(false); // ✅ close signup if open
          }}
          className="flex items-center gap-2 bg-orange-500 rounded-full text-white text-sm font-semibold uppercase px-5 py-2 hover:bg-black transition"
          data-aos="fade-left"
        >
          <User className="w-5 h-5 text-white cursor-pointer" />
          <button className="uppercase">
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
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
          <Link to="/" className="hover:text-orange-600 transition" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/aboutus" className="hover:text-orange-600 transition" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/menulist" className="hover:text-orange-600 transition" onClick={() => setMenuOpen(false)}>
            Menu
          </Link>
          <Link to="/contact" className="hover:text-orange-600 transition" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/Galleries" className="hover:text-orange-600 transition" onClick={() => setMenuOpen(false)}>
            Galleries
          </Link>

          {/* Mobile Icons */}
          <div className="flex items-center gap-6 mt-4">
            <Search className="w-5 h-5 text-black" />
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-black" />
              <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
          </div>

          {/* Seller Login */}
          <button
            onClick={() => {
              setIsSellerLoginModal(true);
              setMenuOpen(false);
            }}
            className="bg-orange-500 rounded-full text-white px-6 py-2 font-semibold mt-4"
          >
            Seller Login
          </button>
          {/* signin button */}
          <div
            onClick={() => {
              setIsUserSignInModal(true);
              setIsUserSignUpModal(false); // ✅ close signup if open
            }}
            className="flex items-center gap-2 bg-orange-500 rounded-full text-white text-sm font-semibold uppercase px-5 py-2 hover:bg-black transition"

          >
            <User className="w-5 h-5 text-white cursor-pointer" />
            <button className="uppercase">
              Sign In
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      <SellerLoginModal isOpen={isSellerLoginModal} onClose={() => setIsSellerLoginModal(false)} />

      <SignInModal
        isOpen={isUserSignInModal}
        onClose={() => setIsUserSignInModal(false)}
        onSwitchToSignUp={() => {
          setIsUserSignUpModal(true);
          setIsUserSignInModal(false);
        }}
      />

      <UserSignUpModal
        isOpen={isUserSignUpModal}
        onClose={() => setIsUserSignUpModal(false)}
        onSwitchToSignIn={() => {
          setIsUserSignInModal(true);
          setIsUserSignUpModal(false);
        }}
      />
    </header>
  );
};

export default Navbar;
