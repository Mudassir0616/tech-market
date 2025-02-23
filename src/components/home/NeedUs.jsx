import React, { useEffect, useRef } from "react";
import LaptopIcon from "@mui/icons-material/Laptop";
import gsap from "gsap";

const NeedUs = () => {
  const container_ref = useRef(null);
  const points_ref = useRef([]);

  useEffect(() => {
    if (points_ref.current) {
      gsap.fromTo(
        points_ref.current,
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          // ease: "power3.out",
          scrollTrigger: {
            trigger: container_ref.current,
            start: "top 50%", // Animation starts when the section is 80% in viewport
            toggleActions: "play none none reverse",
            markers: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className="container">
      <div className="need-us-container" ref={container_ref}>
        <h4>You may need our services if you want to:</h4>

        <div className="key-points">
          <div className="points" ref={(el) => (points_ref.current[0] = el)}>
            <img src="/icons/laptop.png" alt="" />
            <h2>
              Simplify Your IT Needs with a One-Stop Shop for Corporate
              Innovation
            </h2>
          </div>

          <div className="points" ref={(el) => (points_ref.current[2] = el)}>
            <img src="/icons/handshake.png" alt="" />

            <h2>
              Partner with a Trusted Provider for Cost-Effective Corporate Tech
              Solutions
            </h2>
          </div>

          <div className="points" ref={(el) => (points_ref.current[1] = el)}>
            <img src="/icons/repairing.png" alt="" />

            <h2>
              Ensure Consistent Performance with Expert-Backed Business Support
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedUs;
