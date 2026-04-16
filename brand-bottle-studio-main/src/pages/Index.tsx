import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStats from "@/components/TrustStats";
import ServicesSection from "@/components/ServicesSection";
import MidCTA from "@/components/MidCTA";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import OfferSection from "@/components/OfferSection";
import ProductShowcase from "@/components/ProductShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustStats />
      <ServicesSection />
      <MidCTA />
      <HowItWorksSection />
      <WhoWeWorkWith />
      <OfferSection />
      <ProductShowcase />
      <WhyChooseUs />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
