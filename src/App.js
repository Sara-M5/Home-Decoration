import React, { Component }  from "react";
import Navbar from "./components/Navbars/Navbar";
import Home from "./views/Home";
import Services from "./components/services/Services";
import Gallery from "./components/gallery/Gallery";
import Contact from "./parts/footer/Footer"
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';



function App() {
  return (
   <Router>
     <main>
     <Navbar />
     <Switch>
       
        <Route exact path='/' component={Home} />
        <Route exact path='/service' component={Services} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/contact' component={Contact} />
            
         

     </Switch>
     </main>
   </Router>
  );
}

export default App;
