import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './PolicyPage.module.css';

const policyData = {
  returns: {
    title: 'Refund & Return Policy',
    content: (
      <>
        <p>At WYNX, customer satisfaction is our priority. If something isn’t right with your order, we’ve made our return and refund process simple and transparent.</p>
        
        <h2>🛍️ Return & Exchange Window</h2>
        <ul>
          <li>Returns/exchanges must be requested within <span className={styles.emphasis}>7 days of delivery</span></li>
          <li>Requests after 7 days will not be accepted</li>
        </ul>

        <h2>⚠️ Incorrect / Damaged / Missing Items</h2>
        <p>Report within <span className={styles.emphasis}>24 hours of delivery</span></p>
        <p>A clear unboxing video is mandatory, showing:</p>
        <ul>
          <li>Package condition</li>
          <li>Items received</li>
          <li>Visible issue</li>
        </ul>
        <p className={styles.emphasis}>❗ Requests without video or after 24 hours will be rejected</p>

        <h2>✅ Eligibility for Returns</h2>
        <p>Item must be:</p>
        <ul>
          <li>Unused & unworn</li>
          <li>With original tags & packaging</li>
          <li>With proof of purchase</li>
        </ul>

        <h2>❌ Non-Returnable Items</h2>
        <ul>
          <li>Innerwear / undergarments</li>
          <li>Socks</li>
          <li>Gift cards</li>
          <li>Final sale items</li>
          <li>Discounted items (unless stated otherwise)</li>
        </ul>

        <h2>🚚 Reverse Pickup</h2>
        <ul>
          <li>Free reverse pickup (if available in your area)</li>
          <li>Only one pickup per order allowed</li>
        </ul>
        <p>If pickup unavailable:</p>
        <ul>
          <li>Customer must self-ship (instructions provided)</li>
        </ul>

        <h2>🔄 Return Process</h2>
        <ol>
          <li>Visit Returns page</li>
          <li>Enter Order ID + contact info</li>
          <li>Select item & reason</li>
          <li>Submit request</li>
        </ol>
        <p>After approval:</p>
        <ul>
          <li>Pickup arranged</li>
          <li>Updates via SMS/email</li>
        </ul>

        <h2>💰 Refund Policy</h2>
        <h3>⏳ Timeline</h3>
        <ul>
          <li>Refund processed after inspection</li>
          <li>Initiated within 10 business days</li>
          <li>Bank may take extra time</li>
        </ul>

        <h3>💸 Deductions</h3>
        <ul>
          <li>COD orders: ₹49 deducted</li>
          <li>Prepaid orders: 3% processing fee</li>
        </ul>

        <h3>💳 Refund Mode</h3>
        <p>Refunds go to original payment method only</p>
      </>
    )
  },
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
