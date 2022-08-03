import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Announcement from './components/Annoucement';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import NewFlashSale from './pages/NewFlashSale';
import Product from './pages/Product';

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
          <Route path="/product" element={<Product/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
