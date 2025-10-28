import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, User, Clock, Calendar, ChevronDown } from "lucide-react";
import Location from "../Contact/Location";
import Banner from "./Banner";

const Reservation = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Banner />
      <section className="bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Image */}
          <div data-aos="fade-right" className="w-full">
            <img
              src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/reservation-thumb-1-1.jpg"
              alt="Restaurant Interior"
              className="rounded-2xl shadow-xl w-full object-cover h-[250px] sm:h-[350px] md:h-[450px]"
            />
          </div>

          {/* Right Form */}
          <div data-aos="fade-left" className="space-y-5 w-full">
            <p className="text-green-700 uppercase font-semibold tracking-wide text-sm sm:text-base">
              Reservation Table
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Book a <span className="text-red-600">Table</span>
            </h2>

            <form className="space-y-4">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border rounded-full py-3 pl-12 pr-4 focus:ring-2 focus:ring-red-500 outline-none text-sm sm:text-base"
                />
                <User
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={20}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded-full py-3 pl-12 pr-4 focus:ring-2 focus:ring-red-500 outline-none text-sm sm:text-base"
                />
                <Mail
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={20}
                />
              </div>

              {/* Select Person */}
              <div className="relative">
                <select
                  className="w-full border rounded-full py-3 pl-12 pr-8 appearance-none focus:ring-2 focus:ring-red-500 outline-none text-sm sm:text-base"
                >
                  <option>Select Person</option>
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4+ People</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-3.5 text-gray-400"
                  size={20}
                />
              </div>

              {/* Date */}
              <div className="relative">
                <input
                  type="date"
                  className="w-full border rounded-full py-3 pl-12 pr-4 focus:ring-2 focus:ring-red-500 outline-none text-sm sm:text-base"
                />
                <Calendar
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={20}
                />
              </div>

              {/* Time */}
              <div className="relative">
                <input
                  type="time"
                  className="w-full border rounded-full py-3 pl-12 pr-4 focus:ring-2 focus:ring-red-500 outline-none text-sm sm:text-base"
                />
                <Clock
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={20}
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="bg-orange-600 hover:bg-black text-white font-semibold py-3 px-8 rounded-full transition duration-300 w-full sm:w-auto"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>

      <Location />
    </>
  );
};

export default Reservation;
