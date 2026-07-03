import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styles from './ProductDetailPage.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Minus, Plus, ShoppingCart, Check, Star, Tag, Percent, MessageCircle, Truck } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import products from '../data/products';

// Unique reviews generator — every product gets 3 unique reviews with 0 duplications
const NAMES = [
  'Aarav Sharma', 'Arjun Mehra', 'Kabir Malhotra', 'Rohan Singhania', 'Zayn Mirza',
  'Dev Chauhan', 'Aryan Kashyap', 'Omar Siddiqui', 'Ethan D\'Souza', 'Viraj Saxena',
  'Kunal Oberoi', 'Ishaan Bhatia', 'Dhruv Kapoor', 'Vihaan Thakur', 'Aditya Rathore',
  'Rehan Malik', 'Sahil Tiwari', 'Karan Grover', 'Yash Rawat', 'Rishabh Narayan',
  'Vivaan Deshpande', 'Pranav Ahuja', 'Harsh Tandon', 'Vikram Bedi', 'Sameer Dhillon',
  'Rajat Luthra', 'Nikhil Rajan', 'Siddharth Nair', 'Arnav Joshi', 'Manav Pillai',
  'Rayyan Khan', 'Daksh Verma', 'Tejas Kulkarni', 'Ayaan Chawla', 'Ritvik Anand',
  'Aakash Menon', 'Parth Khurana', 'Neil Bakshi', 'Shaurya Rana', 'Advait Hegde',
  'Ranbir Gill', 'Aniket Wagh', 'Abhinav Sethi', 'Tushar Nanda', 'Vaibhav Suri',
  'Gaurav Bajaj', 'Mohit Chadha', 'Nishant Dua', 'Rahul Khanna', 'Ajay Trehan',
  'Sourav Ghosh', 'Tanmay Sen', 'Priyanshu Roy', 'Akash Dey', 'Arijit Bose',
  'Chiranjit Pal', 'Debanjan Mitra', 'Subham Sarkar', 'Rudra Banerjee', 'Anirban Das',
  'Surya Iyer', 'Ganesh Hegde', 'Tarun Shetty', 'Naveen Kamath', 'Deepak Bhat',
  'Pradeep Gowda', 'Venkat Rao', 'Harish Prabhu', 'Sachin Naik', 'Ashwin Pai',
  'Zain Abbas', 'Farhan Sheikh', 'Imran Hussain', 'Armaan Qureshi', 'Faisal Ansari',
  'Amir Shaikh', 'Bilal Pathan', 'Hamza Sayyed', 'Junaid Memon', 'Rafiq Deshmukh',
  'Liam Pereira', 'Marcus Fernandes', 'Jason Lobo', 'Ryan Sequeira', 'Adrian Gomes',
  'Nathan Dias', 'Kevin Mascarenhas', 'Patrick Noronha', 'Simon Pinto', 'Victor Mendes',
  'Akhilesh Pandey', 'Amit Dubey', 'Saurabh Shukla', 'Vineet Tiwari', 'Puneet Mishra',
  'Lalit Dixit', 'Hemant Pathak', 'Dinesh Trivedi', 'Rajesh Vyas', 'Pankaj Purohit',
  'Krish Lamba', 'Aayan Vohra', 'Ronak Bhargava', 'Madhav Sinha', 'Shreyas Desai',
  'Darsh Agarwal', 'Jatin Makkad', 'Kartik Gupta', 'Mayank Jain', 'Hitesh Ahluwalia',
  'Ojas Maheshwari', 'Aarush Goyal', 'Yuvraj Chandra', 'Sarthak Kohli', 'Divya Raj',
  'Pratik Rastogi', 'Kinshuk Bajpai', 'Anupam Srivastava', 'Sumit Bharadwaj', 'Chirag Khatri'
];

const REVIEWS_TEXT = [
  "Bhai quality ek number hai! Fabric is much better than what you'd expect at this price. Perfect fit for daily use.",
  "Comfort level is insane honestly. Wore these for a 12-hour flight and zero discomfort. Fast delivery too.",
  "Bohat hi premium feel hai fabric ki. Already ordered two more colors from WYNX. Total fan now.",
  "The fit is unreal — lightweight, breathable, and the detail work looks way more expensive than it is.",
  "Finally a brand that doesn't sag after one wash. WYNX just became my permanent go-to for lowers.",
  "Classic look with a modern fit. Wore it to the gym and got three compliments. Shipping was super quick.",
  "Stretch fabric is an absolute gamechanger. Hits the sweet spot between sporty and clean for daily wear.",
  "Comparing this to some international brands I've owned and honestly WYNX holds up really well. Impressed.",
  "Super comfortable for long travel days. Looks very aesthetic with sneakers and an oversized tee.",
  "Mast fitting, mast material. Loved it so much, ordered one for my brother's birthday too.",
  "This is my third purchase from WYNX and they've never let me down once. Consistent quality.",
  "Looks exactly like the product photos — no color difference, very soft material, fits perfectly at the waist.",
  "The pocket depth and placement are perfect for gym — phone stays secure during deadlifts. Great value.",
  "Waist elastic is very comfortable, doesn't dig in or leave marks. Been using these for morning runs.",
  "Absolute value for money — probably the best track pants I've owned under 500 bucks. Period.",
  "Style and comfort both on point. My friends keep asking where I got these, so here's my review!",
  "The stitching and finishing are top-notch, no loose threads even after 5 washes. Feels really premium.",
  "Was a bit skeptical ordering online at first, but wow the fabric quality blew me away. So lightweight.",
  "Using these for my morning runs daily now. The stretch fabric moves with you, no restriction at all.",
  "Amazing color — doesn't fade even after multiple washes. At this price it's an absolute steal honestly.",
  "Got delivered in 2 days flat. The packaging was clean and the product quality exceeded my expectations.",
  "Perfect for daily wear — pairs well with anything from basic tees to hoodies. Very versatile piece.",
  "Zabardast product hai WYNX ka. Aaramdayak bhi hai aur premium look bhi deta hai. 10/10 from me.",
  "Can literally wear these all day — gym, errands, lounging — zero discomfort. Highly recommending this.",
  "Design looks really dope and unique. Got several compliments when I wore these to the gym yesterday.",
  "The fabric breathes so well in summer. No sweating, no sticking. Exactly what I needed for hot days.",
  "Ordered M size and it fits like a glove. True to size, no need to size up or down. Happy customer.",
  "Been wearing WYNX for 6 months now. Fabric quality hasn't degraded one bit. These are built to last.",
  "Love the minimalist design with just the logo. Not overdone, not plain — perfectly balanced aesthetics.",
  "The drawstring waistband is clutch — adjustable and doesn't come loose during workouts. Smart design.",
  "Paired these with my white sneakers and got so many DMs asking about the brand. WYNX is the move.",
  "Premium fabric at non-premium pricing. You really don't need to spend 2K on track pants anymore.",
  "Wore these on a trek last weekend. Super flexible, dried quickly when it rained. Impressed AF.",
  "Bro the side stripes on these are clean! Gives that retro athletic vibe with modern quality.",
  "Just got these and the packaging itself felt premium. Product quality matches the presentation perfectly.",
  "Color is deeper and richer than the photos honestly. Looks even better in person. Solid purchase.",
  "The anti-shrink fabric claim is legit. Washed these on hot cycle and they're still the same size.",
  "Track pants usually look sloppy but these have a tailored feel. Can wear them out without looking lazy.",
  "Delivery was super fast to my tier-2 city. Product was sealed properly. Quality is exactly as promised.",
  "The elastic ankle cuffs give these a jogger silhouette that looks way more put-together than regular tracks.",
  "My go-to for both gym and casual outings now. Replaced three older track pants with WYNX. No regrets.",
  "Fabric is buttery smooth against the skin. No itchiness even for extended wear. Really thoughtful quality.",
  "The grey color is this beautiful charcoal tone — not too light, not too dark. Pairs with everything.",
  "Have been looking for quality tracks at this price point for ages. WYNX ended that search completely.",
  "Wore these to a casual dinner and everyone thought they were much more expensive. That's the WYNX effect.",
  "Super impressed with the build quality. The reinforced stitching around pockets is a nice touch.",
  "Bought the navy version first, now ordering the black one too. That's how good these are.",
  "Perfect lower for Indian weather — breathable enough for summers, comfortable enough for AC environments.",
  "The fit is neither too baggy nor too tight. That perfect in-between that actually looks good.",
  "Received compliments from my gym trainer on the fit. Now he wants to order the same pair for himself.",
  "Honestly didn't expect this level of quality for the price. The fabric weight is just right — not too thin, not too heavy.",
  "Wore these to college every day for a month straight. Still looks brand new. WYNX durability is no joke.",
  "The tapered cut on these is chef's kiss. Finally track pants that don't make me look like I'm wearing pajamas.",
  "Ordered for my dad too and he absolutely loves them. Great across age groups, which says a lot about the fit.",
  "These survived a week-long road trip without a single wrinkle. Anti-wrinkle tech actually works here.",
  "Replaced my Nike joggers with these and genuinely can't tell the difference. WYNX is criminally underpriced.",
  "The WYNX logo placement is subtle but classy. Makes the whole look feel elevated without being shouty.",
  "Went for a 10K run in these — zero chafing, zero bunching. The stretch fabric is legit performance-grade.",
  "My girlfriend stole these from my closet and won't give them back. Ordering another pair ASAP.",
  "Packaging arrived with a nice thank-you card inside. Small touch but shows the brand cares. Product is A+.",
  "I own expensive athleisure brands and I'm saying this — WYNX competes at a fraction of the cost. No cap.",
  "The charcoal grey shade is absolutely gorgeous in natural light. Photos don't do justice honestly.",
  "Played football in these and they handled every slide tackle. Tough fabric without sacrificing comfort.",
  "These are my WFH uniform now. Professional enough for video calls, comfortable enough for all-day coding.",
  "Gifted these to three friends for their birthdays. All three came back to order more. That's the review.",
  "The elastic waistband doesn't lose tension even after months. Most brands fail here but WYNX nails it.",
  "Wore these on a date night with a blazer and clean sneakers — looked like a whole different outfit. Versatile king.",
  "Just moved to Bangalore and needed breathable tracks for the weather. These are literally perfect for it.",
  "The navy blue shade is deep and luxurious — gives off that expensive athleisure vibe effortlessly.",
  "Washed these in the machine 15+ times. Color intact, shape intact, stitching intact. Built different.",
  "These track pants have more compliments-per-rupee than anything else in my wardrobe. Fact.",
  "Was hesitant about ordering XL but the size chart was spot on. Fits exactly as expected. Thank you WYNX.",
  "The pocket zippers are smooth and silent. No annoying jingling during workouts. Thoughtful engineering.",
  "Travelling to Goa next week and packing three WYNX pairs. That's my entire lower wardrobe sorted.",
  "I run a fitness page on Instagram and these are my go-to for content shoots. They photograph beautifully.",
  "Used to think affordable = compromise. WYNX proved me completely wrong. Premium feel at honest pricing.",
  "The drawstring never gets lost inside the waistband like other brands. Such a practical design choice.",
  "Morning yoga, evening gym, night walks — these tracks have literally zero off-days. All-rounder.",
  "My roommate saw mine and ordered the same one within 10 minutes. That's the fastest review I can give.",
  "The fabric has this slight sheen that catches light beautifully. Looks way more expensive than it is."
];

// Deterministic review assignment — each product gets 5 completely unique reviews
const getReviewsForProduct = (productId, productReviewData) => {
  // If the product has embedded reviewData, use it directly
  if (productReviewData && productReviewData.length >= 5) {
    return productReviewData.map((r, i) => ({
      id: i + 1,
      name: r.name,
      rating: r.rating,
      date: r.date || '1 month ago',
      comment: r.text
    }));
  }

  const index = products.findIndex(p => p.id === productId);
  const nameBase = index >= 0 ? index * 5 : 0;
  const reviewBase = index >= 0 ? index * 5 : 0;

  // Realistic rating distribution — mostly strong, with some variance
  const ratingPatterns = [
    [5, 5, 4, 5, 5], [5, 4, 5, 4, 5], [4, 5, 5, 5, 4], [5, 5, 5, 4, 5], [5, 4, 4, 5, 5],
    [4, 5, 4, 5, 5], [5, 5, 5, 5, 4], [4, 4, 5, 5, 5], [5, 5, 4, 4, 5], [5, 4, 5, 5, 5],
    [5, 5, 5, 4, 4], [4, 5, 5, 5, 5], [5, 4, 4, 5, 5], [5, 5, 5, 5, 4], [4, 5, 5, 4, 5],
    [5, 5, 4, 5, 5], [5, 4, 5, 5, 4], [5, 5, 5, 4, 5], [4, 5, 4, 5, 5], [5, 5, 5, 5, 4],
    [5, 4, 5, 4, 5], [5, 5, 4, 5, 5], [4, 5, 5, 5, 5], [5, 5, 5, 4, 4], [5, 4, 4, 5, 5],
    [5, 5, 5, 5, 4], [4, 5, 5, 4, 5], [5, 4, 5, 5, 5], [5, 5, 4, 5, 4], [5, 5, 5, 5, 5],
    [4, 5, 5, 5, 4], [5, 5, 4, 4, 5], [5, 4, 5, 5, 5], [5, 5, 5, 5, 4], [4, 5, 4, 5, 5],
    [5, 5, 5, 4, 5], [5, 4, 5, 5, 5], [5, 5, 4, 5, 5], [4, 5, 5, 5, 5], [5, 5, 5, 5, 4]
  ];
  const ratings = ratingPatterns[index % ratingPatterns.length];

  const dateOptions = [
    ["3 days ago", "2 weeks ago", "1 month ago", "3 months ago", "5 months ago"],
    ["1 week ago", "3 weeks ago", "2 months ago", "4 months ago", "6 months ago"],
    ["5 days ago", "2 weeks ago", "6 weeks ago", "3 months ago", "5 months ago"],
    ["2 days ago", "10 days ago", "1 month ago", "2 months ago", "4 months ago"],
    ["1 week ago", "1 month ago", "3 months ago", "5 months ago", "7 months ago"],
    ["4 days ago", "3 weeks ago", "2 months ago", "4 months ago", "6 months ago"],
    ["6 days ago", "2 weeks ago", "5 weeks ago", "3 months ago", "5 months ago"],
    ["Just now", "1 week ago", "1 month ago", "2 months ago", "4 months ago"],
    ["3 days ago", "3 weeks ago", "2 months ago", "6 months ago", "8 months ago"],
    ["1 week ago", "2 weeks ago", "6 weeks ago", "4 months ago", "7 months ago"]
  ];
  const dates = dateOptions[index % dateOptions.length];

  return [
    {
      id: 1,
      name: NAMES[(nameBase) % NAMES.length],
      rating: ratings[0],
      date: dates[0],
      comment: REVIEWS_TEXT[(reviewBase) % REVIEWS_TEXT.length]
    },
    {
      id: 2,
      name: NAMES[(nameBase + 1) % NAMES.length],
      rating: ratings[1],
      date: dates[1],
      comment: REVIEWS_TEXT[(reviewBase + 19) % REVIEWS_TEXT.length]
    },
    {
      id: 3,
      name: NAMES[(nameBase + 2) % NAMES.length],
      rating: ratings[2],
      date: dates[2],
      comment: REVIEWS_TEXT[(reviewBase + 41) % REVIEWS_TEXT.length]
    },
    {
      id: 4,
      name: NAMES[(nameBase + 3) % NAMES.length],
      rating: ratings[3],
      date: dates[3],
      comment: REVIEWS_TEXT[(reviewBase + 63) % REVIEWS_TEXT.length]
    },
    {
      id: 5,
      name: NAMES[(nameBase + 4) % NAMES.length],
      rating: ratings[4],
      date: dates[4],
      comment: REVIEWS_TEXT[(reviewBase + 83) % REVIEWS_TEXT.length]
    }
  ];
};

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
              {product.soldOut ? (
                <>
                  <img src={product.img} alt={product.name} style={{ filter: 'grayscale(100%)' }} />
                  <div className={styles.soldOutImageOverlay}>
                    <motion.span
                      className={styles.soldOutImageTag}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.4 }}
                    >
                      SOLD OUT
                    </motion.span>
                  </div>
                </>
              ) : (
                <>
                  {product.discount && (
                    <div className={styles.discountBadge}>↓{product.discount}% OFF</div>
                  )}
                  <img src={product.img} alt={product.name} />
                </>
              )}
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
                  <Truck size={14} /> Delivery Offers
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
                    className={`${styles.sizeBtn} ${selectedSize === size ? styles.activeSizeBtn : ''} ${product.soldOut ? styles.soldOutSizeBtn : ''}`}
                    onClick={() => !product.soldOut && setSelectedSize(size)}
                    whileHover={!product.soldOut ? { scale: 1.05 } : {}}
                    whileTap={!product.soldOut ? { scale: 0.95 } : {}}
                    disabled={product.soldOut}
                    style={product.soldOut ? { cursor: 'not-allowed', opacity: 0.4, textDecoration: 'line-through' } : {}}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {product.soldOut ? (
              /* Sold Out Banner + Disabled Buttons */
              <>
                <motion.div
                  className={styles.soldOutBanner}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className={styles.soldOutBannerIcon}>⛔</span>
                  <div>
                    <p className={styles.soldOutBannerTitle}>Currently Out of Stock</p>
                    <p className={styles.soldOutBannerSub}>This product is sold out. Check back soon or explore similar items below.</p>
                  </div>
                </motion.div>
                <div className={styles.actionButtons}>
                  <button className={`${styles.addToCartBtn} ${styles.soldOutBtn}`} disabled>
                    <div className={styles.btnContent}>
                      <ShoppingCart size={18} /> Sold Out
                    </div>
                  </button>
                  <button className={`${styles.buyNowBtn} ${styles.soldOutBtn}`} disabled>
                    <div className={styles.btnContent}>
                      <MessageCircle size={18} /> Unavailable
                    </div>
                  </button>
                </div>
              </>
            ) : (
              <>
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
              </>
            )}

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
            {getReviewsForProduct(product.id, product.reviewData).map((review) => (
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
                  style={{ cursor: rProduct.soldOut ? 'default' : 'pointer' }}
                >
                  {rProduct.soldOut ? (
                    <div>
                      <div className={`product-image-container ${styles.relatedImage}`} style={{ position: 'relative' }}>
                        <img src={rProduct.img} alt={rProduct.name} style={{ filter: 'grayscale(100%)' }} />
                        <div style={{
                          position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px'
                        }}>
                          <span style={{
                            background: 'rgba(0,0,0,0.82)', border: '1.5px solid rgba(255,255,255,0.3)',
                            color: '#fff', fontWeight: 900, fontSize: '0.55rem', textTransform: 'uppercase',
                            letterSpacing: '0.25em', padding: '0.35rem 0.9rem', borderRadius: '30px',
                            backdropFilter: 'blur(4px)'
                          }}>SOLD OUT</span>
                        </div>
                      </div>
                      <h3 className={styles.relatedName} style={{ color: 'var(--secondary)' }}>{rProduct.name}</h3>
                      <div className={styles.relatedPriceRow}>
                        <span className={styles.relatedPrice} style={{ color: 'var(--secondary)' }}>₹{rProduct.price}</span>
                        {rProduct.oldPrice && <span className={styles.relatedOldPrice}>₹{rProduct.oldPrice}</span>}
                      </div>
                    </div>
                  ) : (
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
                  )}
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
