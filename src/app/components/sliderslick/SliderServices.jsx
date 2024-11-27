'use client'
import React, { useRef } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import Image from 'next/image';



function SliderServices({images}) {



  
  
const arrowRef=useRef();
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=' relative' >
      <Slider  ref={arrowRef} {...settings}>
          
          {
             images.slice(0,2).map((url,index)=>(
              <div key={index} className='w-full h-80 border-0 border-solid border-yellow-600 '>
                  <Image className='w-full h-full object-cover ' src={url} alt='image_1' />
               </div>

             ))
              

          }


          {/* <div className='w-96 h-96'>
              <Image className='w-full h-full object-cover' src={image_1} alt='image_1' />
          </div>
          <div className='w-96 h-96'>
              <Image className='w-full h-full object-cover' src={image_2} alt='image_1' />
          </div>
          <div className='w-96 h-96'>
              <Image className='w-full h-full object-cover' src={image_3} alt='image_1' />
          </div> */}

      </Slider>
      
      <div className='absolute top-[45%] left-0  border border-solid border-white text-4xl py-2 bg-[var(--treed-color)] rounded-r-lg opacity-40 transition-all duration-300 hover:opacity-100 hover:pr-3' ><IoIosArrowBack    onClick={()=>arrowRef.current.slickPrev()}/></div>
      <div className='absolute top-[45%] right-0 border border-solid border-white text-4xl py-2 bg-[var(--treed-color)] rounded-l-lg opacity-40 transition-all duration-300 hover:opacity-100 hover:pl-3' ><IoIosArrowForward onClick={()=>arrowRef.current.slickNext()} /></div>
    
    </div>
  );
}

export default SliderServices
