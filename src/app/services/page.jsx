

import image_services from '@/public/images/pexels-life-of-pix-8092.jpg'

import Banner from '../components/banner/banner'

import BodyServices from './bodyServices'

function Services() {


  return (
    <div className=' w-full min-h-screen bg-slate-950 pb-4 mt-[70px] box-border border-0 border-solid border-red-700 ' >
      
     
     
      <Banner  titleBanner='services' imageBanner={image_services} heigth='h-[calc(100vh-70px)]' />
      <BodyServices/>
   
        
    </div>
  )
}

export default Services
