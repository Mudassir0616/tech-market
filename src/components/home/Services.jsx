import React, { useEffect, useRef } from "react";
import AnimatedTitle from "../common/animation/AnimatedTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Animation for desktop and larger screens
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top+=80",
            end: "bottom+=1000 center",
            pin: true,
            scrub: 1,
            // markers: true,
          },
        });

        timeline.to(".img-container", {
          width: "85vw",
          height: "100vh",
          borderRadius: "0% 0% 0% 0%",
          ease: "power2.inOut",
        });

        timeline.to(
          ".img-container img",
          {
            filter: "blur(3px)",
            ease: "power2.inOut",
          },
          "<"
        );

        // Service title visibility logic
        timeline.to(
          ".service-title",
          {
            opacity: 1,
            ease: "power2.inOut",
            duration: 0.5,
          },
          "-=0.5" // Start a bit earlier to smoothen transition
        );
      });

      mm.add("(max-width: 767px)", () => {
        // Animation for mobile devices
        const mobileTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top+=30%",
            end: "bottom+=2000 center",
            pin: true,
            scrub: 1,
            markers: true,
          },
        });

        mobileTimeline.to(".img-container", {
          width: "100vw",
          height: "100vh",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Ensuring no clipping
          ease: "power2.inOut",
        });

        mobileTimeline.to(
          ".img-container img",
          {
            filter: "blur(3px)",
            ease: "power2.inOut",
            borderRadius: "0%",
          },
          "<"
        );

        mobileTimeline.to(
          ".service-title",
          {
            opacity: 1,
            ease: "power2.inOut",
            duration: 0.5,
          },
          "-=0.5"
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section>
      <div className="service-container">
        <div className="heading">
          <p>Welcome To TechMarket</p>
          <AnimatedTitle
            title={"Discover the world's largest shared adventure"}
            containerClass={"service-heading"}
          />
        </div>

        <div id="clip" ref={containerRef} className="bento-image">
          <div className=" img-container">
            <img src="/img/service1.jpeg" alt="" />
          </div>

          <div className="service-title">
            <h2>
              Services We <br /> Provide
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium, voluptatum doloremque. Numquam suscipit dolore
              deserunt, facere quis maxime itaque vero voluptatem rem quisquam
              minima iusto nobis placeat debitis laudantium ab molestias
              reiciendis. Veritatis, laudantium a.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
