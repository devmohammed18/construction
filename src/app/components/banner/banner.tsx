'use client'
import { ObjectHTMLAttributes, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { variantsBannerParents,variantsBannerChildrens } from '../../utils/motion/animation';


interface BannerProps{

    titleBanner:string;
    imageBanner:StaticImageData;
    heigth:any;

}

function Banner({titleBanner,imageBanner,heigth}:BannerProps) {
    

const [childrenVisible,setChildrenVisible]=useState(false)
const handlerChildren=()=>{
setChildrenVisible(true)

}
  return (
    <div className={ `${heigth}  w-full  box-border flex justify-center items-center border-0 border-solid border-red-800 relative` }>
   
   
            <div className='z-8 w-full h-full ' >
                    <Image className='w-full h-full object-cover' src={imageBanner} alt="image_contact" />
            </div>
            <motion.div 
                variants={variantsBannerParents}
                initial='hidden'
                animate='visible'
                onAnimationComplete={handlerChildren}
                className='sm:w-full w-2/5 h-full flex justify-center bg-slate-950 absolute top-0 left-0 opacity-40 border-r-2 border-r-solid border-gray-500 ' >
                {childrenVisible && <motion.h1 
                    variants={variantsBannerChildrens}
                    className='text-4xl text-[var(--secondary-color)] absolute top-1/2 font-open_sans font-bold capitalize '>{titleBanner}</motion.h1>}
            </motion.div>

    
  </div>
  )
}

export default Banner
