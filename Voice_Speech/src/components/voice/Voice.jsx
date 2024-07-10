// import React, { useState } from "react";
// import "./Voice.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCirclePause,faCirclePlay, faCircleXmark} from "@fortawesome/free-regular-svg-icons"; 
// import {
//   faMicrophone,
//   faMicrophoneSlash,
// } from "@fortawesome/free-solid-svg-icons";


// const Voice = ({ onClose }) => {
//   const [ismicrophone, setIsmicrophone] = useState(false);
  

//   const handleclick = () => {
//     setIsmicrophone((prevState) => !prevState);
//   };
  
 
//   return (
//     <>
//      <div className="container">
//       <div class={`mic ${ismicrophone ? "rotating" : ""}`}>
//         <div class="mic-icon" onClick={handleclick}>
//           <FontAwesomeIcon
//             icon={ismicrophone ? faMicrophone : faMicrophoneSlash}
//           />
//         </div>
//         <div class="mic-shadow"></div>
//       </div>
//       <div className="play-stop" onClick={handleclick}>
//       <FontAwesomeIcon icon={ismicrophone ? faCirclePause : faCirclePlay } />
//       </div>

//       <div className="close-icon" onClick={onClose}><FontAwesomeIcon icon={faCircleXmark} /></div>
//       </div>
//       </>
//   );
// };

// export default Voice;




// import React, { useState, useEffect } from "react";
// import "./Voice.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCirclePause, faCirclePlay, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
// import { faMicrophone, faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";
// import { Howl } from "howler";

// const Voice = ({ onClose }) => {
//   const [ismicrophone, setIsmicrophone] = useState(false);
//   const [recognition, setRecognition] = useState(null);
//   const [transcript, setTranscript] = useState("");

//   useEffect(() => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Your browser does not support speech recognition.");
//     } else {
//       const SpeechRecognition = window.webkitSpeechRecognition;
//       const recognitionInstance = new SpeechRecognition();
//       recognitionInstance.continuous = false;
//       recognitionInstance.interimResults = false;
//       recognitionInstance.lang = "en-US";

//       recognitionInstance.onresult = (event) => {
//         const lastResult = event.results[event.resultIndex];
//         if (lastResult.isFinal) {
//           setTranscript(lastResult[0].transcript);
//         }
//       };

//       recognitionInstance.onerror = (event) => {
//         console.error("Speech recognition error:", event.error);
//       };

//       setRecognition(recognitionInstance);
//     }
//   }, []);

//   useEffect(() => {
//     if (transcript) {
//       fetch("http://13.232.155.101:8080/ask", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ text: transcript }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.audio_base64) {
//             const sound = new Howl({
//               src: `data:audio/wav;base64,${data.audio_base64}`,
//               format: ["wav"],
//             });
//             sound.play();
//           }
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//         });
//     }
//   }, [transcript]);

//   const handleclick = () => {
//     if (ismicrophone) {
//       recognition.stop();
//     } else {
//       recognition.start();
//       setTimeout(() => {
//         recognition.stop();
//       }, 50000); // 50 seconds
//     }
//     setIsmicrophone((prevState) => !prevState);
//   };

//   return (
//     <div className="container">
//       <div className={`mic ${ismicrophone ? "rotating" : ""}`}>
//         <div className="mic-icon" onClick={handleclick}>
//           <FontAwesomeIcon icon={ismicrophone ? faMicrophone : faMicrophoneSlash} />
//         </div>
//         <div className="mic-shadow"></div>
//       </div>
//       <div className="play-stop" onClick={handleclick}>
//         <FontAwesomeIcon icon={ismicrophone ? faCirclePause : faCirclePlay} />
//       </div>
//       <div className="close-icon" onClick={onClose}>
//         <FontAwesomeIcon icon={faCircleXmark} />
//       </div>
//     </div>
//   );
// };

// export default Voice;





import React, { useState } from "react";
import "./Voice.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePause, faCirclePlay, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faMicrophone, faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";

const Voice = ({ onClose }) => {
  const [isMicrophone, setIsMicrophone] = useState(false);
  const [response, setResponse] = useState(null);
  const [audio, setAudio] = useState(null);

  const handleClick = async () => {
    setIsMicrophone((prevState) => !prevState);

    if (!isMicrophone) {
      try {
        const res = await fetch('http://13.232.155.101:8080/ask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: "Hello, how can I assist you?" }),
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        setResponse(data.correct_answer);
        setAudio(data.audio_base64);
      } catch (error) {
        console.error("Error fetching data from backend:", error);
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className={`mic ${isMicrophone ? "rotating" : ""}`}>
          <div className="mic-icon" onClick={handleClick}>
            <FontAwesomeIcon
              icon={isMicrophone ? faMicrophone : faMicrophoneSlash}
            />
          </div>
          <div className="mic-shadow"></div>
        </div>
        <div className="play-stop" onClick={handleClick}>
          <FontAwesomeIcon icon={isMicrophone ? faCirclePause : faCirclePlay} />
        </div>

        <div className="close-icon" onClick={onClose}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>

        {response && (
          <div className="response">
            <p>{response}</p>
            {audio && (
              <audio controls>
                <source src={`data:audio/wav;base64,${audio}`} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
          
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Voice;





