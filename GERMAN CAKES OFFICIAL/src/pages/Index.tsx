import Navbar from "@/components/Navbar";
import CategoryBar from "@/components/CategoryBar";
import HeroSection from "@/components/HeroSection";
import MenuShowcase from "@/components/MenuShowcase";
import BestsellerSection from "@/components/BestsellerSection";
import CustomCakeSection from "@/components/CustomCakeSection";
import OurPromise from "@/components/OurPromise";
import OfferBanner from "@/components/OfferBanner";
import TrustBar from "@/components/TrustBar";
import GallerySection from "@/components/GallerySection";
import ReviewSection from "@/components/ReviewSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategoryBar />
      <MenuShowcase />
      <BestsellerSection />
      <CustomCakeSection />
      <OurPromise />
      <OfferBanner />
      <TrustBar />
      <GallerySection />
      <ReviewSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
