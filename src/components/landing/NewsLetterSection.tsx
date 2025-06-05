"use client"
import { useRef, useState } from "react";
import Image from 'next/image'
import { motion, useInView } from "framer-motion";

const NewsletterSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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

  return (
    <section className="py-8 md:py-16 relative" ref={ref}>
      <div className="w-full max-w-[1139px] absolute left-1/2 transform -translate-x-1/2 xl:-top-24 -top-40 px-4 sm:px-6 lg:px-0">
        <div className="pt-12 md:pt-16 relative">
          {/* Image positioned outside the blue container */}
          <motion.div 
            initial={{ opacity: 0, x: -100, rotate: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -100, rotate: -10 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block absolute left-4 lg:left-8 xl:left-16 top-6 lg:top-10 z-10"
          >
            <Image
              src="/landing/news/cleaner.png"
              alt="Hero cleaning equipment"
              height={380}
              width={355.20}
              className="object-cover"
              priority
            />
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#4977E5] rounded-2xl md:rounded-3xl py-6 px-4 sm:py-8 sm:px-6 md:px-8 overflow-visible relative w-full"
          >
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 items-center">
              
              {/* Mobile Image */}
              <motion.div variants={itemVariants} className="md:hidden flex justify-center mb-4">
                <Image
                  src="/landing/news/cleaner.png"
                  alt="Hero cleaning equipment"
                  height={200}
                  width={186}
                  className="object-cover"
                />
              </motion.div>
              
              {/* Empty space for image on desktop */}
              <div className="hidden xl:block h-32 2xl:h-40" />
              
              {/* Content */}
              <div className="text-white text-center xl:text-left">
                <motion.h2 
                  variants={itemVariants}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] xl:text-3xl font-bold mb-3 md:mb-4 font-dm-sans leading-tight"
                >
                  Subscribe to our newsletter to get updates to our latest collections
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-blue-100 mb-6 md:mb-8 text-sm sm:text-base"
                >
                  Get 20% off on your first order just by subscribing to our newsletter
                </motion.p>
                
                {/* Newsletter Form */}
                <motion.div variants={itemVariants} className="space-y-3 sm:space-y-0">
                  <div className="flex flex-col sm:flex-row bg-white/15 backdrop-blur-sm rounded-full p-1 gap-2 sm:gap-1 border border-gray-400">
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 placeholder:text-white rounded-full text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSubmit}
                      className="bg-white text-[#1D242D] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap text-sm sm:text-base"
                    >
                      Subscribe
                    </motion.button>
                  </div>
                </motion.div>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-blue-100 text-xs sm:text-sm mt-3 md:mt-4 leading-relaxed"
                >
                  You will be able to unsubscribe at any time.{' '}
                  <span className="underline cursor-pointer hover:text-white transition-colors">
                    Read our privacy policy here
                  </span>
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default NewsletterSection