import { delay, easeInOut } from "framer-motion"

export const variantsImage={
    hidden:{opacity:0},
    visible:{opacity:1,transition:{duration:1}}
      
  }

  export const variantsTextleft={
    hidden:{x:-400},
    visible:{x:0,transition:{duration:2}}
      
  }
  export const variantsTextright={
    hidden:{x:400},
    visible:{x:0,transition:{duration:2}}
      
  }
  export const variantsSection={
   hidden:{x:1},
   visible:{x:0,transition:{staggerChildren:2,duration:1 }}

  }

  export const variantsDown={
    hidden:{opacity:0,y:100},
    visible:{opacity:1,y:0,transition:{delay:0.5, repeat:Infinity ,duration:4}}
  }
  export const varianctsup={
    hidden:{opacity:0,y:-100},
    visible:{opacity:1,y:0,transition:{delay:1,duration:1}}
  }

  export const variantsKeyFrames={
     visible:{scale:[1,2,2,1],rotate:[0,90,90,0],
              borderRadius:["10%","10%","50%","10%"], 
                transition:{duration:3,ease:easeInOut,repeat:Infinity ,repeatdelay:1} }
     
    
    }
