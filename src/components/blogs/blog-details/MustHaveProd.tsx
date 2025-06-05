import React from 'react'
import image1 from "@/../public/blogs/sub1.png"
import image2 from "@/../public/blogs/sub2.png"
import Image from 'next/image'

const MustHaveProd = () => {
  return (
    <div className='flex flex-col gap-4'>
        

        <div className='flex flex-col gap-4'>
            <p className='font-[700] text-2xl lg:text-3xl'>Why a Clean Home Matters: How Cleaning Solutions Makes Domestic Cleaning Easy  </p>
            <span className='text-sm font-[400] text-[#838B95] flex flex-col gap-6'>
            <p>The rush to give employees access to all the tools they’d need to work from home was a bit, 
                well, sudden for many employers. But after everyone settled in, what quickly became apparent 
                to many office-based teams is that employees could be productive and focused when not in the 
                office—in many cases, even more so. Employers everywhere began to understand that remote work really works.</p>


                <p>Whether you’re on the hunt for a remote job or are already working virtually, check out this list of the advantages of working from home, 
                    along with some of the top companies that hire for remote jobs.</p>
            </span>
        </div>
        <div className='flex items-center gap-4'>
            <div className='relative w-[50%] lg:h-[239px] h-[150px] rounded-2xl '>
                <Image src={image1} alt="must have" fill className='object-contain' />

            </div>
            <div className='relative w-[50%] lg:h-[239px] h-[150px] rounded-2xl '>
                <Image src={image2} alt="must have" fill className='object-contain' />

            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <p className='font-[700] text-2xl lg:text-3xl'>Replica Quests</p>
            <p className='text-sm font-[400] text-[#838B95]'>As we’ve long known, remote work has a host of advantages for workers. We’re 
                listing out the best of the best benefits of working from home—some you may 
                already be aware of, and some that may open your eyes even more to remote work’s 
                impact on employers, employees, the economy, and the planet.
            </p>
        </div>
    </div>
  )
}

export default MustHaveProd