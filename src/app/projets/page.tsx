'use client'


import image_hero_projets from '../../public/images/hero/projet.jpg'
import Banner from '../components/banner/banner';
import BodyPropjet from './bodyPropjet';


function projets() {




  return (
    <div className='w-full min-h-full box-border flex flex-col justify-between items-start mt-[70px] border-0 border-solid border-violet-900 bg-black text-white pb-4'>

        {/* <div className='w-full min-h-screen box-border flex flex-col  mb-10 '> */}
        {/* <div className='w-full h-[calc(100vh-140px)] flex-col justify-center box-border items-center border-4 border-solid border-red-800 relative '>
           
                <div className= 'w-full h-full border-0 box-border border-solid border-red-700 bg-black '>
                    
                    <Image className='w-full h-full border-0 border-solid border-purple-700'  src={image_hero_projets} alt='imge hero projets'/>
                
                    <motion.div 
                        variants={variantsBannerParents}
                        initial='hidden'
                        animate='visible' 
                        onAnimationComplete={handlerChildren}
                        className='sm:w-full w-2/5 h-full border-2 border-solid border-green-700 flex justify-center bg-slate-950 absolute top-0  left-0 opacity-40'>
                        {childrenVisible && <motion.h1 
                            variants={variantsBannerChildrens}
                            className=' text-4xl text-white absolute top-1/2 font-open_sans font-bold capitalize ' >nos projets</motion.h1>}
                    </motion.div>
                </div> 
        </div> */}


           <Banner  titleBanner='projet' imageBanner={image_hero_projets} heigth='h-[calc(100vh-200px)]' /> 

           <BodyPropjet/>

       
          
    </div>
    
  )
}

export default projets


