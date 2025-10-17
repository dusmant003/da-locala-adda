import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Location = () => {
  const leftRef = useRef(null);
  const [leftHeight, setLeftHeight] = useState("auto");

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Match map height with left section
    const updateHeight = () => {
      if (leftRef.current) {
        setLeftHeight(`${leftRef.current.offsetHeight}px`);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-[#FEEEDB]">
      {/* Left Side */}
      <div
        ref={leftRef}
        data-aos="fade-right"
        className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-8 md:p-14 "
      >
        <div className="max-w-lg">
          <h4 className="text-green-700 font-semibold tracking-wide mb-2">
            RESTAURANT LOCATION
          </h4>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-center md:text-left text-black">
            VISIT OUR RESTAURANT
          </h1>

          <p className="text-gray-700 text-lg text-center md:text-left mb-3">
            213 W Tomichi Ave, Gunnison, CO 81230, United States
          </p>

          <div className="w-12 border-b-4 border-orange-500 mx-auto md:mx-0 my-4"></div>

          <p className="text-gray-700 text-center md:text-left">
            Monday - Saturday:{" "}
            <span className="font-medium">5:00pm – 10:00pm</span>
          </p>
    
          {/* Pizza Image */}
          <img
            src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/about_1_1.png"
            alt="pizza"
            className="w-32 mt-8 mx-auto md:mx-0"
          />
        </div>
      </div>

      {/* Right Side (Map) */}
      <div
        data-aos="fade-left"
        className="w-full md:w-1/2"
        style={{ height: leftHeight }}
      >
        <iframe
          title="Restaurant Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19705.491688482015!2d-106.93897426893398!3d38.54582428774859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8716c1cbfd6b7c4f%3A0x97c3f24b7e64cd53!2sGunnison%2C%20CO%2081230%2C%20USA!5e0!3m2!1sen!2sin!4v1697030440543!5m2!1sen!2sin"
          className="w-full h-full rounded-none md:rounded-l-none md:rounded-r-3xl shadow-lg"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
