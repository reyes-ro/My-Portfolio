import React from "react";
import Hero from "../Hero";
import Comp1 from "../Comp1";


const Home = () => {
  return (
    <div style={{ position: "relative", marginTop: "0px", fontSize: "15px"}} className="page about" >

      <Hero/>
      <Comp1/>

    </div>
  );
};

export default Home;