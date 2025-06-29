
import { Link } from "react-router-dom"
import g1 from "../images/g1.jpg"

function Funwear1() {
  return (
    <div>
      <div className="gallery">
            <img src={g1} alt="">
            <Link to={"funwear1"}></Link>
            </img>
            </div>
            <label>Function Wear Meterial</label>
            <p>Color : MultiColore<br/>
            Women Floral type Print Kurta  Multicolor<br/>
            78% off  Rs.1200 Only
            </p>         
            
    </div>
  )
}

export default Funwear1
