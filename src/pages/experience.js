import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons';
import { Layout } from '../components';
import Welcome from '../components/parallax/Welcome';
import Immediate from '../components/parallax/Immediate';
import CKD from '../components/parallax/CKD';
import Discover from '../components/parallax/Discover';
import Bubbles from '../components/parallax/Bubbles';

class Experience extends React.Component {
  handleMediaQuery = (mobile = '', desktop = '') =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? mobile : desktop;

  render() {
    return (
      <Layout>
        <section data-light-bg>
          <Parallax ref={ref => (this.parallax = ref)} pages={this.handleMediaQuery(4, 4)}>
            <Welcome />
            <Immediate onClick={() => this.parallax.scrollTo(2)} />
            <CKD onClick={() => this.parallax.scrollTo(3)} />
            <Discover onClick={() => this.parallax.scrollTo(4)} />
            <Bubbles />
          </Parallax>
        </section>
      </Layout>
    );
  }
}

export default Experience;
