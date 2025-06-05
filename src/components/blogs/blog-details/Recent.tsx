import React from 'react'
import BlogDetailCard from './BlogDetailCard'

const Recent = () => {
  return (
    <div>
        <p className='font-[700] text-lg lg:text-2xl'>Recent</p>
        <div>
            <BlogDetailCard/>
            <BlogDetailCard/>
            <BlogDetailCard/>

        </div>

    </div>
  )
}

export default Recent