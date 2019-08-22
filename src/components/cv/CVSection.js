import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
  width: 70%;
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
    color: '#eee',
  },
  headingColor: {
    padding: 0,
    margin: '0 0 2rem',
    color: '#d02e77',
  },
  bodyText: {
    margin: 'auto',
    lineheight: '32px',
    fontSize: '23px',
    fontWeight: 100,
  },
  listItem: {
    fontWeight: '100',
    color: '#eee',
    fontSize: '20px',
    lineHeight: '39px',
    letterSpacing: '1px',
  },
};

const ListDuties = ({ duties = [] }) => (
  <ul>
    {duties.map(item => (
      <li style={styles.listItem} key={item}>
        {item}
      </li>
    ))}
  </ul>
);

const CVSection = ({ heading = '', text = '', duties = '', headingColor = false }) => (
  <Container>
    {heading && <h1 style={headingColor ? styles.headingColor : styles.heading}>{heading}</h1>}
    {text && <p style={styles.bodyText}>{text}</p>}
    {duties && <ListDuties duties={duties} />}
  </Container>
);

export default CVSection;
