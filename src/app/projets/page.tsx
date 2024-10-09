'use client'
import { useEffect, useRef, useState } from 'react'
import { useAnimation, useInView } from 'framer-motion';
import { LiaTimesCircleSolid } from "react-icons/lia";
import Image from 'next/image'
import { motion } from 'framer-motion';
import { variantsProjetImages,variantsProjetImage} from '../components/motion/animation';
import { variantsBannerParents,variantsBannerChildrens } from '../components/motion/animation';
import image_hero_projets from '../../public/images/hero/projet.jpg'
import { data } from '../utils/data';
import { div } from 'framer-motion/client';
function projets() {

  const [zome,setZome]=useState<boolean>(false)
  const [show,setShow]=useState<any>()
  const [selecIdImage,setSelectIdImage]=useState<number>(1)
  const [filterTitle,setFiltreTitle]=useState<string>('')
  const dataSelect=data.filter(itemData=> itemData.title===filterTitle ) 
  // attend de finir l aimtion de pere apres declanche l animation des enfant
  const [childrenVisible,setChildrenVisible]=useState(false)
  const handlerChildren=()=>{
    setChildrenVisible(true)
  }
  

const fZome=()=>{
  setZome(prev=>!prev)

}

  const refTitles=useRef<any>();
 

  const handelScroll=()=>{
      refTitles.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

   }

  const handlerZomeImage=(image:any)=>{
    
    setShow(image)
    fZome ()
   // refZomeImage.current.scrollIntoView({behavior:'smooth',block:'center'})
     refTitles.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
  }
  
  const refImage=useRef<any>()
  const contentImages=useRef<any>(null) 
  const isInView=useInView(contentImages,{once:true})
  //const mainControles=useAnimate()
  const controls = useAnimation();

  useEffect(()=>{
    if(isInView){
      console.log('isInView=================>',isInView)
      controls.start('visible')
    }},[isInView, controls])

  useEffect(()=>{
    console.log('====== DateSelect =========')
    console.log(dataSelect)
  },
  
  [dataSelect])


  return (
    <div className='w-full min-h-screen box-border bg-black text-white pb-4'>

        <div className='w-full h-screen box-border flex flex-col items-center mb-10 '>

            <div className= 'sm:h-1/2 w-full h-3/4 border-2 box-border border-solid border-red-700 bg-black '>
                
                <Image className='w-full h-full border border-solid border-purple-700'  src={image_hero_projets} alt='imge hero projets'/>
            
                <motion.div 
                    variants={variantsBannerParents}
                    initial='hidden'
                    animate='visible' 
                    onAnimationComplete={handlerChildren}
                    className='sm:w-full  w-2/5 h-3/4 border border-solid border-green-700 flex justify-center bg-slate-950 absolute top-0 left-0 opacity-40'>
                    {childrenVisible && <motion.h1 
                        variants={variantsBannerChildrens}
                        className='sm:top-1/4 text-4xl text-white absolute top-1/2 font-open_sans font-bold capitalize ' >nos projets</motion.h1>}
                </motion.div>
            </div> 

           {childrenVisible && <motion.ul  
              variants={variantsBannerParents}
              initial='hidden'
              animate='visible'
             
            ref={refTitles}  
             className=' sm:flex-col sm:items-center sm:gap-0  sm:h-1/2 w-4/5 h-1/4 md:flex-wrap flex justify-around items-end box-border border-b-2 border-b-solid border-b-white cursor-pointer'>
                    
                     {data && data.map(({title,id})=>(

                       
                     
                       <motion.li  key={id} 
                             variants={variantsBannerChildrens}
                              onClick={()=>{setFiltreTitle(title) ;setSelectIdImage(id);; handelScroll() }}  className='text-2xl font-roboto  capitalize p-4  border-b-2 border-b-solid border-b-transparent hover:border-b-[#f0b51d] hover:text-[#f0b51d]'
                                style={{color:selecIdImage===id? '#f0b51d':'' ,  borderBottom:selecIdImage===id? '2px solid #f0b51d':'' }}> {title} 
                         </motion.li> 

                        )) }
                      {/* <li onClick={ handelScroll}  className='text-2xl font-roboto  capitalize p-4  border-b-2 border-b-solid border-b-transparent hover:border-b-yellow-600 hover:text-yellow-600'> cuisine  </li>  
                      <li  className='text-2xl font-roboto capitalize p-4 border-b-2 border-b-solid border-b-transparent  hover:border-b-yellow-600  hover:text-yellow-600'> sale de bain  </li>
                      <li className='text-2xl font-roboto capitalize p-4 border-b-2 border-b-solid border-b-transparent  hover:border-b-yellow-600  hover:text-yellow-600'> pose de brique </li> */}
            </motion.ul>}
        </div>


        <div  className='w-full h-full bordre bordre-solid flex justify-center items-center border-yellow-600 cursor-pointer ' >
                
             {!zome &&<div 
                          
             
            
             className='w-11/12 mx-auto h-full flex justify-center items-center flex-wrap gap-6 bg-slate-900 border border-solid box-border border-white relative'>

                  {/* <div  className='w-[315px] h-80 '>
                    
                        <Image  onClick={()=>handlerZomeImage(image_hero_projets)}  className='w-full h-full  object-cover'
                          
                        src={image_hero_projets} alt='imge hero projets'/>
                    
                  </div> */}

                  { data.map(({id,title,urls})=>(

                  
                    
                    
                  
                         
                      // {/* !urls ?<h1 className='text-xl textred' > laoding.....</h1>: */}
                    
                     // filterTitle?
                      
                   
                   filterTitle===title && <motion.div 
                              variants={variantsProjetImages}
                            initial='hidden'
                             animate='visible'
                        className='flex items-center justify-center flex-wrap gap-6'>
                  
                   { urls.map((url)=>{


                          return( <motion.div 
                                    
                                  variants={variantsProjetImage}
                                
                                    className='w-[315px] h-80 '>
                          
                                      <Image  onClick={()=>handlerZomeImage(url)}  className='w-full h-full  object-cover'
                                  
                                        src={url} alt='imge hero projets'/>
                            
                                </motion.div>)
                        })
                      }
                      </motion.div>
                      
                        
                        
                      

)) }
               
 
              </div >}


              

              {/* <div className='object-cover transition-transform duration-300 transform top-0 bottom-0 left-0 right-0 w-full h-[600px] opacity-100 absolute '> */}
              {zome && (<motion.div 
                           initial={{ opacity: 0,}}
                           animate={{ opacity: 1 ,rotate:[10,25,25,0],borderRadius:["10%","10%","50%","10%"],transition:{duration:1}}}
                           exit={{ opacity: 0 }}  
                     className=' w-4/5 h-[450px] -top-10  transform relative bg-slate-500 '>
                       <span onClick={()=>setZome(false)} className='  text-red-600 text-3xl top-5 right-5 absolute  '><LiaTimesCircleSolid /></span>
                      <Image className='w-full h-full z-20 '  src={show} alt='' />
                  </motion.div> ) }    
              
      
        </div>

       
          
    </div>
    
  )
}

export default projets


