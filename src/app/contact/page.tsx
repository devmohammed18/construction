


import image_contact from '../../public/images/contact/image-contact.jpg'
import BodyContact from './bodyContact';
import Banner from '../components/banner/banner';


function Contact() {

  return (
   
   <div className='w-full min-h-screen bg-slate-500 mt-[70px] border-0 border-sold border-red-700' >
      <div className='w-full h-full box-border flex flex-col justify-center items-center bg-black '>
        
          {/* <div className='w-full h-screen  flex justify-center items-center border-0 border-solid border-red-800 '>
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
          </div> */}
           <Banner titleBanner='contact' imageBanner={image_contact} heigth='h-[calc(100vh-70px)]'   />
           <BodyContact/>
             
      </div>
   </div>
   
   
   
  )
}

export default Contact
