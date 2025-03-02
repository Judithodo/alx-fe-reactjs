// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <Link to="/" style={{ marginRight: '20px', color: 'white' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '20px', color: 'white' }}>About</Link>
      <Link to="/services" style={{ marginRight: '20px', color: 'white' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
