import ServicesSection from "@/components/shared/ServicesSection";
const services = [
  {
    title: 'Office Cleaning',
    description: 'Daily or weekly office cleaning services to maintain a professional work environment that impresses clients and motivates staff.',
    color: 'bg-[#4977E5]',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'Retail Store Cleaning',
    description: 'Specialized cleaning for retail spaces to create an inviting shopping environment that enhances customer experience.',
    color: 'bg-white',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'Restaurant & Café Cleaning',
    description: 'Food-safe cleaning services for restaurants and cafés, ensuring compliance with health regulations and maintaining hygiene standards.',
    color: 'bg-[#4977E5]',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'Parking Lot Cleaning',
    description: 'Comprehensive outdoor cleaning including pressure washing, debris removal, and maintenance of parking areas and walkways.',
    color: 'bg-white',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'Gym Cleaning',
    description: 'Specialized sanitization and cleaning for fitness facilities, focusing on equipment, locker rooms, and high-touch surfaces.',
    color: 'bg-[#4977E5]',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'Salon & Spa Cleaning',
    description: 'Professional cleaning services for beauty and wellness facilities, maintaining the serene and hygienic environment clients expect.',
    color: 'bg-white',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'Medical Clinic Cleaning',
    description: 'Healthcare-grade cleaning and disinfection services that meet strict medical facility standards for patient and staff safety.',
    color: 'bg-[#4977E5]',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'Industrial/Warehouse Cleaning',
    description: 'Heavy-duty cleaning services for industrial facilities, warehouses, and manufacturing spaces with specialized equipment and techniques.',
    color: 'bg-white',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
]

export default function Home() {
  return (
    <div className="bg-white py-10">
      <ServicesSection data={services} title="Commercial Services"/>
    </div>
  );
}
