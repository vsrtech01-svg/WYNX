import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = ({ title, subtitle, category }) => {
  const displayTitle = title || "DEFINE\nYOUR EDGE";
  const displaySubtitle = subtitle || "PREMIUM MEN'S STREETWEAR CRAFTED IN JAIPUR. BUILT FOR THE MODERN URBAN LIFESTYLE.";

  const images = [
    "/products/wynx-black-track-1.png",
    "/products/wynx-navy-track-1.png",
    "/products/wynx-shorts-black-2.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
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
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            <div className={styles.carouselContainer}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt="WYNX Wear"
                  className={styles.carouselImg}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
            <div className={styles.backgroundAccent}></div>
          </motion.div>
        </div>

        <div className={styles.bgTextContainer}>
          <motion.div 
            className={`${styles.largeBgText} ${styles.textTop}`}
            animate={{ x: [0, -1500] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            WYNX - SPORTWEAR - TRACKPANTS - COMFORT - WYNX - SPORTWEAR - TRACKPANTS - COMFORT - WYNX - SPORTWEAR - TRACKPANTS - COMFORT - 
          </motion.div>
          <motion.div 
            className={`${styles.largeBgText} ${styles.textBottom}`}
            animate={{ x: [-1500, 0] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            TRACK PANTS • SPORTSWEAR • COLLECTION • ACTIVEWEAR • TRACK PANTS • SPORTSWEAR • COLLECTION • ACTIVEWEAR • 
          </motion.div>
        </div>

        <div className={styles.scrollIndicator}>
          <span>SCROLL</span>
          <br/>
          <ChevronDown size={14} />
        </div>
      </section>
      
      {/* Animated Scrolling Line below Hero */}
      <div className={styles.tickerContainer}>
        <div className={styles.tickerTrack}>
          <div className={styles.tickerItem}>
            <span>FREE SHIPPING OVER ₹999</span>
            <span className={styles.tickerDiamond}>❖</span>
            <span>76% OFF SITEWIDE</span>
            <span className={styles.tickerDiamond}>❖</span>
            <span>7-DAY EASY RETURNS</span>
            <span className={styles.tickerDiamond}>❖</span>
            <span>PREMIUM 4-WAY STRETCH</span>
            <span className={styles.tickerDiamond}>❖</span>
          </div>
          <div className={styles.tickerItem}>
            <span>FREE SHIPPING OVER ₹999</span>
            <span className={styles.tickerDiamond}>❖</span>
            <span>76% OFF SITEWIDE</span>
            <span className={styles.tickerDiamond}>❖</span>
            <span>7-DAY EASY RETURNS</span>
            <span className={styles.tickerDiamond}>❖</span>
            <span>PREMIUM 4-WAY STRETCH</span>
            <span className={styles.tickerDiamond}>❖</span>
          </div>
          <div className={styles.tickerItem}>
            <span>FREE SHIPPING OVER ₹999</span>
            <span className={styles.tickerDiamond}>❖</span>
            <span>76% OFF SITEWIDE</span>
            <span className={styles.tickerDiamond}>❖</span>
            <span>7-DAY EASY RETURNS</span>
            <span className={styles.tickerDiamond}>❖</span>
            <span>PREMIUM 4-WAY STRETCH</span>
            <span className={styles.tickerDiamond}>❖</span>
          </div>
          <div className={styles.tickerItem}>
            <span>FREE SHIPPING OVER ₹999</span>
            <span className={styles.tickerDiamond}>❖</span>
            <span>76% OFF SITEWIDE</span>
            <span className={styles.tickerDiamond}>❖</span>
            <span>7-DAY EASY RETURNS</span>
            <span className={styles.tickerDiamond}>❖</span>
            <span>PREMIUM 4-WAY STRETCH</span>
            <span className={styles.tickerDiamond}>❖</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
