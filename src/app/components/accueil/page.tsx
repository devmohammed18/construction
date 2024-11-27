'use client'
import React from 'react'
import Image from 'next/image'
import '../accueil/accueil.css'
import { variantsParents,variantsChildens } from '../../utils/motion/animation'
import { motion } from 'framer-motion'
 import image_accueil from '@/public/images/accueil/accueil1.jpg'
 
function Accueil() {
  return (
    <div className='w-full min-h-screen mb-4  bg-slate-500 opacity-70  hover:opacity-100 hover:cursor-pointer ' >

    

        <div className='flex justify-center items-center w-full h-[calc(100vh-70px)] top-[80px]  bg-black relative '>
          <Image className='w-full h-full object-cover opacity-60' src={image_accueil} alt='image_accueil'   /> 
        
         </div>
         <motion.div  
              variants={variantsParents}
              initial='hidden'
              animate='visible'
              className='w-full border-0 border-solid flex flex-col items-center gap-3 border-white absolute top-1/2  '>
             <motion.h1 
                 variants={variantsChildens}
                 className='sm:text-2xl text-4xl font-open_sans font-[600] text-white text-center' > Rénovation & Construction </motion.h1>
             <motion.h1 
                 variants={variantsChildens}
                 className='sm:text-2xl text-4xl font-open_sans font-semibold text-white text-center' > Résidentielle</motion.h1>
         </motion.div>
        
    </div>
  )
}

export default Accueil

