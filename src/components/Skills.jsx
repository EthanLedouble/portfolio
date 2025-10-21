import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import { 
  SiAngular, 
  SiTypescript, 
  SiNodedotjs, 
  SiPhp, 
  SiPython, 
  SiFastapi,
  SiMongodb,
  SiGit,
  SiDocker,
  SiLinux,
  SiFigma,
  SiPostgresql,
  SiLooker,
  SiClaude,
  SiOpenai
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { FaJava } from 'react-icons/fa';

function Skills() {
  const skillCategories = [
    {
      title: 'Développement',
      skills: [
        { name: 'Angular', icon: <SiAngular /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'PHP', icon: <SiPhp /> },
        { name: 'FastAPI', icon: <SiFastapi /> }
      ]
    },
    {
      title: 'IA / Data',
      skills: [
        { name: 'Python', icon: <SiPython /> },
        { name: 'SQL', icon: <SiPostgresql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Looker', icon: <SiLooker /> },
        { name: 'Claude', icon: <SiClaude /> },
        { name: 'OpenAI', icon: <SiOpenai /> }
      ]
    },
    {
      title: 'Outils & DevOps',
      skills: [
        { name: 'Git', icon: <SiGit /> },
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'VS Code', icon: <VscCode /> },
        { name: 'Linux', icon: <SiLinux /> },
        { name: 'Figma', icon: <SiFigma /> }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Mes compétences
      </motion.h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className="skill-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
