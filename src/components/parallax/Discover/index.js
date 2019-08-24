import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import copy from '../../../copy';
import CVSection from '../../cv/CVSection';
import { handleMediaQuery } from '../../../helpers/handleMediaQuery';
import LinkButton from '../LinkButton';

const Discover = ({ onClick }) => (
  <>
    <ParallaxLayer offset={handleMediaQuery(4, 3)} speed={0.6} onClick={onClick}>
      <CVSection
        heading={copy.experience.discover.companyName}
        text={copy.experience.discover.description}
        duties={copy.experience.discover.duties}
        tech={copy.experience.discover.tech}
        link={copy.experience.discover.companyWebsiteLink}
      />
      {typeof window !== 'undefined' && window.innerWidth < 768 ? null : (
        <LinkButton buttonText="Contact" linkText="/contact" />
      )}
    </ParallaxLayer>
  </>
);

export default Discover;
