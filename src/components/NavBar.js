
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Booking from './Booking';
import Store from './Store';
import Footer from './Footer';

function NavBar() {
  return (
    <>
    <BrowserRouter>
      <nav className="navbar">
        <img src="./images/logo2.jpeg" alt="Logo" className="logo" />
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
          <li><Link to="/booking" className="nav-link">Booking</Link></li>
          <li><Link to="/store" className="nav-link">Store</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default NavBar;

