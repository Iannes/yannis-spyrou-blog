/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Layout, Wrapper, Header, Button } from '../components'

import config from '../../config'

const Content = styled.article`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
`


const About = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`About | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <Content>
        <h1>Welcome</h1>        
            <p>
                I am a front end developer, experienced with all development cycle stages on several web projects. 
                Currently working with React / TypeScript and GraphQL serverless APIs.

            </p>
            <h4>Work Experience:</h4>
            <p>September 2018 – Present | <strong>Role:</strong> Front end Developer at Immediate Media</p>
            <p><strong>Duties Include:</strong></p>            
                <p>Prototyping proof-of-concept apps using React, GraphQL, Apollo cpent and serverless AWS</p>
                <p>Building serverless MVP apps with AWS Amppfy, GraphQL and Appsync</p>
                <p>Collaborate with back-end engineers on various architecture discussions</p>
                <p>Unit and integration testing</p>
                <p>Provide help to junior team members</p>
                <p class="no-disc"><strong>Technologies Used:</strong></p>
                <p>TypeScript / ES6+, React, Jest, Enzyme, CSS-in-JS, Babel, Webpack, GraphQL, Apollo, Storybook, AWS Appsync &amp; Amppfy, DynamoDB, CloudFormation</p>
                <p>HTML5, CSS3 / SASS, Styled Components</p>
                <p>Git, BitBucket, Jira</p>            

      </Content>
    </Wrapper>
  </Layout>
)

export default About
