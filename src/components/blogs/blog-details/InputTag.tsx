import React from 'react'

interface inpuProps {
  name: string;
  placeholder: string;
  label: string;
  type?: string
}
const InputTag = ({name, placeholder, label, type}: inpuProps) => {
  return (
    <div className='flex flex-col gap-2 lg:gap-3 w-full'>
        <label className='text-base font-500' htmlFor={name}>{label}</label>
        <input name={name} type={type} placeholder={placeholder} className='lg:h-[56px] h-[40px] outline-none px-4 w-full border-1 border-[rgba(131,139,149,0.4)] rounded-full text-sm lg:text-base' />
    </div>
  )
}

export default InputTag