import React from "react";
import { MapPin, Phone, Clock, User, Mail, Pencil } from "lucide-react";
import leaf from "../../assets/images/leaf.png";

const Form = () => {
  return (
    <section className="bg-[#fff8ef] py-14 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE - Contact Info */}
        <div className="bg-[#f9f1de] p-8 sm:p-10 rounded-[30px] sm:rounded-[40px] relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 text-center sm:text-left">
            CONTACT <span className="text-red-600">INFORMATION</span>
          </h2>
          <p className="text-gray-600 mb-10 text-sm sm:text-base leading-relaxed text-center sm:text-left">
            Relax and enjoy your food in our cozy restaurant, or take it to go.
            Great taste, great service — every visit is a flavorful experience
            worth coming back for.
          </p>

          {/* Address */}
          <div className="bg-white rounded-2xl sm:rounded-full flex flex-col sm:flex-row items-center p-4 mb-6 shadow-sm text-center sm:text-left">
            <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white mb-3 sm:mb-0 sm:mr-4">
              <MapPin size={22} />
            </div>
            <div>
              <h4 className="font-bold text-black">Address</h4>
              <p className="text-gray-500 text-sm">
                Junagarh, Kalampur Road, Near Dream Gym
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-2xl sm:rounded-full flex flex-col sm:flex-row items-center p-4 mb-6 shadow-sm text-center sm:text-left">
            <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white mb-3 sm:mb-0 sm:mr-4">
              <Phone size={22} />
            </div>
            <div>
              <h4 className="font-bold text-black">Contact Info</h4>
              <p className="text-gray-500 text-sm">Mobile: +256-6547-98749</p>
              <p className="text-gray-500 text-sm">Email: info@barab.com</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="bg-white rounded-2xl sm:rounded-full flex flex-col sm:flex-row items-center p-4 shadow-sm text-center sm:text-left">
            <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white mb-3 sm:mb-0 sm:mr-4">
              <Clock size={22} />
            </div>
            <div>
              <h4 className="font-bold text-black">Opening Hours</h4>
              <p className="text-gray-500 text-sm">
                Monday - Saturday: 5:00am - 10:00pm
              </p>
            </div>
          </div>

          {/* Leaf image */}
          <img
            src={leaf}
            alt="leaf"
            className="absolute right-6 bottom-6 w-20 sm:w-28 opacity-80 hidden md:block"
          />
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 text-center sm:text-left">
            Get In <span className="text-red-600">Touch!</span>
          </h2>

          <form className="space-y-4">
            {/* Name & Email */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-[#fcf7e8] rounded-full px-6 py-4 text-gray-700 outline-none text-sm sm:text-base"
                />
                <User
                  size={18}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
              </div>
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-[#fcf7e8] rounded-full px-6 py-4 text-gray-700 outline-none text-sm sm:text-base"
                />
                <Mail
                  size={18}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                placeholder="Write your message..."
                rows="5"
                className="w-full bg-[#fcf7e8] rounded-3xl px-6 py-4 text-gray-700 outline-none resize-none text-sm sm:text-base"
              ></textarea>
              <Pencil
                size={18}
                className="absolute right-6 top-6 text-gray-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full sm:w-auto bg-black text-white rounded-full px-8 py-4 font-semibold hover:bg-red-600 transition-all text-sm sm:text-base"
            >
              SEND MESSAGE NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
