"use client"
import React, { useState } from 'react'

const BlogCategory = () => {
    const [active, setActive] = useState("Advice")
const array = [
    "Advice", "Cleaning", "Guides", "News", "Feature"
]


  return (
    <div className='flex flex-col  lg:gap-4'>
        
        <p className='font-[700] text-lg lg:text-2xl'>Categories</p>

        <div>
            {
                array.map((item, index) => (
                <div onClick={() => setActive(item)} key={index} className='py-5 cursor-pointer border-b-1 border-b-[#D4D4D4]' >

                    <p className={`text-base px-2  ${active === item && "border-l-2 border-l-[#4977E5] text-[#4977E5]"}  font-[600]`}>{item}</p>
                </div>

                ))
            }
        </div>
    </div>
  )
}

export default BlogCategory