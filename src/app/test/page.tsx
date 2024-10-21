'use client'
import React, { useEffect, useRef } from 'react'
import { motion ,useScroll,useAnimation,useInView ,useTransform} from 'framer-motion'
import { variantsSection,variantsImage,varianctsup,variantsDown,variantsKeyFrames, variantsTextright, variantsTextleft } from '../utils/motion/motion'
function testMotion() {
 const {scrollYProgress:complete}=useScroll()
 const refContainte=useRef<any>(null)
 const refTitle=useRef<any>(null)
 const isInView=useInView(refContainte,{once:true})
 const controls=useAnimation()

const {scrollYProgress}=useScroll({
target:refContainte,
offset:["start end","end end"]
})

const paragrapheOne=useTransform(
    scrollYProgress,[0,1],['-800%','0']
)

const paragrapheTwo=useTransform(
    scrollYProgress,[0,1],['800%','0']
)

console.log('*************************',refContainte.current)

//------------------------------------------------------------------


useEffect(()=>{

    if(isInView){

        controls.start('visible')
        console.log('++++++++++++>',isInView)
    }
    console.log('--------------->',isInView)

}

,[isInView])



  return (
    <div  className='w-full min-h-screen   bg-slate-500'>
        <motion.div 
        animate='visible'
        initial='hidden'
        variants={variantsSection}
          
        className='w-4/5 min-h-full mt-[70px] mx-auto box-border py-16 bg-violet-400 flex flex-wrap justify-center items-center  gap-2 '>
        
                <motion.div 
                
                variants={variantsImage}
                className='w-[200px] h-[200px] flex justify-center items-center gap-4 border-2 border-red-800 border-solid text-white' >
                    <motion.div 
                    variants={variantsDown}
                    className='w-10 h-10 bg-red-950  ' >
                        
                    </motion.div>

                    <motion.div 
                     variants={varianctsup}
                      className=' w-10 h-10 bg-red-600 rounded-full' >

                    </motion.div>

                </motion.div>
                
                <motion.div 
                    variants={variantsImage}
                    className='w-[200px] h-[200px] flex justify-center items-center border-2 border-red-800 border-solid text-white' >
                   
                    <motion.div 
                      variants={variantsKeyFrames}
                      className='w-24 h-24 bg-green-800' >

                    </motion.div>
                 
                </motion.div>

                <motion.div
                    variants={variantsImage}
                    className='w-[200px] h-[200px] flex justify-center items-center border-2 border-red-800 border-solid text-white' >
                    <motion.button
                        whileTap={{scale:1.2, transition:{duration:1} }}
                        whileHover={{backgroundColor:'red'}}
                       className=' w-20 h-10 bg-yellow-600 ' >ok</motion.button>

                </motion.div>

                <motion.div
                    variants={variantsImage}
                    className='w-[200px] h-[200px] flex justify-center items-center border-2 border-red-800 border-solid text-white' >
                   
                    <motion.div 
                     drag
                     dragConstraints={{ top:-70,left:70,bottom:70 , right:70}}

                    className='w-12 h-12 bg-black rounded-lg'>
                    
                          
                    </motion.div>

                </motion.div>

                <motion.div
                    variants={variantsImage}
                className='w-[200px] h-[200px] border-2 border-red-800 border-solid text-white' ></motion.div>
                <motion.div
                    variants={variantsImage}
                className='w-[200px] h-[200px] border-2 border-red-800 border-solid text-white' ></motion.div>
                <motion.div
                    variants={variantsImage}
                className='w-[200px] h-[200px] border-2 border-red-800 border-solid text-white' ></motion.div>
                <motion.div
                    variants={variantsImage}
                className='w-[200px] h-[200px] border-2 border-red-800 border-solid text-white' ></motion.div>
                <motion.div
                    variants={variantsImage}
                className='w-[200px] h-[200px] border-2 border-red-800 border-solid text-white' ></motion.div>
               
                <motion.div
                    variants={variantsImage}
                    className='w-[200px] h-[200px] flex justify-center items-center  border-2 border-red-800 border-solid text-white' >
                     <div className='w-24 aspect-square bg-slate-400 '>
                        <div className='w-full h-full bg-green-950 origin-bottom' style={{transform:'scaleY(complete)'}} />
                     </div>

                </motion.div>
               
                <motion.div
                    variants={variantsImage}
                className='w-[200px] h-[200px] border-2 border-red-800 border-solid text-white' ></motion.div>
      </motion.div>



      <motion.div  
       animate={controls}
       initial='hidden'
       variants={variantsSection}
      
      className=' sm:flex-col-reverse md:flex-col-reverse box-content  h-full border-2 border-solid bg-red-400 border-gray-900 flex justify-center items-center px-2 py-4 my-2'>
                  <div 
                   
                  
                  ref={refContainte}   className='sm:h-full  sm:w-full md:h-full md:w-full w-2/5 h-full  border-0 border-solid border-yellow-600 flex flex-col justify-start items-start  opacity-85  hover:opacity-100 ' >
                      <div  className=' w-full mb-5 mt-2  flex justify-between items-end border-0 border-solid border-white '>
                           <h1 
                              
                          
                              
                           className='mx-4  text-2xl text-white font-open_sans uppercase border-b-2 border-b-solid border-b-red-800 pb-2 '>cuisine</h1><br />
                      </div> 

                           <motion.p 
                                
                                
                               
                               
                                variants={variantsImage}
                          
                           className='text-white'   > L’équipe BORDO est la solution parfaite pour la rénovation complète ou le relooking de votre cuisine. Que ce soit pour un design moderne ou pour quelque chose de classique, en bois véritable ou en matière synthétique, nous avons une solution à la hauteur de vos attentes et ajustée à votre budget. 
                           </motion.p>
                 </div>
                 <div  className='sm:h-full  sm:w-full md:h-full md:w-full w-2/5 h-full  border-0 border-solid border-yellow-600 flex flex-col justify-start items-start  opacity-85  hover:opacity-100 ' >
                      <div  className=' w-full mb-5 mt-2  flex justify-between items-end border-0 border-solid border-white '>
                           <h1
                                
                           className='mx-4  text-2xl text-white font-open_sans uppercase border-b-2 border-b-solid border-b-red-800 pb-2 '>cuisine</h1><br />
                      </div>

                           <motion.p
                               
                               
                               variants={variantsImage}
                            //    style={{translateX:paragrapheTwo}} 
                           className='text-white'  > L’équipe BORDO est la solution parfaite pour la rénovation complète ou le relooking de votre cuisine. Que ce soit pour un design moderne ou pour quelque chose de classique, en bois véritable ou en matière synthétique, nous avons une solution à la hauteur de vos attentes et ajustée à votre budget. 
                           </motion.p>
                 </div>



      </motion.div>




        
      
    </div>
  )
}

export default testMotion
