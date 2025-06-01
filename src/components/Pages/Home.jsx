import React from "react";
import Hero from "../Hero";
import SkillFrames from "../SkillFrames";


const Home = () => {
  return (
    <div style={{ position: "relative", marginTop: "0px", fontSize: "15px"}} className="page about" >
      <h1 className="Home-Header" style={{marginTop:"6rem"}}>Build Systems That Work</h1>
      <Hero/>

      <SkillFrames/>

    </div>
  );
};

export default Home;