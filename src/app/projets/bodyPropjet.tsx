import { useRef,useState} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { variantsProjetImages,variantsProjetImage} from '../utils/motion/animation';
import { variantsListParents,variantsListChildrens } from '../utils/motion/animation';
import { LiaTimesCircleSolid } from "react-icons/lia";
import { data } from '../utils/data/data';

LiaTimesCircleSolid
function BodyPropjet() {

    
    const refTitles=useRef<any>();
    const contentImages=useRef<any>(null) 
    //-----------------------------------------------------------------
     const [zome,setZome]=useState<boolean>(false)
     const [show,setShow]=useState<any>()
     const [selecIdImage,setSelectIdImage]=useState<number>(1)
     const [filterTitle,setFiltreTitle]=useState<string>('')

    //------------------------------- Function  ------------------------------------
     const fZome=()=>{ setZome(prev=>!prev) }

     const handelScroll=()=>{
         refTitles.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
         console.log(refTitles)
       }
   
     const handlerZomeImage=(image:any)=>{
      refTitles.current.scrollIntoView({ behavior: 'smooth', block:'start',inline: 'nearest' });
       setShow(image)
       fZome ()  
     }
     
 
     // const isInView=useInView(contentImages,{once:true})
     //const mainControles=useAnimate()
     //const controls = useAnimation();
   
    //  useEffect(()=>{
    //    if(isInView){
    //      console.log('isInView=================>',isInView)
    //      controls.start('visible')
    //    }},[isInView, controls])
   
    //  useEffect(()=>{
    //    console.log('====== DateSelect =========')
    //    console.log(dataSelect)
    //  },
     
    //  [dataSelect])

  return (
    <div className='sm:h-full w-full min-h-[70px] border-0 border-solid flex-col justify-center items-center border-yellow-600 cursor-pointer relative ' >

             {/* 1- on referance au ce div pour apparatre just la partie de liste et les images de projet  */}
        <div ref={refTitles} className="w-16 h-14 border-0 border-red-400 border-solid -top-16 z-50 absolute" ></div> 
             
             {/* 2- la list des services      */}
        <motion.ul  
            variants={variantsListParents}
            initial='hidden'
            animate='visible' 
            className=' sm:flex-col sm:items-center sm:gap-0  sm:h-1/2 w-4/5 h-[70px] md:flex-wrap mx-auto flex justify-around items-end box-border border-b-0 border-b-solid border-white cursor-pointer  '  >
                  
                {data && data.map(({title,id})=>(

                  <motion.li  key={id} 
                        variants={variantsListChildrens}
                        
                        onClick={()=>{setFiltreTitle(title) ;setSelectIdImage(id); handelScroll() }}  
                        className='text-2xl  font-roboto  capitalize p-4  border-b-4 border-b-solid border-b-transparent hover:border-b-[#f0b51d] hover:text-[#f0b51d]  '
                          style={{ color:selecIdImage===id? '#f0b51d':'' ,  borderBottom:selecIdImage===id? '4px solid #f0b51d':'' }}> {title} 
                    </motion.li> 

                  )) }            
        </motion.ul>
           
             {/* 3- Afficher les image de chaque service exempe :quand tu selection sur lien  
                  cuisine, il s affiche tout les images des projets de la cuisine */}
        {!zome &&<div 
                      
        
        
        className= ' w-11/12 mx-auto h-full flex justify-center items-center flex-wrap gap-6 bg-slate-900 border-0 border-solid box-border border-white my-3 relative'>

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
                            
                                className='w-[315px] h-[315px] '>
                      
                                  <Image  onClick={()=>handlerZomeImage(url)}  className='w-full h-full  object-cover'
                              
                                    src={url} alt='imge hero projets'/>
                        
                            </motion.div>)
                    })
                  }
                  </motion.div>
                  
                    
                    
                  

)) }
          

        </div >}

              {/* 4-Grandir limage selectionner (Zome) */}
        {zome && (
          
          <div className=" flex justify-center items-center box-border border-0 border-solid border-red-800 my-3 ">
          <motion.div 
                    initial={{ opacity: 0,scale:0 }}
                    animate={{ opacity: 1 ,scale:1,borderRadius:["10%","10%","50%","10%"],transition:{duration:1}}}
                    exit={{ opacity: 0,scale:0 }}  
                  


              className='sm:w-11/12 w-4/5 h-[450px] top-0 relative bg-slate-500 '>
                <span onClick={()=>setZome(false)} className='  text-red-600 text-3xl top-5 right-5 absolute  '><LiaTimesCircleSolid /></span>
                <Image className='w-full h-full  z-20 '  src={show}   alt=''  />
            </motion.div>
        </div> )  }   
            
    </div>
  )
}

export default BodyPropjet
