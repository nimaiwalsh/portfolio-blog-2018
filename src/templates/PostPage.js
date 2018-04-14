import React, { Component } from 'react';

class PostPage extends Component {
  render() {
    const { data } = this.props;
    //Loading status
    if (!data ) {
      return(<article>Loading...</article>)
    }
    console.log(data)
    return (
      <article>
        <time>{data.markdownRemark.frontmatter.date}</time>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        />
      </article>
    );
  }
}

export default PostPage;

//The slug from this page is used to retrieve the correct data
export const query = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YY")
      }
    }
  }
`;
