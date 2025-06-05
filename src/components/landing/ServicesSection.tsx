import { ServiceCard } from "@/lib/types";
import Image from "next/image";
const ServicesSection: React.FC = () => {
  const services: ServiceCard[] = [
    {
      title: 'Office Cleaning',
      description: 'Awesome site on the top advertising a business online includes assembling having the most best.',
      color: 'bg-[#4977E5]',
      icon: '/landing/serviceSection/brush.png'
    },
    {
      title: 'Toilet Cleaning',
      description: 'Awesome site on the top advertising a business online includes assembling having the most best.',
      color: 'bg-white',
      icon: '/landing/serviceSection/tissue.png'
    },
    {
      title: 'Laundry Cleaning',
      description: 'Awesome site on the top advertising a business online includes assembling having the most best.',
      color: 'bg-white',
      icon: '/landing/serviceSection/image.png'
    }
  ];

  return (
    <section className="pb-20 ">
      <div className="max-w-[1139px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-bold leading-[130%] font-dm-sans max-w-[60%] text-center mx-auto text-[#051625] mb-4">
            Keep your vision to our latest projects.
          </h2>
          <p className="text-gray-600 max-w-md font-lato mx-auto">
            Awesome site on the top advertising a business online includes
            assembling having the most best.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} rounded-3xl p-8 text-left shadow-xl ${
                index === 0 ? 'text-white' : 'text-gray-800'
              }`}
            >
              
              <Image
                  src={service.icon}
                  alt={"Hero cleaning equipment"}
                  height={93.18}
                  width={93.18}
              />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className={`${index === 0 ? 'text-blue-100' : 'text-gray-600'}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;