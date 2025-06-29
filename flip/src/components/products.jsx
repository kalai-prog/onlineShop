import pic from "../images/img1.png"
import "../styles//women.css"
import "../styles/product.css"

import { Link } from "react-router-dom"

import cash from "../images/cash-on-delivery.png"
import free from "../images/free-delivery.png"
import ereturn from "../images/return-box.png"

import logo from "../images/img1.jpg"
import pic10 from "../images/img10.jpg"
import pic11 from "../images/img11.jpg"
import pic12 from "../images/img12.jpg"
import pic2 from "../images/img2.jpg"
import pic3 from "../images/img3.jpg"
import pic4 from "../images/img4.avif"
import pic5 from "../images/img5.jpg"
import pic6 from "../images/img6.jpg"
import pic8 from "../images/img8.jpg"
import pic9 from "../images/img9.jpg"
import kurthi from "../images/kurthis.jpeg"
import offer from "../images/offer.png"
import search from "../images/search.png"



import earings from "../images/earings.jpeg"
import handbag from "../images/handbag.jpeg"
import kid from "../images/kidscombo.jpeg"
import menstees from "../images/menstee.jpeg"
import saree from "../images/saree.jpg"
import shoes from "../images/shoe.jpeg"


function Products() {
  return (
   <div>
    <div id="header">
            <img src={pic} alt="" className="logo"/>
            <ul>
              <li><Link to={"/home"}>Home</Link></li>
              <li><Link to={"/product"}>Products</Link></li>
              <li><Link to={"/about"}>About Us</Link></li>
              <li><Link to={"/signup"}>Sign Up</Link></li>
            </ul>
            
          </div>
    <div className="search">
      <img src={search} alt="" className="search-icon"/>
    <input type="text" placeholder="Search here for more" />
    </div>
    <div className="offertag">
      <label>Summer Offer<br/>Kurthis from  Rs.299<br/>Shop Now</label>
      <img src={offer} alt=""/>
    </div>
    <div className="dress">
      <img src={kurthi} alt=""/>
     
    </div>
   <div className="gallery">
  <img src={logo} alt=""/>
  <Link to={"/womencollection"}>Women's Collection</Link>
  </div>
  <div className="gallery">
  <img src={pic2} alt=""/>
  <Link to={"/homeaccess"}>Home Accesseries</Link>
  </div>
  <div className="gallery">
  <img src={pic3} alt=""/>
  <Link to={"/cosmetics"}>Cosmetics</Link>
  </div>
  <div className="gallery">
  <img src={pic4} alt=""/>
  <Link to={"/gadgets"}>Gadgets</Link>
  </div>
  <div className="gallery">
  <img src={pic5} alt=""/>
  <Link to={"/men"}>Men's Collection</Link>
  </div>
  <div className="gallery">
  <img src={pic6} alt=""/>
  <Link to={"/toys"}>Toys</Link>
  </div>
  <div className="gallery">
  <img src={pic8} alt=""/>
  <Link to={"/shoes"}>Shoes</Link>
  </div>
  <div className="gallery">
  <img src={pic9} alt=""/>
  <Link to={"/handbags"}>Handbags</Link>
  </div>
  <div className="gallery">
  <img src={pic10} alt=""/>
  <Link to={"/bags"}>Bags</Link>
  </div>
  <div className="gallery">
  <img src={pic11} alt=""/>
  <Link to={"/haircare"}>HairCareProducts</Link>
  </div>
  <div className="gallery">
  <img src={pic12} alt=""/>
  <Link to={"/beauty"}>BeautyProducts</Link>
  </div>
   <div className="deliver">
   <img src={cash} alt=""/>
   <label>Cash On Delivery</label>
    <img src={ereturn} alt=""/>
    <label>Easy Return</label>
    <img src={free} alt=""/>
    <label>Free Delivery</label>
  </div> 
  <div className="kidscombo">
    <div className="gallery">
      <img src={kid} alt=""/>
      <label>Kids Combo offer <br/>From  Rs.149</label>
    </div>
    <div className="gallery">
      <img src={menstees} alt=""/>
      <label>Men's Tees <br/>From  Rs.179</label>
    </div>
    <div className="gallery">
      <img src={shoes} alt=""/>
      <label>Sports Shoes <br/>From  Rs.99</label>
    </div>
     <div className="gallery">
      <img src={earings} alt=""/>
      <Link to={"/jumkhas"}>Earings & Jumkhaas</Link>
      <label><br/>From  Rs.59</label>
     
    </div>
    <div className="gallery">
      <img src={saree} alt=""/>
      <label>Regular Wear Sarees<br/>From  Rs.159</label>
    </div>
    <div className="gallery">
      <img src={handbag} alt=""/>
      <label>Styling Sling Bags<br/>From  Rs.89</label>
    </div>
    </div>
  </div>
 
  )
}

export default Products
