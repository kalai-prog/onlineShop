import help1 from "../images/help1.jpg"
import help2 from "../images/help2.jpg"

import "../styles/help.css"
 
function Helpcenter() {
  return (
    <div className="helpcenter">
      <div className='help'>
        <img src={help1} alt=''/>
          </div>
        <div className='help'>
        <img src={help2} alt=''/>
</div>
    
    </div>
  )
}

export default Helpcenter
