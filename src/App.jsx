import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import AdminLayout from './components/AdminLayOut/AdminLayOut'
import Home from './pages/Home/Home'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />

        </Route>
        {/* Admin Panel Routes under AdminLayout */}
        <Route path="/adminportal" element={<AdminLayout />}>

        </Route>
      </Routes>
    </>
  )
}

export default App
