import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav">
      <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={isOpen ? 'open' : ''}></span>
        <span className={isOpen ? 'open' : ''}></span>
        <span className={isOpen ? 'open' : ''}></span>
      </button>
      
      <ul className={isOpen ? 'nav-menu open' : 'nav-menu'}>
        <li>
          <Link 
            to="header" 
            smooth={true} 
            duration={500} 
            offset={-70} 
            spy={true} 
            activeClass="active"
            onClick={closeMenu}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            offset={-70} 
            spy={true} 
            activeClass="active"
            onClick={closeMenu}
          >
            À propos
          </Link>
        </li>
        <li>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500} 
            offset={-70} 
            spy={true} 
            activeClass="active"
            onClick={closeMenu}
          >
            Compétences
          </Link>
        </li>
        <li>
          <Link 
            to="project" 
            smooth={true} 
            duration={500} 
            offset={-70} 
            spy={true} 
            activeClass="active"
            onClick={closeMenu}
          >
            Projet
          </Link>
        </li>
        <li>
          <Link 
            to="professional-experience" 
            smooth={true} 
            duration={500} 
            offset={-70} 
            spy={true} 
            activeClass="active"
            onClick={closeMenu}
          >
            Expérience professionnelle
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
