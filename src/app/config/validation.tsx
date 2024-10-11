export const FormValidation=(value:any)=>{

  const errors:any={}
   if(!value.nom){
     errors.nom="Nom Required"
   }   
   if(!value.email){
      errors.email="Email Required"

   }
   if(!value.telephone){
      errors.telephone="Telephone Required"
   }
   
   if(!value.adress){
      errors.adress="Adress Required"
   }

   if(!value.objet){

      errors.objet="Objet Required"
   }

   if(!value.message){

      errors.message="Message Required"
   }

  return errors;




}