import React from "react";
import { useTrail, animated } from "react-spring";
import "./404.css";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

export default function Goo() {
  const [trail, set] = useTrail(3, () => ({
    xy: [0, 0],
    config: i => (i === 0 ? fast : slow)
  }));
  return (
    <>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
      <section
        className="hooks-main"
        onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}
      >
        {trail.map((props, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <animated.div
            key={index}
            style={{ transform: props.xy.interpolate(trans) }}
          />
        ))}
      </section>
    </>
  );
}
