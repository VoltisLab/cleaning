import ContactSection from "@/components/landing/ContactSection";
import FeatureCards from "@/components/landing/FeautureCard";
import HeroSection from "@/components/landing/Hero";
import PricingSection from "@/components/landing/PricingSection";
import ServicesSection from "@/components/shared/ServicesSection";
import StatsSection from "@/components/landing/StatsSection";
import TestimonialsSection from "@/components/shared/TestimonialSection";
  const services = [
    {
      title: 'Residential Cleaning',
      description: `We provide laundry cleaning that's thorough and gentle, making sure your clothes come back fresh and spotless every time.`,
      color: 'bg-[#4977E5]',
      icon: '/landing/serviceSection/tissue.png',
      href: '/services/residential'
    },
    {
      title: 'Commercial Cleaning',
      description: 'We offer office cleaning to the highest standards, making sure your workspace is always fresh and welcoming.',
      color: 'bg-white',
      icon: '/landing/serviceSection/brush.png',
      href: '/services/commercial'
    },
    {
      title: 'Laundry Service',
      description: 'We specialise in Airbnb cleaning that meets the highest standards, so your guests always walk into a fresh, spotless space.',
      color: 'bg-[#4977E5]',
      icon: '/landing/serviceSection/image.png',
      href: '/services/laundry'
    },
    {
      title: 'Airbnb Cleaning',
      description: 'We specialise in Airbnb cleaning that meets the highest standards, so your guests always walk into a fresh, spotless space.',
      color: 'bg-white',
      icon: '/landing/serviceSection/image.png',
      href: '/services/airbnb'
    }
  ];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <FeatureCards />
      <ServicesSection  data={services} title="Our Services"/>
      <StatsSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Home;