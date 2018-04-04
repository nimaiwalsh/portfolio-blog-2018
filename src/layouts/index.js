import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.css';

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
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
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
    }
  }
`;
