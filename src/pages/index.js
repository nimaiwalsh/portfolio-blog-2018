import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => (
  <div>
    <h1>Hello people</h1>
    <p>{data.site.siteMetadata.title}</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </div>
);


export default IndexPage;
/*Where does graphql tag come from?
During the Gatsby build process, GraphQL queries are pulled out of the original source for parsing.
graphql query is passed to the data property within the component
*/
export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      } 
    }
  }
`;