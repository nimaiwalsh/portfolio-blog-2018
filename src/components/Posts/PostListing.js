import React from 'react';
import Link from 'gatsby-link';

const PostListing = ({ post }) => {
  const { title, date } = post.frontmatter;
  return (
    <article>
      <h3><Link to={post.fields.slug}>{title}</Link></h3>
      <span>{date}</span>
      <p>{post.excerpt}</p>
    </article>
  )
}

export default PostListing;