import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const GalleryPage = () => (
  <div className="min-h-screen bg-background pt-16 md:pt-20">
    <Navbar />
    <GallerySection />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default GalleryPage;
