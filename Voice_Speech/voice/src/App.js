import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faMicrophoneSlash, 
  faCircleStop
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [ismicrophone, setIsmicrophone] = useState(false);
  const handleclick = () => {
    setIsmicrophone((prevState) => !prevState);
  };
  return (
    <>
      <div class="mic">
        <div class="mic-icon" onClick={handleclick}>
          <FontAwesomeIcon
            icon={ismicrophone ? faMicrophone : faMicrophoneSlash}
          />
        </div>
        <div class="mic-shadow"></div>
      </div>
      <div className="stop-icon"><FontAwesomeIcon icon={faCircleStop} /></div>
    </>
  );
};

export default App;
