import React, { useState, useRef} from 'react';
import Header from '../parts/Header/Header';
import Banner from '../parts/banner/Banner';
import Footer from '../parts/footer/Footer';
import Services from '../components/services/Services';
import Gallery from '../components/gallery/Gallery';
import Spaces from '../components/space/Spaces';
import Collection from '../parts/collection/Collection';
import Shelve from '../parts/shelve/Shelve';
import { sliderData } from '../components/gallery/sliderData';


export default function Home() {
  const homeRef = React.useRef(null);
  

     const [serviceState] = useState( {
      services: [
        { id: "1", title:"Living room services", image:"/images/living-room-ideas-7.jpg"},
        { id: "2", title:"Dining room services", image:"/images/kitchen (1).jpg"},
        { id: "3", title:"Bed room services", image:"/images/bedroom (1).jpg"},
        { id: "4", title:"Bathroom services", image:"/images/bathroom (3).jpg"},
        { id: "3", title:"Office room services", image:"/images/office room.jpeg"},
        { id: "3", title:"Exterior room services", image:"/images/exterior.jpg"}
      ],
     
      gallery: [
        { image:"/images/living-room(1).jpg"},
        { image:"/images/living-room(2).jpg"},
        { image:"/images/living-room(3).jpg"},
        { image:"/images/living-room(4).jpg"}
      ],
      spaces: [
        { id: "1", img:"/images/bed room.jpg", title:"Bedroom Ideas"},
        { id: "2", img:"/images/kitchen (1).jpg", title:"Kozy Kitchen"},
        { id: "3", img:"/images/comfort .jpg", title:"Comfort Design"}
      ]
    })
    return (
       
      <div ref={homeRef}>
           <Banner />

           {/*  services section  */}
            <div className="section container" id="Service">
                 <Header title="Our Services" />
                  <div className="grid-3">
                      <Services services={serviceState.services} />
                  </div>       
          </div>


           {/*  gallery section */}
           <div className="section gallery" id="Gallery">
               <Header title="Our Gallery"/>
               <Gallery slides={sliderData}/>
           </div>
          

             {/*   fourth section  */}
             <div className="section container">
                 <Header title="Helps you transform your space into a fresh one "/>
                  <div className="grid-3">
                     <Spaces spaces={serviceState.spaces} />
                  </div>
             </div>


              {/*   collection section  */}
              <div className="section">
              <Collection />
              </div>
            

              {/*   shelve section  */}
              <div className="section">
                <Header title="Simple Decor Ideas" />
                <Shelve />
              </div>

              <div id="Contact">
                 <Footer />
              </div>
        </div>
    )
}
