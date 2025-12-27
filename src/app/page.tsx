import HeroSection from "@/components/landing/Hero";
import HeroWithSlider from "@/components/landing/HeroWithSlider";
import FeaturesSection from "@/components/landing/FeaturesSection";
import CleanersBenefitsSection from "@/components/landing/CleanersBenefitsSection";
import SimpleSteps from "@/components/landing/SimpleSteps";
import AppShowcase from "@/components/landing/AppShowcase";
import DownloadCTA from "@/components/landing/DownloadCTA";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <HeroWithSlider />
      <CleanersBenefitsSection />
      <SimpleSteps />
      <AppShowcase />
      <DownloadCTA />
    </div>
  );
};

export default Home;