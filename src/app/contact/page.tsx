'use client'
import React, { useEffect, useState,FormEvent } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { variantsBannerParents,variantsBannerChildrens } from '../components/motion/animation';
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import image_contact from '../../public/images/contact/image-contact.jpg'
import { FormValidation } from '../config/validation';
import { FaTimes } from "react-icons/fa";
function Contact() {

type typeFromData={
nom:string,
email:string,
telephone:string,
adress:string,
objet:string,
message:string

}

/********************* formDate *********************** */
const [formData,setFormData]=useState<typeFromData>({
nom:'',
email:'',
telephone:'' ,
adress:'',
objet:'',
message:''

})
const [close,setClose]=useState(false)
const [errors,setErrors]=useState<any>({})
 // attend de finir l aimtion de pere apres declanche l animation des enfant
const [childrenVisible,setChildrenVisible]=useState(false)
const handlerChildren=()=>{
setChildrenVisible(true)

}
/********** handleChange ******* */
const handleChange=(e:any)=>{

 const {name,value}=e.target;
 setFormData((prevData)=>({...prevData,[name]:value})) 

}
/*************** Button Cancel ************ */

const handleCancel:any=()=>{

  setFormData({
    nom:'',
    email:'',
    telephone:'',
    adress:'',
    objet:'',
    message:''
  })

}

/*************** handleSubmit *************** */
const  handleSubmit=async (e:any)=>{
e.preventDefault()


 
if(Object.keys(FormValidation(formData)).length>0){
setErrors(FormValidation(formData))
console.log('taille de Errors :',Object.keys(FormValidation(formData)).length)

}

if(Object.keys(FormValidation(formData)).length===0)

{try {
  const response = await fetch('http://localhost:3000/api/sendEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
 // handleLoading(); // function loading the Botton when it sended the request
  const data = await response.json();
  console.log('------>',data.message);
  if (data) {
    setClose(true);
    setFormData({
      nom: '',
      email: '',
      telephone:'',
      adress:'',
      objet: '',
      message: '',
    });
  } else {
    setErrors(`Error sending email: ${data.error}`);
  }
} catch (error) {
  console.error('Erreur:', error);
 // setErrors(`Error: ${error.message}`);
}

}


// setFormData({
// nom:'',
// email:'',
// adress:'',
// objet:'',
// message:''

// })
}



// useEffect(()=>{
//   console.log('formData',formData)
// },[formData])


  return (

   <div className='w-full min-h-screen bg-slate-500 ' >
      <div className='w-full min-h-[calc(100vh-70px)] top-[70px] box-border flex flex-col justify-center items-center bg-black '>
        
          <div className='w-full h-screen  flex justify-center items-center border border-solid border-red-800 '>
              <div className='z-8 w-full h-full ' >
                      <Image className='w-full h-full object-cover' src={image_contact} alt="image_contact" />
              </div>
              <motion.div 
                  variants={variantsBannerParents}
                  initial='hidden'
                  animate='visible'
                  onAnimationComplete={handlerChildren}
                  className='sm:w-full w-2/5 h-screen flex justify-center bg-slate-950 absolute top-0 left-0 opacity-40' >
                    {childrenVisible && <motion.h1 
                        variants={variantsBannerChildrens}
                        className='text-4xl text-white absolute top-1/2 font-open_sans font-bold capitalize '>Contact</motion.h1>}
              </motion.div>
          </div>

          <div className='sm:flex-col-reverse sm:justify-center sm:items-center md:flex-col-reverse md:justify-center md:items-center sm:p-0 md:p-0
          w-full  flex justify-center items-centre bg-slate-900 border-2 border-red-900 border-solid p-4 relative '>
            
              <div className='sm:w-full md:w-full w-2/5 flex  justify-center items-center pt-10 gap-5  border-2 border-solid  border-yellow-500  '>
                   <div className='flex flex-col justify-center items-start gap-5 ' >
                      <h1 className='text-4xl text-yellow-500 pb-5 border-b-2 border-b-solid border-b-yellow-500  capitalize' >contactez nous</h1>
                      <div className="flex justify-start items-center gap-3 text-2xl text-yellow-500 pb-3 ">
                          
                            <span> <BsTelephone /> </span>
                            <h1>438 224 5515</h1>
                      </div>
                      

                      <div className='flex justify-start items-center gap-3 text-2xl text-yellow-500 pb-3  '>
                        <span>  <TfiEmail /></span>
                        <h1>Riad@gmail.com</h1>
                      </div>
                    </div>
                  
              </div>

              

              <div className='sm:w-full sm:items-start sm:h-full  md:w-full md:items-start md:h-full 
                            w-3/5 min-h-full flex items-center justify-center  box-border border border-solid border-white  '>
                    <form onSubmit={handleSubmit} className=' w-full h-full box-border border border-solid border-green-800 ' >
                          <div className='w-full flex justify-center items-center my-4'>
                            <h1 className='sm:text-center text-3xl pb-6 border-b-2 border-b-solid border-b-yellow-500  text-yellow-500'>Demande de soumission et d'information</h1>
                          </div>
                          <div className='w-full flex justify-center items-center py-1 '>
                              <input  onChange={handleChange} name='nom' value={formData.nom} className='w-4/5 h-10 text-xl text-white font-Poppins font-medium px-3  bg-[#f0b51d] rounded-xl' type="text" placeholder='Nom *' />
                          </div>
                        {/****** * message error when the inpu empty ************/}
                          { errors.nom && <div className='sm:pl-12 pl-20' >
                              <h1 className='text-lg text-red-600' >{errors.nom} </h1>
                          </div>}
                          {/* *************************************************** */}
                          <div className='w-full flex justify-center items-center py-1 '>
                              <input onChange={handleChange} name='email' value={formData.email} className='w-4/5 h-10 text-xl text-white font-Poppins font-medium px-3  bg-[#f0b51d] rounded-xl  ' type="email" placeholder='Email *' />
                          </div>
                          {/****** * message error when the inpu empty ************/}
                          { errors.email && <div className='sm:pl-12 pl-20' >
                              <h1 className='text-lg text-red-600' >{errors.email} </h1>
                          </div>}
                          {/* *************************************************** */}
                          <div className='w-full flex justify-center items-center py-1 '>
                              <input onChange={handleChange} name='telephone' value={formData.telephone} className='w-4/5 h-10 text-xl text-white font-Poppins font-medium px-3  bg-[#f0b51d] rounded-xl  ' type="text" placeholder='Numéro de Téléphone *' />
                          </div>
                          {/****** * message error when the inpu empty ************/}
                          { errors.telephone && <div className='sm:pl-12 pl-20' >
                              <h1 className='text-lg text-red-600' >{errors.telephone} </h1>
                          </div>}
                          {/* *************************************************** */}
                          <div className='w-full flex justify-center items-center py-1 '>
                              <input onChange={handleChange} name='adress' value={formData.adress} className='w-4/5 h-10 text-xl text-white font-Poppins font-medium px-3  bg-[#f0b51d] rounded-xl  ' type="text" placeholder='N Rue ville *' />
                          </div>
                          {/****** * message error when the inpu empty ************/}
                          { errors.adress && <div className='sm:pl-12 pl-20' >
                              <h1 className='text-lg text-red-600' >{errors.adress} </h1>
                          </div>}
                          {/* *************************************************** */}
                          <div className='w-full flex justify-center items-center py-1 '>
                              <input onChange={handleChange} name='objet' value={formData.objet} className='w-4/5 h-10 text-xl text-white font-Poppins font-medium px-3  bg-[#f0b51d] rounded-xl  ' type="text" placeholder='Objet *' />
                          </div>
                          {/****** * message error when the inpu empty ************/}
                          { errors.objet && <div className='sm:pl-12 pl-20' >
                              <h1 className='text-lg text-red-600' >{errors.objet} </h1>
                          </div>}
                          {/* *************************************************** */}
                          <div className='w-full flex justify-center items-center py-1 '>
                              <textarea onChange={handleChange} name='message' value={formData.message} className='w-4/5 h-32 p-4 text-xl text-white font-Poppins font-medium px-3  bg-[#f0b51d] rounded-xl '   placeholder='Message *' />
                          </div>
                          {/****** * message error when the inpu empty ************/}
                          { errors.message && <div className='sm:pl-12 pl-20' >
                              <h1 className='text-lg text-red-600' >{errors.message} </h1>
                          </div>}
                          {/* *************************************************** */}
                        
                          <div className='sm:ml-10 flex justify-start items-center gap-3 ml-20 py-2'>
                            <button type='submit' className='text-xl text-white bg-green-800 py-2 px-3 rounded-xl capitalize '>envoyer</button> 
                            <button onClick={handleCancel} className='text-xl text-white bg-red-800 py-2 px-3 rounded-xl capitalize '>cancel</button>
                          </div>

                    </form>
              </div>

              {close && <div className='top-0 bottom-0 left-0 right-0 absolute bg-slate-900 opacity-85 '   >
                  
                  <div className='mx-auto w-4/5 flex flex-col justify-center translate-y-1/2  items-center gap-3 py-10 border-2 border-solid border-yellow-500'>
                      
                          <span onClick={()=>setClose(false)} className='sm:-right-4 sm:-top-28 md:-right-10 text-lg text-yellow-500 -top-20 -right-20 border-2 border-solid border-yellow-500 p-2 rounded-full absolute'>
                              <FaTimes />
                          </span>
                              
                          <svg className='h-20 w-20 text-yellow-500' fill="currentColor" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 549.41 549.08">
                              <path d="M533,14c4.44,0,7.68,1.06,9.62,3.13,2.2,2.36,3.13,6.36,2.76,11.9a40.45,40.45,0,0,1-10.39,24C496.53,96,367,244.35,312.13,351.2L226.34,510.75l-.07.13-.06.14c-.1.21-9.88,21.32-24.37,21.32A19.81,19.81,0,0,1,191.41,529a30.47,30.47,0,0,1-9.81-10.25c-12.6-21.07-78.39-129.45-137.25-194L12.93,290.54a33.2,33.2,0,0,1-8.65-17.71c-.71-4.89,0-8.66,2-11.21,2.32-2.93,6.71-4.7,13-5.25,1.25-.11,2.53-.17,3.79-.17a46.8,46.8,0,0,1,25.09,7.48L178.8,346.81l3,1.9L184,346c.49-.6,49.77-60.65,111.53-128.45C377.19,127.92,443.4,65.58,487.06,37.24l.08-.06.08,0L506.82,23a47.31,47.31,0,0,1,21.87-8.76A36.33,36.33,0,0,1,533,14m0-4a40.31,40.31,0,0,0-4.74.31,51.35,51.35,0,0,0-23.73,9.48l-19.6,14.12C377.42,103.65,180.94,343.43,180.94,343.43L50.32,260.31a50.9,50.9,0,0,0-27.24-8.11c-1.37,0-2.76.06-4.14.18-14.4,1.27-20.45,8.38-18.62,21A37.42,37.42,0,0,0,10,293.25L41.41,327.4c58.22,63.9,122.73,169.93,136.75,193.39a34.38,34.38,0,0,0,11.13,11.59,23.52,23.52,0,0,0,12.55,4c17.49,0,28-23.69,28-23.69l85.81-159.59C371,245.18,504.93,92.59,537.92,55.7a44.27,44.27,0,0,0,11.4-26.43c.87-13-4.71-19.3-16.37-19.3Z"/>
                          </svg>
                                
                          <h1 className='text-xl text-yellow-500'>Nous vous remercions pour votre demande. Nous vous contacterons sous 48 heures.</h1>

                  </div>
                  
              </div>
}
          {/* </div> */}
          </div>    
      </div>
   </div>
  )
}

export default Contact
