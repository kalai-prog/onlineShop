import pic1 from "../images/gadget1.jpg"
import pic2 from "../images/gadget2.jpg"
import pic3 from "../images/gadget3.jpeg"
import pic4 from "../images/gadget4.jpeg"
import pic5 from "../images/gadget5.webp"
import pic7 from "../images/gadget7jpeg.jpeg"
import pic8 from "../images/gadget8.jpg"
import pic6 from "../images/gadgets6.webp"

import "../styles/women.css"

function Gadgets() {
  return (
    <div>
      <div className='gallery'>
        <img src={pic1} alt=''/>
      </div>
      <div className='gallery'>
        <img src={pic2} alt=''/>
      </div>
      <div className='gallery'>
        <img src={pic3} alt=''/>
      </div>
      <div className='gallery'>
        <img src={pic4} alt=''/>
      </div>
      <div className='gallery'>
        <img src={pic5} alt=''/>
      </div>
      <div className='gallery'>
        <img src={pic6} alt=''/>
      </div>
      <div className='gallery'>
        <img src={pic7} alt=''/>
      </div>
      <div className='gallery'>
        <img src={pic8} alt=''/>
      </div>
      
    </div>
  )
}

export default Gadgets
