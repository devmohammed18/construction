

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
//   variable motion the page Projet
export const variantsListParents={
    hidden:{opacity:0, y:20},
    visible:{opacity:1,y:0,transition:{delay:1,staggerChildren:1,duration:0.5}}

}
export const variantsListChildrens={
    hidden:{opacity:0,y:50},
    visible:{opacity:1,y:0,transition:{delay:2,duration:0.5}}

}

//  animation the images the page projet
export const variantsProjetImages={
    hidden:{y:-1 },
    visible:{y:0, transition:{staggerChildren:1 ,duration:1}}
                              
}

export const variantsProjetImage={
       hidden:{opacity:0},
       visible:{opacity:1,transition:{duration:1}}

}