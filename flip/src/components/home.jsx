import { Link } from "react-router-dom"
import pic from "../images/img1.png"

import "../styles/home.css"

function Home() {
  return (
    <div>
      <div id="header">
        <img src={pic} alt="" className="logo"/>
        <ul>
          <li className="active"><Link to={"/home"}>Home</Link></li>
          <li><Link to={"/product"}>Products</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
          <li><Link to={"/signup"}>Sign Up</Link></li>
        </ul>
        
      </div>
    <div id="content">
    <h3>Welcome!</h3>
    <li><Link to={"/language"}>Choose Language</Link></li>
     <li><Link>MyOrders</Link></li>
     <li><Link>MyWishlist</Link></li>
     <li><Link>MyCart</Link></li>
     <li><Link to={"/account"}>My Account</Link></li>
     <li><Link to={"/help"}>Help</Link></li>
     <li><Link>LogOut</Link></li>
    </div>
      <div id="demo">
      <label>UserName</label>
      <input type='text'></input><br></br><br></br>
      <label>Password</label>
      <input type='password'></input><br></br><br></br>
      <button>Login</button>
    </div>
    </div>

  )
}
export default Home
