import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Layout } from '../components';
import { FloatingSVG } from '../components/floatingSVG/floatingSVG';
import { ClientMain } from '../components/floatingSVG/ClientMain';
import { Clients } from '../components/floatingSVG/Clients';
import CVSection from '../components/cv/CVSection';
import Clouds from '../components/parallax/Clouds';
import copy from '../copy';

const styles = {
  test: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    clipPath: 'polygon(0px 15%, 100% 25%, 100% 85%, 0px 75%)',
    background: 'linear-gradient(to right, slateblue 0%, deepskyblue 100%)',
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
  render() {
    return (
      <Layout>
        <section data-dark-bg>
          <Parallax ref={ref => (this.parallax = ref)} pages={3}>
            <ParallaxLayer offset={1} speed={1} style={styles.test} />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
            <Clouds />
            <ParallaxLayer offset={2.5} speed={-0.3}>
              <Clients styles={styles.section} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.6} speed={0.2}>
              <CVSection
                heading={copy.experience.immediate.companyName}
                text={copy.experience.immediate.description}
                duties={copy.experience.immediate.duties}
              />
            </ParallaxLayer>
            <ParallaxLayer
              offset={0.6}
              speed={0.1}
              onClick={() => this.parallax.scrollTo(2)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <CVSection headingColor heading={copy.experience.heading} />
            </ParallaxLayer>

            <ParallaxLayer
              offset={0}
              speed={0.1}
              onClick={() => this.parallax.scrollTo(1)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <FloatingSVG />
              <CVSection heading={copy.welcome.heading} text={copy.welcome.bodyText} />
            </ParallaxLayer>

            <ParallaxLayer
              offset={1}
              speed={0.1}
              style={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}
            >
              <FloatingSVG />
            </ParallaxLayer>

            <ParallaxLayer
              offset={2}
              speed={-0}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={() => this.parallax.scrollTo(0)}
            >
              <ClientMain styles={styles.clientMain} />
            </ParallaxLayer>
          </Parallax>
        </section>
      </Layout>
    );
  }
}

export default Test;
