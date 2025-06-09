'use client'
import { Clock8 } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const JoinUs = () => {
  const array = [
    "Paid training and onboarding",
    "Flexible working hours ",
    "Uniforms and cleaning supplies provided",
    "Supportive and respectful team culture",
    "Opportunities to grow into supervisor or manager roles"
  ]

  return (
    <div className='flex lg:flex-row flex-col justify-center lg:gap-40 gap-10'>
      <motion.div
        className='lg:w-[546px] w-full flex flex-col gap-3'
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='font-[700] text-3xl lg:text-4xl'>Join us today!</h2>
        <p className='font-[400] text-sm text-[#838B95]'>
          At Pebble Cleaning Ltd, we’re more than just cleaners — we’re a team that takes pride in delivering exceptional service and making
          homes and businesses sparkle. If you’re reliable, detail-oriented, and passionate about quality, we’d love to hear from you.
        </p>
      </motion.div>

      <motion.div
        className='w-full lg:w-[519px] flex flex-col gap-3'
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className='font-[700] text-3xl lg:text-4xl'>Why we’re different</h2>
        <ul className='flex flex-col gap-2'>
          {array.map((items, index) => (
            <li key={index} className='flex items-center gap-1'>
              <Clock8 size={17} color={"#4977E5"} />
              <span className='font-[400] text-base'>{items}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default JoinUs
