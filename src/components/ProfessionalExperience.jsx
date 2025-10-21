import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProfessionalExperience.css';

function ProfessionalExperience() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="professional-experience" className="professional-experience">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Expérience professionnelle
      </motion.h2>
      <motion.div 
        className="experience-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="experience-logo">
          <img src="/images/ministere-logo.png" alt="Ministère des Armées" />
        </div>
        <div className="experience-content">
          <h3 className="experience-title">Stage de deuxième année post-bac</h3>
          <p className="experience-company">Ministère des Armées</p>
          <p className="experience-duration">6 janvier - 4 juillet 2025</p>
        </div>
        <div className="experience-footer">
          <p className="more">En savoir plus</p>
          <motion.button 
            className="experience-badge"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={openModal}
          >
            <img src="/images/Send.png" alt="" />
          </motion.button>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>×</button>
              
              <div className="modal-header">
                <div className="modal-logo">
                  <img src="/images/ministere-logo.png" alt="Ministère des Armées" />
                </div>
                <div className="modal-title-section">
                  <h3 className="modal-title">Stage de deuxième année post-bac</h3>
                  <p className="modal-company">Ministère des Armées</p>
                  <p className="modal-duration">6 janvier - 4 juillet 2025 • 6 mois</p>
                </div>
              </div>

              <div className="modal-body">
                <h4>Mission</h4>
                <p>
                  Au sein d'une équipe de développement, j'ai participé à un projet de télégestion 
                  d'équipements radiofréquence en contribuant à différents aspects techniques du 
                  front-end et du back-end.
                </p>

                <h4>Technologies utilisées</h4>
                <div className="modal-tech-stack">
                  <span className="tech-badge">Angular</span>
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">FastAPI</span>
                  <span className="tech-badge">PostgreSQL</span>
                  <span className="tech-badge">Git</span>
                </div>

                <h4>Réalisations</h4>
                <ul>
                  <li>Enrichissement d'une IHM en Angular : ajout de fonctionnalités, corrections de bugs, amélioration de l'expérience utilisateur</li>
                  <li>Développement d'un webservice CRUD en Python avec FastAPI</li>
                  <li>Utilisation de PostgreSQL comme base de données</li>
                  <li>Travail en équipe avec Git</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ProfessionalExperience;
