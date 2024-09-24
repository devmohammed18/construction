import React from 'react'
import Image from 'next/image'
import '../accueil/accueil.css'
 import image_accueil from '@/public/images/imageHome.jpg'
 
function Accueil() {
  return (
    <div className='w-full min-h-screen bg-slate-500  ' >

    

        <div className='flex justify-center items-center w-full h-[calc(100vh-70px)] top-[70px]  bg-black relative '>
          <Image className='w-full h-full object-cover opacity-60' src={image_accueil} alt='image_accueil'   /> 
        
         </div>
         <div  className='w-full border-0 border-solid border-white absolute top-1/2  '>
             <h1 className='text-6xl  textShadow text-center' > construction general</h1>
         </div>
        
    </div>
  )
}

export default Accueil

