import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CartPage.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingCart, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartCount, clearCart } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 2000 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div style={{ paddingTop: '72px' }}>
      <main className="main-content">
        {/* Header */}
        <motion.div 
          className={styles.pageHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.pageTitle}>Your Cart</h1>
          <span className={styles.itemCount}>{getCartCount()} Items</span>
        </motion.div>

        {cart.length === 0 ? (
          <motion.div 
            className={styles.emptyCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ShoppingCart size={64} className={styles.emptyIcon} />
            <h2>Your cart is empty</h2>
            <p>Add some high-performance gear to get started</p>
            <Link to="/collection/men" className={styles.shopBtn}>
              Shop Now
            </Link>
          </motion.div>
        ) : (
          <div className={styles.cartLayout}>
            {/* Cart Items */}
            <div className={styles.cartItems}>
              <AnimatePresence>
                {cart.map((item, index) => (
                  <motion.div 
                    key={item.cartItemId}
                    className={styles.cartItem}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30, height: 0, marginBottom: 0, padding: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    layout
                  >
                    <Link to={`/product/${item.id}`} className={styles.itemImage}>
                      <img src={item.img} alt={item.name} />
                    </Link>
                    <div className={styles.itemDetails}>
                      <div className={styles.itemTop}>
                        <div>
                          <Link to={`/product/${item.id}`} className={styles.itemName}>{item.name}</Link>
                          <p className={styles.itemSize}>Size: {item.size}</p>
                        </div>
                        <motion.button 
                          className={styles.removeBtn}
                          onClick={() => removeFromCart(item.cartItemId)}
                          whileHover={{ scale: 1.1, color: '#ba1a1a' }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Trash2 size={16} />
                        </motion.button>
                      </div>
                      <div className={styles.itemBottom}>
                        <div className={styles.quantityControl}>
                          <motion.button 
                            className={styles.qtyBtn}
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Minus size={14} />
                          </motion.button>
                          <span className={styles.qtyValue}>{item.quantity}</span>
                          <motion.button 
                            className={styles.qtyBtn}
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Plus size={14} />
                          </motion.button>
                        </div>
                        <span className={styles.itemPrice}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <motion.div 
              className={styles.orderSummary}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className={styles.summaryTitle}>Order Summary</h2>
              
              <div className={styles.summaryRows}>
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
              </div>

              {subtotal < 2000 && (
                <div className={styles.freeShipping}>
                  Add ₹{(2000 - subtotal).toLocaleString('en-IN')} more for free shipping
                </div>
              )}

              <div className={styles.totalRow}>
                <span>Total</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link to="/checkout" className={styles.checkoutBtn}>
                  <MessageCircle size={16} /> Order via WhatsApp
                </Link>
              </motion.div>

              <Link to="/collection/men" className={styles.continueShopping}>
                ← Continue Shopping
              </Link>
            </motion.div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CartPage;
