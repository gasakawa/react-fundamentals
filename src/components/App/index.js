import React, { useState } from 'react';
import Header from '../Header';

import Post from '../Post';
import { ThemeProvider } from '../../context/ThemeContext';

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Title#01',
      subtitle: 'Sub#01',
      likes: 1,
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: 'Title#02',
      subtitle: 'Sub#02',
      likes: 12,
      read: true,
      removed: true,
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
        removed: false,
      },
    ]);
  }

  function handleRemovePost(id) {
    setPosts((prevState) => {
      return prevState.map((post) =>
        post.id === id
          ? {
              ...post,
              removed: true,
            }
          : post
      );
    });
  }

  return (
    <ThemeProvider>
      <Header title="Gabriel's Blog" subtitle="Week posts" />
      <button onClick={handleRefresh}>Atualizar</button>
      <br />
      <br />
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
          removed={post.removed}
        />
      ))}
    </ThemeProvider>
  );
}
