import React, { useState, useRef, useCallback, useEffect } from 'react';
import styles from './Sidebar.module.css';
import { motion } from 'framer-motion';
import { Shirt, Layers, Ruler, Waves, Zap, RotateCcw } from 'lucide-react';

const Sidebar = ({ onFilterChange, activeFilters = {} }) => {
  const categories = [
    { icon: <Shirt size={18} />, label: 'All Apparel', value: 'all' },
    { icon: <Layers size={18} />, label: 'Tops', value: 'Tops' },
    { icon: <Ruler size={18} />, label: 'Bottoms', value: 'Bottoms' },
    { icon: <Waves size={18} />, label: 'Outerwear', value: 'Outerwear' },
    { icon: <Zap size={18} />, label: 'Compression', value: 'Compression' },
  ];

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const intensityLevels = ['Base', 'High', 'Elite'];

  const [activeCategory, setActiveCategory] = useState(activeFilters.subcategory || 'all');
  const [activeSize, setActiveSize] = useState(activeFilters.size || null);
  const [sliderValue, setSliderValue] = useState(100); // 0-100 range
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  const getIntensityLabel = (value) => {
    if (value <= 33) return 'Base';
    if (value <= 66) return 'High';
    return 'Elite';
  };

  const getIntensityFromLabel = (label) => {
    if (label === 'Base') return 16;
    if (label === 'High') return 50;
    return 83;
  };

  // Real-time filter dispatch
  const dispatchFilters = useCallback((cat, size, intensity) => {
    if (onFilterChange) {
      onFilterChange({
        subcategory: cat,
        size: size,
        intensity: intensity === 'all' ? null : intensity,
      });
    }
  }, [onFilterChange]);

  const handleCategoryClick = (value) => {
    setActiveCategory(value);
    dispatchFilters(value, activeSize, getIntensityLabel(sliderValue));
  };

  const handleSizeClick = (size) => {
    const newSize = activeSize === size ? null : size;
    setActiveSize(newSize);
    dispatchFilters(activeCategory, newSize, getIntensityLabel(sliderValue));
  };

  // Slider drag handling
  const updateSliderFromEvent = useCallback((clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, Math.round((x / rect.width) * 100)));
    setSliderValue(percentage);
    return percentage;
  }, []);

  const handleSliderMouseDown = (e) => {
    setIsDragging(true);
    const pct = updateSliderFromEvent(e.clientX);
    dispatchFilters(activeCategory, activeSize, getIntensityLabel(pct));
  };

  const handleSliderTouchStart = (e) => {
    setIsDragging(true);
    const pct = updateSliderFromEvent(e.touches[0].clientX);
    dispatchFilters(activeCategory, activeSize, getIntensityLabel(pct));
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (e) => {
      const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
      updateSliderFromEvent(clientX);
    };

    const handleUp = (e) => {
      setIsDragging(false);
      const clientX = e.type === 'touchend' ? 
        e.changedTouches?.[0]?.clientX : e.clientX;
      if (clientX !== undefined) {
        const rect = sliderRef.current?.getBoundingClientRect();
        if (rect) {
          const x = clientX - rect.left;
          const pct = Math.max(0, Math.min(100, Math.round((x / rect.width) * 100)));
          dispatchFilters(activeCategory, activeSize, getIntensityLabel(pct));
        }
      }
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, [isDragging, activeCategory, activeSize, updateSliderFromEvent, dispatchFilters]);

  const handleReset = () => {
    setActiveCategory('all');
    setActiveSize(null);
    setSliderValue(100);
    dispatchFilters('all', null, 'Elite');
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
        <p>High-Velocity Gear</p>
      </div>

      <nav className={styles.categories}>
        {categories.map((cat, i) => (
          <motion.div 
            key={cat.label}
            className={`${styles.categoryItem} ${activeCategory === cat.value ? styles.activeCategory : ''}`}
            whileHover={{ x: 6 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + (i * 0.1) }}
            onClick={() => handleCategoryClick(cat.value)}
          >
            <span className={styles.icon}>{cat.icon}</span>
            <span className={styles.label}>{cat.label}</span>
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

      <div className={styles.filterSection}>
        <h3>Intensity</h3>
        <div 
          className={styles.sliderTrack} 
          ref={sliderRef}
          onMouseDown={handleSliderMouseDown}
          onTouchStart={handleSliderTouchStart}
        >
          <motion.div 
            className={styles.sliderFill} 
            style={{ width: `${sliderValue}%` }}
          />
          <motion.div 
            className={styles.sliderThumb}
            style={{ left: `${sliderValue}%` }}
            whileHover={{ scale: 1.3 }}
          />
        </div>
        <div className={styles.sliderLabels}>
          {intensityLevels.map((level) => (
            <span 
              key={level}
              className={getIntensityLabel(sliderValue) === level ? styles.activeIntensityLabel : ''}
            >
              {level}
            </span>
          ))}
        </div>
        <div className={styles.intensityIndicator}>
          <span className={styles.intensityBadge}>{getIntensityLabel(sliderValue)}</span>
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
