'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SimpleSteps: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "1",
      title: "Choose Service",
      description: "Select from home cleaning, office, or specialized services"
    },
    {
      number: "2",
      title: "Pick Time & Date",
      description: "Book instantly or schedule for later that works for you"
    },
    {
      number: "3",
      title: "Relax & Enjoy",
      description: "Track your booking and enjoy a spotless space"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob-slow"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 xl:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            So simple, anyone can do it
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get started in three easy steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center"
            >
              {/* Number Circle */}
              <div className="relative mb-6">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <span className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4977E5] to-[#5B7AFF]">
                    {step.number}
                  </span>
                </div>
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-white/30"></div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-blue-100 text-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleSteps;

