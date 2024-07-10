import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/register/Signup.jsx";
import Home from "./components/homepage/Home.jsx";
import Login from "./components/register/Login.jsx";
import Forgotpass from "./components/register/Forgotpass.jsx";
import Password from "./components/register/Password.jsx";
import Voice from "./components/voice/Voice.jsx";
import Otpfile from "./components/register/Otpfile.jsx";


const App = () => {
  const [showVoice, setShowvoice] = useState(true);

  const toggleVoice = () => {
    setShowvoice((prevState) => !prevState);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            showVoice ? (
              <Home onOpenVoice={toggleVoice} />
            ) : (
              <Voice onClose={toggleVoice} />
            )
          }
        />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Forgotpass" element={<Forgotpass />} />
        <Route path="/Password" element={<Password />} />
        <Route path="/Otpfile" element={<Otpfile />} />
      </Routes>
    </Router>
  );
};

export default App;






// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [question, setQuestion] = useState('');
//   const [response, setResponse] = useState('');
//   const [audioBase64, setAudioBase64] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://13.232.155.101:8080/ask', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text: question }),
//       });
//       const data = await res.json();
//       setResponse(data.response);
//       setAudioBase64(data.audio_base64);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const playAudio = () => {
//     if (audioBase64) {
//       const audio = new Audio(`data:audio/wav;base64,${audioBase64}`);
//       audio.play();
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Ask a Question</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             placeholder="Type your question"
//             required
//           />
//           <button type="submit">Ask</button>
//         </form>
//         <div>
//           <h2>Response:</h2>
//           <p>{response}</p>
//           {audioBase64 && (
//             <button onClick={playAudio}>Play Audio</button>
//           )}
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
