import Navbar from "@/components/Navbar";
import ReviewSection from "@/components/ReviewSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ReviewsPage = () => (
  <div className="min-h-screen bg-background pt-16 md:pt-20">
    <Navbar />
    <ReviewSection />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default ReviewsPage;
