import React from 'react';
import styles from './SocialPanel.module.css';
import { motion } from 'framer-motion';

const InstaIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const SocialPanel = () => {
  return (
    <motion.div 
      className={styles.panel}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.a 
        href="https://www.instagram.com/wynx.co.in?igsh=amRyc3Q4dzJpYW05&utm_source=qr" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.iconLink}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        title="Follow us on Instagram"
      >
        <InstaIcon />
      </motion.a>
      
      <div className={styles.divider}></div>
      
      <motion.a 
        href="https://wa.me/916350070744" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.iconLink}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </motion.a>
    </motion.div>
  );
};

export default SocialPanel;
