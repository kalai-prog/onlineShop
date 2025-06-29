import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Bags from "./components/bags"

import Beautyproducts from "./components/beautyproducts"
import Changes from "./components/changes"
import Functionwear from "./components/functionwear"
import Gadgets from "./components/gadgets"
import Girlthinks from "./components/girlthinks"
import Haircare from "./components/haircare"
import Handbag from "./components/handbag"
import Helpcenter from "./components/helpcenter"
import Home from "./components/home"
import Homeasscess from "./components/homeasscess"
import Jumkhas from "./components/jumkhas"
import Language from "./components/language"
import Mencollcection from "./components/mencollcection"
import Notification from "./components/notification"
import Products from "./components/products"
import Shoes from "./components/shoes"
import Toys from "./components/toys"
import Womencollection from "./components/womencollection"



function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path="/home" element={<Products/>}/>
          <Route path="/" element={<Products/>}/>
          <Route path="/about" element={<Changes/>}/>
        
          <Route path="/signup" element={<Home/>}/>  

          <Route path="/language" element={<Language/>}/>
          <Route path="/account" element={<Notification/>}/>
          <Route path="/help" element={<Helpcenter/>}/>
         

          <Route path="/womencollection" element={<Womencollection/>}/>
          <Route path="/homeaccess" element={<Homeasscess/>}/>
          <Route path="/handbags" element={<Handbag/>}/>
          <Route path="/bags" element={<Bags/>}/>
          <Route path="/function" element={<Functionwear/>}/>
          <Route path="/men" element={<Mencollcection/>}/>
          <Route path="/shoes" element={<Shoes/>}/>
          <Route path="/cosmetics" element={<Girlthinks/>}/>
          <Route path="/toys" element={<Toys/>}/>
          <Route path="/gadgets" element={<Gadgets/>}/>
          <Route path="/jumkhas" element={<Jumkhas/>}/>
          <Route path="haircare" element={<Haircare/>}/>
          <Route path="beauty" element={<Beautyproducts/>}/>
          
        </Routes>
        </Router>
      
     
    </div>
  )
}

export default App

