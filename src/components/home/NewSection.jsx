import React from "react";
import gsap from "gsap";
import { useRef } from "react";
import AnimatedTitle from "../common/animation/AnimatedTitle";

const NewSection = () => {
  const frameRef = useRef(null);

  return (
    <section className="container">
      <div id="story" className="story-section">
        <div className="story-content">
          <AnimatedTitle
            title="the story of <br /> a hidden realm"
            containerClass="story-title"
            animate="animated-word-right"
          />

          <div className="story-image-container">
            <img src="/img/laptop.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;
