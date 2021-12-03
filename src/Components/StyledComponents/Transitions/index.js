// Import GSAP
import { Expo } from "gsap";
// Import styles
import "./styles.scss";
// Import Hooks
import { useRef, useEffect } from "react";

function Transition({ timeline }) {
  const transition = useRef(null);

  useEffect(() => {
    timeline.to(transition.current, {
      duration: 3,
      x: 1540,
      ease: Expo.easeOut,
    });
  });

  return <div className="transition-effect" ref={transition}></div>;
}

export default Transition;
