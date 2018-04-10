const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

//Create a slug for each of our post pages
//A slug is the relative path including the file name .eg /posts/post2.md
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      //Directory of your posts
      basePath: 'posts',
    });
    createNodeField({
      node,
      name: 'slug',
      //the new path of your post
      value: `/journal${slug}`
    });
  }
};

//Create a new page for each post
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          //Component of thew new page
          component: path.resolve('./src/templates/PostPage.js'),
          context: {
            slug: node.fields.slug
          }
        })
      })
      resolve();
    });
  });
}