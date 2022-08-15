import React, { useState } from 'react';
import Header from './Header';

import Post from './Post';

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Title#01',
      subtitle: 'Sub#01',
      likes: 1,
      read: false,
    },
    {
      id: Math.random(),
      title: 'Title#02',
      subtitle: 'Sub#02',
      likes: 12,
      read: true,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 10,
        read: false,
      },
    ]);
  }

  function handleRemovePost(id) {
    setPosts((prevState) => {
      return prevState.filter((post) => post.id !== id);
    });
  }

  return (
    <>
      <Header title="Gabriel's Blog" subtitle="Week posts" />
      <button onClick={handleRefresh}>Atualizar</button>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          subtitle={post.subtitle}
          likes={post.likes}
          onRemove={(id) => {
            handleRemovePost(id);
          }}
          id={post.id}
          read={post.read}
        />
      ))}
    </>
  );
}
