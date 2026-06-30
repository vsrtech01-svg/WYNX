import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { motion } from 'framer-motion';
import wynxLogo from '../assets/wynx-logo.png';
import { Mail, Phone } from 'lucide-react';

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
