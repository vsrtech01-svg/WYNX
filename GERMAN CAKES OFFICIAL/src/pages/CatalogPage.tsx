import Navbar from "@/components/Navbar";
import CategoryBar from "@/components/CategoryBar";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const CatalogPage = () => (
  <div className="min-h-screen bg-background pt-16 md:pt-20">
    <Navbar />
    <CategoryBar />
    <ProductGrid />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default CatalogPage;
