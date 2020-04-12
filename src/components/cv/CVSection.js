import React from "react";
import styled from "styled-components";

const ScrollDownArrow = styled.article`border-style: solid; border-width: 0.25em 0.25em 0 0; content: ''; display: inline-block; height: 1.45em; left: 1.15em; position: relative; top: 3em; transform: rotate(135deg); vertical-align: top; width: 1.45em;`;

const Container = styled.article`width: 75%; margin: auto; line-height: 32px; @media (max-width: 767px) { width: 90%; line-height: 35px; }`;

const ListContainer = styled.ul`padding: 90px 30px; background: #182440; border-radius: 10px; position: relative; transform: scale(0.7); &::before { content: '🔴 " ⚪ " 🔵 '; position: absolute; top: .5rem; z-index: 2; color: #d8d8d8; } &::after { content: ''; position: absolute; width: 100%; height: 50px; left: 0; top: 0; background: #d8d8d8; } @media (max-width: 680px) { transform: scale(1); padding: 60px 20px; margin-top: 60px; } }`;

const ListItem = styled.li`color: rgb(238, 238, 238); font-size: 25px; line-height: 45px; list-style: none; @media (max-width: 680px) { font-size: 18px; line-height: 32px; } }`;
const BodyText = styled.p`margin: auto; font-size: 23px; font-weight: 100; line-height: 32px; @media (max-width: 680px) { font-size: 18px; line-height: 30px; } }`;
const Title = styled.h1`padding: 0; margin: 0 0 2rem; color: #cd3873; color: ${props => (props.headingColor ?`#cd3873`:`#d02e77`)}; width: 100%; }`;

const styles = {
heading: {
padding: 0,
margin: '0 0 2rem',
color: '#cd3873',
width: '100%',
},
headingColor: {
padding: 0,
margin: '0 0 2rem',
color: '#d02e77',
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

const CVSection = ({ heading = '', text = '', tech = '', link = '', headingColor = false }) => (

<Container>
  <Title headingColor={headingColor}>
    {link ? (
      <a rel="noopener noreferrer" target="_blank" href={link}>
        {heading}
      </a>
    ) : (
      heading
    )}
  </Title>
  {text && <BodyText>{text}</BodyText>}
  <section style={styles.flex}>
    {tech && <List heading="Technologies Used:" data={tech} />}
  </section>
</Container>
);

export default CVSection;
