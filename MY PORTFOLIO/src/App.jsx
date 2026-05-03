import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import CustomCursor from './components/CustomCursor.jsx'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const sectionsRef = useRef({})

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-10% 0px -10% 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('[data-section]')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  /* FEATURE 3: Page transition variants */
  const sectionVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? -80 : 80,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? 80 : -80,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    })
  }

  return (
    <>
      <CustomCursor />
      <div className="scan-line" />
      <div className="grain-overlay" />
      
      <Navbar 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />

      <motion.div
        id="home"
        data-section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        custom="left"
      >
        <Hero onNavigate={scrollToSection} />
      </motion.div>

      <motion.div
        id="work"
        data-section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        custom="right"
      >
        <Projects />
      </motion.div>

      <motion.div
        id="skills"
        data-section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        custom="left"
      >
        <Skills />
      </motion.div>

      <motion.div
        id="about"
        data-section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        custom="right"
      >
        <About />
      </motion.div>

      <motion.div
        id="contact"
        data-section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        custom="left"
      >
        <Contact />
      </motion.div>
    </>
  )
}

export default App
