import React from 'react';
import PostListing from '../components/PostListing';

const Journal = ({ data }) => {
  return (
    <div>
      <h1>My Journal</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return <PostListing post={node} key={node.frontmatter.title} />
      })}
    </div>
  );
};

export default Journal;

export const query = graphql`
  query PostList {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          html
        }
      }
    }
  }
`;
