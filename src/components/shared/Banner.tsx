'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Home, ChevronRight } from 'lucide-react'

const Banner = ({page} : { page: string}) => {
  return (
    <div className='relative h-80 w-full overflow-hidden'>
      {/* Blue overlay */}
      <div className="bg-[#406ACFC2] size-full absolute inset-0 z-10"></div>
      
      {/* Background image */}
      <div className="absolute size-full top-0 left-0">
        <div className="relative w-full h-full">
          <Image
            src="/landing/statsSection/mask.png"
            alt="Assorted color apparels"
            fill
            sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
        {/* Main heading */}
        <motion.h1 
          className="text-3xl md:text-4xl xl:text-5xl font-dm-sans font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {page}
        </motion.h1>

        {/* Breadcrumb navigation */}
        <motion.nav 
          className="flex items-center space-x-2 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Home size={20} className="text-white" />
            <span className="text-white font-medium font-lato">Home</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ChevronRight size={20} className="text-white/70" />
          </motion.div>
          
          <motion.span 
            className="text-white/90 font-medium font-lato"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {page}
          </motion.span>
        </motion.nav>
      </div>

      {/* Optional: Subtle gradient overlay for better text readability */}
      <div className="absolute inset-0 z-15 bg-gradient-to-b from-black/10 via-transparent to-black/20"></div>
    </div>
  )
}

export default Banner