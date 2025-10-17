import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import AdminLayout from './components/AdminLayOut/AdminLayOut'
import Home from './pages/Home/Home'
import About from './pages/AboutUs/About'
import Contact from './pages/Contact/Contact'
import MenuList from './pages/Menu/MenuList'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/menulist' element={<MenuList />} />

        </Route>
        {/* Admin Panel Routes under AdminLayout */}
        <Route path="/adminportal" element={<AdminLayout />}>

        </Route>
      </Routes>
    </>
  )
}

export default App
