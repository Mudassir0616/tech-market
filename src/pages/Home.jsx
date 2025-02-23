import React from "react";
import HeroBanner from "../components/home/HeroBanner";
import SecondSection from "../components/home/SecondSection";
import Services from "../components/home/Services";
import TextReveal from "../components/home/TextReveal";
import AnimatedTitle from "../components/common/animation/AnimatedTitle";
import NewSection from "../components/home/NewSection";
import ConnectUs from "../components/common/ConnectUs";
import NeedUs from "../components/home/NeedUs";
import Custom from "../components/home/Custom";

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
        </div>
      </section>

      <SecondSection />

      <NeedUs />

      <Services />

      <TextReveal />

      <Custom />

      <ConnectUs />

      {/* <NewSection /> */}
    </>
  );
};

export default Home;
