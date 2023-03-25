import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Experiment from './pages/Experiment';


function App() {

  const [code, setCode] = useState("");
  const [group, setGroup] = useState("X");
  
  return (
    <Routes>
      <Route path="/" element={<Experiment code={code} group={group} />} />
      <Route path="/register" element={<Register setCode={setCode} setGroup={setGroup} />} />
    </Routes>
  )
}

export default App
