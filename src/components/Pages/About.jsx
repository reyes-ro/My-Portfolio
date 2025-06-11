import React from "react";
import Hero from "../Hero";
import { AboutPDF } from "../PDF_IFrame/AboutPDF";


const About = () => {
  return (
    <div style={{ position: "relative", marginTop: "5rem", fontSize: "15px"}} className="page about" >


    <AboutPDF/>

      

    </div>
  );
};

export default About;