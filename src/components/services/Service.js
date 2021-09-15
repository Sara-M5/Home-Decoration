import React from 'react'

function service(props) {
    return (
        <div className="row text-center">
            <div className="">
                <img className="card-img"src={props.image} />
             </div>
            <div className="card-body ">
               <h4 className="card-title">{props.title}</h4>
               <p className="card-text text-muted">Lorem ipsum dolor sit ame, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              
            </div> 

        
        </div>
    )
}

export default service
