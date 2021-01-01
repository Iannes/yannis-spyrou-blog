import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import config from '../../config';
import { Button, Header, Layout, Wrapper } from '../components';
import Iris from '../components/iris';

const Hero = styled.article`
grid-column: 2;
padding: 3rem 2rem 6rem 2rem;
text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
color: \${props => props.theme.colors.grey.dark};

@media (max-width: \${props => props.theme.breakpoints.phone}) {
padding: 2rem 1rem 4rem 1rem;
}

p {
font-size: 1.68rem;
margin-top: -1rem;
@media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
font-size: 1.25rem;
}
}
`;

const NotFoundPage = () => (
  <>
    <Layout>
      <Wrapper>
        <Helmet title={`404 | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
        </Header>
        <Hero>
          <h2>Eeer... What happened now?</h2>
          <Iris />
          <Iris />
          <p>Looks like you got lost! Click on the button below to head over to the home page.</p>
          <Link to="/">
            <Button big>
              <svg
                width="1792"
                height="1792"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
              </svg>
              Home
            </Button>
          </Link>
        </Hero>
      </Wrapper>
    </Layout>
  </>
);

export default NotFoundPage;
