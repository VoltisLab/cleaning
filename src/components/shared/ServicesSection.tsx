'use client';
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface Data {
  title: string;
  description: string;
  color: string;
  icon: string;
  href: string;
}

interface ServiceProps {
  data?: Data[];
  title?: string
}

const ServicesSection: React.FC<ServiceProps> = ({data, title="Our Services"}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const servicesData = data 
  const router = useRouter()

  // Services that should NOT display buttons
  const excludedServices = ['Commercial Cleaning', 'Residential Cleaning', 'Laundry Service', 'Airbnb Cleaning'];

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

  const shouldShowButtons = (serviceTitle: string) => {
    return !excludedServices.includes(serviceTitle);
  };

  return (
    <section className="pb-20 px-5 xl:px-0" ref={ref}>
      <div className="max-w-[1139px] mx-auto bg-white">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="xl:text-[40px] md:text-[32px] text-[24px] font-bold leading-[130%] font-dm-sans xl:max-w-[60%] text-center xl:mx-auto text-[#051625] mb-4">
            {title}
          </h2>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center"
        >
          {servicesData?.map((service, index) => (
            // <Link key={index} href={service.href} className="w-full md:w-[270px]">
              <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -15,
                    scale: 1.03,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                  className={`group ${service.color} rounded-3xl p-4 text-left shadow-xl cursor-pointer w-full h-[320px] flex flex-col relative ${
                    index === 0 ? 'text-white' : 'text-gray-800'
                  }`}
                >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    height={80}
                    width={80}
                    className="object-contain"
                  />
                </motion.div>
                
                <div className="flex flex-col flex-1 mt-4">
                  <h3 className={`text-lg font-bold mb-3 line-clamp-2 min-h-[3.5rem] ${service.color === "bg-[#4977E5]" ? 'text-white' : ''}`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-sm flex-1 line-clamp-4 ${
                    index === 0 ? 'text-blue-100' : 'text-gray-600'
                  } ${service.color === "bg-[#4977E5]" ? 'text-white' : ''}`}>
                    {service.description}
                  </p>

                  {/* Buttons - only show if service title is not in excluded list */}
                  {shouldShowButtons(service.title) && (
  <>
    {/* Book Now - only on hover */}
    <button
      className={`absolute cursor-pointer top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium transition-all opacity-0 group-hover:opacity-100 ${
        service.color === "bg-[#4977E5]"
          ? 'bg-white text-[#4977E5] hover:bg-gray-100'
          : 'bg-transparent border border-[#4977E5] text-[#4977E5] hover:bg-[#4977E5] hover:text-white'
      }`}
      onClick={() => router.push(`/booking?servicetype=${service?.title}`)}
    >
      {service.color === "bg-[#4977E5]" ? 'Book now' : 'Book Now'}
    </button>

    {/* Learn More - always visible or also hide on hover if desired */}
    <button className={`absolute bottom-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
      service.color === "bg-[#4977E5]"
        ? 'border-white text-white hover:bg-white hover:text-[#4977E5]'
        : 'border-[#4977E5] text-[#4977E5] hover:bg-[#4977E5] hover:text-white'
    }`}>
      Learn More
    </button>
  </>
)}
                </div>
              </motion.div>
            // </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;