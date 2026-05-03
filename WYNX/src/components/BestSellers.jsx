import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './BestSellers.module.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCart } from '../context/CartContext';
import { getBestSellers } from '../data/products';
import MobileProductModal from './MobileProductModal';

const BestSellers = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const { addToCart } = useCart();
  const products = getBestSellers();

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
          <motion.h2 
            className={styles.title}
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Best Sellers
          </motion.h2>
          <motion.div whileHover={{ x: 5 }}>
            <Link to="/collection/men" className={styles.viewAll}>
              View All Items
            </Link>
          </motion.div>
        </div>

        <div className={styles.grid}>
          {products.map((product, index) => (
            <motion.div 
              key={product.id} 
              className={styles.productCard}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link 
                to={`/product/${product.id}`} 
                style={{ textDecoration: 'none', color: 'inherit' }}
                onClick={(e) => handleProductClick(e, product)}
              >
                <div className={`product-image-container ${styles.imageContainer}`}>
                  {product.badge && <div className={styles.badge}>{product.badge}</div>}
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
      </section>
    </>
  );
};

export default BestSellers;
