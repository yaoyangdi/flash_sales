import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Announcement from './components/Annoucement';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from './pages/Register';

function App() {
  return (
    <>
      <Router>
        <Announcement/>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/register" element = {<Register/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;