import { React, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Announcement from '../components/Annoucement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Cart from './Cart'
import Home from './Home'
import NewFlashSale from './NewFlashSale'
import NewProduct from './NewProduct'
import Notfound from './Notfound'
import Product from './Product'

import Loader from './Loader'
import styled from "styled-components"

const Main = styled.div`
  display: ${props=>props.display}
`;

const Loading = styled.div`
  display: ${props=>props.display}
`;

const Index = () => {
  const [loading, setLoading] =useState(false);
  const [progress, setProgress] = useState(10);

  return (
    <>
      <Main display={loading?"none":"initial"}>
        <Announcement/>
          <Navbar/>
          <Routes>
              <Route path="/" element = {<Home setLoading={setLoading} setProgress={setProgress}/>} />
              <Route path="/newflashsale" element = {<NewFlashSale/>}/>
              <Route path="/newproduct" element = {<NewProduct/>}/>
              <Route path="/product/:id" element={<Product/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="*" element={<Notfound/>}/>
          </Routes>
          <Footer/>
      </Main>
      <Loading display={loading?"initial":"none"}>
        <Loader progress={progress}/>
      </Loading>
    </>
  )
}

export default Index
