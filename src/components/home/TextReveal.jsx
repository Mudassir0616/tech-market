import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const text =
  "Your one-stop solution for all IT services, delivering excellence and crafted to meet your tech needs.";

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
        scrub: 2,
        start: "top center+=100",
        end: "bottom 85%",
      },
      color: "#2E3642",
      duration: 5,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, []);

  return (
    <section>
      <div className="text-reveal-container">
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

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const text =
//   "Your one-stop solution for all IT services, delivering excellence and crafted to meet your tech needs.";

// const TextReveal = () => {
//   const textRef = useRef(null);

//   useEffect(() => {
//     const words = textRef.current.innerText.split(" ");
//     textRef.current.innerHTML = words
//       .map((word) => `<span class="reveal-word">${word}</span>`)
//       .join(" ");

//     gsap.to(".reveal-word", {
//       scrollTrigger: {
//         trigger: textRef.current,
//         scrub: 2,
//         start: "top center+=100",
//         end: "bottom 85%",
//       },
//       color: "#2A2A2A",
//       duration: 5,
//       stagger: 1,
//     });
//   }, []);

//   return (
//     <section>
//       <div className="text-reveal-container">
//         <div className="reveal">
//           <p className="reveal-text" ref={textRef}>
//             {text}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TextReveal;
