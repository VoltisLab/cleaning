"use client"
import React, { useState } from 'react'

const Tags = () => {
    const [active, setactive] = useState("City")
    const array=[
        "City", "Food", "Relation", "eat", "Health", "Training"
    ]
  return (
    <div className='flex flex-col gap-4'>
        <p className='text-lg lg:text-2xl font-[700]'>Tags</p>

        <div className='flex items-center flex-wrap gap-2'>
            {
                array.map((item, index) => (
                <div onClick={() => setactive(item)} key={index} className={`px-4 cursor-pointer py-2 rounded-full ${active === item ?"bg-[#4977E5] text-white" : "text-[#838B95] bg-[#dfe3e6]"}  w-fit`}>
                    <p>{item}</p>
                </div>

                ))
            }
        </div>
    </div>
  )
}

export default Tags