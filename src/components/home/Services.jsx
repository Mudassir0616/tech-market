import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef(null);

  return (
    <section className="services-container" ref={servicesRef}>
      <p>Service</p>
    </section>
  );
};

export default Services;
