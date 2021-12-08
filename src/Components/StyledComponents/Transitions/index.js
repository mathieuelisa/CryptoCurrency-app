// Import GSAP
import { Expo } from "gsap";
import "./styles.scss";
import { useRef, useEffect } from "react";

function Transition({ timeline }) {
  const transition = useRef(null);

  useEffect(() => {
    timeline.to(transition.current, {
      duration: 1.5,
      x: 1540,
      ease: Expo.easeInOut,
    });
  });

  return <div className="transition-effect" ref={transition}></div>;
}

export default Transition;
