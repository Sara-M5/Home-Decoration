import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className="h-decor">
            <video className="" src="/Movie 4.mp4" autoPlay loop muted />
             <div className="container banner">
                <div className="banner-text text-center ">
                   <p className="banner-title pt-3">You Deserve To Have a Beautifull Decorated Home That You Can Proud Of</p>
                   <button className="px-3 py-2 mb-5">Best Started Today</button>
                </div>
             </div>
        </div>
    )
}

export default Banner
