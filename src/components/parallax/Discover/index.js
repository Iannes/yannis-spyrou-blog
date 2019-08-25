import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import copy from '../../../copy';
import CVSection from '../../cv/CVSection';
import { handleMediaQuery } from '../../../helpers/handleMediaQuery';

const Discover = ({ onClick }) => (
  <>
    <ParallaxLayer offset={handleMediaQuery(3.8, 3)} speed={0.6} onClick={onClick}>
      <CVSection
        heading={copy.experience.discover.companyName}
        text={copy.experience.discover.description}
        duties={copy.experience.discover.duties}
        tech={copy.experience.discover.tech}
        link={copy.experience.discover.companyWebsiteLink}
      />
    </ParallaxLayer>
  </>
);

export default Discover;
