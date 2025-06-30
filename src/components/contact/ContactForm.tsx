'use client'
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import ControlledInputField from '../ui/ControlledInputField'
import DropdownField from '../ui/DropdownField'

interface FormData {
  name: string
  email: string
  service: string
  message: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const serviceOptions = [
    'Cleaning Service',
    'Laundry Service',
    'Airbnb Cleaning',
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleServiceSelect = (service: string) => {
    setFormData(prev => ({
      ...prev,
      service
    }))
    setIsDropdownOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }
    }
  }

  return (
    <motion.div 
      className="max-w-[1139px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
        {/* Left side - Contact Form */}
        <motion.div className="space-y-6 sm:space-y-8 w-full lg:w-2/3" variants={itemVariants}>
          {/* Header */}
          <motion.div className="space-y-3 sm:space-y-4" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#051625] text-center lg:text-left">
                Enquire Now
              </h2>
            </motion.div>
            <motion.p 
              className="text-gray-600 text-base sm:text-lg text-center lg:text-left"
              variants={itemVariants}
            >
              Shoot us a message if you have any question, we&apos;re here to help!
            </motion.p>
          </motion.div>

          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="flex flex-col gap-6 sm:gap-8 lg:gap-10"
            variants={itemVariants}
          >
            {/* Name and Email Row */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              variants={itemVariants}
            >
              <motion.div 
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="name" className="block text-sm font-semibold text-[#051625] mb-3 sm:mb-5">
                  Your name
                </label>
                <ControlledInputField
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
            />
              </motion.div>
              <motion.div 
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-semibold text-[#051625] mb-3 sm:mb-5">
                  Your email
                </label>
               <ControlledInputField
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
              />
              </motion.div>
            </motion.div>

            {/* Service Dropdown */}
           {/* Service Dropdown using DropdownField */}
        <motion.div className="space-y-2" variants={itemVariants}>
          <label className="block text-sm font-semibold text-[#051625] mb-3 sm:mb-5">
            What kind of service are you looking for?
          </label>
          <DropdownField
            name="service"
            value={formData.service}
            onChange={(value) =>
              setFormData((prev) => ({
                ...prev,
                service: value,
              }))
            }
            options={serviceOptions}
            placeholder="Select a service"
          />
        </motion.div>


            {/* Message */}
            <motion.div 
              className="space-y-2"
              variants={itemVariants}
            >
              <label htmlFor="message" className="block text-sm font-semibold text-[#051625] mb-3 sm:mb-5">
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message"
                rows={5}
                className="w-full px-3 sm:px-4 py-3 rounded-2xl border-2 placeholder:text-[#838B95] border-[#838B9566] focus:border-[#4977E5] focus:outline-none transition-colors resize-none text-sm sm:text-base"
                whileHover={{ scale: 1.01 }}
                whileFocus={{ scale: 1.01, borderColor: "#3B82F6" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="bg-[#4977E5] hover:bg-[#3977E5] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto sm:max-w-[200px] rounded-full transition-colors duration-200 text-sm sm:text-base"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Get In Touch
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Right side - Contact Details */}
        <motion.div 
          className="space-y-6 sm:space-y-8 w-full text-center lg:text-left lg:w-1/3 md:mb-0 mb-24"
          variants={cardVariants}
        >
          <motion.div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm xl:shadow-none ">
            <motion.h3 
              className="text-xl sm:text-2xl font-bold text-[#051625] mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Contact Details
            </motion.h3>
            
            <motion.div 
              className="space-y-4 sm:space-y-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.8
                  }
                }
              }}
            >
              

              {/* Email */}
              <motion.div 
                className="text-gray-600"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                }}
              >
                <motion.a 
                  href="mailto:creativeitem@gmail.com"
                  className="hover:text-[#4977E5] transition-colors text-base sm:text-[18px] font-lato text-[#838B95] break-all"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  hello@pebblecleaning.com
                </motion.a>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="text-[#051625] font-semibold"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                }}
              >
                <motion.a 
                  href="tel:+45612345765"
                  className="hover:text-[#4977E5] transition-colors text-lg sm:text-xl lg:text-[26px]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  +45612345765
                </motion.a>
              </motion.div>

              {/* Social Media */}
              <motion.div 
                className="flex gap-3 sm:gap-4 justify-center lg:justify-start"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                      duration: 0.5,
                      staggerChildren: 0.1
                    } 
                  }
                }}
              >
                <motion.a 
                  href="#" 
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white rounded-lg flex items-center justify-center"
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: "0 5px 15px rgba(37, 99, 235, 0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/contact/Facebook.svg"
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white rounded-lg flex items-center justify-center"
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: "0 5px 15px rgba(168, 85, 247, 0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/contact/Instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white rounded-lg flex items-center justify-center"
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: "0 5px 15px rgba(239, 68, 68, 0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/contact/Google.svg"
                    alt="Google"
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ContactForm