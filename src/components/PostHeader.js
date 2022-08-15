import React from 'react';
import Button from './Button';

function PostHeader({ post: { title, read, subtitle, onRemove, id } }) {
  return (
    <>
      <strong> {!read ? title : <s>{title}</s>}</strong>
      <br />
      <small>{subtitle}</small>
      <Button onClick={() => onRemove(id)}>Remover</Button>
      <br />
    </>
  );
}

export default PostHeader;
