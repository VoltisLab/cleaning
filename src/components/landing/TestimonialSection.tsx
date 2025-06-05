"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

interface TestimonialData {
  name: string;
  rating: number;
  content: string;
  avatar: string;
}

  const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialData[] = [
    {
      name: 'Alexa Bliss',
      rating: 4,
      content: '“I booked a deep clean with Cleaning Solutions, and I couldn’t be happier! They tackled all the tricky spots I’d been avoiding for months,  from behind appliances to dusty corners and my home has never looked better. The team was professional, thorough, and really cared about getting every detail right. Highly recommend!”',
      avatar: '/landing/test/image.png'
    },
    {
      name: 'John Smith',
      rating: 5,
      content: '“I booked a deep clean with Cleaning Solutions, and I couldn’t be happier! They tackled all the tricky spots I’d been avoiding for months,  from behind appliances to dusty corners and my home has never looked better. The team was professional, thorough, and really cared about getting every detail right. Highly recommend!”',
      avatar: '/landing/test/image.png'
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      content: '“I booked a deep clean with Cleaning Solutions, and I couldn’t be happier! They tackled all the tricky spots I’d been avoiding for months,  from behind appliances to dusty corners and my home has never looked better. The team was professional, thorough, and really cared about getting every detail right. Highly recommend!”',
      avatar: '/landing/test/image.png'
    },
    {
      name: 'Mike Wilson',
      rating: 4,
      content: '“I booked a deep clean with Cleaning Solutions, and I couldn’t be happier! They tackled all the tricky spots I’d been avoiding for months,  from behind appliances to dusty corners and my home has never looked better. The team was professional, thorough, and really cared about getting every detail right. Highly recommend!”',
      avatar: '/landing/test/image.png'
    },
    {
      name: 'Emma Davis',
      rating: 5,
      content: '“I booked a deep clean with Cleaning Solutions, and I couldn’t be happier! They tackled all the tricky spots I’d been avoiding for months,  from behind appliances to dusty corners and my home has never looked better. The team was professional, thorough, and really cared about getting every detail right. Highly recommend!”',
      avatar: '/landing/test/image.png'
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
    
    // Normalize the difference to handle wrap-around
    let normalizedDiff = diff;
    if (Math.abs(diff) > totalItems / 2) {
      normalizedDiff = diff > 0 ? diff - totalItems : diff + totalItems;
    }
    
    return normalizedDiff;
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4 relative">
        
        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          disabled={currentIndex === 0}
          className={`absolute left-4 top-2/4 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg ${
            currentIndex === 0 
              ? 'bg-[#93949E] opacity-35 text-gray-600 cursor-not-allowed' 
              : 'bg-[#5B7AFF] text-white hover:bg-[#4A6AEE]'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#5B7AFF] text-white rounded-full flex items-center justify-center hover:bg-[#4A6AEE] transition-colors shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="text-center">
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
                >
                  <div className={`relative ${
                    isActive ? 'w-15 h-15' : index === 1 || index === 4 ? 'w-14 h-14' : 'w-12 h-12'
                  } rounded-full overflow-hidden shadow-lg`}>
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
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${
                      i < testimonials[currentIndex].rating 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-[#838B95] text-[15px] font-lato leading-relaxed max-w-3xl mx-auto px-4">
                {testimonials[currentIndex].content}
              </p>

              {/* Closing Quote */}
              <div className="text-6xl text-[#5B7AFF] mt-4 font-serif rotate-180 inline-block">&quot;</div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#5B7AFF]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;