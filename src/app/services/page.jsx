'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {useInView, useAnimation,useScroll,useTransform } from 'framer-motion'
//import { useInView } from "react-intersection-observer";
import { variantsBannerParents,variantsBannerChildrens, variantsParents } from '../components/motion/animation'
import { variantsProjetImages,variantsProjetImage } from '../components/motion/animation'
import SlideServices from '@/app/components/sliderslick/SliderServices'
import image_services from '@/public/images/pexels-life-of-pix-8092.jpg'
import { IoIosArrowDown,IoIosArrowUp  } from "react-icons/io";

import {data}  from '../utils/data'

function Services() {
   console.log('-----------------------')
   console.log(data)
   console.log('-----------------------')
   const [toggle,setToggle]=useState(false)
   const [show,setShow]=useState(0)

   // attend de finir l aimtion de pere apres declanche l animation des enfant
   const [childrenVisible,setChildrenVisible]=useState(false)
   const handlerAnimeteCcomplete=()=>{
      setChildrenVisible(true)  }

   //----------------- animation -----------
   //-------------- animation scroll -------
   const refText=useRef(null);
   const refText1=useRef(null);
   const refs=useRef([])
   const {scrollYProgress}=useScroll({
      target: refText1, // La cible du défilement
      offset: ["start end", "end end"], // Écoute du défilement entre ces points
     
       
   })
  
   const paragrapheOne = useTransform(scrollYProgress, [0, 1], ['-10%', '0']);
   const paragrapheTwo = useTransform(scrollYProgress, [0, 1], ['10%', '0']);
   const scaleProgress=useTransform(scrollYProgress,[0,1],[0.8,1])
   const opacityProgress =useTransform(scrollYProgress,[0,1],[0.6,1])
   const [currentValueOne, setCurrentValueOne] = useState(0);
   // const translateX=useTransform(scrollYProgress, [0, 1], ['-100%', '0']);

   const isInView=useInView(refText,{ threshold: 0.5, triggerOnce: true })
   //const [ref, inView] = useInView();
   const controls=useAnimation()

   useEffect(() => {
   
         const unsubscribe = scrollYProgress.onChange((latest) => {
            setCurrentValueOne(paragrapheOne.get()); // Mettre à jour l'état avec la nouvelle valeur
            console.log(latest); // Affiche la progression du défilement
            //console.log('paragrapheOne :',currentValueOne)
            console.log('paragrapheOne :',paragrapheOne.get())

        });

         
      

      // Cleanup pour arrêter de surveiller les changements lorsque le composant est démonté
      return () =>{ unsubscribe()};
  }, [scrollYProgress,currentValueOne]);

   useEffect(()=>{

     if(isInView){
      controls.start('visible')
      console.log(isInView)
      console.log(controls)
     } else {
      controls.start('hidden');
      console.log(isInView)
      console.log(controls)
    } 
     
   },[controls,isInView])
  //------------------- animation ---------





  return (
    <div className=' w-full min-h-screen bg-slate-950 pb-4' >

      <div className=' w-full h-screen bg-yellow-200' >
         <Image className='w-full h-full object-cover ' src={image_services} alt='image_services'/>
      </div>

      <motion.div 
          variants={variantsBannerParents}
          initial='hidden'
          animate='visible'
         onAnimationComplete={handlerAnimeteCcomplete}
          className='sm:w-full w-2/5 h-screen flex justify-center bg-slate-950 absolute top-0 left-0 opacity-40'>
         
          {childrenVisible && <motion.h1 
                variants={variantsBannerChildrens} 
               className='text-4xl text-white absolute top-1/2 font-open_sans font-bold capitalize ' >nos services</motion.h1>}
      </motion.div>

      
      

        
            {data.map((item,index)=>{

                const refItem=useRef();
                refs.current[index]=refItem;

                const {scrollYProgress}=useScroll({
                  target:refItem,
                  offset:["start end","end end"]
                });

                const scaleProgress=useTransform(scrollYProgress,[0,1],[0.6,1]);
                const opacityProgress=useTransform(scrollYProgress,[0,1],[0.2,1])

                return( <div ref={refItem}  key={index} 
                       className=' sm:flex-col-reverse md:flex-col-reverse box-content  h-full border-2 border-solid bg-slate-900 border-gray-900 flex justify-center items-center px-2 py-4 my-2'>
                        <motion.div    
                        style={{scale:scaleProgress,opacity:opacityProgress}}
                        key={index} className='sm:h-full  sm:w-full md:h-full md:w-full w-1/2 h-full  border-0 border-solid border-yellow-600 flex flex-col justify-start items-start  opacity-85  hover:opacity-100 ' >
                           <div className=' w-full mb-5 mt-2  flex justify-between items-end border-0 border-solid border-white '>
                                 <h1 className='mx-4  text-2xl text-white font-open_sans uppercase border-b-2 border-b-solid border-b-red-800 pb-2 ' > {item.title}</h1><br />
                                 
                                 {index===show && toggle?
                                 <span className='hidden sm:flex  justify-center items-center md:flex text-white text-2xl mx-4 w-8 h-8  bg-yellow-500 opacity-70 rounded-full transition-all duration-300 hover:opacity-100 ' onClick={()=>{setToggle(false), console.log('Up------')}} ><IoIosArrowUp/> </span> 
                                 :<span className='hidden sm:flex justify-center items-center md:flex  text-white text-2xl mx-4 w-8 h-8 bg-yellow-500 opacity-70 rounded-full transition-all duration-300 hover:opacity-100 ' onClick={()=>{setToggle(true),setShow(index),console.log('down------')}}><IoIosArrowDown /></span>
                                 }
                           </div>
                           

                           <p 
                           
                           // style={{scale:scaleProgress}}
                           //style={{translateX:paragrapheOne.get()*10}}
                           
                              
                              // animate='controls'
                              // initial='hidden'
                              // variants={variantsImage}
                              // ref={refText}
                              key={item.id}
                              className='sm:hidden md:hidden text-xl font-open_sans text-white  px-4 text-justify leading-10 ' >
                                 
                              {item.desc}
                           </p>
                           
                           {index===show && toggle?<p className='hidde sm:block md:block text-xl text-white  px-4 text-justify leading-10  ' >{item.desc}</p>:''}
                        </motion.div>

                        <motion.div 
                              style={{scale:scaleProgress,opacity:opacityProgress}}
                              className='sm:w-full   md:w-full md:m-0 w-1/2 h-full box-content  text-white  border-0 border-solid border-red-900'>
                           <SlideServices images={item.urls}/>
                        </motion.div>
                  </div>)
})}



        {/* <div  ref={refText1} className=' sm:flex-col-reverse md:flex-col-reverse box-content  h-full border-2 border-solid bg-slate-900 border-gray-900 flex justify-center items-center px-2 py-4 my-2'>
                  <div   className='sm:h-full  sm:w-full md:h-full md:w-full w-2/5 h-full  border-0 border-solid border-yellow-600 flex flex-col justify-start items-start  opacity-85  hover:opacity-100 ' >
                      <div className=' w-full mb-5 mt-2  flex justify-between items-end border-0 border-solid border-white '>
                           <h1 
                            
                           className='mx-4  text-2xl text-white font-open_sans uppercase border-b-2 border-b-solid border-b-red-800 pb-2 '>cuisine</h1><br />
                      </div> 
                      
                           <motion.p 
                           transition={{duration:2}}
                            style={{ translateX:paragrapheOne.get()*10,opacity:opacityProgress}}
                           
                           className='text-white'> L’équipe BORDO est la solution parfaite pour la rénovation complète ou le relooking de votre cuisine. Que ce soit pour un design moderne ou pour quelque chose de classique, en bois véritable ou en matière synthétique, nous avons une solution à la hauteur de vos attentes et ajustée à votre budget. 
                           </motion.p>
                 </div>

                 <div  className='sm:h-full  sm:w-full md:h-full md:w-full w-2/5 h-full  border-0 border-solid border-yellow-600 flex flex-col justify-start items-start  opacity-85  hover:opacity-100 ' >
                      <div className=' w-full mb-5 mt-2  flex justify-between items-end border-0 border-solid border-white '>
                           <h1 
                           
                           className='mx-4  text-2xl text-white font-open_sans uppercase border-b-2 border-b-solid border-b-red-800 pb-2 '>cuisine</h1><br />
                      </div> 
                           <motion.p 
                               style={{ translateX: paragrapheTwo.get()*10,opacity:opacityProgress }}
                               
                           className='text-white'> L’équipe BORDO est la solution parfaite pour la rénovation complète ou le relooking de votre cuisine. Que ce soit pour un design moderne ou pour quelque chose de classique, en bois véritable ou en matière synthétique, nous avons une solution à la hauteur de vos attentes et ajustée à votre budget. 
                           </motion.p>
                 </div>



        </div> */}

    </div>
  )
}

export default Services
