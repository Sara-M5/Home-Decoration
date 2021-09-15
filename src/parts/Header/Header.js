import React from 'react';
import './Header.css';
const Header = (props) => {
    return (
        <div className="row mb-4">
           <div className="header-text pt-5">
               <h3 className="text-center">{props.title}</h3>
           </div>
        </div>
    )
}

export default Header
