import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

function Header() {
  return (
    <header id="header" className="header">
      <motion.div 
        className="header-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="header-greeting"><span className="highlight">Ethan Ledouble</span></p>
        <h1 className="header-title">Étudiant à <span className="highlight">Epitech</span></h1>
        <p className="header-subtitle">Je prépare un Master Architecte de Systèmes d'information</p>
      </motion.div>
      <motion.div 
        className="header-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img src="/images/MOIimage.png" alt="Ethan Ledouble" />
      </motion.div>
    </header>
  );
}

export default Header;
