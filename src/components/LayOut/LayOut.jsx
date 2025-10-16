import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from '../Common/Topbar'
import Header from '../Common/Header'
import Footer from '../Common/Footer'


const LayOut = () => {
    return (
        <>
            <Topbar />
            <Header />
            <main>

                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default LayOut