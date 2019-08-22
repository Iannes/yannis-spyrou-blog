import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import copy from '../../copy';
import CVSection from '../cv/CVSection';
import SpaceInvader from '../shapes/SpaceInvader';

const ExperienceHeading = () => (
  <>
    <ParallaxLayer
      offset={0.9}
      speed={0.5}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <SpaceInvader />
      <CVSection headingColor heading={copy.experience.heading} />
    </ParallaxLayer>
  </>
);

export default ExperienceHeading;
