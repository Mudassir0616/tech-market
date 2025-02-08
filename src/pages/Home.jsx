import React from "react";
import HeroBanner from "../components/home/HeroBanner";
import SecondSection from "../components/home/SecondSection";
import Services from "../components/home/Services";
import TextReveal from "../components/home/TextReveal";

const Home = () => {
  return (
    <>
      <HeroBanner />

      <SecondSection />

      <Services />

      <TextReveal />

      <div style={{ height: "200dvh" }}></div>
    </>
  );
};

export default Home;
