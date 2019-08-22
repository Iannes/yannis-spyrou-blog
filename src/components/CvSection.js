import styled from 'styled-components';

const CvSection = styled.article`
  ${props => props.role && 'padding: 0'};
  ${props => props.role && 'font-weight: bold'};
  ${props => props.highlight && 'background: #fff9f9'};
  ${props => props.highlight && 'border-radius: 5px'};
`;

export default CvSection;
