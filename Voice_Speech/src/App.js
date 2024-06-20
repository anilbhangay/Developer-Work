import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/register/Signup.jsx";
import Home from "./components/homepage/Home.jsx";
import Login from "./components/register/Login.jsx";
import Forgotpass from "./components/register/Forgotpass.jsx";
import Password from "./components/register/Password.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/Forgotpass" element={<Forgotpass />}/>
        <Route path="/Password" element={<Password />}/>
      </Routes>
    </Router>
  );
};

export default App;
