'use client'
import Link from 'next/link'
import { useEffect } from 'react';



function ErrorPage({error,rest}) {

  useEffect(()=>{
    console.error(error)
  }
,[error])
  return (
    <div className='w-full min-h-[calc(100vh-70px)] box-border flex justify-center items-center   bg-black text-white ' >
    <div className=' w-full h-full flex justify-center items-center mt-[70px]  flex-col gap-7 border-0 border-solid border-white  '>

        <h1 className='text-3xl text-yellow-500 font-Poppins font-semibold'>someting went wrong</h1>
        <p className='text-xl text-yellow-500 font-Poppins font-extralight capitalize'>{error.message}</p>
        <button className='p-2 bg-slate-500 text-white rounded-xl' onClick={()=>rest} > try again  </button>
        <Link className=' underline text-2xl text-red-700 font-Poppins font-extraligh cursor-pointer ' href='/'>go to page home</Link>

    </div>
</div>
  )
}

export default ErrorPage
