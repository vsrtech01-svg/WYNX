import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import BestSellers from '../components/BestSellers';
import TechBanner from '../components/TechBanner';
import TrendingSection from '../components/TrendingSection';
import NewArrivals from '../components/NewArrivals';

const HomePage = () => {
  return (
    <motion.div
      style={{ paddingTop: '72px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <main className="main-content">
        <Hero />
        <ProductList />
        <TrendingSection />
        <BestSellers />
        <NewArrivals />
        <TechBanner />
      </main>
    </motion.div>
  );
};

export default HomePage;
