import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    tag: 'E-COMMERCE',
    title: 'WYNX Streetwear',
    desc: 'Premium streetwear e-commerce platform with editorial design and WhatsApp-based ordering.',
    image: '/project-1.png',
  },
  {
    id: 2,
    tag: 'FINTECH',
    title: 'FinVault Banking',
    desc: 'Modern mobile banking dashboard with analytics, transaction tracking, and sleek dark UI.',
    image: '/project-2.png',
  },
  {
    id: 3,
    tag: 'FOOD TECH',
    title: 'Flavour Studio',
    desc: 'Restaurant and food delivery platform with immersive menu browsing and ordering.',
    image: '/project-3.png',
  },
  {
    id: 4,
    tag: 'ANALYTICS',
    title: 'Pulse Dashboard',
    desc: 'Social media analytics and engagement tracking dashboard with real-time data visualization.',
    image: '/project-4.png',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  }
}

export default function Projects() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-number">
            <span className="section-slash">/</span>02
          </div>
          <div className="section-title-group">
            <div className="section-label">SELECTED WORK</div>
            <h2 className="section-title">PROJECTS</h2>
          </div>
        </div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="project-card-image">
                <img src={project.image} alt={project.title} />
                <div className="project-card-overlay" />
              </div>
              <div className="project-card-content">
                <div className="project-card-tag">{project.tag}</div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.desc}</p>
              </div>
              <motion.div
                className="project-card-arrow"
                whileHover={{ scale: 1.2, rotate: 45 }}
              >
                ↗
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
