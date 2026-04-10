import React, { useState, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
          <Route path="/" element={<HomePage />} />
          <Route path="/collection/:category" element={<CollectionPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/new-arrivals" element={<NewArrivalsPage />} />
          <Route path="/policy/:type" element={<PolicyPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <MobileBottomNav />
    </>
  );
}

export default App;
