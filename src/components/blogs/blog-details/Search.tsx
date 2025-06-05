import { SearchIcon } from 'lucide-react'
import React from 'react'

const Search = () => {
  return (
    <div className='flex flex-col gap-3 '>
        <p className='text-lg lg:text-2xl font-[700] '>Search</p>
        <div className='lg:h-[56px] h-[40px] flex gap-2 items-center px-4 w-full border-1 border-[rgba(131,139,149,0.4)] rounded-full text-sm lg:text-base'>
            <input type="text" placeholder='Search here...' className='w-full h-full outline-none' />
            <SearchIcon color='#838B95'/>
        </div>
    </div>
  )
}

export default Search