import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import copy from '../../../copy';
import CVSection from '../../cv/CVSection';
import { handleMediaQuery } from '../../../helpers/handleMediaQuery';
import LinkButton from '../LinkButton';

const Freelance = ({ onClick }) => (
  <>
    {/* <ParallaxLayer offset={4} speed={0.9} onClick={onClick}> */}
    <ParallaxLayer factor={0.5} offset={handleMediaQuery(4.8, 4)} speed={0.9} onClick={onClick}>
      <CVSection
        heading={copy.experience.freelance.companyName}
        text={copy.experience.freelance.description}
        duties={copy.experience.freelance.duties}
        tech={copy.experience.freelance.tech}
        link={copy.experience.freelance.companyWebsiteLink}
      />
      <LinkButton buttonText="Contact" linkText="/contact" />
    </ParallaxLayer>
  </>
);

export default Freelance;
