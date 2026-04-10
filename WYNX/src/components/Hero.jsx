import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = ({ title, subtitle, category }) => {
  const displayTitle = title || "MEN'S\nCOLLECTION";
  const displaySubtitle = subtitle || 'HIGH-VELOCITY ENGINEERING';
  
  const heroRef = useRef(null);
  
  // Parallax / Zoom-out on scroll
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Desktop vs Mobile animation trigger
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.section 
      ref={heroRef}
      className={styles.heroSection}
      style={{ scale, opacity }}
    >
      {/* Dynamic slanted background elements */}
      <div className={styles.bgWrapper}>
        <div className={styles.slantedBgPattern}></div>
      </div>

      <motion.div 
        className={styles.graphicSidebar}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.slantedContainer}>
           <img 
              src="/images/hero-man-model.jpg" 
              alt="Tracksuit Model" 
              className={styles.heroImage} 
           />
           <motion.div 
              className={styles.comingSoonBadge}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
           >
              ✨ COMING SOON ✨
           </motion.div>
        </div>
      </motion.div>
      
      <div className={styles.content}>
        <motion.h1 
          className={styles.title}
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
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
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          key={displaySubtitle}
        >
          {displaySubtitle}
        </motion.p>
        
        <motion.div
           className={styles.actionContainer}
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.6 }}
        >
           <button className={styles.shopBtn} onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth'})}>
              SHOP THE LOOK
           </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
