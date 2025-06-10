import ContactSection from "@/components/landing/ContactSection";
import FeatureCards from "@/components/landing/FeautureCard";
import HeroSection from "@/components/landing/Hero";
import PricingSection from "@/components/landing/PricingSection";
import ServicesSection from "@/components/shared/ServicesSection";
import StatsSection from "@/components/landing/StatsSection";
import TestimonialsSection from "@/components/shared/TestimonialSection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white ">
      <HeroSection />
      <FeatureCards />
      <ServicesSection />
      <StatsSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Home;