import React, { useState, useMemo } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import styles from './CollectionPage.module.css';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import { useCart } from '../context/CartContext';
import products from '../data/products';

const CollectionPage = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const { addToCart } = useCart();
  
  const [filters, setFilters] = useState({
    subcategory: 'all',
    size: null,
    intensity: null,
  });

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const filteredProducts = useMemo(() => {
    let result = products.filter(p => p.category === 'men');

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = products.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.subcategory.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (filters.subcategory && filters.subcategory !== 'all') {
      result = result.filter(p => p.subcategory === filters.subcategory);
    }

    // Size filter
    if (filters.size) {
      result = result.filter(p => p.sizes.includes(filters.size));
    }

    // Intensity filter
    if (filters.intensity && filters.intensity !== 'all') {
      result = result.filter(p => p.intensity === filters.intensity);
    }

    return result;
  }, [filters, searchQuery]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[1] || product.sizes[0]);
  };

  return (
    <>
      <div className="app-container">
        <Sidebar onFilterChange={handleFilterChange} activeFilters={filters} />
        <main className="main-content">
          <Hero title={"MEN'S\nCOLLECTION"} subtitle="High-Velocity Engineering" />
          
          {searchQuery && (
            <motion.div 
              className={styles.searchNotice}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Showing results for "<strong>{searchQuery}</strong>" — {filteredProducts.length} items found
            </motion.div>
          )}

          <section className={styles.section} ref={containerRef}>
            <div className={styles.header}>
              <motion.h2 
                className={styles.title}
                initial={{ x: -30, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {searchQuery ? 'Search Results' : "Men's Collection"}
              </motion.h2>
              <span className={styles.count}>{filteredProducts.length} Items</span>
            </div>

            <div className={styles.grid}>
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className={styles.productCard}
                    initial={{ y: 50, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    layout
                  >
                    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
                      <p className={styles.productCategory}>{product.subcategory}</p>
                      <div className={styles.priceContainer}>
                        <span className={styles.price}>${product.price.toFixed(2)}</span>
                        {product.oldPrice && <span className={styles.oldPrice}>${product.oldPrice.toFixed(2)}</span>}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <motion.div 
                className={styles.emptyState}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3>No products found</h3>
                <p>Try adjusting your filters or search query</p>
              </motion.div>
            )}
          </section>
        </main>
      </div>
    </>
  );
};

export default CollectionPage;
