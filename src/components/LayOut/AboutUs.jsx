import React from 'react'
import leaf from '../../assets/images/leaf.png'

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center px-6 py-2 mt-6 lg:mt-10 gap-10 md:gap-6">
        {/* Text Section */}


        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/about_1_1.png"
            alt="pizza"
            className="w-3/4 sm:w-2/3 md:w-[80%] lg:w-[70%] max-w-md object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className='font-extrabold leading-tight italic'>About our restaurant</h1>
          <h1 className="text-3xl md:text-4xl  text-gray-900 mb-4 mt-2 uppercase font-extrabold leading-tight">
            We invite you to visit our Fast food <span className='text-red-600 uppercase font-extrabold leading-tight'>Restaurant</span>
          </h1>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            At the heart of our kitchen are bold flavors, high-quality ingredients, and a commitment to consistency. From juicy burgers, crispy fries, and cheesy pizzas to spicy wraps and refreshing drinks, every item on our menu is made to order and packed with taste.
          </p>
          <h1 className='mt-2 leading-snug font-bold'>Dusmant Meher</h1>
          <h2 className='text-sm text-gray-800'>Restaurant owner</h2>
          <div className='flex justify-between gap-4'>
            <div>
              <button className='border px-2 py-2 bg-red-600 text-white mt-6 hover:bg-transparent font-extrabold leading-tight hover:bg-black hover:text-white hover:scale-105 transition-all duration-500 cursor-pointer' >
                VISIT OUR RESTAURANT
              </button>
            </div>
            <div className='hidden lg:flex md:flex'>
              <img src={leaf} alt="" className='h-20 animate-bounce' />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AboutUs
