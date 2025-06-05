'use client';
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
const ServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
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

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="pb-20 px-5 xl:px-0" ref={ref}>
      <div className="max-w-[1139px] mx-auto">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="xl:text-[40px] md:text-[32px] text-[24px] font-bold leading-[130%] font-dm-sans xl:max-w-[60%] text-center xl:mx-auto text-[#051625] mb-4">
            Keep your vision to our latest projects.
          </h2>
          <p className="text-gray-600 max-w-md font-lato mx-auto">
            Awesome site on the top advertising a business online includes
            assembling having the most best.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
              className={`${service.color} rounded-3xl xl:p-8 p-4 text-left shadow-xl cursor-pointer ${
                index === 0 ? 'text-white' : 'text-gray-800'
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  height={93.18}
                  width={93.18}
                />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 mt-4">{service.title}</h3>
              <p className={`${index === 0 ? 'text-blue-100' : 'text-gray-600'}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;