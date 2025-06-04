import ContactSection from "@/components/landing/ContactSection";
import FeatureCards from "@/components/landing/FeautureCard";
import HeroSection from "@/components/landing/Hero";
import NewsletterSection from "@/components/landing/NewsLetterSection";
import NewsSection from "@/components/landing/NewsSection";
import PricingSection from "@/components/landing/PricingSection";
import ServicesSection from "@/components/landing/ServicesSection";
import StatsSection from "@/components/landing/StatsSection";
import TeamSection from "@/components/landing/TeamSection";
import TestimonialsSection from "@/components/landing/TestimonialSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white ">
      <Header />
      <HeroSection />
      <FeatureCards />
      <ServicesSection />
      <StatsSection />
      <TeamSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <NewsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Home;