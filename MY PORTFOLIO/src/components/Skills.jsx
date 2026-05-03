import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  { name: 'HTML5', icon: '❮/❯', level: 95, category: 'Frontend' },
  { name: 'CSS3', icon: '{ }', level: 92, category: 'Frontend' },
  { name: 'JavaScript', icon: 'JS', level: 88, category: 'Frontend' },
  { name: 'React', icon: '⚛', level: 85, category: 'Frontend' },
  { name: 'Node.js', icon: 'N', level: 78, category: 'Backend' },
  { name: 'Python', icon: 'Py', level: 75, category: 'Backend' },
  { name: 'Figma', icon: 'F', level: 90, category: 'Design' },
  { name: 'Git', icon: '⎇', level: 82, category: 'Tools' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  }
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-number">
            <span className="section-slash">/</span>03
          </div>
          <div className="section-title-group">
            <div className="section-label">EXPERTISE</div>
            <h2 className="section-title">SKILLS & TECH</h2>
          </div>
        </div>

        <motion.div
          ref={ref}
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={cardVariants}
              whileHover={{
                y: -8,
                borderColor: 'rgba(242, 13, 13, 0.4)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.3), 0 0 20px rgba(242,13,13,0.15)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="skill-card-icon">{skill.icon}</div>
              <div className="skill-card-name">{skill.name}</div>
              <div className="skill-card-level">{skill.category}</div>
              <div className="skill-bar-container">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
