

import Footer from "./components/footer/footer";
import Hedear from "./components/hedear/hedear";
import "./globals.css";
import { Roboto,Poppins,Open_Sans } from 'next/font/google'

// logo and
const poppins=Poppins({
  weight:['400','500','600','700'],
  subsets:['latin'],
  variable:'--font-poppins' 
}) 
//en tete title and contexte de text et grant titre 
const open_sans=Open_Sans({
weight:['400','500','600','700'],
subsets:['latin'],
variable:'--font-open_sans'

})
// navbar link
const roboto = Roboto({
  weight: ['400','500','700'],
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-roboto'
})





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable} ${open_sans.variable} border-0 border-solid border-yellow-500 `} >
     
      <body>
        
        <Hedear/>
         
        {children}
       

        <Footer/>
       
      </body>
    </html>
  );
}
