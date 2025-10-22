import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        À propos de moi
      </motion.h2>
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p>
          Étudiant en Master Architecte des Systèmes d'information à Epitech, je me passionne pour le développement web et 
          la création de solutions numériques innovantes. Curieux et créatif projet, j'aime transformer une idée en application concrète.
        </p>
        <p>
          Après plusieurs projets d'école et en stage en entreprise, je développe une solide base en développement full-stack, 
          entre-temps avec culture du travail en équipe et de l'innovation.
        </p>
        <p>
          Aujourd'hui, je suis à la recherche d'une alternance à partir de janvier 2026 afin de continuer à progresser tout en 
          contribuant à des projets techniques ambitieux au sein d'une entreprise.
        </p>
        <motion.button 
          className="cv-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open(`${process.env.PUBLIC_URL}/images/CV_LEDOUBLE_ETHAN.pdf`, '_blank')}
        >
          Télécharger le cv
        </motion.button>
      </motion.div>
    </section>
  );
}

export default About;
