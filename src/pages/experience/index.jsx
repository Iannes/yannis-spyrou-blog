import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons';
import { Layout } from '../../components';
import Bubbles from '../../components/parallax/Bubbles';
import Welcome from "../../components/parallax/Welcome";
import copy from "../../copy";
import { CompaniesList } from "./companiesList";

class Experience extends React.Component {

  handleMediaQuery = (mobile = '', desktop = '') =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? mobile : desktop;

  handleMobileParallax(company) {
    switch (company.companyKey) {
      case "discover": {
        return this.handleMediaQuery(3.8, 3);
      }
      case "ckd": {
        return this.handleMediaQuery(2.5, 2.1)
      }

      default:
        return 1
    }
  }

  render() {

    return (
      <Layout>
        <section data-white-bg>
          <Parallax ref={ref => (this.parallax = ref)} pages={this.handleMediaQuery(5, 4)}>
            <Welcome />
            <CompaniesList copy={copy} parallax={this.parallax} />
            {/* <Immediate onClick={() => this.parallax.scrollTo(2)} />
            <CKD onClick={() => this.parallax.scrollTo(3)} />
            <Discover onClick={() => this.parallax.scrollTo(0)} /> */}
            <Bubbles />
          </Parallax>
        </section>
      </Layout>
    );
  }
}

export default Experience;
