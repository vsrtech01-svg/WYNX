import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

const Hero = ({ title, subtitle, category }) => {
  const displayTitle = title || "MEN'S\nCOLLECTION";
  const displaySubtitle = subtitle || 'High-Velocity Engineering';

  return (
    <section className={styles.heroSection}>
      <motion.div 
        className={styles.graphicElement}
        initial={{ x: '100%', skewX: 12, opacity: 0 }}
        animate={{ x: '10%', skewX: 12, opacity: 0.15 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      ></motion.div>
      
      <div className={styles.content}>
        <motion.h1 
          className={styles.title}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          key={displayTitle}
        >
          {displayTitle.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {i > 0 && <br/>}
              {line}
            </React.Fragment>
          ))}
        </motion.h1>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          key={displaySubtitle}
        >
          {displaySubtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
