import ServicesSection from "@/components/shared/ServicesSection";
const services = [
  {
    title: 'Wash & Fold Service',
    description: 'Convenient laundry service where we wash, dry, and neatly fold your clothes, saving you time for what matters most.',
    color: 'bg-[#4977E5]',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'Ironing Service',
    description: 'Professional ironing and pressing service to keep your clothes crisp and wrinkle-free for that polished, professional look.',
    color: 'bg-white',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'Pickup & Delivery',
    description: 'Hassle-free laundry service with convenient pickup and delivery right to your doorstep on your schedule.',
    color: 'bg-[#4977E5]',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'Dry Cleaning Coordination',
    description: 'We coordinate with trusted dry cleaning partners to handle your delicate garments that require special care and attention.',
    color: 'bg-white',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'Delicates Care',
    description: 'Gentle hand-washing and special care for your most precious and delicate fabrics, ensuring they maintain their quality.',
    color: 'bg-[#4977E5]',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
  {
    title: 'Bedding & Towels Only',
    description: 'Specialized service for bulky items like comforters, sheets, and towels with extra care and attention to freshness.',
    color: 'bg-white',
    icon: '/landing/serviceSection/brush.png',
    href: ''
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ServicesSection data={services} title="Laundry Services"/>
    </div>
  );
}
