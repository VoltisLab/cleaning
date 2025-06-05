import LeftSide from '@/components/blogs/blog-details/LeftSide'
import RightSide from '@/components/blogs/blog-details/RightSide'
import Hero from '@/components/blogs/Hero'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col items-center  '>
        <Hero/>
            <div className='flex lg:flex-row flex-col px-4 lg:px-0  justify-center w-fit mx-auto gap-4  my-6'>
                  <LeftSide/>
                  <RightSide/>
            </div>


    </div>
  )
}

export default page