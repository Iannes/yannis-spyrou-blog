import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import copy from '../../../copy';
import CVSection from '../../cv/CVSection';
import { FloatingSVG } from '../../floatingSVG/floatingSVG';

const Welcome = ({ onClick }) => (
  <>
    <ParallaxLayer
      offset={0}
      speed={-0.9}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <FloatingSVG />
    </ParallaxLayer>
    <ParallaxLayer
      offset={0}
      speed={0.3}
      onClick={onClick}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <CVSection heading={copy.welcome.heading} text={copy.welcome.bodyText} />
    </ParallaxLayer>
  </>
);

export default Welcome;
