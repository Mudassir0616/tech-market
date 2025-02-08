import React from "react";
import HeroBanner from "../components/home/HeroBanner";
import SecondSection from "../components/home/SecondSection";
import Services from "../components/home/Services";
import TextReveal from "../components/home/TextReveal";
import AnimatedTitle from "../components/common/animation/AnimatedTitle";
import NewSection from "../components/home/NewSection";

const Home = () => {
  return (
    <>
      <HeroBanner />

      <section>
        <div className="second-container">
          <div className="heading">
            <p>Welcome To TechMarket</p>
            <AnimatedTitle
              title={"Discover the world's largest shared adventure"}
              containerClass={"service-heading white-shine"}
            />
          </div>
          <SecondSection />
        </div>
      </section>

      <Services />

      <TextReveal />

      <NewSection />

      <div style={{ height: "200dvh" }}></div>
    </>
  );
};

export default Home;
