import "./styles.scss";

import { Power4 } from "gsap";
import "./styles.scss";
import { useRef, useEffect } from "react";

function Transition({ timeline }) {
  const transition = useRef(null);

  useEffect(() => {
    timeline.to(transition.current, {
      duration: 5,
      x: 2000,
      ease: Power4.easeOut,
    });
  });

  return <div className="transition-effect" ref={transition}></div>;
}

export default Transition;
