
import React from 'react'
import Image from 'next/image'
import SlideServices from '@/app/components/sliderslick/SliderServices'
import image_services from '@/public/images/pexels-life-of-pix-8092.jpg'

import {inforServices}  from '../utils/infoServices'
function Services() {
   console.log('-----------------------')
  console.log(inforServices)
  console.log('-----------------------')
  return (
    <div className=' w-full min-h-screen bg-slate-950' >

      <div className=' w-full h-[calc(90vh-70px)] bg-yellow-200' >
         <Image className='w-full h-full object-cover ' src={image_services} alt='image_services'/>
      </div>

      <div className='sm:w-full w-2/5 h-[calc(90vh-70px)] flex justify-center bg-slate-950 absolute top-0 left-0 opacity-40'>
         <h1 className='text-3xl text-white absolute top-1/2   ' >Nos Service</h1>
      </div>

      

          
            {inforServices.map((item,index)=>(
               <div className='sm:h-screen md:h-screen sm:flex-col-reverse md:flex-col-reverse  h-96 border-2 border-solid border-red-900 flex justify-center items-center  '>
                  <div key={index} className='sm:w-full sm:h-full md:w-full md:h-full  w-1/2 h-80  border border-solid border-white flex flex-col justify-start items-start opacity-85 hover:opacity-100' >
                     <h1 className=' text-2xl text-white mx-4 uppercase border-b-2 border-b-solid border-b-red-800 ' > {item.title}</h1><br />
                     <p className=' text-xl text-white leading-10 px-4 text-justify' >{item.desc}</p>
                  </div>
                  <div className='sm:w-full sm:m-0 md:w-full md:m-0 w-1/2 h-80 text-white  border border-solid border-red-900 '>
                     <SlideServices images={item.urls}/>
                  </div>
               </div>
            ))}
           
           
            
            {/* <div className='sm:w-full sm:m-0 md:w-full md:m-0 w-1/2 h-80 text-white  border border-solid border-red-900 '>
                <SlideServices infoServices={salleBain}/>
            </div> */}
      

    </div>
  )
}

export default Services
