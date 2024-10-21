
'use client'
import { motion } from 'framer-motion'

import { FormValidation } from '@/app/config/validation'
import InputField from './InputField'

import {useRef, useState } from 'react';

import { PropsFormContact,typeFromData,typeInfoContact } from '../utils/type/type';



 

function FormContact({setLoading,setClose}:PropsFormContact) {

   
    



    /********************* formDate *********************** */
    const [formData,setFormData]=useState<typeFromData>({
        nom:'',
        email:'',
        telephone:'' ,
        adress:'',
        objet:'',
        message:'',

    })
   
    
    const infoContact:typeInfoContact[]=
    [{name:'nom',type:'text',placeholder:'nom *'},
     {name:'email',type:'email',placeholder:'email *'},
     {name:'telephone',type:'text',placeholder:'telephone *'},
     {name:'adress',type:'text',placeholder:'adress *'},
     {name:'objet',type:'text',placeholder:'objet *'},
     {name:'message',type:'textarea',placeholder:'message *'}
      ]
    
   

    // errors when the inputField empty
    const [errors,setErrors]=useState<any>({})
    const refMessgeValidation=useRef<any>()

   // function hendler InputField
    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{

        const {name,value}=e.target;
        setFormData((prevData)=>({...prevData,[name]:value})) 
        const updateData={...formData,[name]:value}
       
        setErrors(FormValidation(updateData))
        
    }

/*************** Function handleCancel Button Cancel ************ */
    const handleCancel:any=()=>{

            setFormData({
            nom:'',
            email:'',
            telephone:'',
            adress:'',
            objet:'',
            message:''
            })
            
        
            console.log('====errors',Object.keys(FormValidation(formData)).length)
        console.log(errors)
        }

  /*************** handleSubmit *************** */
const  handleSubmit=async (e:any)=>{
    e.preventDefault()
    

    if(Object.keys(FormValidation(formData)).length>0){
        setErrors(FormValidation(formData))
        console.log('taille de Errors :',Object.keys(FormValidation(formData)).length)
      }
    
    if(Object.keys(FormValidation(formData)).length===0){
      
      try {
            setLoading(true) 
            refMessgeValidation.current.scrollIntoView({behavior:'smooth',block:'end' })
            setClose(true);
            
            const response = await fetch('/api/sendEmail', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
          
        
            if (!response.ok) {
              setLoading(false) 
              setClose(false);
              throw new Error(`HTTP error! status: ${response.status}`);
              
            }
          
          
          // handleLoading(); // function loading the Botton when it sended the request
            const data = await response.json();
            console.log('------>',data.message);
            if (data) {
              
                setLoading(false)
                setErrors(FormValidation(formData))
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
        throw error
      // setErrors(`Error: ${error.message}`);
    }
    
    }}

  

  return (


    <form ref={refMessgeValidation} onSubmit={handleSubmit} className=' w-full h-full box-border border-0 border-solid border-green-800 ' >
                 {/* title Th forme */}
          <div className='w-full flex justify-center items-center my-4'>
               <h1 className='sm:text-center sm:text-xl text-3xl pb-6 border-b-2 border-b-solid border-b-yellow-500  text-yellow-500'>Demande de soumission et d'information</h1>
           </div>

                 {/*   Les Input : name and @email and sdress ....  */}
            {
            infoContact.map(({name,type,placeholder},index)=>(
               <InputField key={index} onChange={handleChange} name={name} value={formData[name]} type={type} placeholder={placeholder} errors={errors[name]} />
                ))
            }

           {/* ***** Button Envoyer for send the message  and Button Cancel  ******* */}
        <div className='sm:ml-10 flex justify-start items-center gap-3 ml-20 py-2'>
                <motion.button 
                    whileTap={{scale:1.5,transition:{duration:1}}}
                    
                    type='submit'  className='text-xl text-white bg-green-800 py-2 px-3 rounded-xl capitalize '>envoyer</motion.button> 
                <motion.button 
                    whileTap={{scale:1.5,transition:{duration:1}}}
                onClick={handleCancel} className='text-xl text-white bg-red-800 py-2 px-3 rounded-xl capitalize '>cancel</motion.button> 
        </div>

    </form>
  
  )
}

export default FormContact
