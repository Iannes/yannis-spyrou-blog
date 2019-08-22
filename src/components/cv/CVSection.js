import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
  width: 75%;
  margin: auto;
  line-height: 32px;
  @media (max-width: 767px) {
    width: 90%;
    line-height: 35px;
  }
`;

const ListContainer = styled.ul`
    padding: 90px 30px;
    background: #182440;
    border-radius: 10px;
    position: relative;      
    transform: scale(0.7);
    &::before {
        content: '🔴 "  ⚪ "  🔵 ';
        position: absolute;        
        top: .5rem;
        z-index: 2;
        color: #d8d8d8;
    }
    &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 50px;
    left: 0;
    top: 0;
    background: #d8d8d8;
    }
    @media (max-width: 680px) {
      transform: scale(1);
      padding: 60px 20px;      
    }
}`;

const ListItem = styled.li`
    color: rgb(238, 238, 238);
    font-size: 25px;
    line-height: 45px;
    list-style: none;
    @media (max-width: 680px) {
      font-size: 18px;
      line-height: 32px;
    }
}`;

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
  flex: {
    display: 'flex',
  },
};

const List = ({ data = [], heading = '' }) => (
  <ListContainer>
    <h4 style={styles.headingColor}>{heading && heading}</h4>
    {data.map(item => (
      <ListItem key={item}>{item}</ListItem>
    ))}
  </ListContainer>
);

const CVSection = ({
  heading = '',
  text = '',
  duties = '',
  tech = '',
  link = '',
  headingColor = false,
}) => (
  <Container>
    {heading && (
      <h1 style={headingColor ? styles.headingColor : styles.heading}>
        <a href={link}>{heading}</a>
      </h1>
    )}
    {text && <p style={styles.bodyText}>{text}</p>}
    <section style={styles.flex}>
      {/* {duties && <List heading="Duties:" data={duties} />} */}
      {tech && <List heading="Technologies Used:" data={tech} />}
    </section>
  </Container>
);

export default CVSection;
