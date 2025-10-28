import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter } from 'lucide-react'
import React from 'react'


const Topbar = () => {
  return (
    <>
      <div className='bg-[#062b24] text-white text-sm flex-wrap items-center justify-between px-6 py-2 hidden lg:flex'>
        <div className='flex flex-wrap items-center gap-6' data-aos="fade-right">
          {/* address */}
          <div className='flex items-center gap-2 border-r border-gray-600 pr-4'>
            <MapPin className='text-orange-500 h-4 w-4' />
            <span>8502 Preston Rd. Inglewood, Maine 98380</span>
          </div>
          {/* email */}
          <div className='flex items-center border-r border-gray-600 pr-4 gap-2'>
            <Mail className="text-orange-500 w-4 h-4" />
            <span>info@barab.com</span>
          </div>
          {/* opening hour */}
          <div className='flex items-center gap-2'>
            <Clock className="text-orange-500 w-4 h-4" />
            <span>Opening Hour: Mon to Sat - 9am to 5pm</span>
          </div>
        </div>
        {/* right side :phonr & social icons */}
        <div className='flex flex-wrap items-center gap-6' data-aos="fade-left">
          <div className='flex items-center gap-2 border-r border-gray-600 pr-4'>
            <Phone className="text-orange-500 w-4 h-4" />
            <span>1-800-123-4567</span>
          </div>
          {/* social media icons */}
          <div className='flex items-center gap-2'>
            <a href="#" className="border border-gray-500 rounded-full p-1 hover:bg-yellow-500 transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="border border-gray-500 rounded-full p-1 hover:bg-yellow-500 transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="border border-gray-500 rounded-full p-1 hover:bg-yellow-500 transition-all">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar