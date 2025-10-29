import HeroSection from "@/components/landing/Hero";
import HeroWithSlider from "@/components/landing/HeroWithSlider";
import FeaturesSection from "@/components/landing/FeaturesSection";
import SimpleSteps from "@/components/landing/SimpleSteps";
import AppShowcase from "@/components/landing/AppShowcase";
import TestimonialsSection from "@/components/shared/TestimonialSection";
import CommunitySection from "@/components/landing/CommunitySection";
import DownloadCTA from "@/components/landing/DownloadCTA";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <HeroWithSlider />
      <SimpleSteps />
      <AppShowcase />
      <TestimonialsSection />
      <CommunitySection />
      <DownloadCTA />
    </div>
  );
};

export default Home;