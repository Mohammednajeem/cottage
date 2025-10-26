import React from "react";
import { motion } from "framer-motion";
import bgImage from "../cottageimages/image3.png"



export default function Attractions() {
  return (
    <section className="attractions-section" 
    style={{ backgroundImage: `url(${bgImage}` }}
    >
      <h1 className="attractions-title">Kodaikanal must visits</h1>

      <div className="gallery1">
        <div className="gallery-panel">
          <img src={bgImage} alt=""></img>
        </div>
        <div className="gallery-panel">
          <img src={bgImage} alt=""></img>
        </div>
        <div className="gallery-panel">
          <img src={bgImage} alt=""></img>
        </div>
        <div className="gallery-panel">
          <img src={bgImage} alt=""></img>
        </div>

        
      </div>
    </section>
  );
}
