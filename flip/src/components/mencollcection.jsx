import "../styles/women.css"

import men1 from "../images/m1.jpg"
import men2 from "../images/m2.webp"
import men3 from "../images/m3.webp"
import men4 from "../images/m4.jpg"
import men5 from "../images/men1.jpg"
import men6 from "../images/men2.jpg"
import men7 from "../images/men3.jpg"
import men8 from "../images/men5.jpg"




function Mencollcection() {
  return (
    <div>
      <div className='gallery'>
        <img src={men1} alt=''/>  
        
      </div>
      <div className='gallery'>
        <img src={men2} alt=''/>
      </div>
      <div className='gallery'>
        <img src={men3} alt=''/>
      </div>
      <div className='gallery'>
        <img src={men4} alt=''/>
      </div>
      <div className='gallery'>
        <img src={men5} alt=''/>
      </div>
      <div className='gallery'>
        <img src={men6} alt=''/>
      </div>
      <div className='gallery'>
        <img src={men7} alt=''/>
      </div>
      <div className='gallery'>
        <img src={men8} alt=''/>
      </div>

    
    </div>
  )
}

export default Mencollcection
