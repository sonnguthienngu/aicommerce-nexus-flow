
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedAutomations from "@/components/FeaturedAutomations";
import Categories from "@/components/Categories";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustSection />
      <FeaturedAutomations />
      <Categories />
      <Footer />
    </div>
  );
};

export default Index;
