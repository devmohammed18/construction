
import { dataNav } from './dataNav'
import Link from 'next/link'
import { NavProps } from '@/app/utils/type/type'


function Nav({setToggle}:NavProps) {
    
  return (
    
       <div   className='sm:gap-0 md:gap-0 sm:flex-col sm:items-center md:flex-col md:items-center flex flex-row text-xl text-white gap-5 capitalize'>
        {dataNav.map(({id,title,url})=>
          (
            
                <div key={id} className='sm:border sm:border-solid sm:border-yellow-600 sm:w-full sm:p-3 sm:text-center sm:hover:bg-yellow-600 sm:cursor-pointer sm:transition-all sm:duration-700 sm:shadow-md
                                md:border md:border-solid md:border-yellow-600 md:w-full md:p-3 md:text-center md:hover:bg-yellow-600 md:cursor-pointer md:transition-all md:duration-700' >
                <Link onClick={()=>setToggle(true)} className=' sm:hover:border-transparent md:hover:border-transparent transition-all ease-in-out  duration-700 border-b-solid border-b-2 border-transparent  hover:text-red-700 hover:border-b-red-700  ' href={url}> {title} </Link>
                </div>
            
            
          )

        )}
        </div>
       
  )
}


export default Nav
