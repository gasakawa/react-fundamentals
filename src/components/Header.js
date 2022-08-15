import React from 'react';

function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </>
  );
}

export default Header;
