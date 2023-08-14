
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../Components/Home';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Toogle from '../Components/Toogle';
import AnimalCard from '../AnimalCard';

function NavBar() {
  return (
    <>
    <BrowserRouter>
      <nav className="navbar">
        <img src="./images/logo2.jpeg" alt="Logo" className="logo" />
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
          <li><Link to="/animalCard" className="nav-link">Booking</Link></li>
          <li><Link to="/toogle" className="nav-link">Stores</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/animalCard" element={<AnimalCard />} />
        <Route path="/Toogle" element={<Toogle />} />
      </Routes>
      
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default NavBar;

