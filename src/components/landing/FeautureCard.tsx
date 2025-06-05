import { FeatureCard } from "@/lib/types";
import Image from "next/image";

const FeatureCards: React.FC = () => {
  const features: FeatureCard[] = [
    {
      icon: '/landing/hero/price.png',
      title: "We’re Efficient",    
      description: 'Our team works quickly and meticulously to ensure your space is spotless without disrupting your daily routine.',
      color: 'bg-red-50 border-red-100',
      iconBg: 'bg-red-100'
    },
    {
      icon: '/landing/hero/cart.png',
      title: "We’re Reliable",
      description: 'You can count on us to be there when we say we will, every time.',
      color: 'bg-purple-50 border-purple-100',
      iconBg: 'bg-purple-100'
    },
    {
      icon: '/landing/hero/check.png',
      title: "We’re Trustworthy",
      description: 'Your safety and privacy are our top priorities. All our staff are vetted professionals committed to respecting your space and maintaining the highest ethical standards.',
      color: 'bg-blue-50 border-blue-100',
      iconBg: 'bg-blue-100'
    },
    {
      icon: '/landing/hero/question.png',
      title: 'More Than Just Cleaning',
      description: 'Beyond cleaning, we provide comprehensive care, including laundry services, grocery pick-ups, ironing and more.',
      color: 'bg-indigo-50 border-indigo-100',
      iconBg: 'bg-indigo-100'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1139px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 rounded-2xl "
            >
              {/* Icon Container */}
             
                <Image
                    src={feature.icon}
                    alt={"Hero cleaning equipment"}
                    height={47.36}
                    width={58.29}
                />
              
              
              {/* Content */}
              <div className="text-center">
                <h3 className="font-bold text-[#051625] text-[18px] mb-2">{feature.title}</h3>
                <p className="text-[#838B95] text-xs leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeatureCards;