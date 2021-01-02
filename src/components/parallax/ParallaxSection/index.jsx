import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import CVSection from "../../cv/CVSection";

export const ParallaxSection = ({ onClick, speed, offset, heading, text, duties, tech, link }) => {
  console.log('here', onClick, speed, offset,);
  return text ? (
    <>
      <ParallaxLayer offset={offset} speed={speed} onClick={onClick}>
        <CVSection
          heading={heading}
          text={text}
          duties={duties}
          tech={tech}
          link={link}
        />
      </ParallaxLayer>
    </>
  ) : null
};
