'use client';
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface Data {
  title: string;
  description: string;
  color: string;
  icon: string;
}

interface ServiceProps {
  data?: Data[];
}

const ServicesSection: React.FC<ServiceProps> = ({data}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: 'Office Cleaning',
      description: 'We offer office cleaning to the highest standards, making sure your workspace is always fresh and welcoming.',
      color: 'bg-[#4977E5]',
      icon: '/landing/serviceSection/brush.png'
    },
    {
      title: 'Laundry Cleaning ',
      description: 'We provide laundry cleaning that’s thorough and gentle, making sure your clothes come back fresh and spotless every time.',
      color: 'bg-white',
      icon: '/landing/serviceSection/tissue.png'
    },
    {
      title: 'Airbnb Cleaning ',
      description: 'We specialise in Airbnb cleaning that meets the highest standards, so your guests always walk into a fresh, spotless space.',
      color: 'bg-white',
      icon: '/landing/serviceSection/image.png'
    }
  ];

  const servicesData = data ? data : services

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
            Our Services
          </h2>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {servicesData?.map((service, index) => (
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