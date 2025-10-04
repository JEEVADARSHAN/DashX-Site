import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/dashX_plain.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container" style={{ height:'100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',}}>
        <NavLink to="/">
          <img src={logo} alt="DashX Logo" style={{ height: '60px', cursor: 'pointer', boxShadow: 'none'}} />
        </NavLink>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', margin: 0, padding: 0 }}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              style={({ isActive }) => ({
                color: isActive ? 'var(--btn-bg)' : 'var(--text-color)',
                fontWeight: isActive ? '700' : '400',
                transition: 'color 0.3s ease',
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/features"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/download"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}              
            >
              Download
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/privacy"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Privacy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
