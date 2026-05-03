import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './HeroProductPopup.module.css';

const HeroProductPopup = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  const handleWhatsAppOrder = () => {
    const message = `Hi, I'd like to order:\n\n*Product:* ${product.name}\n*Price:* ₹${product.price}\n\nPlease confirm availability and sizes.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.popup}
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              className={styles.closeBtn}
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} />
            </motion.button>

            {/* Product image */}
            <div className={styles.imageSection}>
              <motion.img
                src={product.img}
                alt={product.name}
                className={styles.productImg}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              {product.badge && <div className={styles.badge}>{product.badge}</div>}
              {product.discount && (
                <div className={styles.discountBadge}>{product.discount}% OFF</div>
              )}
            </div>

            {/* Product info */}
            <div className={styles.infoSection}>
              <span className={styles.subcategory}>{product.subcategory}</span>
              <h2 className={styles.productName}>{product.name}</h2>

              <div className={styles.priceRow}>
                <span className={styles.price}>₹{product.price}</span>
                {product.oldPrice && <span className={styles.oldPrice}>₹{product.oldPrice}</span>}
                {product.discount && <span className={styles.discountText}>{product.discount}% off</span>}
              </div>

              {product.description && (
                <p className={styles.description}>{product.description.substring(0, 120)}...</p>
              )}

              {/* Actions */}
              <div className={styles.actionRow}>
                <Link 
                  to={`/product/${product.id}`} 
                  className={styles.buyNowBtn}
                  onClick={onClose}
                >
                  <ShoppingCart size={16} /> Buy Now
                </Link>
                <motion.button
                  className={styles.whatsappBtn}
                  onClick={handleWhatsAppOrder}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={16} /> WhatsApp
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeroProductPopup;
