import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Announcement from './components/Annoucement';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import NewFlashSale from './pages/NewFlashSale';
import Product from './pages/Product';
import Notfound from './pages/Notfound';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Router>
        <Announcement/>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/register" element = {<Register/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/flashsales" element = {<NewFlashSale/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
