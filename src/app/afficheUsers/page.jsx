
'use client'
import React, { useEffect, useState } from 'react'


 function  Users() {
const [user,setUser]=useState([])
const Users= async ()=>{
 
  const response=await fetch('https://jsonplaceholder.typicode.com/1users')
   try{

    if(!response.ok){
       console.log('++++++++++++++++++++++++++++++')
       throw new Error('Network response was not ok');
   //throw new (`HTTP Error Status: ${response.status}`)
     }

      console.log('-----------------------------------')
      const users=await response.json()
      
     // console.log(users)
      setUser(users)
    
   }catch(error){
      throw error

   }
   
    
    
  }    
  Users();
    
    //  useEffect(()=>{
    
    //   console.ereor(error)
    //   //.catch((error)=>{throw error})
    
    
    //  },[error])
 
  return (
    
    <div className='w-full min-h-[calc(100vh-70px)]  box-border flex justify-center items-center   bg-black text-white ' >
        {user.map((item)=>(
          <div>
            {item.name}
          </div>
        ))}
    </div> 
    
   
  
  )
}

export default Users
