
import { div } from 'framer-motion/client'
import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className='w-full min-h-[calc(100vh-70px)] box-border flex justify-center items-center   bg-black text-white ' >
        <div className=' w-full h-full flex justify-center items-center mt-[70px]  flex-col gap-7 border-0 border-solid border-white  '>

            <h1 className='text-5xl text-yellow-500 font-Poppins font-semibold'>400</h1>
            <p className='text-2xl text-yellow-500 font-Poppins font-extralight capitalize'>page not found</p>
            <Link className=' underline text-2xl text-red-700 font-Poppins font-extraligh cursor-pointer ' href='/'>go to page home</Link>

        </div>
    </div>
  )
}

export default NotFound
