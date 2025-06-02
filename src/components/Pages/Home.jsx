import React from "react";
import Hero from "../Hero";
import SkillFrames from "../SkillFrames";
import Torus from "../TheTorus/Torus";


const Home = () => {
  return (
    <div style={{ position: "relative", marginTop: "0px"}} className="page about" >
      <h1 className="Home-Header" style={{marginTop:"6rem"}}>Build Systems That Work</h1>
      <Hero/> 

      <SkillFrames/>

      <Torus/>

    </div>
  );
};

export default Home;