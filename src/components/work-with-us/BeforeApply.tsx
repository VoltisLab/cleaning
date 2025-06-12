'use client'
import { CircleCheck } from 'lucide-react'
import React from 'react'
import image from "@/../public/work-with-us/work-image5.png"
import Image from 'next/image'
import { motion } from 'framer-motion'

const BeforeApply = () => {
  const array = [
    "Legal right to work in the UK",
    "Previous cleaning experience preferred (but not essential)",
    "Reliable transport or ability to travel between jobs",
    "Attention to detail and time management",
    "Professional, polite, and customer-focused attitude",
    "Fluent or conversational English"
  ]

  return (
    <div className='flex w-full items-center justify-center my-10'>
      <motion.div
        className='bg-[#4977E5] w-full lg:w-[1206px] h-fit py-6 text-white p-4 lg:p-20 rounded-3xl'
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className='flex flex-col gap-3 pb-4 lg:pb-0 text-center'>
          <p className='font-[700] text-3xl lg:text-4xl text-white'>Before you apply</p>
          <p className='text-sm'>
            To boost your chances for a successful application, you must have all the following:
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-between'>
          <div>
            <ul className='flex flex-col gap-4 '>
              {array.map((item, index) => (
                <li key={index} className='flex items-center gap-1 text-base lg:text-lg font-[700]'>
                  <CircleCheck color='white' size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='relative w-[329px] h-[340px]'>
            <Image src={image} alt="bg" fill className='object-contain' />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default BeforeApply
