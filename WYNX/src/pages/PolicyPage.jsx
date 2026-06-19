import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './PolicyPage.module.css';

const policyData = {
  shipping: {
    title: 'Shipping Policy',
    content: (
      <>
        <h2>🇮🇳 Domestic Shipping</h2>
        <ul>
          <li>Metro cities: 2–4 days</li>
          <li>Other regions: 3–6 days</li>
        </ul>

        <h2>💸 Shipping Charges</h2>
        <ul>
          <li>Free shipping above ₹799</li>
          <li>₹49 shipping below ₹799</li>
        </ul>

        <h2>💵 COD Policy</h2>
        <p>Available for orders between ₹700 – ₹2999</p>

        <h2>📦 Order Tracking</h2>
        <p>Tracking link sent via email/SMS after dispatch</p>

        <h2>⚠️ Important Notes</h2>
        <ul>
          <li>Wrong address = customer responsibility</li>
          <li>Delivery delays may occur due to external factors</li>
          <li>Lost shipment → replacement/refund after verification</li>
        </ul>
      </>
    )
  },
  privacy: {
    title: 'Privacy Policy',
    content: (
      <>
        <p>At WYNX, we respect your privacy.</p>

        <h2>📊 Data We Collect</h2>
        <ul>
          <li>Name, phone, email, address</li>
          <li>Payment details (securely processed)</li>
          <li>Website usage data (cookies, analytics)</li>
        </ul>

        <h2>🧠 How We Use Data</h2>
        <ul>
          <li>Order processing</li>
          <li>Customer support</li>
          <li>Improving services</li>
          <li>Marketing (only with consent)</li>
        </ul>

        <h2>🔒 Data Protection</h2>
        <ul>
          <li>Secure systems & encryption</li>
          <li>No selling of personal data</li>
        </ul>

        <h2>⚖️ User Rights</h2>
        <ul>
          <li>Access / update your data</li>
          <li>Request deletion</li>
        </ul>

        <h2>📩 Contact</h2>
        <p>Email us at: <a href="mailto:support@wynx.com">support@wynx.com</a></p>
      </>
    )
  },
  terms: {
    title: 'Terms of Service',
    content: (
      <>
        <p>By using WYNX, you agree to:</p>
        <ul>
          <li>Provide accurate information</li>
          <li>Use services legally</li>
          <li>Accept pricing & availability changes</li>
        </ul>

        <h2>⚠️ Limitations</h2>
        <p>WYNX is not liable for:</p>
        <ul>
          <li>Delivery delays</li>
          <li>Vendor issues</li>
          <li>External damages</li>
        </ul>

        <h2>❌ Order Cancellation</h2>
        <p>Allowed only within <span className={styles.emphasis}>12 hours</span> of placing order</p>

        <h2>👤 Eligibility</h2>
        <p>Must be 18+ or have guardian consent</p>
      </>
    )
  }
};

const PolicyPage = () => {
  const { type } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  if (!policyData[type]) {
    return <Navigate to="/" replace />;
  }

  const { title, content } = policyData[type];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.content}>
          {content}
        </div>
      </motion.div>
    </div>
  );
};

export default PolicyPage;
