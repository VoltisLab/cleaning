"use client"
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
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

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section className="pt-20 pb-36" ref={ref}>
      <div className="max-w-[1139px] mx-auto xl:px-0 px-5">
        <div className="grid xl:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative h-[400px] lg:h-[500px] w-full"
          >
            <Image
              src={"/landing/contact/image.png"}
              alt={"Contact us"}
              fill
              className="object-contain w-full h-full rounded-xl"
              priority
            />
          </motion.div>
          
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="shadow-lg md:p-10 p-6 rounded-[16px] relative"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, rotate: -20, scale: 0 }}
                animate={isInView ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -20, scale: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Image
                  src={"/landing/contact/brush1.png"}
                  alt={"Decoration"}
                  height={100.28}
                  width={100.28}
                  className="object-contain absolute -left-13 -top-16 xl:-left-18 xl:-top-20"
                />
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="md:text-[40px] text-[20px] font-bold text-gray-900 mb-2">
                Have a Question?
              </h2>
              <h3 className="md:text-[40px] text-[20px] font-bold mb-4 text-gray-900">
                Get in <span className="text-[#5B7AFF]">touch!</span>
              </h3>
            </motion.div>
            
            <div className="space-y-6">
              {[
                { label: "Your name", name: "name", type: "text", placeholder: "Enter your name" },
                { label: "Your Email", name: "email", type: "email", placeholder: "Enter your email" }
              ].map((field) => (
                <motion.div key={field.name} variants={itemVariants}>
                  <label className="block text-gray-700 font-medium mb-2">{field.label}</label>
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "#5B7AFF" }}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#5B7AFF] transition-colors"
                  />
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 font-medium mb-2">Service</label>
                <motion.select
                  whileFocus={{ scale: 1.02, borderColor: "#5B7AFF" }}
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#5B7AFF] appearance-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Residential Cleaning</option>
                  <option value="mobile-app">Commercial Cleaning</option>
                  <option value="ui-ux-design">Laundry Services</option>
                  <option value="consulting">Airbnb Cleaning</option>
                </motion.select>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 font-medium mb-2">Preferred Date</label>
                <motion.input
                  whileFocus={{ scale: 1.02, borderColor: "#5B7AFF" }}
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#5B7AFF] transition-colors"
                  min={new Date().toISOString().split('T')[0]} // Prevent past dates
                />
              </motion.div>
              
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(91, 122, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                className="w-full bg-[#5B7AFF] cursor-pointer text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
              >
                Submit
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;