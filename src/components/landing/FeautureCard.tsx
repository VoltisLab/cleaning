"use client";
import Image from "next/image";
import { motion, useInView} from 'framer-motion';
import { useRef } from "react";

const FeatureCards: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const features = [
    {
      icon: '/landing/hero/price.png',
      title: "We're Efficient",    
      description: 'Our team works quickly and meticulously to ensure your space is spotless without disrupting your daily routine.',
      color: 'bg-red-50 border-red-100',
      iconBg: 'bg-red-100'
    },
    {
      icon: '/landing/hero/cart.png',
      title: "We're Reliable",
      description: 'You can count on us to be there when we say we will, every time.',
      color: 'bg-purple-50 border-purple-100',
      iconBg: 'bg-purple-100'
    },
    {
      icon: '/landing/hero/check.png',
      title: "We're Trustworthy",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
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
    <section className="pb-16 bg-white" ref={ref}>
      <div className="max-w-[1139px] mx-auto px-4 sm:px-6 lg:px-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="flex flex-col h-full p-6 rounded-2xl bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              {/* Icon Container - Fixed height for alignment */}
              <div className="flex justify-center mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="h-[60px] flex items-center justify-center"
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    height={47.36}
                    width={58.29}
                  />
                </motion.div>
              </div>
              
              {/* Title - Fixed height for horizontal alignment */}
              <div className="text-center mb-4">
                <h3 className="font-bold text-[#051625] text-[18px] leading-tight h-[44px] flex items-center justify-center">
                  {feature.title}
                </h3>
              </div>
              
              {/* Description - Flexible height */}
              <div className="text-center flex-1">
                <p className="text-[#838B95] text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureCards;

