'use client'
import { motion,useScroll,useTransform } from 'framer-motion';
import { IoIosArrowDown,IoIosArrowUp  } from "react-icons/io";
import {data}  from '../utils/data/data'
import SlideServices from '@/app/components/sliderslick/SliderServices'
import { useState,useRef } from 'react';
function BodyServices() {
  
    const [toggle,setToggle]=useState(false)
    const [show,setShow]=useState(0)
 //----------------- animation -----------
   //-------------- animation scroll -------
   
   const refs=useRef<any>([]);

  //------------------- animation ---------

  return (
    <div>
        {data.map((item,index)=>{

        const refItem=useRef<any>();
        refs.current[index]=refItem;

        const {scrollYProgress}=useScroll({
        target:refItem,
        offset:["start end","end end"]
        });

        const scaleProgress=useTransform(scrollYProgress,[0,1],[0.6,1]);
        const opacityProgress=useTransform(scrollYProgress,[0,1],[0.2,1])

        return( <div ref={refItem}  key={index} 
            className=' sm:flex-col-reverse md:flex-col-reverse box-content  h-full border-2 border-solid bg-slate-900 border-gray-900 flex justify-center items-center px-2 py-4 my-2'>
                {/******** * la discription des servives ********/}
                <motion.div    
                style={{scale:scaleProgress,opacity:opacityProgress,transition:'opacity .3s ease-in'}}
                key={index} className='sm:h-full  sm:w-full md:h-full md:w-full w-1/2 h-full  border-0 border-solid border-yellow-600 flex flex-col justify-start items-start  opacity-85  hover:opacity-100 ' >
                <div className=' w-full mb-5 mt-2  flex justify-between items-end border-0 border-solid border-white '>
                        <h1 className='mx-4  text-2xl text-white font-open_sans uppercase border-b-2 border-b-solid border-b-red-800 pb-2 ' > {item.title}</h1><br />
                        
                        {index===show && toggle?
                        <span className='hidden sm:flex  justify-center items-center md:flex text-white text-2xl mx-4 w-8 h-8  bg-yellow-500 opacity-70 rounded-full transition-all duration-300 hover:opacity-100 ' onClick={()=>{setToggle(false), console.log('Up------')}} ><IoIosArrowUp/> </span> 
                        :<span className='hidden sm:flex justify-center items-center md:flex  text-white text-2xl mx-4 w-8 h-8 bg-yellow-500 opacity-70 rounded-full transition-all duration-300 hover:opacity-100 ' onClick={()=>{setToggle(true),setShow(index),console.log('down------')}}><IoIosArrowDown /></span>
                        }
                </div>
                

                <p 
                    key={item.id}
                    className='sm:hidden md:hidden text-xl font-open_sans text-white  px-4 text-justify leading-10 ' >
                        
                    {item.desc}
                </p>
                
                {index===show && toggle?<p className='hidde sm:block md:block text-xl text-white  px-4 text-justify leading-10  ' >{item.desc}</p>:''}
                </motion.div>

                {/************** les images -slider- ***********/}
                <motion.div 
                    style={{scale:scaleProgress,opacity:opacityProgress,transition:'opacity .3s ease-in'}}
                    className='sm:w-full   md:w-full md:m-0 w-1/2 h-full box-content  text-white  border-0 border-solid border-red-900'>
                    <SlideServices images={item.urls}/>
                </motion.div>
        </div>)
        })}
    </div>
  )
}

export default BodyServices
