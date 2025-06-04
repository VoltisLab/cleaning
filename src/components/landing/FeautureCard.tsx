import { FeatureCard } from "@/lib/types";

const FeatureCards: React.FC = () => {
  const features: FeatureCard[] = [
    {
      icon: '🏷️',
      title: 'Best Price',
      description: 'Cheap & best price',
      color: 'bg-red-50 border-red-100'
    },
    {
      icon: '🚚',
      title: 'Free Delivery',
      description: 'Cheap & best price',
      color: 'bg-purple-50 border-purple-100'
    },
    {
      icon: '🛡️',
      title: "Customer's Protection",
      description: 'Cheap & best price',
      color: 'bg-blue-50 border-blue-100'
    },
    {
      icon: '💬',
      title: 'Live Support',
      description: 'Cheap & best price',
      color: 'bg-blue-50 border-blue-100'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;