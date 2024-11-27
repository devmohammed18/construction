'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { PropsInputField } from '../utils/type/type'



function InputField({onChange,name,value,type,placeholder,errors}:PropsInputField) {
  return (
   <>
    <div className='w-full flex justify-center items-center py-1 '>
        
        {type==="textarea" 
        ? <motion.textarea 
            whileFocus={{scale:1.02}}
            className='w-4/5 h-28 p-4 text-xl text-[var(--primary-color)] font-Poppins font-medium px-3  bg-[var(--secondary-color)] rounded-sm ' 
            onChange={onChange} name={name} value={value}  placeholder={placeholder} />
        : <motion.input  
            whileFocus={{scale:1.02}}
            className='w-4/5 h-10 text-xl text-[var(--primary-color)] font-Poppins font-medium px-3  bg-[--secondary-color] rounded-sm'
            onChange={onChange} name={name} value={value}  type={type} placeholder={placeholder} />}
    
     </div>
          {/****** * message error when the inpu empty ************/}
         { errors && <div className='sm:pl-12 pl-20' >
        <h1 className='text-lg text-[var(--treed-color)]' >{errors} </h1>
               </div>}
    {/* *************************************************** */}
    </>
  )
}

export default InputField
