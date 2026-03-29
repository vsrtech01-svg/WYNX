import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './NewArrivals.module.css';
import { motion, useInView } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { getNewArrivals } from '../data/products';
import { useCart } from '../context/CartContext';

const NewArrivals = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const { addToCart } = useCart();
  const arrivals = getNewArrivals();

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
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <Sparkles size={18} />
          </motion.div>
          <motion.h2 
            className={styles.title}
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            New Arrivals
          </motion.h2>
        </div>
        <motion.div whileHover={{ x: 5 }}>
          <Link to="/collection/men" className={styles.viewAll}>
            Shop All <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>

      <div className={styles.grid}>
        {arrivals.map((product, index) => (
          <motion.div 
            key={product.id} 
            className={styles.productCard}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={`product-image-container ${styles.imageContainer}`}>
                <div className={styles.newBadge}>
                  <Sparkles size={10} />
                  Just Dropped
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
              <p className={styles.productCategory}>{product.subcategory}</p>
              <div className={styles.priceContainer}>
                <span className={styles.price}>${product.price.toFixed(2)}</span>
                {product.oldPrice && <span className={styles.oldPrice}>${product.oldPrice.toFixed(2)}</span>}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
