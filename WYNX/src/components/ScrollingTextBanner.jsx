import React from 'react';
import { motion } from 'framer-motion';
import styles from './ScrollingTextBanner.module.css';

const ScrollingTextBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <motion.div 
        className={styles.largeBgText}
        animate={{ x: [0, -1500] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        WYNX - SPORTSWEAR - TRACK PANTS - COMFORT - WYNX - SPORTSWEAR - TRACK PANTS - COMFORT - WYNX - SPORTSWEAR - TRACK PANTS - COMFORT - 
      </motion.div>
    </div>
  );
};

export default ScrollingTextBanner;
