import React from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
import copy from "../../../copy";
import CVSection from "../../cv/CVSection";

const Immediate = ({ onClick }) => (
  <>
    <ParallaxLayer offset={1} speed={0.4} onClick={onClick}>
      <CVSection
        heading={copy.experience.immediate.companyName}
        text={copy.experience.immediate.description}
        duties={copy.experience.immediate.duties}
        tech={copy.experience.immediate.tech}
        link={copy.experience.immediate.companyWebsiteLink}
      />
    </ParallaxLayer>
  </>
);

export default Immediate;
