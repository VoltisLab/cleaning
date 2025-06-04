import { PricingPlan } from "@/lib/types";
import { CheckCircle } from "lucide-react";

const PricingSection: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      type: 'Commercial',
      price: 20,
      period: 'month',
      features: [
        'Unlimited Access Courses',
        'Certificate After Completion',
        'High Resolution Videos',
        '24/7 Dedicated Support'
      ]
    },
    {
      type: 'Personal',
      price: 60,
      period: 'month',
      features: [
        'Unlimited Access Courses',
        'Certificate After Completion',
        'High Resolution Videos',
        '24/7 Dedicated Support'
      ],
      isPopular: true
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Save 30% Monthly</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Training programs can bring you a super exciting experience of
            learning through online! You never face any negative experience while
            enjoying your classes Awesome site on the top advertising.
          </p>
          <div className="flex items-center justify-center space-x-3">
            <span className="text-[#5B7AFF] text-2xl">▶️</span>
            <span className="text-gray-700">Video Presentation</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-[#5B7AFF] transition-colors"
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.type}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-1">/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#5B7AFF] text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">
                Get Now →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;