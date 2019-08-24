import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import SEO from './SEO';
import theme from '../../config/theme';
import useBuildTime from '../hooks/useBuildTime';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    padding: 0;
    margin: 0;
  }
  ::selection {
    color: ${props => props.theme.colors.bg};
    background: ${props => props.theme.colors.primary};
  }
  html {
    font-family: ${props => props.theme.fontFamily.sansSerif};
    font-size: ${props => props.theme.baseFontSize};
    h1 {
      font-size: 3.052rem;
    }
    h2 {
      font-size: 2.441rem;
    }
    h3 {
      font-size: 1.953rem;
    }
    h4 {
      font-size: 1.563rem;
    }
    h5 {
      font-size: 1.25rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 16px;
      h1 {
        font-size: 2.488rem;
      }
      h2 {
        font-size: 2.074rem;
      }
      h3 {
        font-size: 1.728rem;
      }
      h4 {
        font-size: 1.444rem;
      }
      h5 {
        font-size: 1.2rem;
      }
    }
  }
  body {
    background: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.grey.default};
  }
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: all ${props => props.theme.transitions.normal};
  }
  a:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.grey.dark};
    font-family: ${props => props.theme.fontFamily.serif};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${props => props.theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${props => props.theme.colors.grey.dark};
  }
  input, textarea, button {
    font-size: 1rem;
  }
  textarea {
    font-family: ${props => props.theme.fontFamily.sansSerif};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .4rem 1rem;
    &:focus {
      outline: none;
    }
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
  figure {
    margin: 0 0 1rem 0;
  }
  img {
    vertical-align: middle;
  }
  [role='button'] {
    cursor: pointer;
  }
  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  table {
    border-collapse: collapse;
    background-color: ${props => props.theme.colors.bg};
  }
  caption {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    color: ${props => props.theme.colors.color};
    text-align: center;
    caption-side: bottom;
  }
  th {
    text-align: left;
  }
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
  }
  input[type='search'] {
    -webkit-appearance: none;
  }
  output {
    display: inline-block;
  }
  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }
  [hidden] {
    display: none !important;
  }
  [data-white-bg] {
    background: white;    
    height: 100vh;    
  }
  [data-dark-bg] {
    background: #141821;    
    height: 100vh;    
    color: #e2e7f0;
  }
  [data-light-bg] {
    background: #e9e1fb;    
    height: 100vh;    
  }
  [data-deepSkyBlue] {    
    height: 100vh;
    position: absolute;
    width: 100%;        
    background: linear-gradient(to right, slateblue 0%, deepskyblue 100%);
  }
  [data-diagonal] {    
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path: polygon(0px 15%, 100% 25%, 100% 85%, 0px 75%);
    background: linear-gradient(to right, slateblue 0%, deepskyblue 100%);
  }
  [data-diagonal-dark] {    
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2d3748;
    clip-path: polygon(0px 16%, 100% 4%, 100% 82%, 0px 94%);
  }
  [data-diagonal-dark-short] {    
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #2d3748;
    clip-path: polygon(0px 16%, 100% 4%, 100% 82%, 0px 94%);
  }
  [data-diagonal-blue] {    
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, slateblue 0%, deepskyblue 100%);
    clip-path: polygon(0px 16%, 100% 4%, 100% 82%, 0px 94%);
  }
  .code.token-line {
    line-height: 28px!important;
  }

  .code {
    border-radius: 5px;
    margin-bottom: 1rem;
    padding: 0.75rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    font-size: 16px;
    line-height: 26px;
    font-weight: 100!important;    
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 1rem;
  span {
    font-size: 0.75rem;
  }
`;

const Layout = ({ children, customSEO }) => {
  const buildTime = useBuildTime();

  return (
    <ThemeProvider theme={theme}>
      <>
        {!customSEO && <SEO buildTime={buildTime} />}
        <GlobalStyle />
        {children}
        <Footer>
          &copy; {new Date().getFullYear() || 2019} by Yannis Spyrou. All rights reserved. <br />
        </Footer>
      </>
    </ThemeProvider>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool,
};

Layout.defaultProps = {
  customSEO: false,
};
