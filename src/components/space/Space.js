import React from 'react'

function Space(props) {
    return (
        <div className="row">
            <div className="text-center">
                <img className="space-img " src={props.image}/>
                <h4 className="banner-title mt-4">{props.title}</h4>
            </div>
        </div>
    )
}

export default Space
