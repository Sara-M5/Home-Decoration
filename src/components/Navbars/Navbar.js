import React from 'react';
import { HashLink as Link } from "react-router-hash-link";



export default function Navbar() {

    return (
       <div>
        <nav className="navbar navbar-expand-sm fixed-top navbar-light" >
        <div className="container ">
        <div className="banner-title">Decoration</div>
        
         <button
          className="navbar-toggler btn0"
          data-toggle="collapse"
          data-target="#navbarSuportedContent"
          aria-controls="navbarSuportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSuportedContent"
        >
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
        </div>
         
        

      </nav>
   
    </div>
    )
}
