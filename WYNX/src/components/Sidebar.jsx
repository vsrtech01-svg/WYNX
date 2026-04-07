import React, { useState, useRef, useCallback, useEffect } from 'react';
import styles from './Sidebar.module.css';
import { motion } from 'framer-motion';
import { Shirt, Layers, Ruler, Waves, Zap, RotateCcw, Lock } from 'lucide-react';

const Sidebar = ({ onFilterChange, activeFilters = {}, onComingSoon }) => {
  const categories = [
    { icon: <Shirt size={18} />, label: 'All Products', value: 'all', available: true },
    { icon: <Layers size={18} />, label: 'Lowers', value: 'Lowers', available: true },
    { icon: <Ruler size={18} />, label: 'Tops', value: 'Tops', available: false },
    { icon: <Waves size={18} />, label: 'Outerwear', value: 'Outerwear', available: false },
    { icon: <Zap size={18} />, label: 'Compression', value: 'Compression', available: false },
  ];

  const sizes = ['M', 'L', 'XL', 'XXL', '3XL'];

  const [activeCategory, setActiveCategory] = useState(activeFilters.subcategory || 'all');
  const [activeSize, setActiveSize] = useState(activeFilters.size || null);

  // Real-time filter dispatch
  const dispatchFilters = useCallback((cat, size) => {
    if (onFilterChange) {
      onFilterChange({
        subcategory: cat,
        size: size,
      });
    }
  }, [onFilterChange]);

  const handleCategoryClick = (cat) => {
    if (!cat.available) {
      // Trigger coming soon for unavailable categories
      if (onComingSoon) {
        onComingSoon(cat.label);
      }
      return;
    }
    setActiveCategory(cat.value);
    dispatchFilters(cat.value, activeSize);
  };

  const handleSizeClick = (size) => {
    const newSize = activeSize === size ? null : size;
    setActiveSize(newSize);
    dispatchFilters(activeCategory, newSize);
  };

  const handleReset = () => {
    setActiveCategory('all');
    setActiveSize(null);
    dispatchFilters('all', null);
  };

  return (
    <motion.aside 
      className={styles.sidebar}
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <div className={styles.header}>
        <h2>Filters</h2>
        <p>WYNX Track Pants</p>
      </div>

      <nav className={styles.categories}>
        {categories.map((cat, i) => (
          <motion.div 
            key={cat.label}
            className={`${styles.categoryItem} ${activeCategory === cat.value ? styles.activeCategory : ''} ${!cat.available ? styles.unavailableCategory : ''}`}
            whileHover={{ x: 6 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + (i * 0.1) }}
            onClick={() => handleCategoryClick(cat)}
          >
            <span className={styles.icon}>{cat.icon}</span>
            <span className={styles.label}>{cat.label}</span>
            {!cat.available && <Lock size={12} className={styles.lockIcon} />}
          </motion.div>
        ))}
      </nav>

      <div className={styles.filterSection}>
        <h3>Size</h3>
        <div className={styles.sizeGrid}>
          {sizes.map((size) => (
            <motion.button 
              key={size}
              className={`${styles.sizeBtn} ${activeSize === size ? styles.activeSize : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </motion.button>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <motion.button 
          className={styles.resetBtn}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleReset}
        >
          <RotateCcw size={14} />
          Reset Filters
        </motion.button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
