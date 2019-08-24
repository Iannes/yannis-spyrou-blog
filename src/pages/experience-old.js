import React from 'react';
import styled from 'styled-components';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Layout } from '../components';
import LinkButton from '../components/parallax/LinkButton';
import { FloatingSVG } from '../components/floatingSVG/floatingSVG';
import ExperienceHeading from '../components/parallax/ExperienceHeading';
import CVSection from '../components/cv/CVSection';
import copy from '../copy';

const ButtonWrapper = styled.section`
  display: flex;
  width: 75%;
  margin: auto;
  padding: 50px;
  justify-content: center;
`;

const styles = {
  dark: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: '#182440',
  },
  light: {
    position: 'absolute',
    width: '100%',
    height: '100%',
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
  render() {
    return (
      <Layout>
        <section data-light-bg>
          <Parallax ref={ref => (this.parallax = ref)} pages={6}>
            <ParallaxLayer offset={1} speed={1} style={styles.dark} />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#eee' }} />
            <ParallaxLayer
              offset={3}
              speed={1}
              style={{ backgroundColor: '#fff', color: '#eee' }}
            />
            <ParallaxLayer offset={2} speed={0.4} onClick={() => this.parallax.scrollTo(3.2)}>
              <CVSection
                heading={copy.experience.immediate.companyName}
                text={copy.experience.immediate.description}
                duties={copy.experience.immediate.duties}
                tech={copy.experience.immediate.tech}
                link={copy.experience.immediate.companyWebsiteLink}
              />
            </ParallaxLayer>
            <ParallaxLayer offset={3.4} speed={0.4} onClick={() => this.parallax.scrollTo(4.4)}>
              <CVSection
                heading={copy.experience.ckd.companyName}
                text={copy.experience.ckd.description}
                duties={copy.experience.ckd.duties}
                tech={copy.experience.ckd.tech}
                link={copy.experience.ckd.companyWebsiteLink}
              />
            </ParallaxLayer>
            <ParallaxLayer offset={4.7} speed={0.6} onClick={() => this.parallax.scrollTo(5)}>
              <CVSection
                heading={copy.experience.discover.companyName}
                text={copy.experience.discover.description}
                duties={copy.experience.discover.duties}
                tech={copy.experience.discover.tech}
                link={copy.experience.discover.companyWebsiteLink}
              />
            </ParallaxLayer>

            {/* <ExperienceHeading onClick={() => this.parallax.scrollTo(1.9)} /> */}

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
              onClick={() => this.parallax.scrollTo(0.6)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <CVSection heading={copy.welcome.heading} text={copy.welcome.bodyText} />
            </ParallaxLayer>
            <LinkButton buttonText="Contact" linkText="contact" />
          </Parallax>
        </section>
      </Layout>
    );
  }
}

export default Test;
