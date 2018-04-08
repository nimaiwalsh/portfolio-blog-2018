import React from 'react';

const PostListing = (props) => {
  const { title, date } = props.post.frontmatter;
  return (
    <article>
      <h2>{title}</h2>
      <span>{date}</span>
    </article>
  )
}

export default PostListing;