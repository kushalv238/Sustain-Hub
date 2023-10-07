import Navbar from "./Componenets/Navbar/Navbar/Navbar";
import './App.css'
import Intro from "./Componenets/Navbar/Intro/Intro";
import { Router, Route, Routes } from "react-router-dom"

import LoginSignup from "./Componenets/auth/LoginSignup";

function App() {
  return (
    <Routes>
      <Route exact path='/' element={
        <div className="App">
          <Navbar />
          <Intro />
        </div>
      } />
      <Route exact path='/auth/login' element={
        <div className="pageWrapper">
          <LoginSignup />
        </div>
      }
      />
    </Routes>
  );
}

export default App;
