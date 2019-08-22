import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Layout } from '../components';
import { FloatingSVG } from '../components/floatingSVG/floatingSVG';
import Windows from '../components/parallax/Windows';
import ExperienceHeading from '../components/parallax/ExperienceHeading';
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
          <Parallax ref={ref => (this.parallax = ref)} pages={4}>
            <ParallaxLayer offset={1} speed={1} style={styles.test} />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
            <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#fff' }} />
            <Clouds />
            <ParallaxLayer offset={1.6} speed={0.2}>
              <CVSection
                heading={copy.experience.immediate.companyName}
                text={copy.experience.immediate.description}
                duties={copy.experience.immediate.duties}
                tech={copy.experience.immediate.tech}
              />
            </ParallaxLayer>

            <ExperienceHeading onClick={() => this.parallax.scrollTo(2)} />

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
            <Windows onClick={() => this.parallax.scrollTo(0)} />
          </Parallax>
        </section>
      </Layout>
    );
  }
}

export default Test;
