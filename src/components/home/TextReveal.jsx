import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.";

const TextReveal = () => {
  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 85%",
      },
      color: "#2A2A2A",
      duration: 5,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, []);

  return (
    <section className="container">
      <div className="text-reveal-container">
        <h1>Who Are We?</h1>

        <div className="reveal">
          <div ref={triggerRef}>
            {text.split("").map((letter, index) => (
              <span className="reveal-text" key={index} ref={setlettersRef}>
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextReveal;
