import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const skillLabels = [
  { text: 'HTML', top: '22%', left: '24%', size: 'clamp(36px, 4.5vw, 62px)' },
  { text: 'JavaScript', top: '34%', left: '28%', size: 'clamp(32px, 4vw, 54px)' },
  { text: 'React', top: '46%', left: '32%', size: 'clamp(38px, 4.8vw, 66px)' },
  { text: 'Node.js', top: '58%', left: '36%', size: 'clamp(30px, 3.6vw, 48px)' },
]

const glitchTabs = [
  { label: 'DESIGNER', section: 'work', position: 'left' },
  { label: 'ARTIST', section: 'skills', position: 'right' },
  { label: 'DEVELOPER', section: 'about', position: 'bottom-left' },
  { label: 'DEVELOPER', section: 'contact', position: 'bottom-right' },
]

export default function Hero({ onNavigate }) {
  const [isHovering, setIsHovering] = useState(false)
  const heroRef = useRef(null)

  return (
    <section className="hero" ref={heroRef}>
      {/* ── Background Effects Layer ── */}
      <div className="hero-bg-effects">
        {/* Red gradient glows */}
        <div className="hero-glow hero-glow--center" />
        <div className="hero-glow hero-glow--top-right" />
        <div className="hero-glow hero-glow--bottom-left" />
        <div className="hero-glow hero-glow--accent" />
      </div>

      {/* Grid overlay */}
      <div className="hero-grid-overlay" />

      {/* Thin horizontal UI lines */}
      <div className="hero-ui-line" style={{ top: '22%' }} />
      <div className="hero-ui-line" style={{ top: '78%' }} />

      {/* Thin vertical UI lines */}
      <div className="hero-ui-line-v" style={{ left: '30%' }} />
      <div className="hero-ui-line-v" style={{ left: '70%' }} />

      {/* Corner UI decorations */}
      <div className="hero-corner hero-corner--tl" />
      <div className="hero-corner hero-corner--tr" />
      <div className="hero-corner hero-corner--bl" />
      <div className="hero-corner hero-corner--br" />

      {/* Large faded "01" in background */}
      <motion.div
        className="hero-bg-01"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
      >
        01
      </motion.div>

      {/* Subtle "PORTFOLIO" text in background */}
      <motion.div
        className="hero-bg-portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        PORTFOLIO
      </motion.div>

      {/* ── Content Wrapper ── */}
      <div className="hero-content">

        {/* Top-left: MY PORTFOLIO */}
        <motion.div
          className="hero-label-topleft"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          MY PORTFOLIO
        </motion.div>

        {/* Top-right: CODE CREATE INNOVATE + 01 */}
        <motion.div
          className="hero-label-topright"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="hero-topright-words">
            <div className="hero-topright-word">CODE <span className="hero-dot">●</span></div>
            <div className="hero-topright-word">CREATE<span className="hero-dot">●</span></div>
            <div className="hero-topright-word">INNOVATE</div>
          </div>
          <div className="hero-topright-01">
            0<span className="hero-01-accent">1</span><span className="hero-01-slash">/</span>
          </div>
        </motion.div>

        {/* Right-center: CODE CREATE INNOVATE (stacked) */}
        <motion.div
          className="hero-label-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="hero-right-word">CODE <span className="hero-dot-red">●</span></div>
          <div className="hero-right-word">CREATE <span className="hero-dot-red">●</span></div>
          <div className="hero-right-word">INNOVATE</div>
        </motion.div>

        {/* ── Skill Labels BEHIND the subject ── */}
        <div className="hero-skill-labels">
          {skillLabels.map((skill, i) => (
            <motion.div
              key={skill.text}
              className="hero-skill-label"
              style={{
                top: skill.top,
                left: skill.left,
                fontSize: skill.size,
              }}
              animate={{
                opacity: isHovering ? 0.85 : 0.06,
                scale: isHovering ? 1.05 : 1,
                y: isHovering ? [0, -6, 0] : 0,
              }}
              transition={{
                opacity: { delay: i * 0.06, duration: 0.5 },
                scale: { delay: i * 0.06, duration: 0.5 },
                y: { delay: i * 0.06, duration: 3, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              {skill.text}
            </motion.div>
          ))}
        </div>

        {/* ── CENTERED SUBJECT IMAGE ── */}
        <motion.div
          className="hero-subject"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="hero-subject-wrapper">
            <img
              src="/hero-portrait.png"
              alt="Portfolio Subject"
              className="hero-subject-img"
              draggable={false}
            />
          </div>
        </motion.div>

        {/* ── Glitch Navigation Tabs ── */}
        {glitchTabs.map((tab, i) => (
          <motion.div
            key={`${tab.label}-${tab.position}`}
            className={`hero-glitch-tab hero-glitch-tab--${tab.position}`}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 + i * 0.12, duration: 0.5 }}
            whileHover={{
              scale: 1.06,
              transition: { duration: 0.22 },
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onNavigate(tab.section)}
          >
            <span className="hero-glitch-tab__bar" />
            <span className="hero-glitch-tab__label">{tab.label}</span>
            <span className="hero-glitch-tab__glow" />
          </motion.div>
        ))}
      </div>

      {/* Bottom accent dashes */}
      <div className="hero-bottom-dashes">
        <div className="hero-dash" />
        <div className="hero-dash" />
        <div className="hero-dash" />
      </div>

      {/* Decorative dot grids */}
      <div className="hero-dot-grid hero-dot-grid--tl" />
      <div className="hero-dot-grid hero-dot-grid--br" />
    </section>
  )
}
