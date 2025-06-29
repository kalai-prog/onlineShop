import pic from "../images/img1.png"
import search from "../images/search.png"
import "../styles/home.css"
import "../styles/product.css"

function Header() {
  return (
    <div>
      <div id="header">
        <div className="main">
        <img src={pic} alt="" className="logo"/>
        </div>
        <ul>
          <li className="active"><Link to={"/home"}>Home</Link></li>
          <li><Link to={"/product"}>Products</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
          <li><Link to={"/signup"}>Sign Up</Link></li>
        </ul>
        
      </div>
      <div className="search">
          <img src={search} alt="" className="search-icon"/>
          <input type="text" placeholder="Search here for more" />
          </div>
      

    </div>
  )
}

export default Header
