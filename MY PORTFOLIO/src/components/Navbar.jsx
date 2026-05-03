import { motion } from 'framer-motion'

export default function Navbar({ activeSection, onNavigate }) {
  const links = [
    { id: 'home', label: 'HOME' },
    { id: 'work', label: 'WORK' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ]

  return (
    <nav className="nav">
      <div className="nav-links">
        {links.map((link, i) => (
          <motion.span
            key={link.id}
            className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            onClick={() => onNavigate(link.id)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={activeSection === link.id ? { color: '#f20d0d' } : {}}
          >
            {link.label}
          </motion.span>
        ))}
      </div>
    </nav>
  )
}
