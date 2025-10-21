import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Project'
import ProfessionalExperience from '../components/ProfessionalExperience'
import Footer from '../components/Footer'
import './home.css'

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Project />
      <ProfessionalExperience />
      <Footer />
    </div>
  )
}
