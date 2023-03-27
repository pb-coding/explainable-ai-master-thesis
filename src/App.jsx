import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Experiment from './pages/Experiment';


function App() {

  const [group, setGroup] = useState(null);
  
  return (
    <Routes>
      <Route path="/" element={<Experiment group={group} />} />
      <Route path="/register" element={<Register setGroup={setGroup} />} />
    </Routes>
  )
}

export default App
