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
    <section className="py-20 px-5 xl:px-0" ref={ref}>
      <div className="max-w-[1139px] mx-auto ">
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
              About Us
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base"
            >
              Cleaning Solutions is a friendly and reliable cleaning company offering both domestic and commercial services. Our carefully vetted team of cleaners bring over 30 years of experience, ensuring your space is treated with the utmost care and professionalism. We tailor our services to fit your needs, delivering consistent, high-quality results every time.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-6 lg:mb-8 text-sm sm:text-base"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ad litora
              torquent.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="space-y-3 mb-6 lg:mb-8"
            >
              {[
                "Residential Cleaning Services Near You!",
                "Commercial Cleaning Service in Australia.",
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
              className="object-cover w-full h-full rounded-xl"
              priority
            />   
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;