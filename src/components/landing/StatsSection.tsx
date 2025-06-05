'use client'
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const StatsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: 200, label: "Houses Cleaned", suffix: "+" },
    { number: 150, label: "Happy Clients", suffix: "" },
    { number: 30, label: "Happy Airbnb Clients", suffix: "+" },
    { number: 100, label: "Trusted Cleaners", suffix: "%" }
  ];

  // Simple static number display - no animation
  const StaticNumber = ({ target, suffix }: { target: number; suffix: string }) => {
    return <span>{target}{suffix}</span>;
  };

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

  const statsContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
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
              What We Offer
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base"
            >
              Training programs can bring you a super exciting experience of learning through
              online! You never face any negative experience while enjoying your classes Awesome
              site on the top advertising a Courses available business having.
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
                "Professional Floor & Carpet Cleaning."
              ].map((text, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-gray-600 flex-shrink-0" />
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
              Learn More
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
              src={"/landing/statsSection/statsImage.png"}
              alt={"Hero cleaning equipment"}
              fill
              className="object-cover w-full h-full rounded-xl"
              priority
            />   
          </motion.div>
        </div>

        {/* Stats Section - Completely redesigned for responsiveness */}
        <motion.div 
          variants={statsContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative rounded-2xl lg:rounded-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 mt-16 overflow-hidden"
        >
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
            style={{
              backgroundImage: "url('/landing/statsSection/mask.png')",
            }}
          />
          
          {/* Blue overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#4977E5] via-[#4977E5] to-90%" />
          
          {/* Additional overlay for better text readability */}
          <div className="absolute inset-0 bg-blue-600/20" />

          {/* Stats grid - Fixed responsive layout */}
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={statVariants}
                whileHover={{ scale: 1.1 }}
                className="text-center text-white"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 drop-shadow-lg">
                  <StaticNumber target={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm lg:text-base font-medium opacity-90 drop-shadow-md">
                  {stat.label}
                </div>
                {/* Separator line - hidden on mobile for last item */}
                {index < stats.length - 1 && (
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-12 sm:h-16 lg:h-20 bg-white/30 hidden sm:block lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default StatsSection;