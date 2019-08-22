import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import copy from '../../copy';
import CVSection from '../cv/CVSection';

const ExperienceHeading = ({ onClick }) => (
  <>
    <ParallaxLayer
      offset={0.6}
      speed={0.1}
      onClick={onClick}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <CVSection headingColor heading={copy.experience.heading} />
    </ParallaxLayer>
  </>
);

export default ExperienceHeading;
