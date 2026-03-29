import React from 'react';
import { motion } from 'framer-motion';
import NewArrivals from '../components/NewArrivals';
import TechBanner from '../components/TechBanner';
import Hero from '../components/Hero';

const NewArrivalsPage = () => {
  return (
    <motion.div 
      style={{ paddingTop: '72px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <main className="main-content">
        <Hero title={"NEW\nARRIVALS"} subtitle="Just Dropped — Fresh Gear" />
        <NewArrivals />
        <TechBanner />
      </main>
    </motion.div>
  );
};

export default NewArrivalsPage;
