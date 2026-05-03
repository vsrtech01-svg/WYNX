import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingCart, Check, Star, MessageCircle } from 'lucide-react';
import styles from './MobileProductModal.module.css';
import { useCart } from '../context/CartContext';

const MobileProductModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize, quantity);
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const handleWhatsAppOrder = () => {
    if (!selectedSize) return;
    const message = `Hi, I'd like to order:\n\n*Product:* ${product.name}\n*Size:* ${selectedSize}\n*Quantity:* ${quantity}\n*Price:* ₹${product.price}\n\nPlease confirm availability.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
  };

  const handleClose = () => {
    setSelectedSize(null);
    setQuantity(1);
    setAddedToCart(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleClose}
        >
          <motion.div
            className={styles.sheet}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag handle */}
            <div className={styles.dragHandle}>
              <div className={styles.handleBar}></div>
            </div>

            {/* Close button */}
            <motion.button
              className={styles.closeBtn}
              onClick={handleClose}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} />
            </motion.button>

            {/* Scrollable content */}
            <div className={styles.content}>
              {/* Product image */}
              <div className={styles.imageSection}>
                <div className={styles.imageContainer}>
                  {product.badge && <div className={styles.badge}>{product.badge}</div>}
                  {product.discount && (
                    <div className={styles.discountBadge}>↓{product.discount}%</div>
                  )}
                  <img src={product.img} alt={product.name} className={styles.productImg} />
                </div>
              </div>

              {/* Product info */}
              <div className={styles.infoSection}>
                <span className={styles.subcategory}>{product.subcategory}</span>
                <h2 className={styles.productName}>{product.name}</h2>

                {/* Rating */}
                {product.rating && (
                  <div className={styles.ratingRow}>
                    <div className={styles.ratingBadge}>
                      <Star size={11} fill="white" />
                      <span>{product.rating}</span>
                    </div>
                    <span className={styles.reviewCount}>{product.reviews} Ratings</span>
                  </div>
                )}

                {/* Price */}
                <div className={styles.priceRow}>
                  <span className={styles.price}>₹{product.price}</span>
                  {product.oldPrice && <span className={styles.oldPrice}>₹{product.oldPrice}</span>}
                  {product.discount && <span className={styles.discountText}>{product.discount}% off</span>}
                </div>

                {/* Size selection */}
                <div className={styles.sizeSection}>
                  <h3 className={styles.sectionLabel}>Select Size</h3>
                  <div className={styles.sizeGrid}>
                    {product.sizes.map(size => (
                      <motion.button
                        key={size}
                        className={`${styles.sizeBtn} ${selectedSize === size ? styles.activeSizeBtn : ''}`}
                        onClick={() => setSelectedSize(size)}
                        whileTap={{ scale: 0.92 }}
                      >
                        {size}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className={styles.quantitySection}>
                  <h3 className={styles.sectionLabel}>Quantity</h3>
                  <div className={styles.quantityControl}>
                    <motion.button
                      className={styles.qtyBtn}
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Minus size={16} />
                    </motion.button>
                    <span className={styles.qtyValue}>{quantity}</span>
                    <motion.button
                      className={styles.qtyBtn}
                      onClick={() => setQuantity(q => q + 1)}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Plus size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky action buttons */}
            <div className={styles.actionBar}>
              <motion.button
                className={`${styles.addToCartBtn} ${!selectedSize ? styles.disabledBtn : ''} ${addedToCart ? styles.addedBtn : ''}`}
                onClick={handleAddToCart}
                whileTap={selectedSize ? { scale: 0.97 } : {}}
                disabled={!selectedSize}
              >
                <AnimatePresence mode="wait">
                  {addedToCart ? (
                    <motion.span
                      key="added"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className={styles.btnContent}
                    >
                      <Check size={16} /> Added
                    </motion.span>
                  ) : (
                    <motion.span
                      key="add"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className={styles.btnContent}
                    >
                      <ShoppingCart size={16} /> {selectedSize ? 'Add to Cart' : 'Select Size'}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
              <motion.button
                className={`${styles.whatsappBtn} ${!selectedSize ? styles.disabledBtn : ''}`}
                onClick={handleWhatsAppOrder}
                whileTap={selectedSize ? { scale: 0.97 } : {}}
                disabled={!selectedSize}
              >
                <div className={styles.btnContent}>
                  <MessageCircle size={16} /> WhatsApp Order
                </div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileProductModal;
