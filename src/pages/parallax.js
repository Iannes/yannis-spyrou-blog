import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { FloatingSVG } from '../components/floatingSVG/floatingSVG';
import { OrangeTriangle } from '../components/triangles/OrangeTriangle';
import CVSection from '../components/cv/CVSection';
import { Cloud } from '../components/floatingSVG/Cloud';
import { ClientMain } from '../components/floatingSVG/ClientMain';
import { Clients } from '../components/floatingSVG/Clients';
import { Layout } from '../components';
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

class Test extends React.Component {
  render() {
    return (
      <Layout>
        <section data-dark-bg>
          <Parallax ref={ref => (this.parallax = ref)} pages={3}>
            <ParallaxLayer offset={1} speed={1} style={styles.test} />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

            <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
              <Cloud styles={styles.cloud70} />
              <Cloud styles={styles.cloud40} />
            </ParallaxLayer>

            <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
              <Cloud styles={styles.cloud10} />
              <Cloud styles={styles.cloud75} />
            </ParallaxLayer>

            <ParallaxLayer offset={2.5} speed={-0.3}>
              <Clients styles={styles.section} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.4} speed={0.3}>
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
              <CVSection heading={copy.experience.heading} />
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
