import React from 'react'
import Search from './Search'
import BlogCategory from './BlogCategory'
import Recent from './Recent'
import Tags from './Tags'

const RightSide = () => {
  return (
    <div className='lg:w-[361px] w-[100%] p-4 mx-auto flex flex-col gap-6 shadow-xl h-fit rounded-2xl'>
        <Search/>
        <BlogCategory/>
        <Recent/>
        <Tags/>
    </div>
  )
}

export default RightSide