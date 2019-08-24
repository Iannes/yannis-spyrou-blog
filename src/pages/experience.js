import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Layout } from '../components';
import LinkButton from '../components/parallax/LinkButton';
import { FloatingSVG } from '../components/floatingSVG/floatingSVG';
import CVSection from '../components/cv/CVSection';
import copy from '../copy';
import Welcome from '../components/parallax/Welcome';
import Immediate from '../components/parallax/Immediate';
import CKD from '../components/parallax/CKD';
import Discover from '../components/parallax/Discover';

const styles = {
  dark: {
    position: 'absolute',
    width: '100%',
    height: '90%',
    background: '#182440',
  },
  light: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    background: '#eee',
    color: '#141821',
  },
  lightFullHeight: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    background: '#eee',
    color: '#141821',
  },
  section: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  clientMain: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    height: ' 300px',
  },
};

class Test extends React.Component {
  handleMediaQuery = (mobile = '', desktop = '') =>
    // eslint-disable-next-line no-nested-ternary
    typeof window !== 'undefined' ? (window.innerWidth < 768 ? mobile : desktop) : false;

  render() {
    return (
      <Layout>
        <section data-light-bg>
          <Parallax ref={ref => (this.parallax = ref)} pages={this.handleMediaQuery(5, 4)}>
            <Welcome />
            <ParallaxLayer
              offset={1}
              speed={1}
              style={this.handleMediaQuery(styles.lightFullHeight, styles.light)}
              // style={window.innerWidth < 768 ? styles.lightFullHeight : styles.light}
            />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#eee' }} />
            <ParallaxLayer
              offset={3}
              speed={1}
              style={{ backgroundColor: '#fff', color: '#eee' }}
            />
            <Immediate onClick={() => this.parallax.scrollTo(2)} />
            <CKD onClick={() => this.parallax.scrollTo(3)} />
            <Discover onClick={() => this.parallax.scrollTo(4)} />
            <ParallaxLayer offset={this.handleMediaQuery(5.3, 4)} speed={0.3}>
              <LinkButton buttonText="Contact" linkText="contact" />
            </ParallaxLayer>
            <ParallaxLayer offset={1.9} speed={0.1}>
              <FloatingSVG bubble />
            </ParallaxLayer>
            <ParallaxLayer offset={2.9} speed={0.1}>
              <FloatingSVG bubble />
            </ParallaxLayer>
          </Parallax>
        </section>
      </Layout>
    );
  }
}

export default Test;
