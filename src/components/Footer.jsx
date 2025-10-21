import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2025 Ethan Ledouble. Tous droits réservés.</p>
        <div className="footer-links">
          <a 
            href="https://github.com/EthanLedouble" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
            aria-label="GitHub"
          >
            <FaGithub className="footer-icon" />
          </a>
          <a 
            href="https://www.linkedin.com/in/ethan-ledouble/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="footer-icon" />
          </a>
          <a 
            href="mailto:ethan.ledouble@epitech.eu" 
            className="footer-link"
            aria-label="Email"
          >
            <FaEnvelope className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
