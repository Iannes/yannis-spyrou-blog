import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons';
import CVSection from '../../cv/CVSection';
import copy from '../../../copy';

class Horizontal extends React.Component {
  handleMediaQuery = (mobile = '', desktop = '') =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? mobile : desktop;

  render() {
    return (
      <Parallax factor={0.5} horizontal ref={ref => (this.parallax = ref)} pages={3}>
        <section style={{ display: 'flex' }}>
          <CVSection
            onClick={() => this.parallax.scrollTo(1)}
            heading={copy.welcome.heading}
            text={copy.welcome.bodyText}
          />
          <button type="button" onClick={() => this.parallax.scrollTo(1)}>
            Next
          </button>
          <CVSection
            onClick={() => this.parallax.scrollTo(2)}
            heading={copy.welcome.heading}
            text={copy.welcome.bodyText}
          />
          <button type="button" onClick={() => this.parallax.scrollTo(2)}>
            Next
          </button>
        </section>
      </Parallax>
    );
  }
}

export default Horizontal;
