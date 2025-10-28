'use client'
import { motion, useInView } from "framer-motion";
import { Dot } from "lucide-react";
import { useRef } from "react";

const PricingSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
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

  const headerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20" ref={ref}>
      <div className="max-w-[1280px] mx-auto flex xl:flex-row items-center flex-col justify-between gap-10 px-4 xl:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="xl:text-left mb-16 text-center"
        >
          <h2 className="xl:text-4xl text-[24px] font-bold text-gray-900 mb-4">Save 10% on weekly cleans</h2>
          <p className="text-gray-600 max-w-lg mx-auto mb-8 font-lato">
            Save an extra 10% when you book our weekly or monthly cleaning services 
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-5xl xl:mx-auto w-full"
        >
          {plans.map((plan, index) => (
            <motion.div
  key={index}
  variants={cardVariants}
  whileHover={{ 
    y: -10, 
    scale: 1.02
  }}
  className="bg-white rounded-3xl p-6 border-2 border-gray-100 hover:border-[#4977E5] transition-colors cursor-pointer flex flex-col h-full"
>
  <div className="text-center mb-8 border-b border-b-gray-300 pb-6">
    <h3 className="text-xl font-bold text-[#4977E5] mb-2">{plan.type}</h3>
    <div className="flex items-baseline justify-center">
      <span className="text-4xl font-bold text-gray-900">£{plan.price}</span>
      <span className="text-gray-600 ml-1">/{plan.period}</span>
    </div>
  </div>
  
  {/* Features list with flex-grow to push button down */}
  <div className="flex-grow">
    <ul className="space-y-4 mb-8">
      {plan.features.map((feature, featureIndex) => (
        <motion.li 
          key={featureIndex}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.1 * featureIndex }}
          className="flex items-center space-x-3"
        >
          <Dot className="w-5 h-5 text-[#4977E5]" />
          <span className="text-gray-700">{feature}</span>
        </motion.li>
      ))}
    </ul>
  </div>
  
  {/* Button will always stick to bottom */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-full bg-[#4977E5] cursor-pointer text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors mt-auto"
  >
    Book Now →
  </motion.button>
</motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;