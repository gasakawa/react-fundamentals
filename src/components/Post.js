import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

import styles from '../styles/post.scss';

export default function Post({
  title,
  subtitle,
  likes,
  onRemove,
  id,
  read,
  removed,
}) {
  const post = {
    title,
    subtitle,
    likes,
    onRemove,
    id,
    read,
  };
  return (
    <article
      className={removed ? `${styles.post} ${styles.deleted}` : styles.post}
    >
      <PostHeader post={post} onRemove={(id) => onRemove(id)} />
    </article>
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
