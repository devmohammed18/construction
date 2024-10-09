
// page Acceuil animation 
export const variantsParents={
    hidden:{x:1},
    visible:{y:0,transition:{staggerChildren:1,duration:1}}

}

export const variantsChildens={
    hidden:{opacity:0,y:100},
    visible:{opacity:1 , y:0,transition:{duration:1}}

}

//page service and projet and contact 

export const variantsBannerParents={
    hidden:{x:-600},
    visible:{x:0,transition:{staggerChildren:1,duration:1}}

}
export const variantsBannerChildrens={
    hidden:{opacity:0,y:100},
    visible:{opacity:1,y:0,transition:{duration:1}}

}

// page projet animation
export const variantsProjetImages={
    hidden:{y:-1 },
    visible:{y:0, transition:{staggerChildren:1 ,duration:1}}
                              
}

export const variantsProjetImage={
       hidden:{opacity:0},
       visible:{opacity:1,transition:{duration:1}}

}