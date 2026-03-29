import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './CheckoutPage.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Check, ChevronDown, AlertCircle, MessageCircle, ShoppingCart, MapPin, User, Phone, Send } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getStates, getCities, lookupPincode } from '../data/indianLocations';

// ─── OWNER WHATSAPP NUMBER (with country code, no +) ──────
const OWNER_WHATSAPP_NUMBER = '919876543210'; // Replace with actual owner number

// ─── VALIDATION UTILS ─────────────────────────
const validators = {
  fullName: (v) => {
    if (!v) return 'Name is required';
    if (v.trim().length < 3) return 'Name must be at least 3 characters';
    return '';
  },
  phone: (v) => {
    if (!v) return 'Phone number is required';
    const cleaned = v.replace(/\D/g, '');
    if (cleaned.length !== 10) return 'Enter a valid 10-digit phone number';
    if (!/^[6-9]\d{9}$/.test(cleaned)) return 'Indian numbers start with 6, 7, 8, or 9';
    return '';
  },
  address: (v) => {
    if (!v) return 'Address is required';
    if (v.trim().length < 10) return 'Enter a complete address';
    return '';
  },
  city: (v) => (!v ? 'City is required' : ''),
  pincode: (v) => {
    if (!v) return 'Pincode is required';
    if (!/^\d{6}$/.test(v)) return 'Enter a valid 6-digit pincode';
    return '';
  },
};

// Format phone with spaces
const formatPhone = (value) => {
  const cleaned = value.replace(/\D/g, '').slice(0, 10);
  if (cleaned.length > 5) return `${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  return cleaned;
};

// ─── ANIMATED INPUT COMPONENT ─────────────────
const AnimatedInput = ({ label, name, value, onChange, onBlur, error, type = 'text', placeholder, maxLength, icon, disabled }) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className={styles.inputGroup}>
      <label className={styles.inputLabel}>{label}</label>
      <motion.div 
        className={`${styles.inputWrapper} ${isFocused ? styles.inputFocused : ''} ${error ? styles.inputError : ''}`}
        animate={{ 
          borderBottomColor: error ? '#ba1a1a' : isFocused ? '#003ec7' : 'transparent',
        }}
        transition={{ duration: 0.2 }}
      >
        {icon && <span className={styles.inputIcon}>{icon}</span>}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => { setIsFocused(false); onBlur?.(e); }}
          className={styles.input}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          autoComplete="off"
        />
      </motion.div>
      <AnimatePresence>
        {error && (
          <motion.span 
            className={styles.errorMsg}
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <AlertCircle size={11} /> {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── DROPDOWN COMPONENT ───────────────────────
const Dropdown = ({ label, value, options, onChange, error, placeholder, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = options.filter(o => o.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className={styles.inputGroup} ref={ref}>
      <label className={styles.inputLabel}>{label}</label>
      <motion.div 
        className={`${styles.inputWrapper} ${styles.dropdownTrigger} ${isOpen ? styles.inputFocused : ''} ${error ? styles.inputError : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        animate={{ borderBottomColor: error ? '#ba1a1a' : isOpen ? '#003ec7' : 'transparent' }}
        transition={{ duration: 0.2 }}
      >
        <span className={value ? styles.dropdownValue : styles.dropdownPlaceholder}>
          {value || placeholder}
        </span>
        <motion.span 
          className={styles.dropdownChevron}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.dropdownMenu}
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <input
              className={styles.dropdownSearch}
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
            <div className={styles.dropdownList}>
              {filtered.length === 0 && <div className={styles.dropdownEmpty}>No results</div>}
              {filtered.map(option => (
                <div
                  key={option}
                  className={`${styles.dropdownItem} ${option === value ? styles.dropdownItemActive : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onChange({ target: { name, value: option } });
                    setIsOpen(false);
                    setSearch('');
                  }}
                >
                  {option}
                  {option === value && <Check size={14} />}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {error && (
          <motion.span
            className={styles.errorMsg}
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <AlertCircle size={11} /> {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};


// ═══════════════════════════════════════════════
// ─── MAIN CHECKOUT PAGE ──────────────────────
// ═══════════════════════════════════════════════
const CheckoutPage = () => {
  const { cart, getCartTotal } = useCart();
  const navigate = useNavigate();
  const [pincodeLoading, setPincodeLoading] = useState(false);
  const [pincodeAutoFilled, setPincodeAutoFilled] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '', phone: '', address: '',
    city: '', pincode: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const subtotal = getCartTotal();
  const shipping = subtotal > 2000 ? 0 : 99;
  const total = subtotal + shipping;

  // ─── Pincode Auto-detect ──────────────────
  useEffect(() => {
    if (formData.pincode.length === 6) {
      setPincodeLoading(true);
      const timer = setTimeout(() => {
        const result = lookupPincode(formData.pincode);
        if (result) {
          setFormData(prev => ({ ...prev, city: result.city }));
          setErrors(prev => ({ ...prev, city: '', pincode: '' }));
          setPincodeAutoFilled(true);
          setTimeout(() => setPincodeAutoFilled(false), 2000);
        }
        setPincodeLoading(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [formData.pincode]);

  // ─── Handlers ─────────────────────────────
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    let formatted = value;
    
    if (name === 'phone') formatted = formatPhone(value);
    if (name === 'pincode') formatted = value.replace(/\D/g, '').slice(0, 6);

    setFormData(prev => ({ ...prev, [name]: formatted }));
    
    // Real-time validation on touched fields
    if (touched[name]) {
      const validator = validators[name];
      if (validator) {
        const err = validator(formatted);
        setErrors(prev => ({ ...prev, [name]: err }));
      }
    }
  }, [touched]);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const validator = validators[name];
    if (validator) {
      const err = validator(value);
      setErrors(prev => ({ ...prev, [name]: err }));
    }
  }, []);

  const validateForm = () => {
    const fields = ['fullName', 'phone', 'address', 'city', 'pincode'];
    const newErrors = {};
    const newTouched = {};
    let isValid = true;
    fields.forEach(field => {
      newTouched[field] = true;
      const err = validators[field](formData[field]);
      if (err) { newErrors[field] = err; isValid = false; }
    });
    setErrors(prev => ({ ...prev, ...newErrors }));
    setTouched(prev => ({ ...prev, ...newTouched }));
    return isValid;
  };

  // ─── Build WhatsApp message ───────────────
  const buildWhatsAppMessage = () => {
    const productLines = cart.map(item => {
      return `📦 Product: ${item.name}\n📏 Size: ${item.size}\n🔢 Quantity: ${item.quantity}`;
    }).join('\n\n');

    const message = `Hi! I'd like to place an order 🛒

${productLines}

📍 Shipping Details:
Name: ${formData.fullName}
Address: ${formData.address}
City: ${formData.city}
Pincode: ${formData.pincode}
Phone Number: ${formData.phone.replace(/\s/g, '')}

💰 Order Total: ₹${total.toLocaleString('en-IN')}

Please confirm total amount and payment details. Thanks!`;

    return message;
  };

  // ─── Handle form submit → WhatsApp redirect ──
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsRedirecting(true);

    // Short delay for the animation to show
    setTimeout(() => {
      const message = buildWhatsAppMessage();
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      
      // Reset redirecting state after opening WhatsApp
      setTimeout(() => setIsRedirecting(false), 2000);
    }, 1500);
  };

  // ─── Empty cart guard ─────────────────────
  if (cart.length === 0) {
    return (
      <div style={{ paddingTop: '72px' }}>
        <main className="main-content">
          <div className={styles.emptyState}>
            <h2>Your cart is empty</h2>
            <p>Add items to your cart before checking out</p>
            <Link to="/collection/men" className={styles.shopBtn}>Shop Collection</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <main className="main-content">
        {/* ─── Page Header ─────────────────── */}
        <motion.div 
          className={styles.pageHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.headerContent}>
            <ShoppingCart size={24} />
            <h1 className={styles.pageTitle}>Checkout</h1>
          </div>
          <p className={styles.headerSub}>Complete your details and order via WhatsApp</p>
        </motion.div>

        {/* ─── WhatsApp Redirect Overlay ──── */}
        <AnimatePresence>
          {isRedirecting && (
            <motion.div 
              className={styles.redirectOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className={styles.redirectContent}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div 
                  className={styles.whatsappIconLarge}
                  animate={{ 
                    scale: [1, 1.15, 1],
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ 
                    duration: 1.2, 
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <MessageCircle size={48} />
                </motion.div>
                <h2 className={styles.redirectTitle}>Redirecting to WhatsApp...</h2>
                <p className={styles.redirectText}>Your order details are being sent</p>
                <motion.div 
                  className={styles.redirectDots}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {[0, 1, 2].map(i => (
                    <motion.span
                      key={i}
                      className={styles.redirectDot}
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{ 
                        duration: 0.8, 
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Main Layout ─────────────────── */}
        <motion.div
          className={styles.checkoutLayout}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* ─── Form Section ──────────────── */}
          <div className={styles.formSection}>
            <form onSubmit={handleSubmit} noValidate>
              {/* Shipping Details */}
              <div className={styles.formBlock}>
                <h2 className={styles.formTitle}><MapPin size={20} /> Shipping Details</h2>

                <AnimatedInput 
                  label="Full Name" 
                  name="fullName" 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                  error={touched.fullName && errors.fullName} 
                  placeholder="Enter your full name"
                  icon={<User size={16} />}
                />

                <AnimatedInput 
                  label="Phone Number" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                  error={touched.phone && errors.phone} 
                  placeholder="99999 99999" 
                  maxLength={11}
                  icon={<Phone size={16} />}
                />

                <AnimatedInput 
                  label="Address" 
                  name="address" 
                  value={formData.address} 
                  onChange={handleChange} 
                  onBlur={handleBlur} 
                  error={touched.address && errors.address} 
                  placeholder="House no, Street, Area, Landmark" 
                />

                <div className={styles.inputRow}>
                  <div className={styles.pincodeWrapper}>
                    <AnimatedInput 
                      label="Pincode" 
                      name="pincode" 
                      value={formData.pincode} 
                      onChange={handleChange} 
                      onBlur={handleBlur} 
                      error={touched.pincode && errors.pincode} 
                      placeholder="6-digit pincode" 
                      maxLength={6} 
                    />
                    <AnimatePresence>
                      {pincodeLoading && (
                        <motion.div className={styles.pincodeSpinner} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <div className={styles.spinner} />
                        </motion.div>
                      )}
                      {pincodeAutoFilled && (
                        <motion.div className={styles.pincodeSuccess} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                          <Check size={12} /> Auto-detected
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <AnimatedInput 
                    label="City" 
                    name="city" 
                    value={formData.city} 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    error={touched.city && errors.city} 
                    placeholder="Your city"
                  />
                </div>
              </div>

              {/* WhatsApp Order Info */}
              <motion.div 
                className={styles.whatsappInfo}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className={styles.whatsappInfoIcon}>
                  <MessageCircle size={18} />
                </div>
                <div className={styles.whatsappInfoText}>
                  <strong>Order via WhatsApp</strong>
                  <span>Your order details will be sent directly to us on WhatsApp. We'll confirm your order and share payment details.</span>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.button 
                type="submit" 
                className={styles.submitBtn}
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                disabled={isRedirecting}
              >
                <MessageCircle size={18} />
                <span>Place Order via WhatsApp</span>
                <Send size={14} />
              </motion.button>
            </form>
          </div>

          {/* ─── Order Review Sidebar ──── */}
          <motion.div 
            className={styles.orderReview}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={styles.reviewTitle}>Order Summary</h3>
            <div className={styles.reviewItems}>
              {cart.map(item => (
                <motion.div 
                  key={item.cartItemId} 
                  className={styles.reviewItem}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.reviewItemImg}>
                    <img src={item.img} alt={item.name} />
                    <span className={styles.reviewQty}>{item.quantity}</span>
                  </div>
                  <div className={styles.reviewItemInfo}>
                    <span className={styles.reviewItemName}>{item.name}</span>
                    <span className={styles.reviewItemMeta}>Size: {item.size} · Qty: {item.quantity}</span>
                  </div>
                  <span className={styles.reviewItemPrice}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                </motion.div>
              ))}
            </div>
            <div className={styles.reviewSummary}>
              <div className={styles.reviewRow}><span>Subtotal</span><span>₹{subtotal.toLocaleString('en-IN')}</span></div>
              <div className={styles.reviewRow}><span>Shipping</span><span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span></div>
              <div className={styles.reviewTotal}><span>Total</span><span>₹{total.toLocaleString('en-IN')}</span></div>
            </div>
            {subtotal < 2000 && (
              <motion.div className={styles.freeShippingHint} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Add ₹{(2000 - subtotal).toLocaleString('en-IN')} more for free shipping
              </motion.div>
            )}

            {/* WhatsApp badge */}
            <div className={styles.whatsappBadge}>
              <MessageCircle size={14} />
              <span>Secure ordering via WhatsApp</span>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default CheckoutPage;
