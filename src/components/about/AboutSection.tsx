'use client'
import { motion, useInView } from "framer-motion";
import { Clock8 } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-5 xl:px-8" ref={ref}>
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section - Now fully responsive */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 xl:order-1"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
            >
              About Pebble Cleaning
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base"
            >
              Pebble Cleaning is a trusted and professional cleaning company offering comprehensive domestic and commercial services. Our carefully vetted team of cleaners brings over 30 years of combined experience, ensuring your space is treated with the utmost care and professionalism. We take pride in delivering exceptional results that exceed expectations.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-6 lg:mb-8 text-sm sm:text-base"
            >
              We understand that every space is unique, which is why we tailor our services to fit your specific needs. From regular home maintenance to deep commercial cleans, our dedicated team uses eco-friendly products and proven techniques to create spotless, healthy environments for you to enjoy.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="space-y-3 mb-6 lg:mb-8"
            >
              {[
                "Trusted Residential & Commercial Cleaning Services",
                "Eco-Friendly Products for Your Health & Safety",
                "Flexible Scheduling to Fit Your Busy Life",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3"
                >
                  <Clock8 color="#4977E5" className="w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">{text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.button
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px rgba(73, 119, 229, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4977E5] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors text-sm sm:text-base"
            >
              Book a Cleaner
            </motion.button>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full order-1 xl:order-2"
          >
            <Image
              src={"/about/cleaner.png"}
              alt={"Hero cleaning equipment"}
              fill
              className="object-contain w-full h-full rounded-xl"
              priority
            />   
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;