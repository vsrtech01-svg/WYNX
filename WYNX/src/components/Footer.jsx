import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { motion } from 'framer-motion';
import wynxLogo from '../assets/wynx-logo.png';
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';

const InstaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.brandSection}>
          <motion.div className={styles.logo} whileHover={{ scale: 1.05 }}>
            <Link to="/"><img src={wynxLogo} alt="WYNX" className={styles.logoImg} /></Link>
          </motion.div>
          <p className={styles.brandTagline}>
            Elevate your everyday with premium performance wear crafted for the modern individual.
          </p>
          <div className={styles.socials}>
            <motion.a href="#" whileHover={{ y: -3, color: 'var(--primary)' }} className={styles.socialIcon}><FacebookIcon /></motion.a>
            <motion.a href="#" whileHover={{ y: -3, color: 'var(--primary)' }} className={styles.socialIcon}><InstaIcon /></motion.a>
            <motion.a href="#" whileHover={{ y: -3, color: 'var(--primary)' }} className={styles.socialIcon}><TwitterIcon /></motion.a>
          </div>
        </div>

        <div className={styles.linksGrid}>
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Shop</h4>
            <Link to="/collection/men" className={styles.link}>Men's Collection</Link>
            <Link to="/new-arrivals" className={styles.link}>New Arrivals</Link>
            <Link to="/trending" className={styles.link}>Trending Now</Link>
          </div>
          
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Support</h4>
            <Link to="/policy/shipping" className={styles.link}>Shipping Info</Link>
            <Link to="/policy/returns" className={styles.link}>Returns Policy</Link>
            <Link to="/policy/privacy" className={styles.link}>Privacy Policy</Link>
            <Link to="/policy/terms" className={styles.link}>Terms of Service</Link>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Company</h4>
            <Link to="/about" className={styles.link}>About WYNX</Link>
            <div className={styles.contactItem}>
              <Mail size={14} className={styles.contactIcon} />
              <span>support@wynx.co.in</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={14} className={styles.contactIcon} />
              <span>+91 6350 070 744</span>
            </div>
          </div>
        </div>

        <div className={styles.newsletterSection}>
          <h4 className={styles.columnTitle}>Join the Club</h4>
          <p className={styles.newsletterText}>Subscribe to get special offers, free giveaways, and early access.</p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" className={styles.emailInput} />
            <motion.button 
              type="submit" 
              className={styles.submitBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight size={18} />
            </motion.button>
          </form>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} WYNX PERFORMANCE. ALL RIGHTS RESERVED.
        </p>

        <p className={styles.madeBy}>
          <a
            href="https://www.vsr-tech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.madeByLink}
          >
            Designed and Developed by VSR Tech
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
