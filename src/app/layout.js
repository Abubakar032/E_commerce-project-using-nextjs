
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeroSecProvider } from "./Contexts/hero_sec_context";
import { Product_context } from "./Contexts/producrt_context";
import { Add_to_cart_Context } from "./Contexts/add_to_cart_context";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";







export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      <body >
      
      <HeroSecProvider>
          <Product_context>
            <Add_to_cart_Context>
              <Navbar />
              {children}
              <Footer />
            </Add_to_cart_Context>
          </Product_context>
        </HeroSecProvider>
      </body>
    </html>
  );
}
