import React from 'react';
import { motion } from 'framer-motion';
import TrendingSection from '../components/TrendingSection';
import BestSellers from '../components/BestSellers';
import Hero from '../components/Hero';

const TrendingPage = () => {
  return (
    <motion.div 
      style={{ paddingTop: '72px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <main className="main-content">
        <Hero title={"TRENDING\nNOW"} subtitle="What's Hot Right Now" />
        <TrendingSection />
        <BestSellers />
      </main>
    </motion.div>
  );
};

export default TrendingPage;
