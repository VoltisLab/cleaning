import React from 'react'

import { ChevronRight, House } from 'lucide-react'

const Hero = () => {
  return (
    <div className='bg-[rgba(64,106,207,0.76)] text-white relative  w-full h-[170px] flex flex-col items-center justify-center gap-5'>
        {/* <Image src={bgimage} alt='bg' fill className='object-contain opacity-[35%]'/> */}

        <p className='font-[700] text-3xl lg:text-5xl'>Blog</p>
        <span className=' flex items-center gap-2 text-base'>
            <House/>
            <p>Home</p>
            <ChevronRight/>
            <p>Blog</p>
        </span>
    </div>
  )
}

export default Hero