import React from 'react'
import './Collection.css';

function Collection() {
    return (
        <div className="collection">
          <div className="container ">
            <div className="row align-items-center">
            <div className="title col">
                <h2 className="colc-title">Home Decor Collection</h2>
                <p className="text-muted">Choose what you like for your home</p>
                <button className="px-4 py-2"> See More</button>
            </div>
            <div className="m-5 col grid-3">
                <img className="collection-img " src="/images/living-room(5).jpg"/>
            </div>
           
          </div>
          </div>
        </div>
    )
}

export default Collection
