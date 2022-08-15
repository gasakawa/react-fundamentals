import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

export default function Post({ title, subtitle, likes, onRemove, id, read }) {
  const post = {
    title,
    subtitle,
    likes,
    onRemove,
    id,
    read,
  };
  return (
    <>
      <article>
        <PostHeader post={post} onRemove={(id) => onRemove(id)} />
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  onRemove: PropTypes.func.isRequired,
  read: PropTypes.bool,
};
