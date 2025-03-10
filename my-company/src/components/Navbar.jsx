// src/Navbar.jsx
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


// function Navbar() {
//   return (
//     <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
//       <ul style={{ listStyleType: 'none', display: 'flex', gap: '10px' }}>
//         <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
//         <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></li>
//         <li><Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link></li>
//         <li><Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

// src/Navbar.jsx
// src/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <ul style={{
        listStyleType: 'none',
        display: 'flex',
        gap: '20px',
        justifyContent: 'center'  // Added justifyContent to center the nav items
      }}>
        {/* Link to Home page */}
        <li>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
            Home
          </Link>
        </li>
        
        {/* Link to About page */}
        <li>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>
            About
          </Link>
        </li>
        
        {/* Link to Services page */}
        <li>
          <Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>
            Services
          </Link>
        </li>
        
        {/* Link to Contact page */}
        <li>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

