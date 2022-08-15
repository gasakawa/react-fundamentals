import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ title, subtitle, likes, onRemove, id }) {
  return (
    <>
      <article>
        <strong>{title}</strong>
        <br />
        <small>{subtitle}</small>
        <br />
        <span>Likes: {likes}</span>
        <button
          onClick={() => {
            onRemove(id);
          }}
        >
          Remover
        </button>
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
};
