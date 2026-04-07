import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductList.module.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { getFeaturedProducts } from '../data/products';

const ProductList = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const featured = getFeaturedProducts();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className={styles.section} ref={containerRef}>
      <motion.div 
        className={styles.bentoGrid}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* New Drop Item */}
        <motion.div variants={itemVariants} className={`${styles.bentoItem} ${styles.largeItem}`}>
          <Link to={`/product/${featured[0]?.token}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className={styles.badge}>
              {featured[0]?.discount ? `${featured[0].discount}% OFF` : 'New Drop'}
            </div>
            <div className={`product-image-container ${styles.imageContainerLarge}`}>
              <img src={featured[0]?.img} alt={featured[0]?.name} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.infoLarge}>
              <h3 className={styles.titleLarge}>{featured[0]?.name}</h3>
              <p className={styles.descLarge}>{featured[0]?.description?.substring(0, 80)}...</p>
              <div className={styles.priceRowLarge}>
                <span className={styles.priceLarge}>₹{featured[0]?.price}</span>
                {featured[0]?.oldPrice && <span className={styles.oldPriceLarge}>₹{featured[0]?.oldPrice}</span>}
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Text Callout */}
        <motion.div variants={itemVariants} className={`${styles.bentoItem} ${styles.textItem}`}>
          <h2 className={styles.headingTech}>PREMIUM<br/>TRACK<br/>PANTS</h2>
          <p className={styles.descTech}>Uncompromising comfort. Modern silhouettes. Engineered for everyday performance and style.</p>
          <motion.div whileHover={{ x: 5 }}>
            <Link to="/collection/men" className={styles.btnExplore}>
              Explore Collection →
            </Link>
          </motion.div>
        </motion.div>

        {/* Regular Item 1 */}
        <motion.div variants={itemVariants} className={styles.bentoItem}>
          <Link to={`/product/${featured[1]?.token}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className={`product-image-container ${styles.imageContainerSmall}`}>
              <img src={featured[1]?.img} alt={featured[1]?.name} />
            </div>
            <div className={styles.infoSmall}>
              <h3 className={styles.titleSmall}>{featured[1]?.name}</h3>
              <div className={styles.priceRowSmall}>
                <p className={styles.priceSmall}>₹{featured[1]?.price}</p>
                {featured[1]?.oldPrice && <p className={styles.oldPriceSmall}>₹{featured[1]?.oldPrice}</p>}
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Regular Item 2 */}
        <motion.div variants={itemVariants} className={styles.bentoItem}>
          <Link to={`/product/${featured[2]?.token}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className={`product-image-container ${styles.imageContainerSmall}`}>
              <img src={featured[2]?.img} alt={featured[2]?.name} />
            </div>
            <div className={styles.infoSmall}>
              <h3 className={styles.titleSmall}>{featured[2]?.name}</h3>
              <div className={styles.priceRowSmall}>
                <p className={styles.priceSmall}>₹{featured[2]?.price}</p>
                {featured[2]?.oldPrice && <p className={styles.oldPriceSmall}>₹{featured[2]?.oldPrice}</p>}
              </div>
            </div>
          </Link>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default ProductList;
