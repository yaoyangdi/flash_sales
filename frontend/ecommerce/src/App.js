import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Index from './pages/Index';

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
