import React from "react";
import HeroBanner from "../components/home/HeroBanner";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <>
      <HeroBanner />

      <Services />

      <div style={{ height: "200dvh" }}></div>
    </>
  );
};

export default Home;
