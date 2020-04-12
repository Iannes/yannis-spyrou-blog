import React from "react";
import styled from "styled-components";

const Container = styled.article`width: 80%; margin: auto; line-height: 32px; @media (max-width: 767px) { width: 90%; line-height: 28px; }`;

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

const Intro = () => (

<Container>
  <h1 style={styles.heading}>Welcome</h1>
  <p style={styles.bodyText}>
    I am a front end developer, experienced with all development cycle stages on
    several web projects. Currently working with React / TypeScript and AWS
    Serverless technologies.
  </p>
</Container>
);

export default Intro;
