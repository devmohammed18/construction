'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import SlideServices from '@/app/components/sliderslick/SliderServices'
import image_services from '@/public/images/pexels-life-of-pix-8092.jpg'
import { IoIosArrowDown,IoIosArrowUp  } from "react-icons/io";

import {inforServices}  from '../utils/infoServices'
function Services() {
   console.log('-----------------------')
  console.log(inforServices)
  console.log('-----------------------')
   const [toggle,setToggle]=useState(false)
   const [show,setShow]=useState(0)
  return (
    <div className=' w-full min-h-screen bg-slate-950 pb-4' >

      <div className=' w-full h-screen bg-yellow-200' >
         <Image className='w-full h-full object-cover ' src={image_services} alt='image_services'/>
      </div>

      <div className='sm:w-full w-2/5 h-screen flex justify-center bg-slate-950 absolute top-0 left-0 opacity-40'>
         <h1 className='text-3xl text-white absolute top-1/2   ' >Nos Service</h1>
      </div>

      

        
            {inforServices.map((item,index)=>(
               <div key={index} className=' sm:flex-col-reverse md:flex-col-reverse box-content  h-full border-2 border-solid bg-slate-900 border-gray-900 flex justify-center items-center px-2 py-4 my-2'>
                  <div key={index} className='sm:h-full  sm:w-full md:h-full md:w-full w-1/2 h-full  border-0 border-solid border-yellow-600 flex flex-col justify-start items-start  opacity-85  hover:opacity-100 ' >
                      <div className=' w-full mb-5 mt-2  flex justify-between items-end border-0 border-solid border-white '>
                           <h1 className='mx-4  text-2xl text-white uppercase border-b-2 border-b-solid border-b-red-800 pb-2 ' > {item.title}</h1><br />
                           
                           {index===show && toggle?
                           <span className='hidden sm:flex  justify-center items-center md:flex text-white text-2xl mx-4 w-8 h-8  bg-yellow-500 opacity-70 rounded-full transition-all duration-300 hover:opacity-100 ' onClick={()=>{setToggle(false), console.log('Up------')}} ><IoIosArrowUp/> </span> 
                           :<span className='hidden sm:flex justify-center items-center md:flex  text-white text-2xl mx-4 w-8 h-8 bg-yellow-500 opacity-70 rounded-full transition-all duration-300 hover:opacity-100 ' onClick={()=>{setToggle(true),setShow(index),console.log('down------')}}><IoIosArrowDown /></span>
                           }
                     </div>
                     <p className='sm:hidden md:hidden text-xl text-white  px-4 text-justify leading-10 ' >{item.desc}</p>
                     
                     {index===show && toggle?<p className='hidde sm:block md:block text-xl text-white  px-4 text-justify leading-10  ' >{item.desc}</p>:''}
                  </div>

                  <div className='sm:w-full   md:w-full md:m-0 w-1/2 h-full box-content  text-white  border-0 border-solid border-red-900'>
                     <SlideServices images={item.urls}/>
                  </div>
               </div>
            ))}

    </div>
  )
}

export default Services
