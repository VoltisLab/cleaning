import { ServiceCard } from "@/lib/types";

const ServicesSection: React.FC = () => {
  const services: ServiceCard[] = [
    {
      title: 'Office Cleaning',
      description: 'Awesome site on the top advertising a business online includes assembling having the most best.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      icon: '🏢'
    },
    {
      title: 'Toilet Cleaning',
      description: 'Awesome site on the top advertising a business online includes assembling having the most best.',
      color: 'bg-gradient-to-br from-purple-100 to-purple-200',
      icon: '🚽'
    },
    {
      title: 'Laundry Cleaning',
      description: 'Awesome site on the top advertising a business online includes assembling having the most best.',
      color: 'bg-gradient-to-br from-teal-100 to-teal-200',
      icon: '👕'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Keep your vision to our latest projects.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Awesome site on the top advertising a business online includes
            assembling having the most best.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} rounded-3xl p-8 text-center ${
                index === 0 ? 'text-white' : 'text-gray-800'
              }`}
            >
              <div className="text-4xl mb-6">{service.icon}</div>
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