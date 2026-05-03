import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { number: '20+', label: 'PROJECTS' },
  { number: '2+', label: 'YEARS EXP' },
  { number: '15+', label: 'CLIENTS' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-number">
            <span className="section-slash">/</span>04
          </div>
          <div className="section-title-group">
            <div className="section-label">WHO AM I</div>
            <h2 className="section-title">ABOUT ME</h2>
          </div>
        </div>

        <div className="about-content" ref={ref}>
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3>CREATIVE DEVELOPER</h3>
            <h2>BUILDING DIGITAL<br />EXPERIENCES</h2>
            <p>
              I'm a web developer and UI/UX designer with a passion for creating 
              immersive, visually striking digital experiences. My approach combines 
              clean code with bold design thinking — every pixel matters, every 
              interaction tells a story.
            </p>
            <p>
              From e-commerce platforms to analytics dashboards, I craft solutions 
              that are as functional as they are beautiful. I believe great design 
              is invisible — it just works.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="about-stats">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="stat-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div
                    className="stat-number"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
