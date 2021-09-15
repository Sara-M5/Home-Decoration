import React, {useState} from 'react';
import { HashLink as Link } from "react-router-hash-link";



export default function Navbar() {
/* 
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const CloseMobileMenu = () => setClick(false);

*/

    return (
       <div>
        <nav className="navbar navbar-expand-sm fixed-top navbar-light" >
        <div className="container ">
       
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <Link className="nav-link" smooth to="/Home" exact>
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" smooth to="#Service"exact>
                Our Services
              </Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link" smooth to="#Gallery" exact>
                Our Gallery
              </Link>
            </li>        
            <li className="nav-item ">
              <Link className="nav-link" smooth to="#Contact" exact>
                Contact
              </Link>
            </li>
          
          </ul>

          </div>
         
        

      </nav>
   
    </div>
    )
}
