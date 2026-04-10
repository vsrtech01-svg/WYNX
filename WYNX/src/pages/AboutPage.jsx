import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutPage.module.css';
import { motion, useInView } from 'framer-motion';
import { Zap, Shield, Target, Award, ArrowRight, MapPin, Phone } from 'lucide-react';

const stats = [
  { value: '2K+', label: 'Athletes Worldwide' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '4.9★', label: 'Average Rating' },
];

const values = [
  { 
    icon: <Zap size={24} />, 
    title: 'Performance First', 
    description: 'Every thread, seam, and fabric choice is optimized for peak athletic performance. We never compromise on function.' 
  },
  { 
    icon: <Shield size={24} />, 
    title: 'Built to Last', 
    description: 'Our gear is torture-tested through thousands of training hours. Durability is engineered into every product we create.' 
  },
  { 
    icon: <Target size={24} />, 
    title: 'Precision Fit', 
    description: 'Anatomically mapped compression zones and 3D body scanning ensure our gear moves with you, not against you.' 
  },
  { 
    icon: <Award size={24} />, 
    title: 'Innovation Driven', 
    description: 'Our R&D lab continuously pushes fabric technology forward. From moisture-wicking to thermoregulation, we lead the industry.' 
  },
];

const timeline = [
  { title: 'The Beginning', desc: 'WYNX was founded in a small garage with one mission: make performance gear that actually performs.' },
  { title: 'First Collection', desc: 'Launched our debut men\'s compression line, selling out in 48 hours.' },
  { title: 'Global Expansion', desc: 'Established our presence across India and focused on delivering high-quality performance wear.' },
  { title: 'Community Built', desc: 'Built a growing community of 2,000+ athletes and fitness enthusiasts.' },
  { title: 'The Future', desc: 'Introducing next-gen adaptive compression and sustainable manufacturing processes.' },
];

const AboutPage = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-50px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-50px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  return (
    <div style={{ paddingTop: '72px' }}>
      <main className="main-content">
        {/* Hero */}
        <section className={styles.hero} ref={heroRef}>
          <motion.div 
            className={styles.heroGraphic}
            initial={{ x: '100%', skewX: 12, opacity: 0 }}
            animate={heroInView ? { x: '10%', skewX: 12, opacity: 0.15 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className={styles.heroContent}>
            <motion.span 
              className={styles.heroLabel}
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.span>
            <motion.h1 
              className={styles.heroTitle}
              initial={{ y: 40, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              ENGINEERED<br/>FOR CHAMPIONS
            </motion.h1>
            <motion.p 
              className={styles.heroDesc}
              initial={{ y: 20, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We exist for the athletes who refuse to settle. WYNX combines cutting-edge 
              fabric engineering with aggressive design to create performance gear that 
              dominates the training floor.
            </motion.p>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.statsSection} ref={statsRef}>
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label} 
                className={styles.statCard}
                initial={{ y: 30, opacity: 0 }}
                animate={statsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className={styles.valuesSection} ref={valuesRef}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ x: -30, opacity: 0 }}
            animate={valuesInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            What Drives Us
          </motion.h2>
          <div className={styles.valuesGrid}>
            {values.map((value, i) => (
              <motion.div 
                key={value.title} 
                className={styles.valueCard}
                initial={{ y: 40, opacity: 0 }}
                animate={valuesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}
              >
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDesc}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className={styles.timelineSection} ref={timelineRef}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ x: -30, opacity: 0 }}
            animate={timelineInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            Our Journey
          </motion.h2>
          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <motion.div 
                key={item.title} 
                className={styles.timelineItem}
                initial={{ x: i % 2 === 0 ? -40 : 40, opacity: 0 }}
                animate={timelineInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <section className={styles.contactSection}>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}><MapPin size={24} /></div>
              <h3 className={styles.contactTitle}>Visit Us</h3>
              <p className={styles.contactDesc}>Bindayaka, Jaipur, Rajasthan 302041</p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}><Phone size={24} /></div>
              <h3 className={styles.contactTitle}>Contact Us</h3>
              <p className={styles.contactDesc}>WhatsApp/Phone:<br/>+91 6350 070 744</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection} ref={ctaRef}>
          <motion.div 
            className={styles.ctaBg}
            animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          />
          <div className={styles.ctaContent}>
            <motion.h2 
              className={styles.ctaTitle}
              initial={{ y: 30, opacity: 0 }}
              animate={ctaInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              JOIN THE MOVEMENT
            </motion.h2>
            <motion.p 
              className={styles.ctaDesc}
              initial={{ y: 20, opacity: 0 }}
              animate={ctaInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Gear up with the athletes who demand more. Explore the full WYNX collection.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={ctaInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/collection/men" className={styles.ctaBtn}>
                  Shop Collection <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
