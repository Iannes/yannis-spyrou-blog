import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import copy from '../../copy';
import CVSection from '../cv/CVSection';

const ExperienceHeading = ({ onClick }) => (
  <>
    <ParallaxLayer
      offset={0.9}
      speed={-0.2}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      onClick={onClick}
    >
      <CVSection headingColor heading={copy.experience.heading} />
    </ParallaxLayer>
  </>
);

export default ExperienceHeading;
