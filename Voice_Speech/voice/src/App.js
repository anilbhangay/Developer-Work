import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [ismicrophone, setIsmicrophone] = useState(false);
  const handleclick = () => {
    setIsmicrophone((prevState) => !prevState);
  };
  return (
    <>
      <div className="logo"><h2>AI<span>TALK</span></h2></div>
      <div class="mic">
        <div class="mic-icon" onClick={handleclick}>
          <FontAwesomeIcon
            icon={ismicrophone ? faMicrophone : faMicrophoneSlash}
          />
        </div>
        <div class="mic-shadow"></div>
      </div>
    </>
  );
};

export default App;
