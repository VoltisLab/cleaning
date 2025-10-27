"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

interface TestimonialData {
  name: string;
  rating: number;
  content: string;
  avatar: string;
}

const TestimonialsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const testimonials: TestimonialData[] = [
    {
      name: 'Amelia R.',
      rating: 5,
      content: `"I booked a deep clean on Pebble and got matched within an hour. The cleaner was amazing and super professional." — London`,
      avatar: '/landing/test/image.png'
    },
    {
      name: 'Alex K.',
      rating: 5,
      content: `"We use Pebble for our Airbnb turnovers — fast, reliable, and easy to manage." — Manchester`,
      avatar: '/landing/test/image1.jpg'
    },
    {
      name: 'Tom B.',
      rating: 5,
      content: `"Finally, a cleaning app that just works. Payments, bookings, and photos — all in one place." — Birmingham`,
      avatar: '/landing/test/image3.png'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const getAvatarPosition = (index: number) => {
    const diff = index - currentIndex;
    const totalItems = testimonials.length;
    
    let normalizedDiff = diff;
    if (Math.abs(diff) > totalItems / 2) {
      normalizedDiff = diff > 0 ? diff - totalItems : diff + totalItems;
    }
    
    return normalizedDiff;
  };

  return (
    <section className=" pt-16 relative" ref={ref}>
      {/* Approach 1: Desktop arrows outside, mobile arrows above/below */}
      <div className="max-w-[1139px] mx-auto px-4 xl:px-0 relative">
        
        {/* Desktop Navigation Buttons - Outside content area */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevTestimonial}
          disabled={currentIndex === 0}
          className={`hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center transition-colors border border-gray-200 ${
            currentIndex === 0 
              ? 'bg-[#93949E] opacity-35 text-gray-600 cursor-not-allowed' 
              : 'bg-[#5B7AFF] text-white hover:bg-[#4A6AEE]'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextTestimonial}
          className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#5B7AFF] text-white rounded-full items-center justify-center hover:bg-[#4A6AEE] transition-colors border border-gray-200"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Mobile & Tablet Navigation - Above avatars */}
          <div className="xl:hidden flex justify-center items-center gap-4 mb-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              disabled={currentIndex === 0}
              className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors border border-gray-200 ${
                currentIndex === 0 
                  ? 'bg-[#93949E] opacity-35 text-gray-600 cursor-not-allowed' 
                  : 'bg-[#5B7AFF] text-white hover:bg-[#4A6AEE]'
              }`}
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
            
            <span className="text-sm md:text-base text-gray-500 font-medium min-w-[60px] md:min-w-[80px]">
              {currentIndex + 1} of {testimonials.length}
            </span>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-8 h-8 md:w-10 md:h-10 bg-[#5B7AFF] text-white rounded-full flex items-center justify-center hover:bg-[#4A6AEE] transition-colors border border-gray-200"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </div>

          {/* Avatar Row */}
          <div className="flex justify-center items-center mb-6 relative h-20">
            {testimonials.map((testimonial, index) => {
              const position = getAvatarPosition(index);
              const isActive = index === currentIndex;
              
              return (
                <motion.div
                  key={index}
                  className={`absolute cursor-pointer transition-all duration-300 ${
                    isActive ? 'z-20' : 'z-10'
                  }`}
                  animate={{
                    x: position * 60,
                    scale: isActive ? 1.3 : 0.9,
                    opacity: Math.abs(position) > 2 ? 0 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  onClick={() => goToTestimonial(index)}
                  whileHover={{ scale: isActive ? 1.4 : 1.0 }}
                >
                  <div className={`relative ${
                    isActive ? 'w-12 h-12' : 'w-11 h-11'
                  } rounded-full overflow-hidden border border-gray-200`}>
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 48px, 64px"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Current Testimonial Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              {/* Name with Badge */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <h3 className="font-bold text-[18px] text-[#051625]">
                  {testimonials[currentIndex].name}
                </h3>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star 
                      className={`w-4 h-4 ${
                        i < testimonials[currentIndex].rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-[#838B95] text-xs md:text-[15px] font-lato leading-relaxed max-w-3xl mx-auto px-4 sm:px-6 md:px-4">
                {testimonials[currentIndex].content}
              </p>

              {/* Closing Quote */}
              <motion.div 
                initial={{ opacity: 0, rotate: 180 }}
                animate={{ opacity: 1, rotate: 180 }}
                className="text-6xl text-[#5B7AFF] mt-4 font-serif inline-block"
              >
                &quot;
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToTestimonial(index)}
                className={`md:w-3 md:h-3 w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#5B7AFF]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;