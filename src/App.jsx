import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import AdminLayout from './components/AdminLayOut/AdminLayOut'
import Home from './pages/Home/Home'
import About from './pages/AboutUs/About'
import Contact from './pages/Contact/Contact'
import MenuList from './pages/Menu/MenuList'
import Reservation from './pages/Reservation/Reservation'
import CategoryPage from './pages/CategotyPage/CategoryPage'
import SignInModal from './Modal/UserSigninModal'
// import ItemDetails from './pages/ItemDetails/ItemDetails'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/menulist' element={<MenuList />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path="/category/:name" element={<CategoryPage />} />
          <Route path='/usersignin' element={<SignInModal />} />
          <Route path='/usersignup' element={<user/>} />


          {/* <Route path="/item/:id" element={<ItemDetails />} /> */}

        </Route>
        {/* Admin Panel Routes under AdminLayout */}
        <Route path="/adminportal" element={<AdminLayout />}>

        </Route>
      </Routes>
    </>
  )
}

export default App
