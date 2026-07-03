import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { getProductById } from '../data/products';
import HeroProductPopup from './HeroProductPopup';

const Hero = ({ title, subtitle, category }) => {
  const displayTitle = title || "DEFINE\nYOUR EDGE";
  const displaySubtitle = subtitle || "PREMIUM MEN'S STREETWEAR CRAFTED IN JAIPUR. BUILT FOR THE MODERN URBAN LIFESTYLE.";

  // Carousel images mapped to product IDs
  const heroItems = [
    { img: "/products/wynx-black-track-1.png", productId: "wynx-solid-black-track-v1", soldOut: false },
    { img: "/products/wynx-navy-track-1.png", productId: "wynx-solid-blue-track-v2", soldOut: false },
    { img: "/products/wynx-shorts-black-v2.png", productId: "wynx-shorts-obsidian-core", soldOut: true },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [popupProduct, setPopupProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [heroItems.length]);

  const handleImageClick = useCallback((productId) => {
    const product = getProductById(productId);
    if (product) {
      setPopupProduct(product);
      setIsPopupOpen(true);
    }
  }, []);

  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
    setTimeout(() => setPopupProduct(null), 300);
  }, []);

  return (
    <>
      {/* Hero Product Popup */}
      <HeroProductPopup
        product={popupProduct}
        isOpen={isPopupOpen}
        onClose={closePopup}
      />

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
            <div 
              className={styles.carouselContainer}
              onClick={() => !heroItems[currentIndex].soldOut && handleImageClick(heroItems[currentIndex].productId)}
              role="button"
              tabIndex={0}
              aria-label="View product details"
              style={heroItems[currentIndex].soldOut ? { cursor: 'default' } : {}}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={heroItems[currentIndex].img}
                  alt="WYNX Wear"
                  className={styles.carouselImg}
                  style={heroItems[currentIndex].soldOut ? { filter: 'grayscale(100%)' } : {}}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </AnimatePresence>
              {heroItems[currentIndex].soldOut ? (
                <motion.div
                  className={styles.soldOutOverlay}
                  key={`soldout-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.span
                    className={styles.soldOutTag}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.15 }}
                  >
                    SOLD OUT
                  </motion.span>
                </motion.div>
              ) : (
                <div className={styles.carouselOverlay}>
                  <span className={styles.tapHint}>Tap to view</span>
                </div>
              )}
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
