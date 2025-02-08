import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef(null);
  const laptopsContainerRef = useRef(null);

  useEffect(() => {
    const servicesElement = servicesRef.current;
    const laptopsContainerElement = laptopsContainerRef.current;

    // Animation for "OUR SERVICES" text
    gsap.from(servicesElement, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });

    // Pin the "OUR SERVICES" text and animate the laptops-container
    gsap.to(servicesElement, {
      scrollTrigger: {
        trigger: servicesElement,
        start: "top top",
        end: "+=100",
        pin: true,
        pinSpacing: false,
      },
    });

    // Animate the laptops-container to come from below
    gsap.from(laptopsContainerElement, {
      scrollTrigger: {
        trigger: laptopsContainerElement,
        start: "top top",
        end: "top bottom",
        scrub: 1,
        markers: true,
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="services-container">
      <h1 className="white-shine">OUR SERVICES</h1>

      <div className="laptops-container">
        <img src="/img/laptop.png" alt="" className="bg-img" />

        {/* <img src="/img/laptop.jpeg" alt="" className="center-img" /> */}
      </div>

      <div className="laptops-container">
        <img src="/img/cctv.jpeg" alt="" className="bg-img" />

        {/* <img src="/img/cctv.jpeg" alt="" className="center-img" /> */}
      </div>
    </section>
  );
};

export default Services;
