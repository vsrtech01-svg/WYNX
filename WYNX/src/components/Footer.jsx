import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { motion } from 'framer-motion';
import wynxLogo from '../assets/wynx-logo.png';

const Footer = () => {
  const links = [
    { label: 'Collection', to: '/collection/men' },
    { label: 'Trending', to: '/trending' },
    { label: 'New Arrivals', to: '/new-arrivals' },
    { label: 'About', to: '/about' },
  ];

  const bottomLinks = ['Support', 'Shipping', 'Returns', 'Privacy'];
  
  return (
    <footer className={styles.footer}>
      <motion.div 
        className={styles.logo}
        whileHover={{ scale: 1.05 }}
      >
        <Link to="/"><img src={wynxLogo} alt="WYNX" className={styles.logoImg} /></Link>
      </motion.div>
      
      <div className={styles.links}>
        {links.map((link) => (
          <motion.div key={link.label} whileHover={{ y: -2 }}>
            <Link to={link.to} className={styles.link}>
              {link.label}
            </Link>
          </motion.div>
        ))}
      </div>

      <div className={styles.bottomLinks}>
        {bottomLinks.map((link) => (
          <motion.a 
            key={link} 
            href="#" 
            className={styles.bottomLink}
            whileHover={{ color: 'var(--primary)' }}
          >
            {link}
          </motion.a>
        ))}
      </div>
      
      <div className={styles.bottomSection}>
        <p className={styles.copyright}>
          © 2026 WYNX PERFORMANCE. ALL RIGHTS RESERVED.
        </p>
        
        <div className={styles.socials}>
          <motion.a href="#" whileHover={{ y: -3, color: 'var(--primary)' }} className={styles.socialIcon}>FB</motion.a>
          <motion.a href="#" whileHover={{ y: -3, color: 'var(--primary)' }} className={styles.socialIcon}>IG</motion.a>
          <motion.a href="#" whileHover={{ y: -3, color: 'var(--primary)' }} className={styles.socialIcon}>TW</motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
