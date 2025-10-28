import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Clock, MessageCircle } from "lucide-react";
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#022a24] text-gray-300 relative overflow-hidden">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-10 text-center md:text-left relative z-10">
        {/* Left Section */}
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Da Local Adda</h3>
          <div className="w-10 h-[2px] bg-orange-500 mb-4 mx-auto md:mx-0"></div>
          <ul className="space-y-2">
            {["About Us", "Our Service", "Latest Blog", "Our Shop", "Contact Us", "Reservation"].map(
              (item, i) => (
                <li key={i} className="hover:text-orange-400 transition-colors duration-200 cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <img src={logo} alt="" className="h-60 mx-auto" />
        </div>
        {/* Middle Section */}
        <div className="flex flex-col items-center justify-center">
          <Clock size={40} className="text-gray-200 mb-3" />
          <p className="text-orange-400 font-semibold mb-2">We’re currently open!</p>
          <p>Opening Hours: 8:00AM To 10:00PM</p>
          <p>Opening Hours: 8:00AM To 10:00PM</p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 border border-gray-500 rounded-full flex items-center justify-center hover:bg-orange-400 hover:text-black transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-white font-bold text-lg mb-3">Favorite Menus</h3>
          <div className="w-10 h-[2px] bg-orange-500 mb-4 mx-auto md:mx-0"></div>
          <ul className="space-y-2">
            {["Burgers", "Crispy Flavors", "Breakfast Menu", "Desserts", "Kids Menus", "Beverages"].map(
              (item, i) => (
                <li key={i} className="hover:text-orange-400 transition-colors duration-200 cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm flex flex-col md:flex-row items-center justify-between px-6 max-w-7xl mx-auto">
        <p>
          © Copyright 2025{" "}
          <span className="text-orange-400 font-semibold">Barab</span>. All Rights Reserved.
        </p>
        <div className="flex flex-wrap gap-3 mt-2 md:mt-0">
          <a href="#" className="hover:text-orange-400">Privacy Policy</a>
          <span className="text-orange-400">•</span>
          <a href="#" className="hover:text-orange-400">Terms & Condition</a>
          <span className="text-orange-400">•</span>
          <a href="#" className="hover:text-orange-400">Support Policy</a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-6 right-6 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
