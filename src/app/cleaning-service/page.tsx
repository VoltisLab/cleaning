import Banner from "@/components/about/Banner";
import FAQ from "@/components/CleaningServices/FAQ";
import PricingSection from "@/components/landing/PricingSection";
import ServicesSection from "@/components/landing/ServicesSection";

export default function Home() {
  const services = [
    {
      title: 'Residential Cleaning',
      description: 'We offer office cleaning to the highest standards, making sure your workspace is always fresh and welcoming.',
      color: 'bg-[#4977E5]',
      icon: '/landing/serviceSection/brush.png'
    },
    {
      title: 'Commercial Cleaning ',
      description: 'We provide laundry cleaning that’s thorough and gentle, making sure your clothes come back fresh and spotless every time.',
      color: 'bg-white',
      icon: '/landing/serviceSection/tissue.png'
    },
    {
      title: 'Laundry Services ',
      description: 'We specialise in Airbnb cleaning that meets the highest standards, so your guests always walk into a fresh, spotless space.',
      color: 'bg-white',
      icon: '/landing/serviceSection/image.png'
    },
     {
      title: 'Airbnb Services ',
      description: 'We specialise in Airbnb cleaning that meets the highest standards, so your guests always walk into a fresh, spotless space.',
      color: 'bg-white',
      icon: '/landing/serviceSection/image.png'
    },
  ];
  return (
    <div className="min-h-screen bg-white text-[#051625]">
      <Banner page="Services" />
        <div className="my-12 bg-white">
          <ServicesSection data={services}/>
          <PricingSection/>
          <FAQ/>
        </div>
    </div>
  );
}
