import Image from 'next/image'
import React from 'react'
import image1 from "@/../public/blogs/image1.png"
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'



const BlogCard = () => {
  return (
    <div className='flex lg:flex-row flex-col w-fit lg:h-[233px] shadow-lg rounded-2xl items-center gap-6 p-2 '>
        <div className='relative w-[235px] h-[216px]  rounded-2xl '>
          <Image src={image1} alt='image1' fill className='lg:object-contain object-cover' /> 
        </div>

        <div className='w-[290px] flex flex-col gap-4'>
          <p className='lg:text-xl text-lg font-[700]'>The Surprising Reason College Tuition Is Crazy Expensive</p>
          <p className='lg:text-base text-sm text-[#838B95] font-[400]'>Lorem ipsum dolor sit consectetur adipiscing elit Nunc vulputate libero...</p>

          <Link href="/blogs/3">
            <span className='text-[#4977E5] text-sm lg:text-base font-[700] flex items-center '>
              <p>Learn More</p>
              <ArrowRight />
            </span>
          </Link>
        </div>
    </div>
  )
}

export default BlogCard