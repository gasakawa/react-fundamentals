import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

import * as S from './styles';
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
    <S.Container removed={removed}>
      <PostHeader post={post} onRemove={(id) => onRemove(id)} />
    </S.Container>
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
