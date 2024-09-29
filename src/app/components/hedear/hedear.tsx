'use client'
import React from 'react'
import styles from './hedear.module.css'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";

import { LiaTimesSolid } from "react-icons/lia";
import { useState } from 'react';
function Hedear() {
const [toggle,setToggle]=useState<boolean>(true);

  return (
    <div className={styles.hedear} >
        <div className='sm:w-full sm:mx-3 md:w-full md:mx-5 z-50 w-4/5 flex justify-between items-center border-0 border-solid border-red-950 transition-all duration-300' >
            <div className='flex'> <h1 className='text-3xl  text-white capitalize font-Poppins font-[600] '>construction</h1><span className='text-3xl text-red-700 uppercase font-Poppins font-[700]' >mr</span> </div>
            <div 
             className={`${styles.linksWapper} font-roboto `}
            
             style={{clipPath:!toggle?'polygon(0 0, 100% 0, 100% 100%, 0% 100%)':'',}}
            >
                <div onClick={()=>setToggle(true)} className='sm:gap-0 md:gap-0 sm:flex-col sm:items-center md:flex-col md:items-center flex flex-row text-xl text-white gap-5 capitalize'>
                    <div className='sm:border sm:border-solid sm:border-yellow-600 sm:w-full sm:p-3 sm:text-center sm:hover:bg-yellow-600 sm:cursor-pointer sm:transition-all sm:duration-700 sm:shadow-md
                                    md:border md:border-solid md:border-yellow-600 md:w-full md:p-3 md:text-center md:hover:bg-yellow-600 md:cursor-pointer md:transition-all md:duration-700' >
                       <Link  className=' sm:hover:border-transparent md:hover:border-transparent transition-all ease-in-out  duration-700 border-b-solid border-b-2 border-transparent  hover:text-red-700 hover:border-b-red-700  ' href='/'> accueil  </Link>
                    </div>

                    <div onClick={()=>setToggle(true)} className='sm:border sm:border-solid sm:border-yellow-600 sm:w-full sm:p-3 sm:text-center sm:hover:bg-yellow-600 sm:cursor-pointer sm:transition-all sm:duration-700 sm:shadow-md
                                    md:border md:border-solid md:border-yellow-600 md:w-full md:p-3 md:text-center md:hover:bg-yellow-600 md:cursor-pointer md:transition-all md:duration-700' >
                       <Link  className='sm:hover:border-transparent md:hover:border-transparent transition-all ease-in-out duration-700  border-b-solid border-b-2 border-transparent  hover:text-red-700 hover:border-b-red-700' href='/services'> services</Link>
                    </div> 

                    <div onClick={()=>setToggle(true)} className='sm:border sm:border-solid sm:border-yellow-600 sm:w-full sm:p-3 sm:text-center sm:hover:bg-yellow-600 sm:cursor-pointer sm:transition-all sm:duration-700 sm:shadow-md
                                    md:border md:border-solid md:border-yellow-600 md:w-full md:p-3 md:text-center md:hover:bg-yellow-600 md:cursor-pointer md:transition-all md:duration-700'>
                       <Link  className='sm:hover:border-transparent md:hover:border-transparent transition-all ease-in-out duration-700  border-b-solid border-b-2 border-transparent  hover:text-red-700 hover:border-b-red-700 ' href='/projets'> projets</Link>
                    </div>
                    
                    <div onClick={()=>setToggle(true)} className='sm:border sm:border-solid sm:border-yellow-600 sm:w-full sm:p-3 sm:text-center sm:hover:bg-yellow-600 sm:cursor-pointer sm:transition-all sm:duration-700 sm:shadow-md
                                    md:border md:border-solid md:border-yellow-600 md:w-full md:p-3 md:text-center md:hover:bg-yellow-600 md:cursor-pointer md:transition-all md:duration-700'>
                       <Link  className='sm:hover:border-transparent md:hover:border-transparent transition-all ease-in-out duration-700  border-b-solid border-b-2 border-transparent  hover:text-red-700 hover:border-b-red-700 ' href='/contact'> contact</Link>
                    </div>
                   
                </div>
            </div>

            <div className='hidden sm:block md:block text-3xl text-white '>{!toggle? <LiaTimesSolid onClick={()=>setToggle(per=>!per) } />: <IoMenu onClick={()=>setToggle(per=>!per) } />}</div>
        </div>  
        
    </div>
  )
}

export default Hedear
