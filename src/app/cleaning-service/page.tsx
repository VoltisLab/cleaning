import Banner from "@/components/about/Banner";
import FAQ from "@/components/CleaningServices/FAQ";
import PricingSection from "@/components/landing/PricingSection";
import ServicesSection from "@/components/landing/ServicesSection";

export default function Home() {
  const services = [
    {
      title: 'Office Cleaning',
      description: 'We offer office cleaning to the highest standards, making sure your workspace is always fresh and welcoming.',
      color: 'bg-[#4977E5]',
      icon: '/landing/serviceSection/brush.png'
    },
    {
      title: 'Laundry Cleaning ',
      description: 'We provide laundry cleaning that’s thorough and gentle, making sure your clothes come back fresh and spotless every time.',
      color: 'bg-white',
      icon: '/landing/serviceSection/tissue.png'
    },
    {
      title: 'Airbnb Cleaning ',
      description: 'We specialise in Airbnb cleaning that meets the highest standards, so your guests always walk into a fresh, spotless space.',
      color: 'bg-white',
      icon: '/landing/serviceSection/image.png'
    },
    {
      title: 'Weekly Cleaning',
      description: 'We offer reliable weekly cleaning to keep your home consistently fresh, tidy, and stress-free.',
      color: 'bg-white',
      icon: '/landing/serviceSection/brush.png'
    },
    {
      title: 'One-Off Cleaning ',
      description: 'Our one-off cleaning service is perfect for when you need a quick refresh or a thorough clean before a special occasion.',
      color: 'bg-white',
      icon: '/landing/serviceSection/tissue.png'
    },
    {
      title: 'Deep Clean ',
      description: 'We provide detailed deep cleaning to tackle built-up grime and hard-to-reach areas, leaving your space spotless from top to bottom.',
      color: 'bg-white',
      icon: '/landing/serviceSection/image.png'
    }
  ];
  return (
    <div className="min-h-screen bg-white text-[#051625]">
      <Banner page="Services" />
        <div className="my-12">
          <ServicesSection data={services}/>
          <PricingSection/>
          <FAQ/>

        </div>
    </div>
  );
}
