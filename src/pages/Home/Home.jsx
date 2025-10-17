import React from 'react'
import Hero from '../../components/LayOut/Hero'
import Categories from '../../components/LayOut/Categories'
import AboutUs from '../../components/LayOut/AboutUs'
import MenuCard from '../../components/LayOut/MenuCard'

const Home = () => {
    return (
        <>
            <Hero />
            <Categories/>
            <AboutUs/>
            <MenuCard/>

        </>
    )
}

export default Home