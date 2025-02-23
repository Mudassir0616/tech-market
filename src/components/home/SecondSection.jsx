import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
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
          width: "100vw",
          height: "100vh",
          borderRadius: "0% 0% 0% 0%",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
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

        timeline.to(
          ".service-title",
          {
            opacity: 1,
            ease: "power2.inOut",
            duration: 0.5,
          },
          "-=0.5"
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
          width: "100vw",
          height: "100vh",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
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

    // Cleanup: Remove event listeners and revert GSAP context
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div id="clip" className="bento-image">
        <div className="img-container">
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
  );
};

export default SecondSection;
