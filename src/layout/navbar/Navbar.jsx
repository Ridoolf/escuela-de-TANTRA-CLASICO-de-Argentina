import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src='src/assets/logo.png' alt="Tantra Clásico de Argentina" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isOpen ? 'open' : ''}`}></span>
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><NavLink to="/prensa" onClick={closeMenu}>Prensa</NavLink></li>
        <li><NavLink to="/contacto" onClick={closeMenu}>Contacto</NavLink></li>
        <li><NavLink to="/internacional" onClick={closeMenu}>Internacional</NavLink></li>
      </ul>
    </nav>
  );
};
