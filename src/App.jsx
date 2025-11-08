import React from 'react'
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
import Gallery from './pages/Galleries/Gallery'
import Dashboard from './pages/Admin/Dashboard/Dashboard'
import AddMenu from './pages/Admin/Menu/AddMenu'
import MenuuList from './pages/Admin/Menu/MenuuList'
import Categories from './pages/Admin/Menu/Categories'
// import ItemDetails from './pages/ItemDetails/ItemDetails'

const App = () => {
  return (
    <>
      <Routes>
        {/* Main User Layout */}
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="menulist" element={<MenuList />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="category/:name" element={<CategoryPage />} />
          <Route path="usersignin" element={<SignInModal />} />
          <Route path="galleries" element={<Gallery />} />
          {/* <Route path="item/:id" element={<ItemDetails />} /> */}
        </Route>

        {/* Admin Panel Routes under AdminLayout */}
        <Route path="/adminportal" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="menu/add" element={<AddMenu />} />
          <Route path="menu/list" element={<MenuuList />} />
          <Route path="menu/category" element={<Categories />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
