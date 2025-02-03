import React from "react";
import AnimatedTitle from "../common/animation/AnimatedTitle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const HeroBanner = () => {
  useGSAP(() => {
    gsap.set("#banner-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#banner-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#banner-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div style={{ position: "relative" }}>
      <div className="hero-banner" id="banner-frame">
        <h2 className="bottom-content text-white">Explore</h2>
      </div>
      <h2 className="bottom-content text-black">Explore</h2>
    </div>
  );
};

export default HeroBanner;
