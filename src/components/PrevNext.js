import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  margin: 6rem auto 0 auto;
  a {
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
  }
  justify-items: center;
`;

const Prev = styled.article`
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.grey.light};
  }
`;

const Next = styled.article`
  margin-left: auto;
  text-align: right;
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.grey.light};
  }
`;

const PrevNext = ({ next, prev }) => (
  <Wrapper>
    {prev && (
      <Prev>
        <span>Previous</span>
        <Link to={prev.fields.slug}>{prev.frontmatter.title}</Link>
      </Prev>
    )}

    {next && (
      <Next>
        <span>Next</span>
        <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
      </Next>
    )}
  </Wrapper>
);

export default PrevNext;

PrevNext.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
};

PrevNext.defaultProps = {
  next: null,
  prev: null,
};
