import BlogCard from '@/components/blogs/BlogCard'
import Hero from '@/components/blogs/Hero'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center w-full justify-center overflow-x-hidden'>
        <Hero/>

        <div className='flex flex-col items-center gap-6 py-18'>
            <div className='text-center'>
                <p className='lg:text-4xl text-2xl font-[700]'>Our Latest News</p>
                <p className='lg:w-[470px] text-sm text-[#838B95] font-[400]'>Awesome  site. on the top advertising a business online includes assembling Having the most keep.</p>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 items-center gap-6'>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>

            </div>

            <button className='w-fit h-fit lg:px-12 px-6  lg:py-4 py-2 cursor-pointer bg-[#4977E5] rounded-4xl text-white text-sm font-[500]'>
                View More
            </button>

        </div>
    </div>
  )
}

export default page