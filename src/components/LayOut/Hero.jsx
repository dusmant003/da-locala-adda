import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full lg:h-[85vh] sm:h-[40vh] flex flex-col md:flex-row items-center justify-between bg-cover bg-center px-6 md:px-16 overflow-hidden"
      style={{
        backgroundImage: `url(https://cdn.pixabay.com/photo/2020/10/05/21/30/hamburger-5630800_1280.jpg)`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Left Content */}
      <div
        className="relative z-10 text-white max-w-xl space-y-5 text-center md:text-left mt-10 md:mt-0"
        data-aos="fade-right"
      >
        <span className="bg-red-600 px-3 py-1text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider">
          Da Local Adda Cafe
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
          Delicious Fast food<br /> For today
        </h1>

        <button
          className="bg-red-600 border border-transparent hover:bg-transparent hover:border-red-600 hover:text-white text-white px-6 py-3 sm:px-8 sm:py-4 font-semibold text-sm sm:text-base rounded transition-all duration-300"
          data-aos="fade-up"
        >
          Our Menu
        </button>

      </div>

      {/* Right Side – Rotating Pizza */}
      <div
        className="relative z-10 mt-10 md:mt-0 "
        data-aos="fade-left"
        style={{
          transform: `rotate(${scrollY / 2}deg)`,
          transition: "transform 0.1s linear",
        }}
      >
        <img
          src="https://cdn.pixabay.com/photo/2017/12/05/20/10/pizza-3000285_1280.png"
          alt="Rotating Pizza"
          className="w-56 h-56 lg:w-72 lg:h-72 object-cover rounded-full"
        />
      </div>
      <img
        src="https://angular.pixelstrap.net/zomo/assets/images/scooter.png"
        alt="Delivery"
        className="absolute bottom-0 left-60 w-40 md:w-20 lg:w-20 animate-bounce"
      />
    </section>
  );
};

export default Hero;
