import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

const Overlays = ({ styles }) => (
  <>
    <ParallaxLayer
      offset={1}
      speed={1}
      style={
        typeof window !== 'undefined' && window.innerWidth < 768
          ? styles.lightFullHeight
          : styles.light
      }
    />
    <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#eee', color: '#eee' }} />
  </>
);

export default Overlays;
