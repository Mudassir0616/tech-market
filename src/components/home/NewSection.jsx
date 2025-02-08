import React from "react";
import gsap from "gsap";
import { useRef } from "react";
import AnimatedTitle from "../common/animation/AnimatedTitle";

const NewSection = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

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
