import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import wynxLogo from '../assets/wynx-logo.png';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const cartCount = getCartCount();

  const navLinks = [
    { path: '/collection/men', label: 'Collection' },
    { path: '/trending', label: 'Trending' },
    { path: '/new-arrivals', label: 'New Arrivals' },
    { path: '/about', label: 'About' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/collection/men?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setMobileSearchOpen(false);
    }
  };

  return (
    <div className={styles.navbarWrapper}>
      <motion.nav 
        className={styles.navbar}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.container}>
          <motion.div 
            className={styles.logo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/"><img src={wynxLogo} alt="WYNX" className={styles.logoImg} /></Link>
          </motion.div>
          
          <div className={styles.links}>
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.path} 
                className={`${styles.link} ${isActive(link.path) ? styles.activeLink : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className={styles.actions}>
            {/* Desktop search */}
            <form onSubmit={handleSearch} className={styles.searchWrapper}>
              <Search className={styles.searchIcon} size={16} />
              <input 
                type="text" 
                placeholder="Search..." 
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            {/* Mobile search toggle */}
            <motion.button
              className={styles.mobileSearchBtn}
              onClick={() => setMobileSearchOpen((o) => !o)}
              whileTap={{ scale: 0.9 }}
              aria-label="Search"
            >
              {mobileSearchOpen ? <X size={20} /> : <Search size={20} />}
            </motion.button>

            <motion.div
              className={styles.cartBtnWrapper}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/cart" className={styles.cartBtn}>
                <ShoppingCart size={24} />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span 
                      className={styles.cartBadge}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile Search Bar — expands below navbar */}
        <AnimatePresence>
          {mobileSearchOpen && (
            <motion.div
              className={styles.mobileSearchBar}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <form onSubmit={handleSearch} className={styles.mobileSearchForm}>
                <Search size={16} className={styles.mobileSearchIcon} />
                <input
                  type="text"
                  placeholder="Search products..."
                  className={styles.mobileSearchInput}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                {searchQuery && (
                  <motion.button
                    type="button"
                    className={styles.mobileSearchClear}
                    onClick={() => setSearchQuery('')}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={14} />
                  </motion.button>
                )}
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
