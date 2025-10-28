import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Tag } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Welcome to Da Local Adda",
    subtitle: "Handcrafted with Love",
    image: "https://images.unsplash.com/photo-1567880905822-56f8e06fe630",
    offer: "Buy 2 Get 1 Free on All Specialty Drinks",
    gradient: 'from-orange-900/70 via-orange-800/60 to-transparent'
  },
  {
    id: 2,
    title: "Artisan Coffee Experience",
    subtitle: "Freshly Roasted Beans Everyday",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    offer: "20% Off on Weekend Orders",
    gradient: 'from-amber-900/70 via-amber-800/60 to-transparent'
  },
  {
    id: 3,
    title: "Taste the Local Adda Magic",
    subtitle: "Your Everyday Café Spot",
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247",
    offer: "Free Muffin on First Order",
    gradient: 'from-stone-900/70 via-stone-800/60 to-transparent'
  },
];

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh]">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
              />

              {/* Orange Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} `}></div>

              {/* Text */}
              <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 lg:px-24 text-white">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 font-light max-w-2xl">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex items-center bg-white text-black px-5 py-3 rounded-full shadow-lg">
                    <span className="bg-orange-500 text-white rounded-full p-2 mr-3">
                      <Tag size={18} />
                    </span>
                    <p className="font-semibold">{slide.offer}</p>
                  </div>

                  <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="custom-prev hidden lg:flex absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white items-center justify-center cursor-pointer z-20 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>

        <div className="custom-next hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white items-center justify-center cursor-pointer z-20 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>

      </Swiper>
      <img
        src="https://angular.pixelstrap.net/zomo/assets/images/scooter.png"
        alt="Delivery"
        className="absolute bottom-0 left-20 w-20 md:w-40 lg:w-28 z-50 animate-bounce hidden md:flex lg:flex"
      />

      {/* Pagination dots position */}
      <div className="swiper-pagination !bottom-6"></div>
    </div>
  );
};

export default Hero;
