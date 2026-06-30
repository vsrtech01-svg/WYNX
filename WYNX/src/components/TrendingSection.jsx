import React, { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './TrendingSection.module.css';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Flame, ArrowRight } from 'lucide-react';
import { getTrendingProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import MobileProductModal from './MobileProductModal';

const TrendingSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const { addToCart } = useCart();
  const trending = getTrendingProducts();

  // Mobile modal state
  const [mobileModalProduct, setMobileModalProduct] = useState(null);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[1] || product.sizes[0]);
  };

  const handleProductClick = useCallback((e, product) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      setMobileModalProduct(product);
      setIsMobileModalOpen(true);
    }
  }, []);

  const closeMobileModal = useCallback(() => {
    setIsMobileModalOpen(false);
    setTimeout(() => setMobileModalProduct(null), 300);
  }, []);

  return (
    <>
      <MobileProductModal
        product={mobileModalProduct}
        isOpen={isMobileModalOpen}
        onClose={closeMobileModal}
      />
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
                className={`${styles.card} ${product.soldOut ? styles.soldOutCard : ''}`}
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                {product.soldOut ? (
                  <div>
                    <div className={`product-image-container ${styles.imageContainer}`}>
                      <img src={product.img} alt={product.name} style={{ filter: 'grayscale(100%)' }} />
                      <motion.div
                        className={styles.soldOutOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.12 + 0.2 }}
                      >
                        <motion.span
                          className={styles.soldOutTag}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: index * 0.12 + 0.3 }}
                        >
                          SOLD OUT
                        </motion.span>
                      </motion.div>
                    </div>
                    <h3 className={`${styles.productName} ${styles.soldOutName}`}>{product.name}</h3>
                    <div className={styles.priceContainer}>
                      <span className={`${styles.price} ${styles.soldOutPrice}`}>₹{product.price}</span>
                      {product.oldPrice && <span className={styles.oldPrice}>₹{product.oldPrice}</span>}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={`/product/${product.id}`} 
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    onClick={(e) => handleProductClick(e, product)}
                  >
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
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingSection;
