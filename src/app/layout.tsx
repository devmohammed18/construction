
import Footer from "./components/footer/footer";
import Hedear from "./components/hedear/hedear";
import "./globals.css";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Hedear/>
        {children}
        <Footer/>
       
      </body>
    </html>
  );
}
