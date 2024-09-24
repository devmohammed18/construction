import image_cuisine1 from '../../public/images/Cuisine/cuisine1.jpg'
import image_cuisine2 from '../../public/images/Cuisine/cuisine2.jpg'
import image_cuisine3 from '../../public/images/cuisine/cuisine3.jpg'
import salle_bain1 from '../../public/images/Salle_de_bain/salle_bain1.jpg'
import salle_bain2 from '../../public/images/Salle_de_bain/salle_bain2.jpg'
import salle_bain3 from '../..//public/images/Salle_de_bain/salle_bain3.jpg'
type typeServices={
    id:number,
    title:string,
    desc:string,
    urls:any[]
}

 export const inforServices:typeServices[]=[

  {id:1,
    title:'cuisine',
    desc:'L’équipe BORDO est la solution parfaite pour la rénovation complète ou le relooking de votre cuisine. Que ce soit pour un design moderne ou pour quelque chose de classique, en bois véritable ou en matière synthétique, nous avons une solution à la hauteur de vos attentes et ajustée à votre budget.',
    urls:[image_cuisine1,image_cuisine2,image_cuisine3,] 
    // urls:['../../public/images/renovation_cuisin.jpg',
    //       '../../public/images/renovation_cuisinn2.jpg',
    //       '../../public/images/renovation_cuisine3.jpg'
    // ]   

    },

    {id:2,
        title:'salle de bain',
        desc:'Qu’elle soit petite ou grande, une salle de bain est un élément clé d’une propriété. Confiez-nous la rénovation de votre salle de bain, salle d’eau, douche de tout genre, sauna sec ou humide, douche vapeur et plus encore! Nous sommes là pour vous offrir un produit de qualité et exécuté selon les plus hauts standards de qualité.',
        urls:[salle_bain1,salle_bain2,salle_bain3,] 
          

        }
   

]

export const salleBain:typeServices[]=[


]