import React from "react";
import Hero from "../Hero";
import SkillFrames from "../SkillFrames";


const Home = () => {
  return (
    <div style={{ position: "relative", marginTop: "0px", fontSize: "15px"}} className="page about" >

      <Hero/>

      <SkillFrames/>

    </div>
  );
};

export default Home;