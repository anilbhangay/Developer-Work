import React, { useState } from 'react';
import "./Home.css";
import Voice from '../voice/Voice';

const Home = () => {
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setButton(false);
  };

  return (
    <>
      {button ? (
        <div className='main'>
          <img src="../Assets/Ai-talk.jpeg" alt="logo" />
          <button onClick={handleClick}>Click</button>
        </div>
      ) : (
        <Voice />
      )}
    </>
  );
};

export default Home;
