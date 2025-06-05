import { PricingPlan } from "@/lib/types";
import { Dot } from "lucide-react";

const PricingSection: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      type: 'Commercial Cleaning',
      price: 20,
      period: 'month',
      features: [
        "Airbnb's",
        'Offices',
        'Schools',
        'Businesses'
      ]
    },
    {
      type: 'Domestic Cleaning',
      price: 60,
      period: 'month',
      features: [
        'One-off-clean',
        'Weekly clean',
        'Monthly clean',
        'Deep clean',
        'Laundry and Ironing Service',
        "Grocery Pick-up's"
      ],
      isPopular: true
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-[1139px] mx-auto flex xl:flex-row flex-col justify-between gap-10">
        <div className="xl:text-left mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Save 10% on weekly cleans</h2>
          <p className="text-gray-600 max-w-lg mx-auto mb-8">
            Save an extra 10% when you book our weekly or monthly cleaning services 
          </p>
      
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl xl:mx-auto mx-5">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 border-2 border-gray-100 shadow-lg hover:border-[#4977E5] transition-colors"
            >
              <div className="text-center mb-8 border-b border-b-gray-300">
                <h3 className="text-xl font-bold text-[#4977E5] mb-2">{plan.type}</h3>
                <div className="flex items-baseline justify-center">

                  <span className="text-4xl font-bold text-gray-900">£{plan.price}</span>
                  <span className="text-gray-600 ml-1">/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Dot className="w-5 h-5 text-[#4977E5]" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#4977E5] text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">
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