import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TechBanner.module.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TechBanner = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className={styles.container} ref={containerRef}>
      <motion.div 
        className={styles.bgGradient}
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
      ></motion.div>
      
      <div className={styles.content}>
        <motion.div 
          className={styles.textContent}
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>DRY-VELOCITY TECH</h2>
          <p className={styles.desc}>
            Our proprietary moisture-wicking fabric that evaporates sweat 3x faster than traditional synthetics. Keep your core temperature optimized during peak output.
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.actions}
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/collection/men" className={styles.btnPrimary}>
              Shop Tech Series
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }} whileTap={{ scale: 0.95 }}>
            <Link to="/collection/men" className={styles.btnSecondary}>
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechBanner;
