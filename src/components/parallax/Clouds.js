import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import { Cloud } from '../floatingSVG/Cloud';

const styles = {
  cloud40: {
    display: 'block',
    width: '20%',
    marginLeft: '40%',
  },
  cloud10: {
    display: 'block',
    width: '20%',
    marginLeft: '10%',
  },
  cloud30: {
    display: 'block',
    width: '25%',
    marginLeft: '30%',
  },
  cloud60: {
    display: 'block',
    width: '20%',
    marginLeft: '60%',
  },
  cloud70: {
    display: 'block',
    width: '20%',
    marginLeft: '70%',
  },
  cloud75: {
    display: 'block',
    width: '20%',
    marginLeft: '75%',
  },
  cloud80: {
    display: 'block',
    width: '10%',
    marginLeft: '80%',
  },
};

const Clouds = () => (
  <>
    <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
      <Cloud styles={styles.cloud70} />
      <Cloud styles={styles.cloud40} />
    </ParallaxLayer>

    <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
      <Cloud styles={styles.cloud10} />
      <Cloud styles={styles.cloud75} />
    </ParallaxLayer>
  </>
);

export default Clouds;
