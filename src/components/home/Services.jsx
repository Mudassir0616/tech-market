import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef(null);
  const laptopsContainerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const laptopsContainerElement = laptopsContainerRef.current;
    const titleElement = titleRef.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: servicesRef.current,
          start: `top top`,
          end: `bottom+=500 top-=300`,
          // end: "+=3000",
          pin: true,
          scrub: 1,
          markers: true,
        },
      });

      tl.from(titleElement, {
        color: "#2A2A2A",
      });

      tl.from(".laptops-container", {
        top: "100%",
        ease: "power3.inOut",
      });

      tl.from(
        ".cctv-container",
        {
          top: "100%",
          ease: "power3.inOut",
        },
        "+=0.5"
      );
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="services-container" ref={servicesRef}>
      <h1 className="white-shine">OUR SERVICES</h1>

      <div className="laptops-container">
        <img src="/img/banner.jpg" alt="Laptop" className="bg-img" />
      </div>

      <div className="cctv-container">
        <img src="/img/cctv.webp" alt="CCTV" className="bg-img" />
      </div>
    </section>
  );
};

export default Services;
