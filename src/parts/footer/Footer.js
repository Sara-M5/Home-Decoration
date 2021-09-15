import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer bg-dark text-muted">
            <div className="d-flex justify-content-around pt-2">
                <div className="left">
                   
                    <div className="footer-icons">
                     Follow Us On:
                        <NavLink to="/"><i className="footer-icon fb fab fa-facebook-f"></i></NavLink>
                        <NavLink to="/"><i className="footer-icon t fab fa-twitter"></i></NavLink>
                        <NavLink to="/"><i className="footer-icon p fab fa-pinterest"></i></NavLink>
                    </div>
                </div>
                <div className="right">
                   <p> &copy; copyright 2021 -Home decoration</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
