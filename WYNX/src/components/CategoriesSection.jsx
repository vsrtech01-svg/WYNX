import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './CategoriesSection.module.css';

const CategoriesSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const categories = [
    {
      id: "self-design",
      title: "Self Design",
      subtitle: "PATTI PATTERN",
      img: "/products/wynx-black-panel-1.png",
      filterMode: "self-design",
      className: styles.catLarge
    },
    {
      id: "solid",
      title: "Solid",
      subtitle: "CLEAN LOOK",
      img: "/products/wynx-black-track-1.png",
      filterMode: "solid",
      className: styles.catSmall
    },
    {
      id: "3-line",
      title: "3-Line",
      subtitle: "SPORTY",
      img: "/products/wynx-navy-3line-1.png",
      filterMode: "3-line",
      className: styles.catMedium
    },
    {
      id: "shorts",
      title: "Shorts",
      subtitle: "ACTIVEWEAR",
      img: "/products/wynx-shorts-beige-v2.png",
      filterMode: "Shorts",
      className: styles.catMedium
    }
  ];

  return (
    <section className={styles.categoriesSection} ref={ref}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        Categories
      </motion.h2>

      <div className={styles.grid}>
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.id}
            className={`${styles.card} ${cat.className}`}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Link to={`/collection/men?category=${cat.filterMode}`} className={styles.link}>
              <div className={styles.content}>
                <span className={styles.subtitle}>{cat.subtitle}</span>
                <h3 className={styles.catTitle}>{cat.title}</h3>
              </div>
              <div className={styles.imageWrapper}>
                <img src={cat.img} alt={cat.title} className={styles.img} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
