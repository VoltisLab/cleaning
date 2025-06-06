import Image from 'next/image'
import React from 'react'
import mainImage from "@/../public/blogs/main-pic.png"
import MustHaveProd from './MustHaveProd'
import TakeAway from './TakeAway'
import LeaveReply from './LeaveReply'
import Comments from '@/components/CleaningServices/Comments'

const LeftSide = () => {
  return (
    <div className='lg:w-[751px] w-[100%] flex flex-col gap-6 '>
      
      <div className='lg:h-[468px] h-[200px] w-full relative rounded-3xl '>
        <Image src={mainImage} alt="main pic" fill className='object-contain' />
      </div>
      <MustHaveProd/>
      <TakeAway/>
      <Comments/>
      <LeaveReply/>

    </div>
  )
}

export default LeftSide