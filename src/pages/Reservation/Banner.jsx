import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat text-white"
            style={{
                backgroundImage:
                    "url('https://cdn.pixabay.com/photo/2019/09/12/18/29/street-cafe-4472312_1280.jpg')", // replace with your image path
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">
                <Link to='/'> <p className="uppercase tracking-[4px] text-sm text-gray-300" data-aos="fade-right">Home</p></Link>

                <h1 className="text-5xl sm:text-6xl font-extrabold mt-2 mb-4" data-aos="fade-right">
                    Reservation
                </h1>

                {/* Red underline */}
                <div className="h-[4px] w-16 bg-red-600 mb-6"></div>

                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl" data-aos="fade-right">
                    Capitalise on low hanging fruit to identify a ballpark value added
                    activity to beta performance test. Override the digital divide.
                </p>
            </div>
        </section>
    );
};

export default Banner;
