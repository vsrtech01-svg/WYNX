import React, { useState, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import IntroLoader from './components/IntroLoader';
import MobileBottomNav from './components/MobileBottomNav';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import TrendingPage from './pages/TrendingPage';
import NewArrivalsPage from './pages/NewArrivalsPage';
import PolicyPage from './pages/PolicyPage';
import SocialPanel from './components/SocialPanel';

// Mobile page transition variants
const mobilePageVariants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Wrapper that applies transitions only on mobile
const MobileTransitionWrapper = ({ children }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  if (!isMobile) {
    return children;
  }

  return (
    <motion.div
      variants={mobilePageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <IntroLoader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MobileTransitionWrapper><HomePage /></MobileTransitionWrapper>} />
          <Route path="/collection/:category" element={<MobileTransitionWrapper><CollectionPage /></MobileTransitionWrapper>} />
          <Route path="/product/:id" element={<MobileTransitionWrapper><ProductDetailPage /></MobileTransitionWrapper>} />
          <Route path="/cart" element={<MobileTransitionWrapper><CartPage /></MobileTransitionWrapper>} />
          <Route path="/checkout" element={<MobileTransitionWrapper><CheckoutPage /></MobileTransitionWrapper>} />
          <Route path="/about" element={<MobileTransitionWrapper><AboutPage /></MobileTransitionWrapper>} />
          <Route path="/trending" element={<MobileTransitionWrapper><TrendingPage /></MobileTransitionWrapper>} />
          <Route path="/new-arrivals" element={<MobileTransitionWrapper><NewArrivalsPage /></MobileTransitionWrapper>} />
          <Route path="/policy/:type" element={<MobileTransitionWrapper><PolicyPage /></MobileTransitionWrapper>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <SocialPanel />
      <MobileBottomNav />
    </>
  );
}

export default App;
