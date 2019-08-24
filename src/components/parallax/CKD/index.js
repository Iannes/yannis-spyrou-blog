import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import copy from '../../../copy';
import CVSection from '../../cv/CVSection';

const CKD = ({ onClick }) => (
  <>
    <ParallaxLayer offset={window.innerWidth < 768 ? 2.5 : 2.1} speed={0.4} onClick={onClick}>
      <CVSection
        heading={copy.experience.ckd.companyName}
        text={copy.experience.ckd.description}
        duties={copy.experience.ckd.duties}
        tech={copy.experience.ckd.tech}
        link={copy.experience.ckd.companyWebsiteLink}
      />
    </ParallaxLayer>
  </>
);

export default CKD;
