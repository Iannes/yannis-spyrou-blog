import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
  width: 80%;
  margin: auto;
  line-height: 32px;
  @media (max-width: 767px) {
    width: 90%;
    line-height: 28px;
  }
`;

const styles = {
  heading: {
    padding: 0,
    margin: '0 0 2rem',
    color: 'white',
  },
  bodyText: {
    margin: 'auto',
    lineheight: '32px',
    fontSize: '23px',
    fontWeight: 100,
  },
};

const ListDuties = ({ duties = [] }) => (
  <ul>
    {duties.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const CVSection = ({ heading = '', text = '', duties = '' }) => (
  <Container>
    {heading && <h1 style={styles.heading}>{heading}</h1>}
    {text && <p style={styles.bodyText}>{text}</p>}
    {duties && <ListDuties duties={duties} />}
  </Container>
);

export default CVSection;
