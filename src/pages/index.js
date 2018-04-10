import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => (
  <div>
    <h1>Hello people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>{data.site.siteMetadata.desc}</p>
  </div>
);

export default IndexPage;

export const query = graphql`
  query NewQuery {
    site {
      siteMetadata {
        desc
      }
    }
}
`