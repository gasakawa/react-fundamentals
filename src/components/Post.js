import React from 'react';

function Post({ title, subtitle }) {
  return (
    <>
      <article>
        <strong>{title}</strong>
        <br />
        <small>{subtitle}</small>
      </article>
      <br />
    </>
  );
}

export default Post;
