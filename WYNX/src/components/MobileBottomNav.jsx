import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './MobileBottomNav.module.css';
import { Home, TrendingUp, Sparkles, Info, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const MobileBottomNav = () => {
  const location = useLocation();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const navItems = [
    { path: '/collection/men', label: 'Home', icon: <Home size={22} /> },
    { path: '/trending', label: 'Trending', icon: <TrendingUp size={22} /> },
    { path: '/new-arrivals', label: 'New', icon: <Sparkles size={22} /> },
    { path: '/about', label: 'About', icon: <Info size={22} /> },
    { path: '/cart', label: 'Cart', icon: <ShoppingCart size={22} />, isCart: true },
  ];

  return (
    <nav className={styles.bottomNav}>
      <div className={styles.navContainer}>
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);

          return (
            <Link 
              key={item.label} 
              to={item.path} 
              className={`${styles.navItem} ${isActive ? styles.active : ''}`}
            >
              <motion.div 
                className={styles.iconWrapper}
                whileTap={{ scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                {item.icon}
                {item.isCart && (
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
                )}
              </motion.div>
              <span className={styles.navLabel}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
