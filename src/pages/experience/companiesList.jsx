import React from 'react';
import { ParallaxSection } from "../../components/parallax/ParallaxSection";
import copy from "../../copy";

export const CompaniesList = ({ parallax }) => {

  const [list, setList] = React.useState([])

  React.useEffect(() => {
    setList(copy)
  }, [])

  const handleMediaQuery = (mobile = '', desktop = '') =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? mobile : desktop;

  const handleMobileParallax = (company) => {
    switch (company.companyKey) {
      case "discover": {
        return handleMediaQuery(3.9, 3);
      }
      case "ckd": {
        return handleMediaQuery(2.9, 2.1)
      }
      case "immediate": {
        return handleMediaQuery(1.9, 1.5)
      }
      case "vistaprint": {
        return handleMediaQuery(0.9, 0.9)
      }

      default:
        return;
    }
  }

  {
    return list && list.copy ? list.copy.map(company => {
      return (
        <ParallaxSection
          offset={handleMobileParallax(company)}
          speed={company.speed}
          onClick={() => parallax.scrollTo(company.companyKey)}
          heading={company?.companyName ?? 'No name' }
          text={company.description}
          duties={company.duties}
          tech={company.tech}
          link={company.companyWebsiteLink}
          key={company.companyKey}
        />
      )
    }) : null
  }
}
