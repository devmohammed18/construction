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
               <div key={index} className=' sm:flex-col-reverse md:flex-col-reverse  h-full border-0 border-solid border-red-900 flex justify-center items-center space-y-4 '>
                  <div key={index} className='sm:h-full sm:mt-3 md:mt-3 sm:w-full md:h-full md:w-full w-1/2 h-full  border-0 border-solid border-white flex flex-col justify-start items-start opacity-85 hover:opacity-100 ' >
                      <div className=' w-full flex justify-between items-end border border-solid border-white' onClick={()=>console.log('Diiiiiv===')}>
                           <h1 className='mx-4  text-2xl text-white uppercase border-b-2 border-b-solid border-b-red-800 ' > {item.title}</h1><br />
                           
                           {index===show && toggle?
                           <span className='text-white text-2xl mx-4 w-8 h-8 bg-yellow-500 flex justify-center items-center rounded-full '  onClick={()=>{setToggle(false), console.log('Up------')}} ><IoIosArrowUp/> </span> 
                           :<span className='text-white text-2xl mx-4 w-8 h-8 bg-yellow-500 flex justify-center items-center rounded-full ' onClick={()=>{setToggle(true),setShow(index),console.log('down------')}}><IoIosArrowDown o /></span>
                           }
                     </div>
                     
                     {index===show && toggle?<p className=' text-xl text-white border px-4 text-justify' >{item.desc}</p>:''}
                  </div>
                  <div className='sm:w-full  sm:m-0 md:w-full md:m-0 w-1/2 h-80 box-content  text-white  border-0 border-solid border-red-900 mr-4'>
                     <SlideServices images={item.urls}/>
                  </div>
               </div>
            ))}

    </div>
  )
}

export default Services
