import Image from 'next/image'
import React from 'react'
import image from "@/../public/blogs/image2.png"
import { CalendarDays } from 'lucide-react'

const BlogDetailCard = () => {
  return (
    <div className='flex items-center gap-2'>
        <div className='w-[113px] h-[104px] relative rounded-2xl'>
            <Image src={image} alt="recent" fill className='object-contain' />

        </div>
        <div className=''>
            <span className='flex items-center text-[#838B95] text-xs'>
                <CalendarDays size={16}/>
                <p>Friday - Jan 01, 2023</p>
            </span>
            <p className='font-[700] text-base'>Must have cleaning products for kitchen</p>
        </div>
    </div>
  )
}

export default BlogDetailCard