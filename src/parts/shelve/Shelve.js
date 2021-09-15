import React from 'react'
import './Shelve.css';

function Shelve() {
    return (
        <div className="shelve">
            <div className="row grid-3">
                <div className="col">
                    <div className="card card-2 text-center justify-content-center">
                        <p className="shelve-text ">Open Shelving</p>
                    </div>
                    <img className="shelve-img my-5" src ="/images/kitchen (2).jpg" />
                    <img className="shelve-img" src ="/images/colllection.jpg" />
                </div>


                <div className="col">
                     <img className="shelve-img pb-4" src ="/images/living-room(6).jpg" />
                     <img className="shelve-img pb-4" src ="/images/collection.jpg" />
                     <img className="shelve-img pb-5" src ="/images/bedroom (2).jpg" />
                     
                   
                   
               </div>


                <div className="col">
                    <img className="shelve-img " src ="/images/cool.jpg" />
                    <img className="shelve-img my-5" src ="/images/bathroom (2).jpg" />
                    <div className="card text-center justify-content-center">
                        <p className="shelve-text ">Decor Style</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Shelve
