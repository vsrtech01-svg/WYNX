import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import styles from './ReviewSection.module.css';

const REVIEWS = [
  {
    id: 1,
    rating: 5,
    text: "The fit is unreal. Lightweight, breathable and the patti detail looks premium. Definitely worth every rupee.",
    name: "Aarav S.",
    meta: "Mumbai • Self Design Blue"
  },
  {
    id: 2,
    rating: 5,
    text: "Finally a track pant that doesn't sag after one wash. I've ordered three colors. WYNX is my new go-to.",
    name: "Rohan K.",
    meta: "Bengaluru • Solid Navy"
  },
  {
    id: 3,
    rating: 4,
    text: "Classic 3-line look with a modern fit. Perfect for both gym and street. Shipping was super quick.",
    name: "Karan M.",
    meta: "Delhi • 3-Line Navy"
  },
  {
    id: 4,
    rating: 5,
    text: "Stretch fabric is a gamechanger. Hits the sweet spot between sporty and clean.",
    name: "Vivaan P.",
    meta: "Pune • 4-Way Navy"
  },
  {
    id: 5,
    rating: 5,
    text: "Quality is surprisingly good, comparing it to international brands. Really happy.",
    name: "Aditya R.",
    meta: "Hyderabad • Solid Black"
  },
  {
    id: 6,
    rating: 5,
    text: "Super comfortable for long travels. Looks very aesthetic too.",
    name: "Kabir T.",
    meta: "Chennai • Self Design Black"
  }
];

const ReviewSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className={styles.reviewSection} ref={ref}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>Worn by <span className={styles.highlight}>thousands</span></h2>
        <p className={styles.subtitle}>Hear from the WYNX community about why they keep coming back.</p>
      </motion.div>

      <div className={styles.scrollContainer}>
        <div className={styles.scrollTrack}>
          {/* We duplicate the reviews array to create an infinite scroll effect */}
          {[...REVIEWS, ...REVIEWS].map((review, index) => (
            <div key={`${review.id}-${index}`} className={styles.reviewCard}>
              <div className={styles.ratingRow}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={16} 
                    fill={star <= review.rating ? "#ff4747" : "transparent"} 
                    color={star <= review.rating ? "#ff4747" : "#cbd5e1"} 
                  />
                ))}
                <span className={styles.quoteIcon}>”</span>
              </div>
              <p className={styles.reviewText}>"{review.text}"</p>
              <div className={styles.reviewerInfo}>
                <h4 className={styles.reviewerName}>{review.name}</h4>
                <p className={styles.reviewerMeta}>{review.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
