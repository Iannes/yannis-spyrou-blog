import React from 'react'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import { FloatingSVG } from '../components/floatingSVG/floatingSVG'
import { OrangeTriangle } from '../components/triangles/OrangeTriangle'
import Intro from '../components/cv/Intro'
import { Cloud } from '../components/floatingSVG/Cloud'
import { Layout} from '../components'
// Little helpers ...
// const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const styles = {
  test: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    clipPath: 'polygon(0px 15%, 100% 25%, 100% 85%, 0px 75%)',
    background: 'linear-gradient(to right, slateblue 0%, deepskyblue 100%)'
  },
  cloud40: {
    display: 'block', 
    width: '20%', 
    marginLeft: '40%' 
  },
  cloud10: {
    display: 'block', 
    width: '20%', 
    marginLeft: '10%' 
  },
  cloud30: {
    display: 'block', 
    width: '25%', 
    marginLeft: '30%' 
  },
  cloud60: {
    display: 'block', 
    width: '20%', 
    marginLeft: '60%' 
  },
  cloud70: {
    display: 'block', 
    width: '20%', 
    marginLeft: '70%' 
  },
  cloud75: {
    display: 'block', 
    width: '20%', 
    marginLeft: '75%' 
  },
  cloud80: {
    display: 'block', 
    width: '10%', 
    marginLeft: '80%' 
  },

}

class Test extends React.Component {
  render() {
    return (
      <Layout>
      <section data-deepSkyBlue>
        <Parallax ref={ref => (this.parallax = ref)} pages={3}>
          <ParallaxLayer offset={1} speed={1} style={styles.test} />
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />          

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>            
            <Cloud styles={styles.cloud70}/>
            <Cloud styles={styles.cloud40}/>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <Cloud styles={styles.cloud10}/>
            <Cloud styles={styles.cloud75}/>
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <Cloud styles={styles.cloud60}/>
            <Cloud styles={styles.cloud35}/>
            <Cloud styles={styles.cloud80}/>            
          </ParallaxLayer>
          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>            
            <Cloud styles={styles.cloud10}/>
            <Cloud styles={styles.cloud75}/>
          </ParallaxLayer>

          {/* <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
            <img src={url('earth')} style={{ width: '60%' }} />
          </ParallaxLayer> */}
{/* 
          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundImage: url('clients', true)
            }}
          /> */}

          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>                      
            <OrangeTriangle/>          
            <FloatingSVG/>          
            <Intro />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(2)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <Intro />
            
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.1}          
            style={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}>          
            <FloatingSVG />

          {/* <section data-diagonal-dark>
          <Intro />
          <FloatingSVG />
          </section> */}
          </ParallaxLayer>

          {/* <ParallaxLayer
            offset={2}
            speed={-0}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.parallax.scrollTo(0)}>
            <img src={url('clients-main')} style={{ width: '40%' }} />
          </ParallaxLayer> */}
        </Parallax>
      </section>
      </Layout>
    )
  }
}


export default Test;