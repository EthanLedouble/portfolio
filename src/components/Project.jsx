import React from 'react';
import { motion } from 'framer-motion';
import './Project.css';

function Project() {
  const projects = [
    {
      title: 'Jobboarding',
      description: 'Angular - FastAPI - postgreSQL',
      image: '/images/idylleimage.png',
      link: 'https://github.com/EthanLedouble/Jobboarding'
    },
    {
      title: 'Back2Fest',
      description: 'React Native - Firebase database',
      image: '/images/firewaveimage.png',
      link: 'https://github.com/RomainConte/Back2Fest'
    },
    {
      title: 'Site internet idylle',
      description: 'Wordpress',
      image: '/images/jobboardimage.png',
      link: 'https://github.com/EthanLedouble/Jobboarding'
    }
  ];

  return (
    <section id="project" className="project">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Mes projets
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              <motion.button 
                className="project-link"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.open(project.link, '_blank')}
              >
                <img src="/images/Send.png" alt="" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Project;
