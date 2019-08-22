import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr minmax(280px, ${props => props.theme.maxWidth}) 1fr;
  padding: 0 1rem;
  @media (max-width: 767px) {
    padding: 0;
  }
`;

export default Wrapper;
