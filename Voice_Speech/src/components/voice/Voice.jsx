import React, { useState } from "react";
import "./Voice.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleStop, faCirclePlay} from "@fortawesome/free-regular-svg-icons"; 
import {
  faMicrophone,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";

const Voice = () => {
  const [ismicrophone, setIsmicrophone] = useState(false);
  const handleclick = () => {
    setIsmicrophone((prevState) => !prevState);
  };
  return (
   
     <div className="container">
      <div class="mic">
        <div class="mic-icon" onClick={handleclick}>
          <FontAwesomeIcon
            icon={ismicrophone ? faMicrophone : faMicrophoneSlash}
          />
        </div>
        <div class="mic-shadow"></div>
      </div>
      <div className="stop-icon">
      <FontAwesomeIcon icon={faCircleStop} />
      </div>
      <div className="play-icon"><FontAwesomeIcon icon={faCirclePlay} /></div>
      </div>
  );
};

export default Voice;
