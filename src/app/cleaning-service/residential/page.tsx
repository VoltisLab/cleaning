import ServicesSection from "@/components/landing/ServicesSection";
const services = [
  // Residential Cleaning Services
  {
    title: 'Standard Home Cleaning',
    description: 'Regular weekly or bi-weekly cleaning to keep your home spotless, including dusting, vacuuming, mopping, and sanitizing all rooms.',
    color: 'bg-[#4977E5]',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'Deep Cleaning',
    description: 'Comprehensive top-to-bottom cleaning that reaches every corner, perfect for seasonal cleaning or preparing for special occasions.',
    color: 'bg-white',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'Move-In / Move-Out Cleaning',
    description: 'Thorough cleaning service for empty properties to ensure a fresh start for new residents or to get your deposit back.',
    color: 'bg-[#4977E5]',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'End of Tenancy Cleaning',
    description: 'Professional cleaning to meet landlord standards and guarantee the return of your security deposit with our comprehensive service.',
    color: 'bg-white',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'Spring Cleaning',
    description: 'Seasonal deep cleaning service to refresh your home after winter, including windows, baseboards, and hard-to-reach areas.',
    color: 'bg-[#4977E5]',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'After-Party Cleaning',
    description: 'Quick and efficient cleanup after events and gatherings, restoring your space to its original pristine condition.',
    color: 'bg-white',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'Appliance Cleaning',
    description: 'Specialized cleaning for ovens, refrigerators, microwaves, and other appliances to maintain hygiene and efficiency.',
    color: 'bg-[#4977E5]',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'Carpet & Upholstery Cleaning',
    description: 'Professional steam cleaning and stain removal for carpets, rugs, sofas, and chairs to restore their original beauty.',
    color: 'bg-white',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
]

export default function Home() {
  return (
    <div className=" bg-white ">
      <ServicesSection data={services} title="Residential Services"/>
    </div>
  );
}
