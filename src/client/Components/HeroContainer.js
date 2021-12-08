import React from "react";
import { Link } from "react-router-dom";
import './HeroContainer.css';

import BannerImg from "../../images/banner2-img.jpg";

function HeroContainer(props) {
  return (
    <>
    <div className = "hero-container">

        <div className="text-wrapper">
          <h1>Turning Ideas into events </h1>
          <p>Connect with thousands of fellow SFSU students online at a touch of a button</p>
        </div>
    </div>
    <div className="banner2">
 

    </div>
        
    </>
  );
}

export default HeroContainer;
