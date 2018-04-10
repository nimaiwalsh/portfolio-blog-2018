import React from 'react';
import PostListing from '../components/Posts/PostListing';

const Journal = ({ data }) => {
  return (
    <div>
      <h1>My Journal</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostListing post={node} key={node.id} />
      ))}
    </div>
  );
};

export default Journal;

export const query = graphql`
  query PostList {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          html
          excerpt(pruneLength: 240)
          fields {
            slug
          }
        }
      }
    }
  }
`;
