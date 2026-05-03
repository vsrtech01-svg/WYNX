import { motion } from 'framer-motion'

const contactLinks = [
  { icon: '✉', label: 'Email', href: 'mailto:hello@aaravsingh.dev' },
  { icon: '◈', label: 'LinkedIn', href: '#' },
  { icon: '⚡', label: 'GitHub', href: '#' },
  { icon: '◆', label: 'Dribbble', href: '#' },
]

export default function Contact() {
  return (
    <section className="section contact-section">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-number">
            <span className="section-slash">/</span>05
          </div>
          <div className="section-title-group">
            <div className="section-label">GET IN TOUCH</div>
            <h2 className="section-title">CONTACT</h2>
          </div>
        </div>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2>LET'S WORK<br />TOGETHER</h2>
          <p>
            Have a project in mind? Let's bring your vision to life with 
            bold design and clean code. I'm always open to new challenges 
            and creative collaborations.
          </p>

          <motion.div
            className="contact-links"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                className="contact-link"
                href={link.href}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{
                  y: -4,
                  borderColor: '#f20d0d',
                  color: '#f20d0d',
                  boxShadow: '0 0 20px rgba(242,13,13,0.15)',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{link.icon}</span>
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <footer className="footer">
        <div className="footer-text">© 2026 AARAV SINGH. ALL RIGHTS RESERVED.</div>
        <div className="footer-socials">
          {['IN', 'GH', 'DR', 'TW'].map((social, i) => (
            <motion.div
              key={social}
              className="footer-social"
              whileHover={{
                scale: 1.15,
                borderColor: '#f20d0d',
                color: '#f20d0d',
                boxShadow: '0 0 12px rgba(242,13,13,0.3)',
              }}
              whileTap={{ scale: 0.9 }}
            >
              {social}
            </motion.div>
          ))}
        </div>
      </footer>
    </section>
  )
}
