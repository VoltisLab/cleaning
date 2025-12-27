'use client';
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Wallet, TrendingUp, Users, Shield, Clock, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const CleanersBenefitsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    '/landing/hero/9.jpeg',
    '/landing/hero/10.jpeg'
  ];

  useEffect(() => {
    if (sliderImages.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % sliderImages.length;
        return next;
      });
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const benefits = [
    {
      icon: Wallet,
      title: "0% Platform Fees",
      description: "Keep 100% of what you earn. No hidden charges, no commission cuts. What you charge is what you get."
    },
    {
      icon: Wallet,
      title: "Free to Use",
      description: "Join and start earning at absolutely no cost. No subscription fees, no monthly charges, no setup costs."
    },
    {
      icon: TrendingUp,
      title: "More Earnings",
      description: "With zero fees, you maximize your income. Every booking means more money in your pocket."
    },
    {
      icon: Users,
      title: "Access to Customers",
      description: "Connect with customers actively looking for cleaning services. Build your client base effortlessly."
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Get paid safely and on time. All transactions are protected and processed securely through the platform."
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Work on your own terms. Accept bookings that fit your schedule and availability."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6 xl:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6 border border-blue-100 w-fit"
            >
              <Sparkles className="w-4 h-4 text-[#4977E5]" />
              <span className="text-sm font-semibold text-[#4977E5]">For Professional Cleaners</span>
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Keep 100% of Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4977E5] to-[#5B7AFF]">
                Earnings - Zero Fees
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join Pebble and enjoy a completely free platform designed to help you grow your cleaning business. No fees, no commissions, no hidden costs.
            </p>

            {/* Benefits List */}
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="flex gap-4"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-[#4977E5] to-[#5B7AFF] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image Slider */}
          {sliderImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center lg:justify-end"
            >
            <div className="relative w-full max-w-[400px] flex items-center justify-center gap-4">
              {/* Left Arrow */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="absolute -left-16 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:shadow-xl"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-[#4977E5]" />
              </motion.button>

              {/* Image */}
              <div className="relative w-full max-w-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                  >
                    {sliderImages[currentSlide] && (
                      <Image
                        src={sliderImages[currentSlide]}
                        alt={`Cleaner Benefits ${currentSlide + 1}`}
                        width={400}
                        height={800}
                        className="w-full rounded-2xl"
                        priority={currentSlide === 0}
                        unoptimized
                        quality={100}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                  {/* Slider Indicators */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {sliderImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? 'bg-[#4977E5] w-6'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Arrow */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="absolute -right-16 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:shadow-xl"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-[#4977E5]" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CleanersBenefitsSection;
