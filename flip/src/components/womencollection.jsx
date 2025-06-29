import "../styles/women.css"

import { Link } from "react-router-dom"
import g1 from "../images/g1.jpg"
import g from "../images/g1.webp"
import g2 from "../images/g2.jpg"
import g3 from "../images/g3.jpg"
import g4 from "../images/g4.jpg"
import g5 from "../images/g5.jpg"


 
function Womencollection() {
  return (
    <div className="middle">
      <div className="gallery">
      <img src={g1} alt=""/>
      
      <Link to={"/function"}>Function Wear Collection</Link><br/>
      <label>Rs.1300 MultiColor AnarkaliKurthis </label>
       </div>
       <div className="gallery">
       <img src={g} alt=""/>
       <Link>Western Wear Collection</Link><br/>
       <label>Rs.500 BlueColor Garget Meterial </label>
       </div>
       <div className="gallery">
       <img src={g2} alt=""/>
        <Link>Saree Collection</Link><br/>
       <label>Rs.999 Peach Color Silk Meterial </label>
       </div>
       <div className="gallery">
       <img src={g3} alt=""/>
       <Link>Party Wear  Collection</Link><br/>
       <label>Rs.650 Party Wear Kurthis </label>
       </div>
       <div className="gallery">
       <img src={g4} alt=""/>
        <Link>Jean Collection</Link><br/>
       <label>Rs.550 Jeans & tops </label>
       </div>
       <div className="gallery">
       <img src={g5} alt=""/>
       <Link>Anarkali Collection</Link><br/>
       <label>Rs.450 Regular Wear Kurthis</label>
       </div>
       
       
       </div>
    
  )
}

export default Womencollection
