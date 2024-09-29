'use client'
import { useRef, useState } from 'react'
import { LiaTimesCircleSolid } from "react-icons/lia";
import Image from 'next/image'
import image_hero_projets from '../../public/images/hero/projet.jpg'
import { data } from '../utils/data';
function projets() {

  const [zome,setZome]=useState<boolean>(false)
  const [show,setShow]=useState<any>()
  const [selecIdImage,setSelectIdImage]=useState<number>(1)
  const [filterTitle,setFiltreTitle]=useState<string>('')
const fZome=()=>{
  setZome(prev=>!prev)

}

  const refImages=useRef<any>();
 

  const handelScroll=()=>{
      refImages.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
   }

  const handlerZomeImage=(image:any)=>{
    
    setShow(image)
    fZome ()
   // refZomeImage.current.scrollIntoView({behavior:'smooth',block:'center'})
   refImages.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
  }



  return (
    <div className='w-full min-h-screen box-border bg-black text-white pb-4'>

        <div className='w-full h-screen flex flex-col items-center mb-10 '>
            <div className='w-full h-3/4 border-2 box-border border-solid border-red-700 bg-black '>
                
                <Image className='w-full h-full border border-solid border-purple-700'  src={image_hero_projets} alt='imge hero projets'/>
            
                <div className='sm:w-full w-2/5 h-3/4 border border-solid border-green-700 flex justify-center bg-slate-950 absolute top-0 left-0 opacity-40'>
                  <h1 className='text-4xl text-white absolute top-1/2 font-open_sans font-bold capitalize ' >nos projets</h1>
                </div>
            </div> 

            <ul  ref={refImages}  className=' sm:flex-col sm:items-center sm:gap-0 w-4/5 h-1/4  flex justify-around items-end box-border border-b-2 border-b-solid border-b-white cursor-pointer'>
                     {data.map(({title,id})=>(
                         <li  onClick={()=>{setFiltreTitle(title) ; handelScroll();setSelectIdImage(id)}}  className='text-2xl font-roboto  capitalize p-4  border-b-2 border-b-solid border-b-transparent hover:border-b-[#f0b51d] hover:text-[#f0b51d]'
                             style={{color:selecIdImage===id? '#f0b51d':'' ,  borderBottom:selecIdImage===id? '2px solid #f0b51d':'' }}> {title}  </li>  

                     )) }
                      {/* <li onClick={ handelScroll}  className='text-2xl font-roboto  capitalize p-4  border-b-2 border-b-solid border-b-transparent hover:border-b-yellow-600 hover:text-yellow-600'> cuisine  </li>  
                      <li  className='text-2xl font-roboto capitalize p-4 border-b-2 border-b-solid border-b-transparent  hover:border-b-yellow-600  hover:text-yellow-600'> sale de bain  </li>
                      <li className='text-2xl font-roboto capitalize p-4 border-b-2 border-b-solid border-b-transparent  hover:border-b-yellow-600  hover:text-yellow-600'> pose de brique </li> */}
            </ul>
        </div>


        <div  className='w-full h-full bordre bordre-solid flex justify-center items-center border-yellow-600 cursor-pointer ' >
                
             {!zome && <div    className='w-11/12 mx-auto h-full flex justify-center items-center flex-wrap gap-6 bg-slate-900 border border-solid box-border border-white relative'>

                  {/* <div  className='w-[315px] h-80 '>
                    
                        <Image  onClick={()=>handlerZomeImage(image_hero_projets)}  className='w-full h-full  object-cover'
                          
                        src={image_hero_projets} alt='imge hero projets'/>
                    
                  </div> */}

                  { data.map(({id,title,urls})=>(
                      !urls ?<h1 className='text-xl textred' > laoding.....</h1>
                      :filterTitle===title && urls.map((url)=>(

                          <div  className='w-[315px] h-80 '>
                    
                                <Image  onClick={()=>handlerZomeImage(url)}  className='w-full h-full  object-cover'
                            
                             src={url} alt='imge hero projets'/>
                      
                          </div>
                        ))
                       

                  )) }
               
 
              </div >}

              {/* <div className='object-cover transition-transform duration-300 transform top-0 bottom-0 left-0 right-0 w-full h-[600px] opacity-100 absolute '> */}
              {zome && (<div className=' w-4/5 h-[450px] -top-10  transform relative bg-slate-500 '>
                       <span onClick={()=>setZome(false)} className='  text-red-600 text-3xl top-5 right-5 absolute  '><LiaTimesCircleSolid /></span>
                      <Image className='w-full h-full z-20 '  src={show} alt='' />
                  </div> ) }    
              
      
        </div>

       
          
    </div>
    
  )
}

export default projets


