import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './TrendingSection.module.css';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Flame, ArrowRight } from 'lucide-react';
import { getTrendingProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const TrendingSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const { addToCart } = useCart();
  const trending = getTrendingProducts();

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[1] || product.sizes[0]);
  };

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <motion.div 
            className={styles.iconBadge}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <Flame size={18} />
          </motion.div>
          <motion.h2 
            className={styles.title}
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Trending Now
          </motion.h2>
        </div>
        <motion.div whileHover={{ x: 5 }}>
          <Link to="/collection/men" className={styles.viewAll}>
            View All <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>

      <div className={styles.scrollContainer}>
        <div className={styles.scrollTrack}>
          {trending.map((product, index) => (
            <motion.div 
              key={product.id} 
              className={styles.card}
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <Link to={`/product/${product.token}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className={`product-image-container ${styles.imageContainer}`}>
                  <div className={styles.trendBadge}>
                    <TrendingUp size={10} />
                    Trending
                  </div>
                  <img src={product.img} alt={product.name} />
                  <div className={styles.imageOverlay}>
                    <motion.button 
                      className={styles.quickAdd}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => handleQuickAdd(e, product)}
                    >
                      Quick Add
                    </motion.button>
                  </div>
                </div>
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>₹{product.price}</span>
                  {product.oldPrice && <span className={styles.oldPrice}>₹{product.oldPrice}</span>}
                  {product.discount && <span className={styles.discountText}>{product.discount}% off</span>}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
