import HeroSection from "@/components/landing/Hero";
import FeaturesSection from "@/components/landing/FeaturesSection";
import SimpleSteps from "@/components/landing/SimpleSteps";
import AppShowcase from "@/components/landing/AppShowcase";
import TestimonialsSection from "@/components/shared/TestimonialSection";
import DownloadCTA from "@/components/landing/DownloadCTA";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <HeroSection />
      <SimpleSteps />
      <AppShowcase />
      <TestimonialsSection />
      <DownloadCTA />
    </div>
  );
};

export default Home;