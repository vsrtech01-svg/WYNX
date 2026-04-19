import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styles from './ProductDetailPage.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Minus, Plus, ShoppingCart, Check, Star, Tag, Percent, MessageCircle } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import products from '../data/products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Resolve product by ID
  const product = getProductById(id);
  
  const { addToCart, clearCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="app-container" style={{ paddingTop: '72px' }}>
        <main className="main-content">
          <div className={styles.notFound}>
            <h2>Product Not Found</h2>
            <p>The product you're looking for doesn't exist.</p>
            <Link to="/" className={styles.backLink}>← Back to Home</Link>
          </div>
        </main>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    if (!selectedSize) return;
    clearCart();
    addToCart(product, selectedSize, quantity);
    navigate('/checkout');
  };

  return (
    <div style={{ paddingTop: '72px' }}>
      <main className="main-content">
        {/* Breadcrumb */}
        <motion.div 
          className={styles.breadcrumb}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to={`/collection/${product.category}`}>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</Link>
          <span>/</span>
          <span className={styles.currentPage}>{product.name}</span>
        </motion.div>

        {/* Product Detail */}
        <div className={styles.productDetail}>
          {/* Image */}
          <motion.div 
            className={styles.imageSection}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={`product-image-container ${styles.mainImage}`}>
              {product.badge && <div className={styles.badge}>{product.badge}</div>}
              {product.discount && (
                <div className={styles.discountBadge}>↓{product.discount}% OFF</div>
              )}
              <img src={product.img} alt={product.name} />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div 
            className={styles.infoSection}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.categoryLabel}>{product.subcategory}</span>
            <h1 className={styles.productName}>{product.name}</h1>
            
            {/* Rating */}
            {product.rating && (
              <div className={styles.ratingRow}>
                <div className={styles.ratingBadge}>
                  <Star size={12} fill="white" />
                  <span>{product.rating}</span>
                </div>
                <span className={styles.reviewCount}>{product.reviews} {product.reviews === 1 ? 'Rating' : 'Ratings'}</span>
              </div>
            )}

            {/* Price */}
            <div className={styles.priceRow}>
              {product.discount && (
                <span className={styles.discountPercent}>↓{product.discount}%</span>
              )}
              {product.oldPrice && (
                <span className={styles.oldPrice}>₹{product.oldPrice.toLocaleString('en-IN')}</span>
              )}
              <span className={styles.price}>₹{product.price}</span>
            </div>

            {/* Buy At Price */}
            {product.buyAtPrice && (
              <div className={styles.buyAtRow}>
                <Tag size={14} />
                <span>Buy at <strong>₹{product.buyAtPrice}</strong> with offers</span>
              </div>
            )}

            {/* Offers */}
            {product.offers && product.offers.length > 0 && (
              <div className={styles.offersSection}>
                <h3 className={styles.sectionLabel}>
                  <Percent size={14} /> Available Offers
                </h3>
                <div className={styles.offersList}>
                  {product.offers.map((offer, i) => (
                    <motion.div 
                      key={i} 
                      className={styles.offerItem}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                    >
                      <span className={styles.offerDot}></span>
                      <span>{offer.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            <p className={styles.description}>{product.description}</p>

            {/* Size Selection */}
            <div className={styles.sizeSection}>
              <h3 className={styles.sectionLabel}>Select Size</h3>
              <div className={styles.sizeGrid}>
                {product.sizes.map(size => (
                  <motion.button
                    key={size}
                    className={`${styles.sizeBtn} ${selectedSize === size ? styles.activeSizeBtn : ''}`}
                    onClick={() => setSelectedSize(size)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
              <motion.button 
                className={`${styles.addToCartBtn} ${!selectedSize ? styles.disabledBtn : ''} ${addedToCart ? styles.addedBtn : ''}`}
                onClick={handleAddToCart}
                whileHover={selectedSize ? { scale: 1.02 } : {}}
                whileTap={selectedSize ? { scale: 0.98 } : {}}
                disabled={!selectedSize}
              >
                <AnimatePresence mode="wait">
                  {addedToCart ? (
                    <motion.span
                      key="added"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={styles.btnContent}
                    >
                      <Check size={18} /> Added to Cart
                    </motion.span>
                  ) : (
                    <motion.span
                      key="add"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={styles.btnContent}
                    >
                      <ShoppingCart size={18} /> {selectedSize ? `Add to Cart — ₹${product.price}` : 'Select a Size'}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
              
              <motion.button
                className={`${styles.buyNowBtn} ${!selectedSize ? styles.disabledBtn : ''}`}
                onClick={handleBuyNow}
                whileHover={selectedSize ? { scale: 1.02 } : {}}
                whileTap={selectedSize ? { scale: 0.98 } : {}}
                disabled={!selectedSize}
              >
                 <div className={styles.btnContent}>
                    <MessageCircle size={18} /> Buy Now via WhatsApp
                 </div>
              </motion.button>
            </div>

            {/* Features */}
            <div className={styles.features}>
              <h3 className={styles.sectionLabel}>Features</h3>
              <ul className={styles.featureList}>
                {product.features.map((feature, i) => (
                  <motion.li 
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Product Reviews */}
        <section className={styles.reviewsSection}>
          <div className={styles.relatedHeader}>
            <h2 className={styles.relatedTitle}>Customer Reviews</h2>
          </div>
          <div className={styles.reviewsList}>
            {[
              {
                id: 1,
                name: "Rahul Verma",
                rating: 5,
                date: "2 weeks ago",
                comment: "Bhai quality ek number hai! Fabric is much better than expected. Perfect fit for daily use."
              },
              {
                id: 2,
                name: "Siddhant Sharma",
                rating: 5,
                date: "1 month ago",
                comment: "Comfort level is crazy. Delivery was fast too. Value for money."
              },
              {
                id: 3,
                name: "Ishaan Kapoor",
                rating: 4,
                date: "1 month ago",
                comment: "Bohat hi premium feel hai fabric ki. Definitely going to buy more colors from WYNX."
              }
            ].map((review) => (
              <div key={review.id} className={styles.reviewItem}>
                <div className={styles.reviewItemHeader}>
                  <div className={styles.reviewAuthor}>
                    <div className={styles.authorAvatar}>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className={styles.authorName}>{review.name} <span className={styles.verifiedBadge}><Check size={12} /> Verified</span></h4>
                      <div className={styles.authorRating}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill={i < review.rating ? "#ff4747" : "transparent"} color={i < review.rating ? "#ff4747" : "#cbd5e1"} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className={styles.reviewDate}>{review.date}</span>
                </div>
                <p className={styles.reviewComment}>{review.comment}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className={styles.relatedSection}>
            <div className={styles.relatedHeader}>
              <h2 className={styles.relatedTitle}>You May Also Like</h2>
            </div>
            <div className={styles.relatedGrid}>
              {relatedProducts.map((rProduct, index) => (
                <motion.div 
                  key={rProduct.id}
                  className={styles.relatedCard}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <Link to={`/product/${rProduct.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className={`product-image-container ${styles.relatedImage}`}>
                      <img src={rProduct.img} alt={rProduct.name} />
                    </div>
                    <h3 className={styles.relatedName}>{rProduct.name}</h3>
                    <div className={styles.relatedPriceRow}>
                      <span className={styles.relatedPrice}>₹{rProduct.price}</span>
                      {rProduct.oldPrice && <span className={styles.relatedOldPrice}>₹{rProduct.oldPrice}</span>}
                      {rProduct.discount && <span className={styles.relatedDiscount}>{rProduct.discount}% off</span>}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ProductDetailPage;
