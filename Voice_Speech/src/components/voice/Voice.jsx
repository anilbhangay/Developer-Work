import React, { useState } from "react";
import "./Voice.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePause,faCirclePlay, faCircleXmark} from "@fortawesome/free-regular-svg-icons"; 
import {
  faMicrophone,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";


const Voice = ({ onClose }) => {
  const [ismicrophone, setIsmicrophone] = useState(false);
  

  const handleclick = () => {
    setIsmicrophone((prevState) => !prevState);
  };
  
 
  return (
    <>
     <div className="container">
      <div class={`mic ${ismicrophone ? "rotating" : ""}`}>
        <div class="mic-icon" onClick={handleclick}>
          <FontAwesomeIcon
            icon={ismicrophone ? faMicrophone : faMicrophoneSlash}
          />
        </div>
        <div class="mic-shadow"></div>
      </div>
      <div className="play-stop" onClick={handleclick}>
      <FontAwesomeIcon icon={ismicrophone ? faCirclePause : faCirclePlay } />
      </div>

      <div className="close-icon" onClick={onClose}><FontAwesomeIcon icon={faCircleXmark} /></div>
      </div>
      </>
  );
};

export default Voice;



