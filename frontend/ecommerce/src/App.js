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
import Index from './pages/app';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element = {<Register/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="*" element = {<Index/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
