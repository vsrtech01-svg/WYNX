import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = ({ title, subtitle, category }) => {
  const displayTitle = title || "DEFINE\nYOUR EDGE";
  const displaySubtitle = subtitle || "PREMIUM MEN'S STREETWEAR CRAFTED IN JAIPUR. BUILT FOR THE MODERN URBAN LIFESTYLE.";

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.badge}>WYNX ATELIER</span>
          </motion.div>

          <motion.h1 
            className={styles.title}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            key={displaySubtitle}
          >
            {displaySubtitle}
          </motion.p>

          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link to="/collection/men" className={styles.primaryBtn}>
              Shop Collection <ArrowRight size={18} />
            </Link>
            <Link to="/trending" className={styles.secondaryBtn}>
              Explore Now
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.graphicElement}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          {/* Abstract geometric shape as placeholder for a model image */}
          <div className={styles.geoShape1}></div>
          <div className={styles.geoShape2}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
