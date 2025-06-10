"use client";

import React, { useRef } from 'react';
import { motion, useInView} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
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
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const starVariants = {
    hidden: { opacity: 0, rotate: -180, scale: 0 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "backOut"
      }
    }
  };

  return (
    <section className="bg-gradient-to-br relative overflow-hidden px-5 xl:px-0 " ref={ref}>
      <div className="max-w-[1139px] mx-auto">
        <div className="grid lg:grid-cols-[40%_60%] gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="relative z-10 pb-6 md:pb-8 lg:pb-12 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* <motion.div variants={itemVariants} className="mb-3 md:mb-4 text-center lg:text-left">
              <span className="text-[#4977E5] font-medium text-xs md:text-sm tracking-wider uppercase">
                CLEAN HOME, HAPPY LIFE.
              </span>
            </motion.div> */}
            
            {/* Title with responsive star positioning */}
            <motion.div variants={itemVariants} className="relative mb-4 md:mb-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[52px] font-dm-sans font-bold text-gray-900 leading-tight text-center lg:text-left">
                Reliable Cleaning. {' '}
                <span className="text-[#4977E5]">Real Results.</span> 
              </h1>
              {/* Star positioned responsively */}
              <motion.div
                variants={starVariants}
                className="absolute top-20 md:top-20 -left-3 md:-left-3 lg:-left-5"
              >
                <Image
                  src={"/landing/hero/star.svg"}
                  alt={"Star"}
                  width={16}
                  height={16}
                  className="object-contain w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                />
              </motion.div>
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className="text-[#838B95] text-sm md:text-base lg:text-[15px] mb-6 md:mb-8 leading-relaxed max-w-lg font-lato text-center lg:text-left mx-auto lg:mx-0"
            >
              Pebble Cleaning offers fast, affordable, and flexible cleaning services across homes , offices and multiple property types in the UK
            </motion.p>
            
            {/* Responsive button layout */}
            <motion.div
              variants={itemVariants}
              className="flex xl:flex-col md:flex-row flex-row gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <Link href={"/about"}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(73, 119, 229, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#4977E5] cursor-pointer text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-blue-600 transition-colors shadow-lg text-sm md:text-base"
              >
                About Us
              </motion.button>
              </Link>

              <Link href={"/services"}>
                  <motion.button
                whileHover={{ scale: 1.05, borderColor: "#5977E5", backgroundColor: "#f8faff" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 cursor-pointer border-[#4977E5] text-[#4977E5] px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:border-[#5977E5] transition-colors bg-white text-sm md:text-base"
              >
                Book a Service
              </motion.button>
              </Link>
          
            </motion.div>
          </motion.div>

          {/* Right Image - Responsive sizing */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[480px] order-1 lg:order-2"
          >
            <Image
              src={"/landing/hero/heroImage.png"}
              alt={"Hero cleaning equipment"}
              fill
              className="object-cover rounded-xl md:rounded-2xl"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 60vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;