import React, { useEffect, useRef } from "react";
import AnimatedTitle from "../common/animation/AnimatedTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Custom = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Define the resize handler to refresh ScrollTrigger
    const handleResize = () => ScrollTrigger.refresh();

    // Add event listeners for resize and orientation changes
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 767px)", () => {
        // Animation for desktop and larger screens
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center center",
            end: "bottom+=500 center",
            pin: true,
            scrub: 1,
            markers: true,
          },
        });

        timeline.to(".img-container", {
          width: "500px",
          height: "600px",
          borderRadius: "16px",
          clipPath: "polygon(15% 1%, 95% 7%, 95% 90%, 0% 100%)", // Ensuring no clipping
          ease: "power2.inOut",
        });

        timeline.to(
          ".img-container img",
          {
            ease: "power2.inOut",
            borderRadius: "16px",
          },
          "<"
        );

        // Service title visibility logic
        timeline.to(
          ".service-title",
          {
            opacity: 0,
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
            start: "center center",
            end: "bottom+=500 center",
            pin: true,
            scrub: 1,
            markers: true,
          },
        });

        mobileTimeline.to(".img-container", {
          width: "250px",
          height: "350px",
          borderRadius: "16px",
          clipPath: "polygon(15% 1%, 95% 7%, 95% 90%, 0% 100%)", // Ensuring no clipping
          ease: "power2.inOut",
        });

        mobileTimeline.to(
          ".img-container img",
          {
            ease: "power2.inOut",
            borderRadius: "16px",
          },
          "<"
        );

        mobileTimeline.to(
          ".service-title",
          {
            opacity: 0,
            ease: "power2.inOut",
            duration: 0.5,
          },
          "-=0.5"
        );
      });
    }, containerRef);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <section>
      <div id="clip" className="bento-image-2" ref={containerRef}>
        <div className=" img-container">
          <img src="/img/banner.jpg" alt="" />
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
    </section>
  );
};

export default Custom;
