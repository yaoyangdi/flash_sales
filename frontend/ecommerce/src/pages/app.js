import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Announcement from '../components/Annoucement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Cart from './Cart'
import Home from './Home'
import NewFlashSale from './NewFlashSale'
import Notfound from './Notfound'
import Product from './Product'

const Index = () => {
  return (
    <>
        <Announcement/>
        <Navbar/>
        <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/flashsales" element = {<NewFlashSale/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<Notfound/>}/>
        </Routes>
        <Footer/>
    </>

  )
}

export default Index
