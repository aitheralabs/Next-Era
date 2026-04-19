import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStats from "@/components/TrustStats";
import ServicesSection from "@/components/ServicesSection";
import MidCTA from "@/components/MidCTA";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import ComparisonSection from "@/components/ComparisonSection";
import OfferSection from "@/components/OfferSection";
import ProductShowcase from "@/components/ProductShowcase";
import ResultsSection from "@/components/ResultsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";

const Index = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navbar />
      <HeroSection />
      <TrustStats />
      <ServicesSection />
      <MidCTA />
      <HowItWorksSection />
      <WhoWeWorkWith />
      <ComparisonSection />
      <OfferSection />
      <ProductShowcase />
      <ResultsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <PricingSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </div>
  );
};

export default Index;
