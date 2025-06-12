'use client'
import React from 'react'
import { motion } from 'framer-motion'
import image1 from "@/../public/work-with-us/work-image1.png"
import image2 from "@/../public/work-with-us/work-image2.png"
import image3 from "@/../public/work-with-us/work-image3.png"
import image4 from "@/../public/work-with-us/work-image4.png"
import Image from 'next/image'

const WorkGallery = () => {
  const array = [image1, image2, image3, image4]

  return (
    <div className='flex w-full lg:items-center lg:justify-center gap-4 overflow-x-auto hide-scrollbar'>
      {array.map((item, index) => (
        <motion.div
          key={index}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Image src={item} alt="gallery" height={300} width={300} />
        </motion.div>
      ))}
    </div>
  )
}

export default WorkGallery
