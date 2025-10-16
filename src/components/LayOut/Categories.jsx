import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
    { name: 'Burger', img: 'https://angular.pixelstrap.net/zomo/assets/images/product/p-3.png' },
    { name: 'Fries', img: 'https://angular.pixelstrap.net/zomo/assets/images/product/p-5.png' },
    { name: 'Boritto', img: 'https://angular.pixelstrap.net/zomo/assets/images/product/p-6.png' },
    { name: 'Taco', img: 'https://angular.pixelstrap.net/zomo/assets/images/product/p-7.png' },
    { name: 'Pizza', img: 'https://angular.pixelstrap.net/zomo/assets/images/product/p-8.png' },
    { name: 'Noodles', img: 'https://angular.pixelstrap.net/zomo/assets/images/product/p-9.png' },
    { name: 'Burger', img: 'https://angular.pixelstrap.net/zomo/assets/images/product/p-3.png' },
    { name: 'Fries', img: 'https://angular.pixelstrap.net/zomo/assets/images/product/p-5.png' },
    { name: 'Boritto', img: 'https://angular.pixelstrap.net/zomo/assets/images/product/p-6.png' },
    { name: 'Taco', img: 'https://angular.pixelstrap.net/zomo/assets/images/product/p-7.png' },
    { name: 'Pizza', img: 'https://angular.pixelstrap.net/zomo/assets/images/product/p-8.png' },
    { name: 'Noodles', img: 'https://angular.pixelstrap.net/zomo/assets/images/product/p-9.png' },
];

const Categories = () => {
    return (
        <section className="relative px-6 py-12">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="mb-8">
                    <h2 className="text-sm text-center font-extrabold leading-tight italic text-black uppercase">Food Category</h2>
                    <p className="text-black text-3xl font-extrabold leading-tight text-center uppercase mt-4">
                       Browse Fast Foods <span className='text-red-600'>Category.</span> 
                    </p>
                    <img src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/title-shape.png" alt="" className='mx-auto mt-4' />
                </div>

                {/* Custom Arrows */}
                <div className="absolute top-6 right-8 z-20 flex items-center gap-3">
                    <button className="swiper-button-prev-custom bg-white shadow w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
                        <ChevronLeft className="text-black" />
                    </button>
                    <button className="swiper-button-next-custom bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700">
                        <ChevronRight />
                    </button>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                        320: { slidesPerView: 1.5 },
                        640: { slidesPerView: 2.5 },
                        768: { slidesPerView: 3.5 },
                        1024: { slidesPerView: 4.5 },
                    }}
                    className="pt-4"
                >
                    {categories.map((cat, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#f7f2e2] rounded-xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md hover:scale-105 transition-all duration-500 cursor-pointer">
                                <img src={cat.img} alt={cat.name} className="h-16 mb-3" />
                                <h3 className="text-lg font-medium text-black">{cat.name}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Categories;

