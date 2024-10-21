'use client'
import React from 'react'
import { motion } from 'framer-motion'

type typeInputField={
  
    name:string,
    value:string,
    type:string,
    placeholder:string,
    onChange:(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    errors?:string,
}


function InputField({onChange,name,value,type,placeholder,errors}:typeInputField) {
  return (
   <>
    <div className='w-full flex justify-center items-center py-1 '>
        
        {type==="textarea" 
        ? <motion.textarea 
            whileFocus={{scale:1.02}}
            className='w-4/5 h-28 p-4 text-xl text-white font-Poppins font-medium px-3  bg-[#f0b51d] rounded-xl ' 
            onChange={onChange} name={name} value={value}  placeholder={placeholder} />
        : <motion.input  
            whileFocus={{scale:1.02}}
            className='w-4/5 h-10 text-xl text-white font-Poppins font-medium px-3  bg-[#f0b51d] rounded-xl'
            onChange={onChange} name={name} value={value}  type={type} placeholder={placeholder} />}
    
     </div>
          {/****** * message error when the inpu empty ************/}
         { errors && <div className='sm:pl-12 pl-20' >
        <h1 className='text-lg text-red-600' >{errors} </h1>
               </div>}
    {/* *************************************************** */}
    </>
  )
}

export default InputField
