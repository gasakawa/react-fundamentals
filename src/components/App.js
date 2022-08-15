import React, { useState } from 'react';

import Post from './Post';

export default function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 1 },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 10,
      },
    ]);
  }

  return (
    <>
      <h1>Blog</h1>
      <h2>Posts of the week</h2>
      <button onClick={handleRefresh}>Atualizar</button>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          subtitle={post.subtitle}
          likes={post.likes}
        />
      ))}
    </>
  );
}
