import React, {useState} from 'react'
import { sliderData } from './sliderData'
import './Gallery.css';

const Gallery = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;


     const nextSlide = () => {
         setCurrent(current === length - 1 ? 0 : current + 1);
     };

     const prevSlide = () => {
         setCurrent(current === 0 ? length - 1 : current - 1);
     };

    if (!Array.isArray(slides) || slides.length <= 0){
        return null;
    }
    return (
        <div className="container">
            <div className="slider">
            <div className="arrow-icon d-flex justify-content-center align-items-center">
                <i className="right-icon fas fa-arrow-circle-right" onClick={nextSlide}></i>
                <i className="left-icon fas fa-arrow-circle-left" onClick={prevSlide}></i>
            </div>
            
            {sliderData.map((slide, index) => {
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && ( <img className="slider-image" src={slide.image} alt="home decoration images" />)}
                
                 </div>
               )
            })}
            </div>
        </div>
    )
}

export default Gallery
