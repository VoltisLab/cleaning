'use client'
import { ChevronDown } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const Availablerole = () => {
  return (
    <motion.div
      className='flex flex-col lg:flex-row justify-center items-end gap-3 lg:gap-8 w-full'
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className='w-full lg:w-[900px] flex flex-col gap-3'>
        <h2 className='font-[700] text-4xl'>Available Roles</h2>
        <p className='text-sm font-[400] text-[#838B95]'>
          We’re always looking for reliable, hardworking people to join our growing team. If you’re looking for flexible hours, or a chance to grow 
          in the cleaning industry, we have roles to suit you. Check out our current openings below.
        </p>
        <div className='h-[49px] border-[#4977E5] w-full border-1 rounded-full flex justify-between items-center px-5'>
          <p className='font-[400] text-sm text-[#838B95]'>Select an available role</p>
          <ChevronDown
            size={20}
            color={"#4977E5"}
            className='border-1 border-[#4977E5] h-fit w-fit rounded-full p-1 cursor-pointer'
          />
        </div>
      </div>

      <div className='w-full lg:w-fit'>
        <button className='px-10 py-3 w-full lg:w-fit h-fit bg-[#B9CEFF] text-white cursor-pointer rounded-full'>
          Apply
        </button>
      </div>
    </motion.div>
  )
}

export default Availablerole
