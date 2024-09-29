import React from 'react'
import Image from 'next/image'
import '../accueil/accueil.css'
 import image_accueil from '@/public/images/accueil1.jpg'
 
function Accueil() {
  return (
    <div className='w-full min-h-screen bg-slate-500 opacity-70 hover:opacity-100 hover:cursor-pointer ' >

    

        <div className='flex justify-center items-center w-full h-[calc(100vh-70px)] top-[70px]  bg-black relative '>
          <Image className='w-full h-full object-cover opacity-60' src={image_accueil} alt='image_accueil'   /> 
        
         </div>
         <div  className='w-full border-0 border-solid flex flex-col items-center gap-3 border-white absolute top-1/2  '>
             <h1 className='sm:text-2xl text-5xl font-open_sans font-[600] text-white text-center' > Rénovation & Construction </h1>
             <h1 className='sm:text-2xl text-5xl font-open_sans font-semibold text-white text-center' > Résidentielle</h1>
         </div>
        
    </div>
  )
}

export default Accueil

