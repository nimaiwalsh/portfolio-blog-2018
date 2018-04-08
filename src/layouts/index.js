import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

import Header from '../components/Header';

const ContentWrapper = styled('section')`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.5rem 1.0875rem 1.45rem;
`

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Nimai Walsh - Web Developer"
      meta={[
        { name: 'description', content: 'Discover the Portfolio and Blog of Nimai Walsh. Nimai is a Web Developer from Brisbane, Australia specialising in HTML, CSS, JavaScript, React and Redux' },
        { name: 'keywords', content: 'react, redux, html, css, javascript, web, web developer, developer, front-end, gatsby' },
      ]}
    />
    <Header data={data} />
    <ContentWrapper>
      {children()}
    </ContentWrapper>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const query = graphql`
  query HeaderMeta {
    site {
      siteMetadata {
        title
        desc
      } 
    },
    background: imageSharp(id: {regex: "/bg.jpeg/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
