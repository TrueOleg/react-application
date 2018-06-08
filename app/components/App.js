import React from 'react';
import img from '../assets/images/react_logo_512x512.png';
import Button from './Button';
import Container from './Container';


const App = () => {
  return (
    <div>
      <h2 id="heading">Hello ReactJS</h2>
      <img
        className="image"
        style={{ margin: '0.5em' }}
        height="40"
        width="40"
        src={img}
        alt="React Logo"
      />
      <Button text="button lol" />
      <Container text="aaaaaa" />
    </div>
  );
};

export default App;
