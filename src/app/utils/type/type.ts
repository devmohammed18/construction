
/**************** type des donnes de de Date  *************** */
export type typeData={
    id:number,
    title:string,
    desc:string,
    urls:any[]
}


/************************** Component nav ********************************* */
// type data nav
export interface typeDataNav{

    id:number,
    title:string,
    url:string,
    
    }
// Props fonction nav

export interface NavProps {
    setToggle: (toggle: boolean) => void;
  }


/************************ Page contact ************************ */
// type de props input de page contact 
export type PropsInputField={
  
    name:string,
    value:string,
    type:string,
    placeholder:string,
    onChange:(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    errors?:string,
}
//type de props form de page contact 

export type PropsFormContact = {
    setLoading: (loading: boolean) => void;
     setClose: (close: boolean) => void;
  };
// type date de form (function form)
 export type typeFromData={
    nom:string,
    email:string,
    telephone:string,
    adress:string,
    objet:string,
    message:string
    
    }; 
 export type typeInfoContact= {
   name:keyof typeFromData,
   type:string,
   placeholder:string,
   
  } 

