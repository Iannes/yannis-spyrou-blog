import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Layout } from '../components';
import { FloatingSVG } from '../components/floatingSVG/floatingSVG';
import Windows from '../components/parallax/Windows';
import ExperienceHeading from '../components/parallax/ExperienceHeading';
import CVSection from '../components/cv/CVSection';
import copy from '../copy';

const styles = {
  deepSkyBlue: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: '#141821',
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
            <ParallaxLayer offset={1} speed={1} style={styles.deepSkyBlue} />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#141821' }} />
            <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#141821' }} />
            <ParallaxLayer offset={1.7} speed={0.2}>
              <CVSection
                heading={copy.experience.immediate.companyName}
                text={copy.experience.immediate.description}
                duties={copy.experience.immediate.duties}
                tech={copy.experience.immediate.tech}
                link={copy.experience.immediate.companyWebsiteLink}
              />
            </ParallaxLayer>
            <ExperienceHeading />

            <ParallaxLayer
              offset={0}
              speed={0.8}
              onClick={() => this.parallax.scrollTo(1)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <FloatingSVG />
              <CVSection heading={copy.welcome.heading} text={copy.welcome.bodyText} />
            </ParallaxLayer>

            <ParallaxLayer
              offset={1}
              speed={1}
              style={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}
            />
            <Windows onClick={() => this.parallax.scrollTo(0)} />
          </Parallax>
        </section>
      </Layout>
    );
  }
}

export default Test;
