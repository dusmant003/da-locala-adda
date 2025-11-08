import React from 'react'
import Banner from './Banner'
import PhotoSection from '../AboutUs/PhotoSection'
import Location from '../Contact/Location'

const Gallery = () => {
    return (
        <div className="flex flex-col w-full overflow-x-hidden">
            {/* Banner Section */}
            <section className="w-full">
                <Banner />
            </section>

            {/* Gallery Photos Section */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-6">
                <div className="max-w-7xl mx-auto">
                    <PhotoSection />
                </div>
            </section>

            {/* Location Section */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <Location />
                </div>
            </section>
        </div>
    )
}

export default Gallery
